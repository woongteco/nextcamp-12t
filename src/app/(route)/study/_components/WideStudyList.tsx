import { TStudyCard } from "@/dummies/studies";
import WideStudyItem from "./WideStudyItem";
import NoneStudyComponent from "./NoneStudyComponent";

export default function WideStudyList({
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
    <div className="grid grid-cols-2 gap-6">
      {STUDYCARD.map((card) => (
        <WideStudyItem key={card.id} card={card} />
      ))}
    </div>
  );
}
