"use client";

import { TabButton } from "@/app/_components/CategoryTab/TabButton";
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
  ICONS,
}: {
  LABEL_VALUE: TStudyCategoryValue[];
  ICONS: TStudyCategoryIcon[];
}) {
  const STUDYCATEGORY_TAB = LABEL_VALUE.map((category, index) => ({
    ...category,
    Icon: ICONS[index],
  }));

  const [select, setSelected] = useState(LABEL_VALUE[0].value);

  return (
    <div className="flex gap-4 w-fit mb-11">
      {STUDYCATEGORY_TAB.map(({ label, value, Icon }) => {
        const active = select === value;
        return (
          <TabButton
            key={value}
            label={label}
            active={active}
            onClick={() => setSelected(value)}
          >
            <Icon strokeColor={active ? "#FFF" : undefined} />
          </TabButton>
        );
      })}
    </div>
  );
}
