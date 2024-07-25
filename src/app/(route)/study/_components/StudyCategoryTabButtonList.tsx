"use client";

import { TabButton } from "@/app/_components/CategoryTab/TabButton";
import { CategoryTabIcon } from "@/app/_components/CategoryTab/TabIcons";
import useQueryString from "@/hooks/useQueryString";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

type TStudyCategoryValue = {
  label: string;
  value: string;
};

export default function StudyCategoryTabButtonList({
  queryKey,
  categoryName,
  categoryIcons,
}: {
  queryKey: string;
  categoryName: TStudyCategoryValue[];
  categoryIcons: string[];
}) {
  const params = useSearchParams();
  const [select, setSelected] = useState(params?.get(queryKey) || "");

  const studyCategoryIcons = categoryName.map((category, index) => ({
    ...category,
    iconName: categoryIcons[index],
  }));

  const onChangeQuery = useQueryString({
    paramsKey: queryKey,
    queryInclude: "search",
  });

  const clickHandler = (value: string) => {
    onChangeQuery(value);
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
