import { getSession } from "@/auth";
import connectDB from "@/lib/db";
import { Study, StudyLike } from "@/lib/schema";
import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest } from "next/server";

export async function GET(
  _: NextRequest,
  { params }: { params: { studyId: string } }
) {
  const { studyId } = params;
  const session = await getSession();
  const userId = session?.user.id;

  if (userId === undefined || userId === null) {
    return Response.json(
      {
        state: true,
        message: "로그인한 사용자만 좋아요 상태를 확인할 수 있어요.",
        data: false,
      },
      { status: 200 }
    );
  }

  await connectDB();
  try {
    const study = await Study.findOne({ studyId });
    const exist = await StudyLike.exists({ userId, studyId: study._id });
    let result = { state: true, data: false };
    // console.log("GET exist:", exist);
    if (exist) {
      result.data = true;
    }
    return Response.json({ result }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

export async function PATCH(
  _: NextRequest,
  { params }: { params: { studyId: string } }
) {
  const { studyId } = params;
  const session = await getSession();
  const userId = session?.user.id;

  if (userId === undefined || userId === null) {
    return Response.json(
      { state: false, message: "로그인한 사용자만 좋아요를 누를 수 있어요." },
      { status: 400 }
    );
  }

  await connectDB();
  try {
    const study = await Study.findOne({ studyId });
    const exist = await StudyLike.exists({ userId, studyId: study._id });
    let result = { state: false, message: "" };
    // console.log("PATCH exist:", exist);
    if (exist) {
      await StudyLike.deleteOne({ userId, studyId: study._id });
      await Study.findOneAndUpdate({ studyId }, { $inc: { heartCount: -1 } });
      result.message = "찜을 취소했어요.";
    } else {
      await new StudyLike({ userId, studyId: study._id }).save();
      await Study.findOneAndUpdate({ studyId }, { $inc: { heartCount: 1 } });
      result.message = "이 스터디를 찜 했어요.";
    }
    result.state = true;
    revalidatePath("/study/" + studyId);
    return Response.json({ result }, { status: 200 });
  } catch (error) {
    return Response.json(
      { error: { state: false, message: "업데이트에 실패했습니다." } },
      { status: 500 }
    );
  }
}
