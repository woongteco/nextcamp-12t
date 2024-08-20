"use client";

import Image from "next/image";
import AccordionList from "./AccordionList";
import { ArrowIcon } from "@public/icons";
import { useState } from "react";

export default function AccordionComponent({
  title,
  lists,
}: {
  title: string;
  lists: string[];
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <div className="border-b">
        <button
          type="button"
          aria-label="button"
          onClick={() => {
            setIsOpen((isOpen) => !isOpen);
          }}
          className="flex items-center gap-4 py-6 w-full"
        >
          <Image
            src={ArrowIcon}
            alt="화살표"
            className={`${
              !isOpen ? "rotate-0 transition-all" : "rotate-180 transition-all"
            }`}
          />
          <span className="text-label-normal font-semibold text-2xl">
            {title}
          </span>
        </button>
        <AccordionList lists={lists} isOpen={isOpen} />
      </div>
    </>
  );
}
