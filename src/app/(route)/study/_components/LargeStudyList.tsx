import LargeStudyItem from "./LargeStudyItem";

export default function LargeStudyList() {
  return (
    <div className="grid grid-cols-3 gap-3">
      <LargeStudyItem />
      <LargeStudyItem />
      <LargeStudyItem />
    </div>
  );
}
