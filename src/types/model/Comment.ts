import { ProfileSchema } from "./User";

export type CommentBase = {
  content: string;
  writer: ProfileSchema;
  createdAt: string;
  updatedAt: string;
};

type CommentOptional = {
  replyId?: string;
  commentId?: string;
  postId?: string;
  reply?: ReplySchema[];
};

export type ReplySchema = CommentBase &
  Required<Pick<CommentOptional, "replyId">>;

export type CommentSchema = CommentBase &
  Required<Pick<CommentOptional, "postId" | "commentId" | "reply">>;

export type CommentOrReply = CommentBase & CommentOptional;
