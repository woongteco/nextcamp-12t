import StudyCardList from "@/common/Templates/CardList";
import { getStudyCards } from "@/dummies/studies";
import connectDB from "@/lib/db";
import { Study } from "@/lib/schema";

async function getLatestStudies() {
  // 1. profile에서 관심 카테고리 가져오기
  // 2. 관심카테고리로 필터링하여 스터디 리스트 가져오기
  await connectDB();

  const studies = await Study.find({});
  console.log("studies", studies);
}

export default async function RecommendLatestStudies() {
  const proStudies = getStudyCards();
  await getLatestStudies();

  return <StudyCardList studyCards={proStudies} count={8} />;
}
