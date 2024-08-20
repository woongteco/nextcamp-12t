import { NextRequest } from "next/server";
import { getSession } from "@/auth";
import connectDB from "@/lib/db";
import { StudyLikeModel } from "@/types/model/Likes";
import { StudyLike } from "@/lib/schema";
import { noData } from "@/utils/undefinedOrNull";

export async function GET(_: NextRequest) {
  const session = await getSession();
  const userId = session?.user.id;

  if (noData(userId)) {
    return Response.json({ data: null }, { status: 400 });
  }

  await connectDB();

  try {
    const data: StudyLikeModel[] = await StudyLike.find({ userId })
      .select("studyId")
      .populate({
        path: "studyId",
        populate: {
          path: "writer",
          select: "name email role profile_img position_tag",
        },
      })
      // .populate("comments")
      .sort({ createdAt: "desc" });
    return Response.json({ data }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
