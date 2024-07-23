"use client";
import React from "react";
import { TProps } from "@/types/component/props";
import { ChevronRightIcon } from "@/common/Atoms/Image/Icon";

export default function SidebarNavArea({ children }: TProps) {
  return (
    <>
      <ul
        data-name="sidebar-layout__nav_desktop"
        className="hidden lg:flex flex-col gap-1"
      >
        {children}
      </ul>
      <details className="block lg:hidden mb-8 [&[open]_.chevron]:-rotate-90">
        <summary className="lg:hidden">
          <div className="w-full flex items-center justify-between rounded-[20px] text-H4 px-6 py-[26px] mb-1 text-label-alt bg-label-alt/20 border">
            <span>메뉴</span>
            <span className="chevron rotate-90">
              <ChevronRightIcon />
            </span>
          </div>
        </summary>
        <ul
          data-name="sidebar-layout__nav_mobile"
          className="flex flex-col gap-1"
        >
          {children}
        </ul>
      </details>
    </>
  );
}
