import SectionTitle from "@/common/Atoms/Text/SectionTitle";
import StudyCardList from "@/common/Templates/CardList";

import BackButton from "../../_components/BackButton";
import StudyDetail from "./_components/StudyDetail";

import { getStudyCards } from "@/dummies/studies";

export default function StudyPostComponent() {
  const studyCards = getStudyCards();
  return (
    <div>
      <BackButton />
      <StudyDetail />

      <div className="mt-20">
        <SectionTitle size="md" className="pb-5">
          비슷한 스터디들
        </SectionTitle>
        <StudyCardList studyCards={studyCards} count={4} />
        <StudyCardList studyCards={studyCards} count={4} />
      </div>
    </div>
  );
}
