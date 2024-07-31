import { WriterSchema } from "./User";

type CommentBase = {
  postId: string;
  commentId: string;
  content: string;
  writer: WriterSchema;
  reply: ReplySchema[];
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
