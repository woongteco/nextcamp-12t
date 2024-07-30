"use client";
import { Dispatch, SetStateAction, useId } from "react";
import Button from "../Atoms/Form/Button";
import { PaginationChevronIcon } from "../Atoms/Image/Icon";
import { TButtonProps, TIconButtonProps } from "@/types/component/props";

type TPages = {
  length: number;
  current: number;
  setCurrent: Dispatch<SetStateAction<number>>;
};
export default function Pagination(props: TPages) {
  const { length, current, setCurrent } = props;
  const thisId = useId();
  const pageNums = Array(length)
    .fill(1)
    .map((num, idx) => num + idx);
  const isStart = current === 1;
  const isEnd = current === length;
  return (
    <div className="mt-20 flex gap-8 items-center justify-center">
      <PageButton
        variation="icon"
        disabled={isStart}
        onClick={() => {
          if (!isStart) {
            setCurrent(current - 1);
          }
        }}
      >
        <PaginationChevronIcon direction="prev" />
      </PageButton>
      <div className="flex items-center justify-center">
        {pageNums.map((page) => (
          <PageButton
            key={`${thisId}-page-${page}`}
            active={current === page}
            onClick={() => setCurrent(page)}
          >
            {page}
          </PageButton>
        ))}
      </div>
      <PageButton
        variation="icon"
        disabled={isEnd}
        onClick={() => {
          if (!isEnd) {
            setCurrent(current + 1);
          }
        }}
      >
        <PaginationChevronIcon direction="next" />
      </PageButton>
    </div>
  );
}

function PageButton(
  props: Partial<TIconButtonProps | TButtonProps> & { active?: boolean }
) {
  const {
    active = false,
    variation = "text",
    onClick,
    children,
    ...restProps
  } = props;
  return (
    <Button
      variation={"text"}
      onClick={onClick}
      colors={{
        bg: "bg-label-assist",
        text: active ? "text-label-strong" : "text-label-assist",
      }}
      {...restProps}
    >
      {children}
    </Button>
  );
}
