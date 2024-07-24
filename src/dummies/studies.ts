import { getImageUrl } from "./getImages";

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

// 리스트
// const tempStudyDatas = [
//   {
//     studyPostId: 0,
//     thumbnamilUrl: "",
//     title: "",
//     jobCategory: {
//       label: "cate_1",
//       vaule: "개발",
//     },
//     targetCategory: {
//       label: "취업/면접",
//       vaule: "cate_",
//     },
//     recruitmentPeople: 1,
//     recruitmentPeriod: ["", ""],
//     location: "오프라인",
//     place: "서울특별시 성수동 2022-1번지",
//     heartCount: 0,
//     createAt: "",
//   },
// ];

// 개설
// const defaultStudyDetailData = {
//   thumbnailInfo: {
//     thumbnailUrl: null,
//     title: "",
//     jobCategory: {
//       label: "",
//       value: "",
//     },
//     targetCategory: {
//       label: "",
//       value: "",
//     },
//     expense: 13450,
//     recruitmentPeople: 1,
//     recruitmentPeriod: ["", ""],
//     studyPeriod: ["", ""],
//     location: "온라인",
//     place: null,
//   },
//   contents: {
//     content: "",
//     rule: [
//       { listId: 1, content: "집중작업시간" },
//       { listId: 2, content: "집중작업시간" },
//     ],
//     curriculum: [
//       { listId: 1, content: "1주차:강의" },
//       { listId: 2, content: "2주차:강의 활용" },
//     ],
//   },
// };

export function getStudyData(studyId: string): TStudy {
  return tempStudyData;
}

export type TStudyCard = {
  id: number;
  user: {
    userType: "user" | "pro";
    nickname: string;
    image: string;
  };
  study: {
    title: string;
    categoryJob: string;
    people: string;
    deadline: string;
    RecruitmentStatus: string;
    image: string;
  };
};

const studyCards: TStudyCard[] = [
  {
    id: 1,
    user: {
      userType: "user",
      nickname: "디자이너 이수빈",
      image: getImageUrl("animal", 48, 48),
    },
    study: {
      title: "내가 디자인한 앱을 출시하기까지",
      categoryJob: "UIUX 디자인 스터디",
      people: "모집 8명",
      deadline: "8/13 마감",
      RecruitmentStatus: "모집중",
      image: getImageUrl("tech", 268, 180),
    },
  },
  {
    id: 2,
    user: {
      userType: "pro",
      nickname: "과학자 김민수",
      image: getImageUrl("animal", 48, 48),
    },
    study: {
      title: "재밌는 생명과학 실험 스터디",
      categoryJob: "과학스터디",
      people: "모집 12명",
      deadline: "8/23 마감",
      RecruitmentStatus: "모집중",
      image: getImageUrl("nature", 268, 180),
    },
  },
  {
    id: 3,
    user: {
      userType: "pro",
      nickname: "과학자 김민수",
      image: getImageUrl("animal", 48, 48),
    },
    study: {
      title: "재밌는 생명과학 실험 스터디",
      categoryJob: "과학스터디",
      people: "모집 12명",
      deadline: "8/23 마감",
      RecruitmentStatus: "모집중",
      image: getImageUrl("nature", 268, 180),
    },
  },
  {
    id: 4,
    user: {
      userType: "user",
      nickname: "디자이너 이수빈",
      image: getImageUrl("animal", 48, 48),
    },
    study: {
      title: "내가 디자인한 앱을 출시하기까지",
      categoryJob: "UIUX 디자인 스터디",
      people: "모집 8명",
      deadline: "8/13 마감",
      RecruitmentStatus: "모집중",
      image: getImageUrl("desk", 268, 180),
    },
  },
  {
    id: 5,
    user: {
      userType: "pro",
      nickname: "과학자 김민수",
      image: getImageUrl("animal", 48, 48),
    },
    study: {
      title: "재밌는 생명과학 실험 스터디",
      categoryJob: "과학스터디",
      people: "모집 12명",
      deadline: "8/23 마감",
      RecruitmentStatus: "모집중",
      image: getImageUrl("nature", 268, 180),
    },
  },
  {
    id: 6,
    user: {
      userType: "pro",
      nickname: "과학자 김민수",
      image: getImageUrl("animal", 48, 48),
    },
    study: {
      title: "재밌는 생명과학 실험 스터디",
      categoryJob: "과학스터디",
      people: "모집 12명",
      deadline: "8/23 마감",
      RecruitmentStatus: "모집중",
      image: getImageUrl("nature", 268, 180),
    },
  },
  {
    id: 7,
    user: {
      userType: "user",
      nickname: "디자이너 이수빈",
      image: getImageUrl("animal", 48, 48),
    },
    study: {
      title: "내가 디자인한 앱을 출시하기까지",
      categoryJob: "UIUX 디자인 스터디",
      people: "모집 8명",
      deadline: "8/13 마감",
      RecruitmentStatus: "모집중",
      image: getImageUrl("desk", 268, 180),
    },
  },
  {
    id: 8,
    user: {
      userType: "pro",
      nickname: "과학자 김민수",
      image: getImageUrl("animal", 48, 48),
    },
    study: {
      title: "재밌는 생명과학 실험 스터디",
      categoryJob: "과학스터디",
      people: "모집 12명",
      deadline: "8/23 마감",
      RecruitmentStatus: "모집중",
      image: getImageUrl("nature", 268, 180),
    },
  },
  {
    id: 9,
    user: {
      userType: "pro",
      nickname: "과학자 김민수",
      image: getImageUrl("animal", 48, 48),
    },
    study: {
      title: "재밌는 생명과학 실험 스터디",
      categoryJob: "과학스터디",
      people: "모집 12명",
      deadline: "8/23 마감",
      RecruitmentStatus: "모집중",
      image: getImageUrl("nature", 268, 180),
    },
  },
];

export function getStudiesData(): TStudyCard[] {
  return studyCards;
}
