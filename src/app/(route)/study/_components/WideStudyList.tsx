import WideStudyItem from "./WideStudyItem";
import NoneStudyComponent from "./NoneStudyComponent";
import { TStudyCard } from "@/types/model/StudyCard";

export default function WideStudyList({
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
    <div className="grid grid-cols-2 gap-6">
      {STUDYCARD.map((card) => (
        <WideStudyItem key={card.studyId} card={card} />
      ))}
    </div>
  );
}
