import { TStudyCard } from "@/types/model/StudyCard";
import LargeStudyItem from "./LargeStudyItem";
import NoneStudyComponent from "./NoneStudyComponent";

export default function LargeStudyList({
  studyCards,
  count,
}: {
  studyCards: TStudyCard[];
  count: number;
}) {
  if (!studyCards) {
    return <NoneStudyComponent />;
  }

  const STUDYCARD = studyCards.slice(0, count);

  return (
    <div className="grid grid-cols-3 gap-3">
      {STUDYCARD.map((card) => (
        <LargeStudyItem key={card.studyId} card={card} />
      ))}
    </div>
  );
}
