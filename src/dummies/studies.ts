export type TStudy = {
  studyId: string;
  thumbnailUrl: string;
  category: {
    value: string;
    label: string;
  };
  contents: {
    title: string;
    body: string;
    rule?: string[];
    curriculum?: string[];
  };
  writerId: string;
};

const tempStudyData = {
  studyId: "0",
  thumbnailUrl: "",
  category: {
    value: "cate_1",
    label: "개발",
  },
  contents: {
    title: "개발에 필요한 지식들",
    body: "",
  },
  writerId: "hanyoojun",
};

export function getStudyData(studyId: string): TStudy {
  return tempStudyData;
}
