import SectionTitle from "@/common/Atoms/Text/SectionTitle";
import StudyCardList from "@/common/Templates/CardList";

import BackButton from "../../_components/BackButton";
import StudyDetail from "./_components/StudyDetail";

import { getStudyCards } from "@/dummies/studies";
import { getStudy } from "@/lib/actions/studyAction";
import { StudyDataFull } from "@/types/model/StudyCard";

export default async function StudyPostComponent() {
  // const studyCards = getStudyCards();

  const result = await getStudy();
  let studyCardLists: StudyDataFull;
  studyCardLists = result.data;

  const studyCards = JSON.parse(JSON.stringify(studyCardLists));

  return (
    <div>
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
