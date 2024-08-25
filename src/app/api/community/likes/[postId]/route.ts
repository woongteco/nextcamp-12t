import { getSession } from "@/auth";
import connectDB from "@/lib/db";
import { Post, PostLike } from "@/lib/schema";
import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest } from "next/server";

export async function GET(
  _: NextRequest,
  { params }: { params: { postId: string } }
) {
  const { postId } = params;
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
    const post = await Post.findOne({ postId });
    const exist = await PostLike.exists({ userId, postId: post._id });
    let result = { state: true, data: false };
    // console.log("GET exist:", exist);
    if (exist) {
      result.data = true;
    }
    revalidatePath(`/post/${postId}`);
    return Response.json({ result }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

export async function PATCH(
  _: NextRequest,
  { params }: { params: { postId: string } }
) {
  const { postId } = params;
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
    const post = await Post.findOne({ postId });
    const exist = await PostLike.exists({ userId, postId: post._id });
    let result = { state: false, message: "" };
    // console.log("PATCH exist:", exist);
    if (exist) {
      await PostLike.deleteOne({ userId, postId: post._id });
      await Post.findOneAndUpdate({ postId }, { $inc: { like: -1 } });
      result.message = "좋아요를 취소했습니다.";
    } else {
      await new PostLike({ userId, postId: post._id }).save();
      await Post.findOneAndUpdate({ postId }, { $inc: { like: 1 } });
      result.message = "이 글을 좋아합니다.";
    }
    result.state = true;
    revalidatePath("/post/" + postId);
    // revalidateTag(postId);
    return Response.json({ result }, { status: 200 });
  } catch (error) {
    return Response.json(
      { error: { state: false, message: "업데이트에 실패했습니다." } },
      { status: 500 }
    );
  }
}
