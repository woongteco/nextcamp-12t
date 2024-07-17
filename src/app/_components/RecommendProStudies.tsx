import StudyCardList from "@/common/Templates/CardList";
import { getStudiesData } from "@/dummies/studies";

export default function RecommendProStudies() {
  const proStudies = getStudiesData();
  return <StudyCardList studyCards={proStudies} count={8} />;
}
