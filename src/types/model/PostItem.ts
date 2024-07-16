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
  writer: TUserBase;
  createdAt: string;
  view: number;
  like: number;
};
