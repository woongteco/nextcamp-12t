"use client";
import { GOALS } from "@/constants/categories/study_goal";
import { CategoryTabIcon, categoryIconsName } from "./TabIcons";
import mainTabSelectedStore from "@/store/mainTabStore";
import { TabButton } from "./TabButton";
import { MouseEvent } from "react";

const GOALS_TAB = GOALS.map((goal, index) => ({
  ...goal,
  iconName: categoryIconsName[index],
}));

export default function MainTabButtonGroup() {
  const { mainTab, setMainTab } = mainTabSelectedStore();
  function changeTab(value: string) {
    // 다시 클릭 시 빈 값으로 돌아갈 필요 없음
    setMainTab(value);
  }
  function clickHandler(
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    value: string
  ) {
    e.preventDefault();
    changeTab(value);
  }
  return (
    <>
      <div className="flex flex-wrap xl:flex-row gap-4 w-fit mx-auto mb-11">
        {GOALS_TAB.map(({ label, value, iconName }) => {
          const active = mainTab === value;
          return (
            <TabButton
              key={value}
              label={label}
              active={active}
              onClick={(e) => clickHandler(e, value)}
            >
              <CategoryTabIcon
                name={iconName}
                strokeColor={active ? "#FFFFFF" : undefined}
              />
            </TabButton>
          );
        })}
      </div>
    </>
  );
}
