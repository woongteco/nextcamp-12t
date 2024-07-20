"use client";

import NotFound from "@/app/not-found";
import Dropdown from "@/common/Molecules/Dropdown";
import { TQuery } from "../page";
import { CATEGORIES } from "@/constants/categories/job_category";
import { CategoryGroup } from "@/types/model/Category";
import useQueryString from "@/hooks/useQueryString";

export default function StudyCategorySelectBox({
  searchParams,
}: {
  searchParams: TQuery;
}) {
  const jobC = searchParams?.job_c || "default";
  const categories: CategoryGroup[] = [
    {
      value: "default",
      label: "직무선택",
      options: [],
    },
    ...CATEGORIES,
  ];

  const onChangeQuery = useQueryString({
    paramsKey: "job_c",
    queryInclude: "search",
  });

  const onClickLink = (value: string) => {
    onChangeQuery(value);
  };

  const jobCategory = categories.find((item) => item.value === jobC);

  if (jobCategory === undefined) {
    return <NotFound />;
  }

  return (
    <div className="mb-6 text-lg font-medium text-gray-950">
      <Dropdown
        buttonLabel={jobCategory.label}
        items={CATEGORIES.map((item) => (
          <li
            key={item.value}
            className={`w-pull px-[12px] py-[6px] text-sm text-slate-700 font-normal hover:text-main-600
            ${jobC === item.value ? "text-main-400" : ""}`}
          >
            <button className="block" onClick={() => onClickLink(item.value)}>
              {item.label}
            </button>
          </li>
        ))}
      />
    </div>
  );
}
