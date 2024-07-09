"use client";
import { GOALS } from "@/dummies/categories";
import { TStudyCard, getStudiesData } from "@/dummies/studies";

import { useEffect, useState } from "react";
import { TabButton } from "./TabButton";
import StudyCardList from "@/common/Templates/CardList";
import { CATEGORY_ICONS_NAME, CategoryTabIcon } from "./TabIcons";

const GOALS_TAB = GOALS.map((goal, index) => ({
  ...goal,
  iconName: CATEGORY_ICONS_NAME[index],
}));

export default function TabButtonsOfGoalSection() {
  const [selected, setSelected] = useState(GOALS[0].value);
  const [proStudies, setStudies] = useState<TStudyCard[]>([]);

  useEffect(() => {
    setStudies(() => getStudiesData());
  }, [selected]);

  return (
    <>
      {/* <div className="w-fit mx-auto">
        <StudyCategoryTabButtonList
          LABEL_VALUE={GOALS}
          ICONS={CATEGORY_ICONS}
        />
      </div> */}
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
      <StudyCardList studyCard={proStudies} count={8} />
    </>
  );
}
