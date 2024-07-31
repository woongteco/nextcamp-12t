"use server";

import connectDB from "../db";
import { Post } from "../schema";
import { revalidatePath } from "next/cache";
const { v4: uuidv4 } = require("uuid");

// post
export async function commentAction(
  id: string,
  postId: string,
  formData: FormData
) {
  const commentId = uuidv4();
  const content = formData.get("content") as string;

  if (!content) {
    return { state: false, message: "댓글 내용을 입력해주세요." };
  }

  await connectDB();

  try {
    const postComment = await Post.findOneAndUpdate(
      { postId },
      {
        $push: {
          comments: {
            commentId,
            postId,
            content,
            writer: id,
            createdAt: new Date(),
            reply: [],
          },
        },
      }
    );

    if (!postComment) {
      return { state: false, message: "해당 포스트를 찾을 수 없습니다." };
    }

    revalidatePath(`/post/${postId}`);

    return { state: true, message: "댓글이 등록 되었습니다." };
  } catch (error) {
    console.log("post comment error" + error);
    return { state: false, message: "댓글 등록에 실패했습니다." };
  }
}

// get
export async function getComment(postId: string) {
  await connectDB();

  try {
    const comment = await Post.findOne({ postId })
      .select("comments")
      .populate("comments.writer");

    return { state: true, data: comment };
  } catch (error) {
    console.log("get comment error" + error);
    return {
      state: false,
      message: "댓글 조회에 실패했습니다.",
    };
  }
}

// update
export async function updateComment(commentId: string, formData: FormData) {
  const content = formData.get("content") as string;

  await connectDB();

  try {
    const update = await Post.findOneAndUpdate(
      { "comments.commentId": commentId },
      {
        $set: {
          comments: {
            "comments.$.content": content,
          },
        },
      },
      { new: true }
    );

    if (!update) {
      return { state: false, message: "해당 댓글을 찾을 수 없습니다." };
    }

    return { state: true, message: "댓글 수정이 완료되었습니다." };
  } catch (error) {
    console.log("update comment error" + error);
    return { state: false, message: "댓글 수정에 실패했습니다." };
  }
}

// delete
export async function deleteComment(postId: string, commentId: string) {
  await connectDB();

  try {
    await Post.updateOne(
      { postId },
      { $pull: { comments: { commentId: commentId } } }
    );
    return { success: true, message: "댓글이 삭제되었습니다." };
  } catch (error) {
    console.error("delete comment error", error);
    return { success: false, message: "댓글 삭제에 실패했습니다." };
  }
}
