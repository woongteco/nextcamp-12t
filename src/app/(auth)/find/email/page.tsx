"use client";

import useFindEmail from "@/store/useFindEmail";
import AuthWrap from "../../_components/AuthWrap";
import Image from "next/image";
import { Logo } from "@public/icons";
import Link from "next/link";

export default function page() {
  const { userEmail } = useFindEmail();

  return (
    <>
      <AuthWrap>
        <Image src={Logo} alt="logo" />
        <div className="flex flex-col items-center justify-center gap-6">
          <p>해당 정보로 가입된 이메일 입니다.</p>
          <span className="text-lg font-semibold">{userEmail}</span>
          <div className="w-full rounded-md py-2 text-white bg-main-600">
            <Link href={"/login"} className="block text-center">
              로그인하러 가기
            </Link>
          </div>
        </div>
      </AuthWrap>
    </>
  );
}
