"use client";

import { useRouter } from "next/navigation";

export default function ReturnToListButton() {
  const router = useRouter();
  function returnBack() {
    router.back();
  }
  return (
    <button
      onClick={returnBack}
      className="flex flex-row gap-2 mb-8 text-body-600 hover:text-main-600 [&:hover_path]:stroke-main-600"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 19L8 12L15 5"
          stroke="#202020"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>목록으로 돌아가기</span>
    </button>
  );
}
