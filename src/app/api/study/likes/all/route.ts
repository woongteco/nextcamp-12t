import { NextRequest } from "next/server";
import connectDB from "@/lib/db";
import { StudyLikeModel } from "@/types/model/Likes";
import { StudyLike } from "@/lib/schema";

export async function GET(_: NextRequest) {
  await connectDB();

  try {
    const data: StudyLikeModel[] = await StudyLike.find()
      .populate({
        path: "studyId",
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
