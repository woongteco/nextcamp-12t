"use client";

import { TabButton } from "@/app/_components/CategoryTab/TabButton";
import { CategoryTabIcon } from "@/app/_components/CategoryTab/TabIcons";
import { TIconStylingProps } from "@/common/Atoms/Image/Icon";
import React from "react";
import { useState } from "react";

type TStudyCategoryValue = {
  label: string;
  value: string;
};
type TStudyCategoryIcon = (props: TIconStylingProps) => JSX.Element;

export default function StudyCategoryTabButtonList({
  LABEL_VALUE,
  ICONS_NAME,
}: {
  LABEL_VALUE: TStudyCategoryValue[];
  ICONS_NAME: string[];
}) {
  const STUDYCATEGORY_TAB = LABEL_VALUE.map((category, index) => ({
    ...category,
    iconName: ICONS_NAME[index],
  }));

  const [select, setSelected] = useState(LABEL_VALUE[0].value);

  return (
    <div className="flex gap-4 w-fit mb-11">
      {STUDYCATEGORY_TAB.map(({ label, value, iconName }) => {
        const active = select === value;
        return (
          <TabButton
            key={value}
            label={label}
            active={active}
            onClick={() => setSelected(value)}
          >
            <CategoryTabIcon
              name={iconName}
              strokeColor={active ? "#FFF" : undefined}
            />
          </TabButton>
        );
      })}
    </div>
  );
}
