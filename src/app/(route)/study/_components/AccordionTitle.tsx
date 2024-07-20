"use client";

import { ArrowIcon } from "@public/icons";
import Image from "next/image";

export default function AccordionTitle({ title }: { title: string }) {
  return (
    <button
      type="button"
      aria-label="button"
      onClick={(prev) => !prev}
      className="flex items-center gap-4 py-6 w-full"
    >
      <Image src={ArrowIcon} alt="화살표" />
      <span className="text-label-normal font-semibold text-2xl">{title}</span>
    </button>
  );
}
