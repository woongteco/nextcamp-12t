import { getImageUrl } from "./getImages";

// 스터디 상세게시글 규칙
export const Rule = [
  { accordionId: 1, content: "⏰ 집중 작업 시간 [ PM 14:00 - PM 17:00 ] ⏰" },
  { accordionId: 2, content: "개인사정 및 불참 시 미리 공지하기" },
  { accordionId: 3, content: "모르는 부분은 바로바로 질문하기" },
  { accordionId: 4, content: "공유 및 대화 환영하기" },
];

// 스터디 상세게시글 커리큘럼
export const Curriculum = [
  { accordionId: 1, content: "1주차 : 유튜브 뮤직앱 클론피그마 도전" },
  { accordionId: 2, content: "2주차 : 강의 시청 및 과제 부가" },
  { accordionId: 3, content: "3주차 : 클론피그마 활용 TIP" },
  { accordionId: 4, content: "4주차 : 유튜브 뮤직앱 클론피그마 완성" },
];

// 스터디장 프로필
export function getStudyLeaderUser() {
  return {
    id: 1,
    userType: "pro",
    username: "이선형",
    nickname: "UXUI 디자이너 이선형",
    email: "jisoo.sin@chemeet.com",
    jobcategory: "디자인, 마케팅",
    profileUrl: getImageUrl("animal", 48, 48),
    content:
      "상명대학교 졸업 후 많은 이직 끝에 네이버에 입사하여 쌓은 기술들과 카카오로 이직하며 얻은 노하우를 여러분들과 함께 나누며 같이 성장하고 싶습니다.",
    tags: ["#디자인8년차", "#전)네이버디자이너", "#현)카카오디자이너"],
  };
}

// 스터디 소개
export function getStudyPostDetail() {
  return {
    postId: 1,
    thumbnailUrl: getImageUrl("desk", 268, 180),
    title: "웹디자인 마스터 하기!",
    jobCategory: {
      label: "UXUI 디자인",
      value: "cate_",
    },
    targetCategory: {
      label: "취업/면접",
      value: "cate_",
    },
    expense: "10,000원",
    RecruitmentPeople: "20명",
    RecruitmentPeriod: ["2024.11.21", "2024.11.30"],
    studyPeriod: ["2024.12.01", "2024.12.11"],
    onoff: "오프라인",
    content:
      "혼자서 피그마 공부를 하고 있는데 현업에서 어떻게 활용하는지, 완성도를 높이는지 알지 못해 답답했다면 🤦‍♀🤦‍♂ 클론피그마 챌린지로 4주 동안 유튜브 뮤직앱을 구현해보면서 피그마 활용 Tip을 전수 받고 함께 도전하는 참여자들과 소통하며 빠르게 Skill🆙 해보세요! 🔎이런 분들께 추천드려요! 피그마 기초는 알지만, 실무에서 어떻게 사용되는지 모르는 취준생. 회사에서 피그마를 사용하고 있으나 더 다양하게 활용하고 싶은 디자이너. 피그마를 활용하여 개발자와의 소통 비용을 줄이고 싶은 서비스 기획자.",
    heartStatus: false,
    heartCount: 262,
  };
}

export function getComment() {
  return {
    comment: [
      {
        commentId: 1,
        user: {
          userType: "user",
          nickname: "김지현",
          image: getImageUrl("nature", 268, 180),
        },
        content: "디자인 초보도 참여 가능할까요?",
        createdAt: "2024.11.21 11:02",
        replyComment: [
          {
            replyCommentId: 1,
            user: {
              userType: "pro",
              nickname: "UXUI 디자이너 이선형",
              image: getImageUrl("animal", 48, 48),
            },
            content:
              "네, 가능합니다. 서로 공유하면서 배워나가는 스터디 모임입니다!",
            createdAt: "2024.11.21 11:12",
          },
          {
            replyCommentId: 2,
            user: {
              userType: "pro",
              nickname: "UXUI 디자이너 이선형",
              image: getImageUrl("animal", 48, 48),
            },
            content:
              "네, 가능합니다. 서로 공유하면서 배워나가는 스터디 모임입니다!",
            createdAt: "2024.11.21 11:12",
          },
        ],
      },
      {
        commentId: 2,
        user: {
          userType: "user",
          nickname: "신지우",
          image: getImageUrl("nature", 268, 180),
        },
        content: "저도 참여하고 싶어요! 진행중인데 참여 가능할까요?",
        createdAt: "2024.11.21 11:05",
      },
    ],
  };
}
