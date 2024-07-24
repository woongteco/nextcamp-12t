import { TUserBase } from "@/types/model/User";
import { getImageUrl } from "./getImages";
import { TStudyCard } from "@/types/model/StudyCard";

export type TStudyCreatData = {};

const studyCreateData = {};

// 스터디카드 리스트
const studyCards = [
  {
    studyId: "0",
    user: {
      userId: "1",
      name: "한지민",
      role: "user",
      position: "개발자 한지민",
      profileUrl: getImageUrl("architect"),
    },
    thumbnailUrl: getImageUrl("art"),
    title: "앱을 만들어보는 재밌는 개발 스터디",
    jobCategory: {
      label: "cate_1",
      value: "개발",
    },
    targetCategory: {
      label: "개념학습",
      value: "goal_1",
    },
    recruitmentPeople: 1,
    recruitmentPeriod: ["2024-09-01", "2024-10-12"],
    location: {
      label: "offline",
      value: "오프라인",
    },
    place: "서울특별시 성수동 2022-1번지",
    heartCount: 0,
    createAt: "2024-07-23",
  },
  {
    studyId: "1",
    user: {
      userId: "2",
      name: "한민",
      role: "user",
      position: "개발 한민",
      profileUrl: getImageUrl("architect"),
    },
    thumbnailUrl: getImageUrl("architect"),
    title: "비즈니스의 꿀팁",
    jobCategory: {
      label: "cate_2",
      value: "비즈니스",
    },
    targetCategory: {
      label: "프로젝트",
      value: "goal_3",
    },
    recruitmentPeople: 144,
    recruitmentPeriod: ["2024-07-11", "2024-07-23"],
    location: {
      label: "online",
      value: "온라인",
    },
    place: null,
    heartCount: 3,
    createAt: "2024-07-24",
  },
  {
    studyId: "2",
    user: {
      userId: "3",
      name: "한지",
      role: "pro",
      position: "발자 한지",
      profileUrl: getImageUrl("architect"),
    },
    thumbnailUrl: getImageUrl("animal"),
    title: "인프라 같이 공부하실 분",
    jobCategory: {
      label: "cate_4",
      value: "IT 및 소프트웨어",
    },
    targetCategory: {
      label: "챌린지",
      value: "goal_6",
    },
    recruitmentPeople: 23,
    recruitmentPeriod: ["2024-07-11", "2024-09-10"],
    location: {
      label: "online",
      value: "온라인",
    },
    place: null,
    heartCount: 42,
    createAt: "2024-07-11",
  },
  {
    studyId: "3",
    user: {
      userId: "4",
      name: "호호호지민",
      role: "user",
      position: "호호호 한지민",
      profileUrl: getImageUrl("architect"),
    },
    thumbnailUrl: getImageUrl("art"),
    title: "앱을 만들어보는 재밌는 개발 스터디",
    jobCategory: {
      label: "cate_1",
      value: "개발",
    },
    targetCategory: {
      label: "취미",
      value: "goal_8",
    },
    recruitmentPeople: 1,
    recruitmentPeriod: ["2024-09-01", "2024-10-12"],
    location: {
      label: "offline",
      value: "오프라인",
    },
    place: "서울특별시 성수동 2022-1번지",
    heartCount: 0,
    createAt: "2024-07-23",
  },
  {
    studyId: "4",
    user: {
      userId: "5",
      name: "농농농",
      role: "user",
      position: "개발 농농사",
      profileUrl: getImageUrl("architect"),
    },
    thumbnailUrl: getImageUrl("architect"),
    title: "비즈니스의 꿀팁",
    jobCategory: {
      label: "cate_2",
      value: "비즈니스",
    },
    targetCategory: {
      label: "취업/면접",
      value: "goal_5",
    },
    recruitmentPeople: 144,
    recruitmentPeriod: ["2024-09-11", "2024-10-22"],
    location: {
      label: "online",
      value: "온라인",
    },
    place: null,
    heartCount: 3,
    createAt: "2024-07-24",
  },
  {
    studyId: "5",
    user: {
      userId: "6",
      name: "한지민미미미",
      role: "user",
      position: "개발자 한지민미미",
      profileUrl: getImageUrl("architect"),
    },
    thumbnailUrl: getImageUrl("animal"),
    title: "인프라 같이 공부하실 분",
    jobCategory: {
      label: "cate_4",
      value: "IT 및 소프트웨어",
    },
    targetCategory: {
      label: "특강",
      value: "goal_7",
    },
    recruitmentPeople: 23,
    recruitmentPeriod: ["2024-07-11", "2024-07-23"],
    location: {
      label: "offline",
      value: "오프라인",
    },
    place: null,
    heartCount: 42,
    createAt: "2024-07-11",
  },
  {
    studyId: "6",
    user: {
      userId: "7",
      name: "이나연",
      role: "user",
      position: "프론트개발자 나연",
      profileUrl: getImageUrl("all"),
    },
    thumbnailUrl: getImageUrl("nature"),
    title: "nextjs 그것이란,,",
    jobCategory: {
      label: "cate_4",
      value: "IT 및 소프트웨어",
    },
    targetCategory: {
      label: "특강",
      value: "goal_7",
    },
    recruitmentPeople: 5,
    recruitmentPeriod: ["2024-07-11", "2024-07-27"],
    location: {
      label: "offline",
      value: "오프라인",
    },
    place: null,
    heartCount: 421,
    createAt: "2024-07-19",
  },
];

export function getStudyCards(): TStudyCard[] {
  return studyCards;
}
