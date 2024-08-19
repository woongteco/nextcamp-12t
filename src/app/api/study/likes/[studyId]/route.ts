import { getSession } from "@/auth";
import connectDB from "@/lib/db";
import { StudyLike } from "@/lib/schema";
import { noData } from "@/utils/undefinedOrNull";
import { revalidateTag } from "next/cache";
import { NextRequest } from "next/server";

export async function PATCH(
  _: NextRequest,
  { params }: { params: { studyId: string } }
) {
  const { studyId } = params;
  const session = await getSession();
  const userId = session?.user.id;

  if (noData(userId)) {
    return Response.json({ data: null }, { status: 400 });
  }

  await connectDB();
  try {
    const exist = await StudyLike.exists({ studyId, userId });
    let result = { state: false, message: "" };
    if (exist) {
      await StudyLike.deleteOne({ userId, studyId });
      result.message = "좋아요를 취소했습니다.";
    } else {
      await new StudyLike({ userId, studyId }).save();
      result.message = "이 스터디를 좋아합니다.";
    }
    result.state = true;
    revalidateTag(studyId);
    revalidateTag("likeStudy");
    return Response.json({ result }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
