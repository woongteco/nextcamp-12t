import PostWrite from "@/app/(route)/post/write/page";
import { getSession } from "@/auth";
import connectDB from "@/lib/db";
import { Post } from "@/lib/schema";
import { noData } from "@/utils/undefinedOrNull";
import { NextRequest } from "next/server";

export async function GET(_: NextRequest) {
  const session = await getSession();
  const userId = session?.user.id;

  if (noData(userId)) {
    return Response.json({ data: null }, { status: 400 });
  }

  await connectDB();

  try {
    const data = await Post.find({ writer: userId })
      .populate({
        path: "postId",
        populate: {
          path: "writer",
          select: "name email role profile_img position_tag",
        },
      })
      .populate("comments");
    return Response.json({ data }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
