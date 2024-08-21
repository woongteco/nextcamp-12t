"use client";
import { StudyDataFull } from "@/types/model/StudyCard";
import Skeleton from "@/common/Atoms/Skeleton";
import StudyCardList from "@/common/Templates/CardList";
import mainTabSelectedStore from "@/store/mainTabStore";
import { useEffect, useState } from "react";

export default function MainSectionOfGoals({
  data,
}: {
  data: StudyDataFull[];
}) {
  const { mainTab } = mainTabSelectedStore();
  const initStudies = data.filter(
    (s) => s.studyInfo.targetCategory === mainTab
  );
  const [studies, setStudies] = useState<StudyDataFull[]>(initStudies);
  useEffect(() => {
    // console.log({ studies });
    setStudies(() =>
      data.filter((s) => s.studyInfo.targetCategory === mainTab)
    );
  }, [mainTab]);

  return (
    <>
      {studies.length > 0 ? (
        <StudyCardList studyCards={studies} count={8} />
      ) : (
        <Skeletons />
      )}
    </>
  );
}

function StudyCardSkeleton() {
  return <Skeleton className="rounded-twenty hover:shadow-normal h-[338px]" />;
}

function Skeletons() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
      <StudyCardSkeleton />
      <StudyCardSkeleton />
      <StudyCardSkeleton />
      <StudyCardSkeleton />
    </div>
  );
}
