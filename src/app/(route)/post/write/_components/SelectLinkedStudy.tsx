import CustomizedStudySelect from "./CustomizedStudySelect";
import { Suspense } from "react";
import Skeleton from "@/common/Atoms/Skeleton";

// async function getStuides(): Promise<StudyCardSelectOption[]> {
//   const result = await getStudy();
//
//   if (result?.state === false) {
//     return [];
//   }
//
//   const studies: StudyCardSelectOption[] = result.data.map((study: any) => ({
//     ...study,
//     value: `https://chemeet.vercel.app/study/${study.studyId}`,
//     label: study.title,
//   }));
//   return studies;
// }

export default function SelectLinkedStudy() {
  // const studies = await getStuides();
  return (
    <Suspense fallback={<Skeleton className="w-full" />}>
      <CustomizedStudySelect
        name="linkedStudyId"
        className="w-full gridContent"
      />
    </Suspense>
  );
}
