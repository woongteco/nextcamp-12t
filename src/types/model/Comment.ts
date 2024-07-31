import { WriterSchema } from "./User";

export type CommentBase = {
  postId: string;
  commentId: string;
  content: string;
  writer: WriterSchema;
  createdAt: string;
};

export type ReplySchema = {
  replyId: string;
  commentId: string;
  content: string;
  writer: WriterSchema;
  createdAt: string;
};

export type CommentSchema = CommentBase & {
  reply: ReplySchema[];
};
