"use client";

import handleAlert from "@/common/Molecules/handleAlert";
import { useRouter } from "next/navigation";

export default function ApplyButton({ resultDay }: { resultDay: number }) {
  const router = useRouter();
  const onClickHandler = () => {
    handleAlert("success", "참여가 완료되었습니다.");
    router.back();
  };

  return (
    <button
      onClick={onClickHandler}
      disabled={resultDay >= 0 ? false : true}
      className={`px-2 w-full max-w-[12.5rem] h-16 border rounded-ten bg-main-700 font-semibold text-base text-white ${
        resultDay <= 0 && "disabled:opacity-75 disabled:cursor-no-drop"
      }`}
    >
      스터디 참여 신청하기
    </button>
  );
}
