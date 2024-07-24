import { TUserBase } from "./User";

export type TStudyCard = {
  studyId: string;
  user: TUserBase;
  thumbnailUrl: string;
  title: string;
  jobCategory: {
    label: string;
    value: string;
  };
  targetCategory: {
    label: string;
    value: string;
  };
  recruitmentPeople: number;
  recruitmentPeriod: string[];
  location: {
    label: string;
    value: string;
  };
  place: string | null;
  heartCount: number;
  createAt: string;
};
