import GoodStudyItem from "./GoodStudyItem";

export default function GoodStudyList() {
  return (
    <div className="grid grid-cols-2 gap-6">
      <GoodStudyItem />
      <GoodStudyItem />
    </div>
  );
}
