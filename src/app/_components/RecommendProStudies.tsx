import StudyCardList from "@/common/Templates/CardList";
import { getStudyCards } from "@/dummies/studies";
import { getProfile } from "@/lib/actions/profileAction";
import { Study } from "@/lib/schema";

async function getFavorStudies(userId: string) {
  // 1. profile에서 관심 카테고리 가져오기
  // 2. 관심카테고리로 필터링하여 스터디 리스트 가져오기
  const profile = await getProfile(userId);
  console.log("profile", profile?.data);

  const studies = await Study.find({});
  console.log("studies", studies);
}

export default async function RecommendProStudies({
  userId,
}: {
  userId: string;
}) {
  const proStudies = getStudyCards();
  await getFavorStudies(userId);
  return <StudyCardList studyCards={proStudies} count={8} />;
}
