import { WriterSchema } from "./User";

type CommentBase = {
  commentId: string;
  content: string;
  writer: WriterSchema;
  createdAt: string;
};

export type ReplySchema = CommentBase & {
  originId: string;
};

export type CommentSchema = CommentBase & {
  reply: ReplySchema[];
};
