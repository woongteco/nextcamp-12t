import { TStudyCard } from "@/dummies/studies";
import LargeStudyItem from "./LargeStudyItem";
import NoneStudyComponent from "./NoneStudyComponent";

export default function LargeStudyList({
  studyCard,
  count,
}: {
  studyCard: TStudyCard[];
  count: number;
}) {
  if (!studyCard) {
    return <NoneStudyComponent />;
  }

  const STUDYCARD = studyCard.slice(0, count);

  return (
    <div className="grid grid-cols-3 gap-3">
      {STUDYCARD.map((card) => (
        <LargeStudyItem key={card.id} card={card} />
      ))}
    </div>
  );
}
