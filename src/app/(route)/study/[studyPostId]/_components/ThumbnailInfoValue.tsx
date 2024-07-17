import { TThumbnailValue } from "./StudyDetailThumbnailInfo";

export default function ThumbnailInfoValue({
  thumbnailValue,
}: {
  thumbnailValue: TThumbnailValue;
}) {
  const { targetCategory, RecruitmentPeople, expense, studyPeriod, onoff } =
    thumbnailValue;

  return (
    <ul className="flex flex-col gap-4 text-xl">
      <li>{targetCategory.label}</li>
      <li>{RecruitmentPeople}</li>
      <li>{expense}</li>
      <li>
        {studyPeriod[0]} ~ {studyPeriod[1]}
      </li>
      <li>{onoff}</li>
    </ul>
  );
}
