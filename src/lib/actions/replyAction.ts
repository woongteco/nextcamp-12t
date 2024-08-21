"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import connectDB from "../db";
import { Comment, User } from "../schema";
import { nanoid } from "nanoid";

// post
export async function createReply(
  userId: string,
  commentId: string,
  formData: FormData
) {
  const replyId = nanoid();
  const content = formData.get("content") as string;

  if (!userId) {
    return { state: false, message: "유효한 id가 필요합니다." };
  }

  if (!content) {
    return { state: false, message: "답글 내용을 입력해주세요." };
  }

  await connectDB();

  try {
    const commentReply = await Comment.findOneAndUpdate(
      { commentId },
      {
        $push: {
          reply: {
            replyId,
            content,
            writer: userId,
            createdAt: Date.now(),
          },
        },
      },
      { new: true, timestamps: false }
    );

    if (!commentReply) {
      return { state: false, message: "해당 댓글을 찾을 수 없습니다." };
    }

    revalidateTag("community");
    revalidateTag(commentReply.postId);
    return { state: true, message: "답글이 등록되었습니다." };
  } catch (error) {
    console.log("post reply error");
    return { state: false, message: "답글 등록에 실패했습니다." };
  }
}

// get
export async function getReply(commentId: string) {
  await connectDB();

  try {
    const reply = await Comment.findOne({ commentId })
      .select("comments")
      .populate("comments.reply.writer");

    return { state: true, data: reply };
  } catch (error) {
    console.log("get comment error" + error);
    return {
      state: false,
      message: "답글 조회에 실패했습니다.",
    };
  }
}

// update
export async function updateReply(
  commentId: string,
  replyId: string,
  formData: FormData
) {
  const content = formData.get("content") as string;

  await connectDB();

  try {
    const update = await Comment.findOneAndUpdate(
      { commentId, "reply.replyId": replyId },
      {
        $set: {
          "reply.$[reply].content": content,
          "reply.$[reply].updatedAt": Date.now(),
        },
      },
      {
        arrayFilters: [{ "reply.replyId": replyId }],
        new: true,
        timestamps: false,
      }
    );

    if (!update) {
      return { state: false, message: "해당 답글을 찾을 수 없습니다." };
    }

    revalidateTag("comments");
    revalidateTag(update.postId);
    return { state: true, message: "답글 수정이 완료되었습니다." };
  } catch (error) {
    console.log("update comment error" + error);
    return { state: false, message: "답글 수정에 실패했습니다." };
  }
}

// delete
export async function deleteReply(commentId: string, replyId: string) {
  await connectDB();

  try {
    await Comment.updateOne(
      { commentId, "reply.replyId": replyId },
      { $pull: { reply: { replyId } } },
      { timestamps: false }
    );
    revalidateTag("comments");
    return { success: true, message: "답글이 삭제되었습니다." };
  } catch (error) {
    console.error("delete comment error", error);
    return { success: false, message: "답글 삭제에 실패했습니다." };
  }
}
