import { getStudyCards } from "@/dummies/studies";
import CustomizedStudySelect, {
  StudyCardSelectOption,
} from "./CustomizedStudySelect";
import { Suspense } from "react";
import Skeleton from "@/common/Atoms/Skeleton";
import { delay } from "@/dummies/utils";

async function getStuides(): Promise<StudyCardSelectOption[]> {
  // const result = await
  const studies: StudyCardSelectOption[] = getStudyCards().map((study) => ({
    ...study,
    value: `https://chemeet.vercel.app/study/${study.studyId}`,
    label: study.title,
  }));
  await delay(1000);
  console.log(studies);
  return studies;
}

export default async function SelectLinkedStudy() {
  const studies = await getStuides();
  return (
    <Suspense fallback={<Skeleton className="w-full" />}>
      <CustomizedStudySelect options={studies} className="w-full" />
    </Suspense>
  );
}
