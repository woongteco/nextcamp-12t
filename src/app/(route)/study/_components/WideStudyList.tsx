import WideStudyItem from "./WideStudyItem";

export default function WideStudyList() {
  return (
    <div className="grid grid-cols-2 gap-6">
      <WideStudyItem />
      <WideStudyItem />
    </div>
  );
}
