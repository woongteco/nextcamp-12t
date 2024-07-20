import StudyCardList from "@/common/Templates/CardList";
import { getStudiesData } from "@/dummies/studies";

export default function RecommendLatestStudies() {
  const proStudies = getStudiesData();
  return <StudyCardList studyCards={proStudies} count={8} />;
}
