import { CommentBodyLayout } from "@/common/Organisms/Comment/CommentBodyLayout";
import StudyCardList from "@/common/Templates/CardList";
import { StudyDataFull } from "@/types/model/StudyCard";
import { cfetch } from "@/utils/customFetch";

export default async function RecommendProStudies() {
  const response = await cfetch("/api/study-matching/favor", {
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

  const recommend: StudyDataFull[] = response.data;

  return <StudyCardList studyCards={recommend} count={8} />;
}
