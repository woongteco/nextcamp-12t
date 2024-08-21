import { getSession } from "@/auth";
import connectDB from "@/lib/db";
import { StudyApply } from "@/lib/schema";
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
    const data = await StudyApply.find({ userId })
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
