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
    let result = { state: true, message: "", data: false };
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
    const exist = await PostLike.exists({ userId });
    const post = await Post.findOne({ postId });
    let result = { state: false, message: "", data: null };
    console.log("exist:", exist);
    if (exist) {
      await PostLike.deleteOne({ userId, postId: post._id });
      const update = await Post.findOneAndUpdate(
        { postId },
        { $inc: { like: -1 } },
        { new: true }
      );
      result.message = "좋아요를 취소했습니다.";
      result.data = update;
    } else {
      await new PostLike({ userId, postId: post._id }).save();
      const update = await Post.findOneAndUpdate(
        { postId },
        { $inc: { like: 1 } },
        { new: true }
      );
      result.message = "이 글을 좋아합니다.";
      result.data = update;
    }
    result.state = true;
    revalidatePath("/post/" + postId);
    revalidateTag(postId);
    return Response.json({ result }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
