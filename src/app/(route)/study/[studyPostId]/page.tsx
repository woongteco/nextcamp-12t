import SectionTitle from "@/common/Atoms/Text/SectionTitle";
import StudyCardList from "@/common/Templates/CardList";

import BackButton from "../../_components/BackButton";
import StudyDetail from "./_components/StudyDetail";

import { getStudiesData } from "@/dummies/studies";

export default function StudyPostComponent() {
  const studyCards = getStudiesData();
  return (
    <div className="py-20">
      <BackButton />
      <StudyDetail />

      <div className="mt-20">
        <SectionTitle size="md" className="pb-5">
          비슷한 스터디들
        </SectionTitle>
        <StudyCardList studyCards={studyCards} count={4} />
      </div>
    </div>
  );
}
