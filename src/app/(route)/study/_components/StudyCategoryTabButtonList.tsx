"use client";

import { TabButton } from "@/app/_components/CategoryTab/TabButton";
import { CategoryTabIcon } from "@/app/_components/CategoryTab/TabIcons";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

type TStudyCategoryValue = {
  label: string;
  value: string;
};

export default function StudyCategoryTabButtonList({
  paramsKey,
  categoryName,
  categoryIcons,
}: {
  paramsKey: string;
  categoryName: TStudyCategoryValue[];
  categoryIcons: string[];
}) {
  const params = useSearchParams();
  const newSearchParams = new URLSearchParams(params);
  const [select, setSelected] = useState(params.get(paramsKey) || "");

  const router = useRouter();
  const pathname = usePathname();
  const url = pathname.includes("search") ? pathname : `${pathname}/search`;

  const studyCategoryIcons = categoryName.map((category, index) => ({
    ...category,
    iconName: categoryIcons[index],
  }));

  const clickHandler = (value: string) => {
    newSearchParams.set(paramsKey, value);
    router.replace(`${url}?${newSearchParams.toString()}`);
    setSelected(value);
  };

  return (
    <div className="flex gap-4 w-fit mb-11">
      {studyCategoryIcons.map(({ label, value, iconName }) => {
        const active = select === value;
        return (
          <TabButton
            key={value}
            label={label}
            active={active}
            onClick={() => clickHandler(value)}
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
