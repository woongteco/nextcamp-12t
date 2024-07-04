import StudyCardList from "@/common/Templates/CardList";
import { getStudiesData } from "@/dummies/studies";

export default function RecommendLatestStudies() {
  const proStudies = getStudiesData();
  return <StudyCardList studyCard={proStudies.slice(0, 8)} />;
}
