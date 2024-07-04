import HotStudyItem from "./HotStudyItem";

export default function HotStudyList() {
  return (
    <div className="grid grid-cols-3 gap-3">
      <HotStudyItem />
      <HotStudyItem />
      <HotStudyItem />
    </div>
  );
}
