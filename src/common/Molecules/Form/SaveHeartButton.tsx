"use client";

import { DetailFullHeartIcon, DetailHeartIcon } from "@public/icons";
import Image from "next/image";
import { useState } from "react";

export default function SaveHeartButton({ count }: { count: number }) {
  const [saveHeart, setSaveHeart] = useState<boolean>(false);
  // const heartCount =

  // 기존 좋아요 값을 가져온다.
  // 기존 좋아요 값에서 하트를 클릭했을 때, 카운트가 1증가 : 1감소
  // 하트의 컬러변경은 saveHeart의 true, false로 값을 비교

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
        {saveHeart ? count++ : count--}
      </span>
    </>
  );
}
