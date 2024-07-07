"use client";
import { GOALS } from "@/dummies/categories";
import { TStudyCard, getStudiesData } from "@/dummies/studies";

import { useEffect, useState } from "react";
import { TabButton } from "./TabButton";
import StudyCardList from "@/common/Templates/CardList";
import { CATEGORY_ICONS } from "./TabIcons";
import StudyCategoryTabButtonList from "@/app/(route)/study/_components/StudyCategoryTabButtonList";

const GOALS_TAB = GOALS.map((goal, index) => ({
  ...goal,
  Icon: CATEGORY_ICONS[index],
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
        {GOALS_TAB.map(({ label, value, Icon }) => {
          const active = selected === value;
          return (
            <TabButton
              key={value}
              label={label}
              active={active}
              onClick={() => setSelected(value)}
            >
              <Icon strokeColor={active ? "#FFFFFF" : undefined} />
            </TabButton>
          );
        })}
      </div>
      <StudyCardList studyCard={proStudies} count={8} />
    </>
  );
}
