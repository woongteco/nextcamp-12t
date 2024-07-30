"use client";
import { GOALS } from "@/constants/categories/study_goal";

import { useEffect, useState } from "react";
import { TabButton } from "./TabButton";
import StudyCardList from "@/common/Templates/CardList";
import { CategoryTabIcon, categoryIconsName } from "./TabIcons";
import { TStudyCard } from "@/types/model/StudyCard";
import { getStudyCards } from "@/dummies/studies";
import Skeleton from "@/common/Atoms/Skeleton";

const GOALS_TAB = GOALS.map((goal, index) => ({
  ...goal,
  iconName: categoryIconsName[index],
}));

export default function TabButtonsOfGoalSection() {
  const initGoal = GOALS[0].value;
  const init = getStudyCards();
  const initStudies = init.filter((s) => s.targetCategory.value === initGoal);
  const [selected, setSelected] = useState(initGoal);
  const [proStudies, setStudies] = useState<TStudyCard[]>(initStudies);

  useEffect(() => {
    setStudies(() => init.filter((s) => s.targetCategory.value === selected));
  }, [selected]);

  return (
    <>
      <div className="flex flex-wrap xl:flex-row gap-4 w-fit mx-auto mb-11">
        {GOALS_TAB.map(({ label, value, iconName }) => {
          const active = selected === value;
          return (
            <TabButton
              key={value}
              label={label}
              active={active}
              onClick={() => setSelected(value)}
            >
              <CategoryTabIcon
                name={iconName}
                strokeColor={active ? "#FFFFFF" : undefined}
              />
            </TabButton>
          );
        })}
      </div>
      {proStudies.length > 0 ? (
        <StudyCardList studyCards={proStudies} count={8} />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          <StudyCardSkeleton />
          <StudyCardSkeleton />
          <StudyCardSkeleton />
          <StudyCardSkeleton />
        </div>
      )}
    </>
  );
}

function StudyCardSkeleton() {
  return <Skeleton className="rounded-twenty hover:shadow-normal h-[338px]" />;
}
