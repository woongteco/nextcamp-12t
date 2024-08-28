"use client";

import Link from "next/link";

export default function FindNoData({ link }: { link: string }) {
  return (
    <>
      <p className="text-center">
        유효한 10분이 만료되어
        <br /> 다시 정보를 입력해 인증해 주세요.
      </p>
      <div className="w-full rounded-md py-2 text-white bg-main-600">
        <Link href={`/${link}`} className="block text-center">
          {link === "find"
            ? "이메일 찾기 페이지 이동"
            : "비밀번호 찾기 페이지 이동"}
        </Link>
      </div>
    </>
  );
}
