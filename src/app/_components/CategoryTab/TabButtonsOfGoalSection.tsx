"use client";
import { GOALS } from "@/constants/categories/study_goal";
import { TStudyCard, getStudiesData } from "@/dummies/studies";

import { useEffect, useState } from "react";
import { TabButton } from "./TabButton";
import StudyCardList from "@/common/Templates/CardList";
import { CategoryTabIcon, categoryIconsName } from "./TabIcons";

const GOALS_TAB = GOALS.map((goal, index) => ({
  ...goal,
  iconName: categoryIconsName[index],
}));

export default function TabButtonsOfGoalSection() {
  const [selected, setSelected] = useState(GOALS[0].value);
  const [proStudies, setStudies] = useState<TStudyCard[]>([]);

  useEffect(() => {
    setStudies(() => getStudiesData());
  }, [selected]);

  return (
    <>
      <div className="flex flex-row gap-4 w-fit mx-auto mb-11">
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
      <StudyCardList studyCards={proStudies} count={8} />
    </>
  );
}
