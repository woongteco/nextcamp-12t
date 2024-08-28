"use client";
import { Dispatch, SetStateAction, useId } from "react";
import Button, { TButtonProps } from "../Atoms/Form/Button";
import { PaginationChevronIcon } from "../Atoms/Image/Icon";
import { TIconButtonProps } from "@/types/component/props";

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
      <PageButtonIcon
        disabled={isStart}
        onClick={() => {
          if (!isStart) {
            setCurrent(current - 1);
          }
        }}
      >
        <PaginationChevronIcon direction="prev" />
      </PageButtonIcon>
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
      <PageButtonIcon
        disabled={isEnd}
        onClick={() => {
          if (!isEnd) {
            setCurrent(current + 1);
          }
        }}
      >
        <PaginationChevronIcon direction="next" />
      </PageButtonIcon>
    </div>
  );
}

function PageButton(props: Partial<TButtonProps> & { active?: boolean }) {
  const { active = false, onClick, children, ...restProps } = props;
  return (
    <Button
      variation="text"
      onClick={onClick}
      color="assist"
      className={active ? "text-label-strong" : "text-label-assist"}
      {...restProps}
    >
      {children}
    </Button>
  );
}

function PageButtonIcon(
  props: Partial<TIconButtonProps> & { active?: boolean }
) {
  const { active = false, onClick, children, ...restProps } = props;
  return (
    <Button.Icon
      onClick={onClick}
      className={active ? "text-label-strong" : "text-label-assist"}
      {...restProps}
    >
      {children}
    </Button.Icon>
  );
}
