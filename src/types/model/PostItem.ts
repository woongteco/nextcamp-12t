import { CommentSchema } from "./Comment";
import { WriterSchema } from "./User";

type CommentId = CommentSchema["commentId"];

export type PostSchema = {
  postId: string;
  category: {
    value: string;
    label: string;
    isRecruiting: boolean | null;
  };
  contents: {
    title: string;
    body: string;
    linkedStudyId: null | string;
  };
  writer: string;
  createdAt: string;
  view: number;
  like: number;
  comments: CommentId[];
};

export type PostDataListItem = Omit<PostSchema, "writer"> & {
  writer: WriterSchema;
};

export type PostDataFull = Omit<PostSchema, "writer" | "comments"> & {
  writer: WriterSchema;
  comments: CommentSchema[];
};
