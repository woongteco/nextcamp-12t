"use client";

import findEmailStore from "@/store/findEmailStore";
import Image from "next/image";
import { Logo } from "@public/icons";
import Link from "next/link";
import FindNoData from "../../_components/FindNoData";

export default function FindEmail() {
  const { userEmail } = findEmailStore();

  return (
    <>
      <Image src={Logo} alt="logo" />
      <div className="flex flex-col items-center justify-center gap-6">
        {userEmail ? (
          <>
            <p>해당 정보로 가입된 이메일 입니다.</p>
            <span className="text-lg font-semibold">{userEmail}</span>
            <div className="w-full rounded-md py-2 text-white bg-main-600">
              <Link href={"/login"} className="block text-center">
                로그인페이지 이동
              </Link>
            </div>
          </>
        ) : (
          <FindNoData link="find" />
        )}
      </div>
    </>
  );
}
