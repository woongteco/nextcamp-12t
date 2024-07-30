import { WriterSchema } from "./User";

type CommentBase = {
  commentId: string;
  postId: string;
  content: string;
  writer: WriterSchema;
  reply: ReplySchema[];
  createdAt: string;
};

export type ReplySchema = CommentBase & {
  originId: string;
};

export type CommentSchema = CommentBase & {
  reply: ReplySchema[];
};
