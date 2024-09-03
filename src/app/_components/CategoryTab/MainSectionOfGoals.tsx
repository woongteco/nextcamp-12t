"use client";
import { MouseEvent, useEffect, useState } from "react";
import { GOALS } from "@/constants/categories/study_goal";
import { categoryIconsName, CategoryTabIcon } from "./TabIcons";
import { StudyDataFull } from "@/types/model/StudyCard";
import StudyCardList from "@/common/Templates/CardList";
import { TabButton } from "./TabButton";

const GOALS_TAB = GOALS.map((goal, index) => ({
  ...goal,
  iconName: categoryIconsName[index],
}));

export default function MainSectionOfGoals({
  data,
}: {
  data: StudyDataFull[];
}) {
  const initSelected: string = GOALS[0].value;
  const initStudies: StudyDataFull[] = data.filter(
    (s) => s.studyInfo.targetCategory.value === initSelected
  );
  const [selected, setSelected] = useState<string>(initSelected);
  const [studies, setStudies] = useState<StudyDataFull[]>(initStudies);
  // function changeSelecteTab(
  //   e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  //   value: string
  // ) {
  //   e.preventDefault();
  //   console.log(":selected:", value);
  //   setSelected(value);
  //   const newSelected: StudyDataFull[] = data.filter(
  //     (s) => s.studyInfo.targetCategory === value
  //   );
  //   setStudies(newSelected);
  // }

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
              onClick={(
                e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
              ) => {
                e.preventDefault();
                console.log(":selected:", value);
                setSelected(value);
                const newSelected: StudyDataFull[] = data.filter(
                  (s) => s.studyInfo.targetCategory.value === value
                );
                setStudies(newSelected);
              }}
            >
              <CategoryTabIcon
                name={iconName}
                strokeColor={active ? "#FFFFFF" : undefined}
              />
            </TabButton>
          );
        })}
      </div>
      {studies.length > 0 ? (
        <StudyCardList studyCards={studies} count={8} />
      ) : (
        <Empty text="해당 목표를 가진 스터디가 없어요. 다른 목표를 선택해보세요." />
      )}
    </>
  );
}

function Empty({ text }: { text: string }) {
  return (
    <div
      className=
        "flex flex-col items-center justify-center gap-4 w-full h-[19rem] border rounded-3xl text-label-dimmed text-center"
    >{text}</div>
  )
}