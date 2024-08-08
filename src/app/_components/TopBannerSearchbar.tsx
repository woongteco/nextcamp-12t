"use client";
import Button from "@/common/Atoms/Form/Button";
import Input from "@/common/Molecules/Form/Input";
import handleAlert from "@/common/Molecules/handleAlert";
import { CATEGORIES_GROUPS } from "@/constants/categories/job_category";
import { GOALS } from "@/constants/categories/study_goal";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function TopBannerSearchbar() {
  const router = useRouter();
  function search(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const newSearchParams = new URLSearchParams();
    for (const [key, value] of formData) {
      console.log({ key, value });
      if (value !== "") {
        newSearchParams.set(key, value as string);
      }
    }

    const paramsString = newSearchParams.toString();
    if (!paramsString) {
      handleAlert("error", "검색 조건을 하나 이상 입력해주세요.");
      return;
    }
    router.push(`/study/search?${paramsString}`);
  }
  return (
    <form onSubmit={search}>
      <div className="search-bar w-full lg:w-[866px] lg:h-[68px] lg:shadow-normal bg-white lg:rounded-full border border-line-input lg:border-line-alt flex flex-row flex-wrap lg:flex-nowrap gap-5 items-center justify-between px-6 py-3">
        <Input.Select
          name="job_c"
          placeholder="직무 선택"
          unstyled
          options={CATEGORIES_GROUPS}
          className="w-[160px]"
        />
        <div className="h-4 w-0 border-l border-l-line-input"></div>
        <Input.Select
          name="c"
          placeholder="목표 선택"
          unstyled
          options={GOALS}
          className="w-[140px]"
        />
        <div className="h-4 w-0 border-l border-l-line-input hidden md:block"></div>
        <div className="flex flex-nowrap gap-5">
          <Input.Text
            name="q"
            placeholder="검색어를 입력하세요"
            className="border-none w-full md:w-[400px] px-2 py-4 rounded-ten focus-visible:outline-1 focus-visible:outline-main-400"
          />
          <Button.Icon type="submit" size={24}>
            <SearchIconMain />
          </Button.Icon>
        </div>
      </div>
    </form>
  );
}

function SearchIconMain() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z"
        stroke="#2A7FFE"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
