"use client";

import useQueryString from "@/hooks/useQueryString";
import { FormEvent, useState } from "react";

export default function SearchInput({ origin = "study" }: { origin?: string }) {
  const onChangeQuery = useQueryString({
    paramsKey: "q",
    queryInclude: origin === "study" ? "search" : origin,
  });

  const [result, setResult] = useState<string>();
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onChangeQuery(e.currentTarget.search.value);
    setResult(e.currentTarget.value);
  };

  return (
    <form className="relative" onSubmit={onSubmit}>
      <form className="relative" onSubmit={onSubmit}>
        <input
          type="search"
          name="search"
          value={result}
          placeholder="검색어를 입력하세요"
          className="w-[380px] py-2 pr-9 pl-6 border border-line-normal rounded-lg placeholder:text-label-assist placeholder:text-label-nomral"
        />
        <span className="absolute right-2 top-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </form>
    </form>
  );
}
