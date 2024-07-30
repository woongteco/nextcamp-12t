"use client";

import { AdditionIcon } from "@/common/Atoms/Image/Icon";
import { MouseEvent, useRef } from "react";

export default function ThumbnailImage() {
  const imageInput = useRef<HTMLInputElement>(null);
  const onClickhandler = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();
    if (imageInput.current) {
      imageInput.current.click();
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" hidden />
      <button
        onClick={onClickhandler}
        className="flex items-center justify-center flex-col gap-2 w-[280px] h-[180px] border rounded-ten border-[#e2e2e4] bg-[#f7f7f8] text-label-dimmed"
      >
        <AdditionIcon color="#828285" />
        <span>이미지 불러오기</span>
      </button>
    </div>
  );
}
