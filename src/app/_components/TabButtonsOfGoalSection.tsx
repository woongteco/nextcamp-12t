"use client";
import {
  BellRingIcon,
  BuildingIcon,
  BulbIcon,
  FileEditIcon,
  KeyboardIcon,
  MonitorPlayIcon,
  NotebookIcon,
  PuzzleIcon,
  TIconStylingProps,
} from "@/common/Atoms/Image/Icon";
import { useState } from "react";
import { GOALS } from "./TopBannerSection";
import { TabButton } from "./TabButton";

const ICONS = [
  (props: TIconStylingProps) => <NotebookIcon {...props} />,
  (props: TIconStylingProps) => <KeyboardIcon {...props} />,
  (props: TIconStylingProps) => <BulbIcon {...props} />,
  (props: TIconStylingProps) => <FileEditIcon {...props} />,
  (props: TIconStylingProps) => <BuildingIcon {...props} />,
  (props: TIconStylingProps) => <BellRingIcon {...props} />,
  (props: TIconStylingProps) => <MonitorPlayIcon {...props} />,
  (props: TIconStylingProps) => <PuzzleIcon {...props} />,
];

const GOALS_TAB = GOALS.map((goal, index) => ({ ...goal, Icon: ICONS[index] }));

export default function TabButtonsOfGoalSection() {
  const [selected, setSelected] = useState(GOALS[0].value);
  return (
    <>
      <div className="flex flex-row gap-4 w-fit mx-auto">
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
    </>
  );
}
