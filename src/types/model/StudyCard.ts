import { ProfileSchema } from "./User";
import { CommentSchema } from "./Comment";

type CommentId = CommentSchema["commentId"];

export type StudySchema = {
  studyId: string;
  studyInfo: {
    expense: number;
    jobCategory: string;
    location: string;
    place: string | null;
    recruitmentPeople: number;
    recruitmentPeriod: [string, string];
    studyPeriod: [string, string];
    targetCategory: string;
    thumbnailUrl: string | null;
    title: string;
  };
  contents: {
    content: string;
    curriculums: string[];
    rules: string[];
  };
  writer: string;
  heartCount: number;
  createAt: string;
  comments: CommentId[];
};

export type StudyDataFull = Omit<StudySchema, "writer" | "comments"> & {
  writer: ProfileSchema;
  comments: CommentSchema[];
};
