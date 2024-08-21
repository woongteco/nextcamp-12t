import StudyCardList from "@/common/Templates/CardList";
import { getStudyCards } from "@/dummies/studies";
import { StudyDataFull } from "@/types/model/StudyCard";
import { cfetch } from "@/utils/customFetch";

export default async function RecommendLatestStudies() {
  const response = await cfetch("/api/study-matching/latest", {
    next: { tags: ["study"] },
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => err);

  if (!response?.data) {
    throw new Error("최신 스터디 정보 가져오기 실패");
  }

  const latest: StudyDataFull[] = response.data;

  return <StudyCardList studyCards={latest} count={8} />;
}
