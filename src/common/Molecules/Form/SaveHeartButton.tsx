"use client";

import { DetailFullHeartIcon, DetailHeartIcon } from "@public/icons";
import Image from "next/image";
import { useState } from "react";

export default function SaveHeartButton({
  heartCount,
}: {
  heartCount: number;
}) {
  const [saveHeart, setSaveHeart] = useState<boolean>(false);
  console.log("saveHeart", saveHeart);

  return (
    <>
      <button className="w-9 h-9">
        <Image
          width={36}
          height={36}
          src={saveHeart ? DetailFullHeartIcon : DetailHeartIcon}
          onClick={() => setSaveHeart((saveHeart) => !saveHeart)}
          alt="좋아요 버튼"
        />
      </button>
      <span className="text-label-neutral font-semibold">
        {saveHeart ? heartCount++ : heartCount - 1}
      </span>
    </>
  );
}
