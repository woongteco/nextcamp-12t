"use client";

import { TabButton } from "@/app/_components/CategoryTab/TabButton";
import { CategoryTabIcon } from "@/app/_components/CategoryTab/TabIcons";
import React from "react";
import { useState } from "react";

type TStudyCategoryValue = {
  label: string;
  value: string;
};

export default function StudyCategoryTabButtonList({
  categoryName,
  categoryIcons,
}: {
  categoryName: TStudyCategoryValue[];
  categoryIcons: string[];
}) {
  const studyCategoryIcons = categoryName.map((category, index) => ({
    ...category,
    iconName: categoryIcons[index],
  }));

  const [select, setSelected] = useState("");

  return (
    <div className="flex gap-4 w-fit mb-11">
      {studyCategoryIcons.map(({ label, value, iconName }) => {
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
