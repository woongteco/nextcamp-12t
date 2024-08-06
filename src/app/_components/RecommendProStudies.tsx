import StudyCardList from "@/common/Templates/CardList";
import { getProfile } from "@/lib/actions/profileAction";
import { filterStudies, getAllStudies } from "@/lib/actions/studyAction";

async function getFavorStudies(userId: string) {
  // 1. profile에서 관심 카테고리 가져오기
  // 2. 관심카테고리로 필터링하여 스터디 리스트 가져오기

  const profile = await getProfile(userId);

  if (profile.state === false) {
    const result = await getAllStudies();
    return result;
  }

  const result = await filterStudies(profile.data.my_category);

  return result;
}

export default async function RecommendProStudies({
  userId,
}: {
  userId: string;
}) {
  const result = await getFavorStudies(userId);

  if (result.state === false) {
    throw new Error(result.mesasge);
  }

  const recommend = result.data;

  return <StudyCardList studyCards={recommend} count={8} />;
}
