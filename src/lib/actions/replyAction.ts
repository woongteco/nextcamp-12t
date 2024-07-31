"use server";

import connectDB from "../db";
import { Post } from "../schema";
const { v4: uuidv4 } = require("uuid");

export async function replyAction(
  postId: string,
  commentId: string,
  formData: FormData
) {
  const replyId = uuidv4();
  const content = formData.get("content") as string;
  const userId = formData.get("userId") as string;
  const name = formData.get("name") as string;
  const role = formData.get("role") as string;
  const position = formData.get("position") as string;
  const profileUrl = formData.get("profileUrl") as string;

  if (!content) {
    throw new Error("답글 내용을 입력해주세요.");
  }

  await connectDB();

  const reply = {
    replyId,
    content,
    writer: {
      userId,
      name,
      role,
      position,
      profileUrl,
    },
    createdAt: new Date(),
  };

  const currentPost = await Post.findOne({ postId });
  const comment = currentPost.comments.id(commentId);

  if (!currentPost) {
    throw new Error("해당 포스트를 찾을 수 없습니다.");
  }

  if (!comment) {
    throw new Error("해당 댓글을 찾을 수 없습니다.");
  }

  comment.reply.push(reply);
  const dbSaveReply = await currentPost.save();
}
