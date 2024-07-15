"use client";

import Link from "next/link";
import { UserEmail, UserPassword } from "./UserInput";
import { login } from "@/lib/action";

export default function LoginForm() {
  // 서버 액션에서 로그인 후 redirect가 경로가 아닌 모달이라 세션을 확인하려면 새로고침이 필요함
  async function onLogin(formData: FormData) {
    const result = await login(formData);

    if (result) {
      window.location.reload();
    } else {
      alert("이메일 또는 비밀번호를 확인해주세요.");
    }
  }

  return (
    <>
      <form action={onLogin} className="flex flex-col w-full gap-5">
        <UserEmail />
        <UserPassword />
        <div className="w-full flex flex-col items-center gap-4">
          <button className="w-full rounded-md py-2 text-white bg-main-600">
            로그인
          </button>
          <Link
            href="/register"
            className="w-full text-center rounded-md py-2 bg-main-25"
          >
            회원가입
          </Link>
        </div>
      </form>
    </>
  );
}
