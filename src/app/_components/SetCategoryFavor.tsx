"use client";
import { MouseEventHandler, useRef, useState } from "react";
import Button from "@/common/Atoms/Form/Button";
import { CATEGORIES } from "@/constants/categories/job_category";
import clsx from "clsx";
import Input from "@/common/Molecules/Form/Input";
import { RefreshIcon } from "@/common/Atoms/Image/Icon";

export type SetCategoryFavorProps = {
  skipThis: MouseEventHandler<HTMLButtonElement>;
  saveCategory: MouseEventHandler<HTMLButtonElement>;
};

export default function SetCategoryFavor({
  skipThis,
  saveCategory,
}: SetCategoryFavorProps) {
  const categoryGroup = CATEGORIES.map(({ value, label }) => ({
    value,
    label,
  }));
  const [shown, setShown] = useState<number>(0);
  const categoryRef = useRef<HTMLFormElement>(null);

  return (
    <div className="flex flex-col gap-6 p-2">
      <div className="flex items-center justify-between">
        <p>
          <span className="text-H3 text-label-normal block">
            관심 있는 전공 · 직무 카테고리를 선택하세요
          </span>
          <span className="text-label-400 text-label-neutral">
            선택한 카테고리와 관련된 스터디를 우선으로 추천해 드립니다. <br />
            선택하지 않고 건너뛰어 홈으로 이동할 수도 있습니다.
          </span>
        </p>
        <Button
          variation="icon"
          onClick={() => {
            if (categoryRef?.current) {
              categoryRef.current.reset();
            }
          }}
        >
          <RefreshIcon />
        </Button>
      </div>
      <div className="flex gap-2 items-start justify-center min-h-full overflow-hidden [&>ul]:max-h-[400px]">
        <ul className="w-[200px] h-full overflow-y-auto">
          {categoryGroup.map((group, index) => (
            <li key={group.value}>
              <label className="flex items-center justify-start [&>input]:hidden [&>input:checked+span]:bg-main-25 [&>input:checked+span]:text-body-600 [&>input:checked+span]:text-main-600">
                <input
                  name="category_group"
                  type="radio"
                  checked={shown === index}
                  onChange={() => setShown(index)}
                />
                <span className="block w-full px-8 py-4 rounded-xl">
                  {group.label}
                </span>
              </label>
            </li>
          ))}
        </ul>
        <ul className="w-[320px] h-full overflow-y-auto">
          <form action="" ref={categoryRef}>
            {CATEGORIES.map(({ value, options }, index) => (
              <div
                key={`${value}-option-${index}`}
                className={clsx({
                  block: index === shown,
                  hidden: index !== shown,
                })}
              >
                {options.map(({ value, label }) => (
                  <li key={value}>
                    <label className="flex items-center gap-2 px-8 py-4">
                      <Input.Checkbox
                        name="my_category"
                        id={value}
                        value={value}
                      />
                      {label}
                    </label>
                  </li>
                ))}
              </div>
            ))}
          </form>
        </ul>
      </div>
      <div className="w-full h-0 border-t border-t-line-neutral"></div>
      <div className="flex gap-4 justify-between">
        <Button
          variation="outline"
          colors={{ bg: "bg-main-600", text: "text-main-600" }}
          onClick={skipThis}
        >
          건너뛰기
        </Button>
        <Button variation="solid" onClick={saveCategory}>
          관심 카테고리 저장
        </Button>
      </div>
    </div>
  );
}
