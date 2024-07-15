export type TReview = {
  reviewId: string;
  text: string;
  writerKeyword: string;
  studyName: string;
};
const REVIEWS: TReview[] = [
  {
    reviewId: "review-promotion-01",
    studyName: "화면 설계에서 필요한 사용자 심리",
    writerKeyword: "취업을 준비하던 UXUI 디자인 직무자",
    text: "이시후 전문가님의 ‘화면 설계에서 필요한 사용자 심리’ 스터디를 통해서 화면 설계를 하는데 있어서 사용자 심리가 얼마나 중요한지에 대해서 배우고 직무 전문성을 높일 수 있었어요! 면접에서 스터디 내용을 활요하니 정말 좋았습니다.",
  },
  {
    reviewId: "review-promotion-02",
    studyName: "피그마와 XD 한 계절에 끝내기",
    writerKeyword: "취업을 준비하던 마케팅 직무자",
    text: "김지은 전문가님의 ‘피그마와 XD 한 계절에 끝내기’ 스터디를 통해서 정말 빠르고 쉽게 툴을 익힐 수 있었어요! 전문가님 뿐만아니라 열정 많은 스터디원들과 미션을 공유하고 서로가 서로를 피드백하면서 정말 빠르게 성장 할 수 있었던 거 같아요.",
  },
  {
    reviewId: "review-promotion-03",
    studyName: "건축 설계에 대한 모든 것",
    writerKeyword: "취업을 준비하던 건설 직무자",
    text: "이지원 전문가님의 ‘건축 설계에 대한 모든 것’ 스터디를 통해서 어렵게만 느껴졌던 건축 설계와 가까워질 수 있었어요. 스터디 날마다 건축에 대해 생각해 볼 수 있는 질문을 던져주시며 스스로 생각해 볼 수 있었던 점이 가장 좋았습니다!",
  },
  {
    reviewId: "review-promotion-04",
    studyName: "개발에 필요한 지식들",
    writerKeyword: "혼자 공부하기 힘들었던 개발 전공자",
    text: "평소에 혼자 공부하기 힘들었던 이론적인 부분들을 다른 사람들과 함께 공부하니 더 이해가 잘 되는 느낌었어요~! 서로가 이해한 내용을 토대로 서로서로 강의해주며 공부하니 더 확실히 이해가 완벽히 됐던 것 같습니다.",
  },
];
export default function getMainReview() {
  return REVIEWS;
}
