"use client";
import { Suspense, useEffect, useState } from "react";
import Skeleton from "@/common/Atoms/Skeleton";
import CustomizedStudySelect, {
  StudyCardSelectOption,
} from "./CustomizedStudySelect";
import { cfetch } from "@/utils/customFetch";

export default function SelectLinkedStudy({
  defaultValue,
}: {
  defaultValue?: string;
}) {
  const [options, setOptions] = useState<StudyCardSelectOption[]>([]);
  useEffect(() => {
    cfetch("/api/study")
      .then((res) => res.json())
      .then(({ data: result }) => {
        if (result.state === true) {
          setOptions(
            result.data.map((study: any) => ({
              ...study,
              value: study.studyId,
              label: study.studyInfo.title,
            }))
          );
        }
      })
      .catch((err) => {
        console.error(err);
        return err;
      });
  }, []);

  return (
    <Suspense fallback={<Skeleton className="w-full" />}>
      <CustomizedStudySelect
        name="linkedStudyId"
        options={options}
        className="w-full gridContent"
        defaultValue={defaultValue}
      />
    </Suspense>
  );
}
