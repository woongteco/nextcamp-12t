"use client";

import Image from "next/image";
import AccordionList from "./AccordionList";
import AccordionTitle from "./AccordionTitle";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { ArrowIcon } from "@public/icons";
import { useState } from "react";

export type TAccordionList = { listId: number; content: string };

export default function AccordionComponent({
  title,
  lists,
}: {
  title: string;
  lists: TAccordionList[];
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
            console.log("isOpen", isOpen);
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
        {/* <AccordionTitle title={title} /> */}
        <AccordionList lists={lists} isOpen={isOpen} />
      </div>
    </>
  );
}
