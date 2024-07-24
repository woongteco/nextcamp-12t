import StudyCardList from "@/common/Templates/CardList";
import { getStudyCards } from "@/dummies/studies";

export default function RecommendProStudies() {
  const proStudies = getStudyCards();
  return <StudyCardList studyCards={proStudies} count={8} />;
}
