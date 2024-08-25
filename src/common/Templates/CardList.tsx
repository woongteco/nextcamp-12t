/**
 * @props cols: "4" | "3" | "2"
 * "4" : 기본적인 스터디 카드 리스트의 column 개수입니다
 * "3" : 스터디 탐색 페이지의 large type 스터디 카드 혹은 사이드바가 있는 마이페이지와 같은 레이아웃에서 카드 리스트를 보여줄 때 사용합니다
 * "2" : 스터디 탐색 페이지의 wide type 스터디 카드에만 사용합니다
 */

import { StudyDataFull, StudySchema } from "@/types/model/StudyCard";
import StudyCardItem from "../Organisms/StudyCardItem";
import NoneStudyComponent from "@/app/(route)/study/_components/NoneStudyComponent";

export default function StudyCardList({
  studyCards,
  count,
}: {
  studyCards: StudyDataFull[];
  count?: number;
}) {
  if (studyCards.length === 0) {
    return <NoneStudyComponent />;
  }
  const STUDYCARDS = count ? studyCards.slice(0, count) : studyCards;
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
      {STUDYCARDS.map((card) => (
        <StudyCardItem key={card.studyId} card={card} />
      ))}
    </ul>
  );
}
