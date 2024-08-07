import { CommentSchema } from "./Comment";
import { ProfileSchema } from "./Profile";
import { TUserBase } from "./User";

export type TPost = {
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
  writer: string | ProfileSchema;
  createdAt: string;
  view: number;
  like: number;
  comments: CommentSchema[];
};
