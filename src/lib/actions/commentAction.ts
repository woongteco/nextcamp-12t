"use server";

import { nanoid } from "nanoid";
import connectDB from "../db";
import { Comment, Post } from "../schema";
import { revalidateTag } from "next/cache";

// post
export async function createComment(postId: string, formData: FormData) {
  const session = await getSession();
  const userId = session?.user.id;
  const commentId = nanoid();
  const content = formData.get("content") as string;

  if (!userId || !postId) {
    return { state: false, message: "유효한 userId와 postId가 필요합니다." };
  }

  if (!content) {
    return { state: false, message: "댓글 내용을 입력해주세요." };
  }

  await connectDB();

  try {
    await new Comment({
      postId,
      commentId,
      content,
      writer: userId,
      reply: [],
    }).save();

    const newComment = await Comment.findOne({ commentId });

    await Post.findOneAndUpdate(
      { postId },
      { $push: { comments: newComment._id } }
    );

    revalidateTag("community");
    revalidateTag(postId);
    return { state: true, message: "댓글이 등록 되었습니다." };
  } catch (error) {
    console.log("post comment error" + error);
    return { state: false, message: "댓글 등록에 실패했습니다." };
  }
}

// get
export async function getComments(postId: string) {
  await connectDB();

  try {
    const comments = await Comment.find({ postId })
      .populate("writer", "name role profile_img position_tag")
      .populate({
        path: "reply",
        populate: {
          path: "writer",
          select: "name role profile_img position_tag",
        },
      })
      .sort({ createdAt: "asc" });

    return { state: true, data: comments };
  } catch (error) {
    console.log("get comment error" + error);
    return { state: false, message: "댓글 조회에 실패했습니다." };
  }
}

// update
export async function updateComment(commentId: string, formData: FormData) {
  const content = formData.get("content") as string;

  await connectDB();

  try {
    const update = await Comment.findOneAndUpdate(
      { commentId },
      { content },
      { new: true }
    );

    if (!update) {
      return { state: false, message: "해당 댓글을 찾을 수 없습니다." };
    }

    revalidateTag("comments");
    revalidateTag(update.postId);
    return { state: true, message: "댓글 수정되었습니다." };
  } catch (error) {
    console.log("update comment error" + error);
    return { state: false, message: "댓글 수정에 실패했습니다." };
  }
}

// delete
export async function deleteComment(commentId: string) {
  await connectDB();

  try {
    const exist = await Comment.findOne({ commentId });
    if (exist === undefined || exist === null) {
      return { success: false, message: "댓글을 찾을 수 없습니다." };
    }

    await Comment.deleteOne({ commentId });
    await Post.findOneAndUpdate(
      { postId: exist.postId },
      { $pull: { comments: exist._id } }
    );

    revalidateTag("comments");
    revalidateTag(exist.postId);
    return { success: true, message: "댓글이 삭제되었습니다." };
  } catch (error) {
    console.error("delete comment error", error);
    return { success: false, message: "댓글 삭제에 실패했습니다." };
  }
}
