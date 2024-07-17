"use client";

import { FormEvent } from "react";
import Link from "next/link";
import { UserEmail, UserPassword } from "./UserInput";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  async function login(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
      alert("입력한 정보를 다시 확인해 주세요.");
    }
    try {
      await signIn("credentials", {
        callbackUrl: "/",
        email,
        password,
      });
      alert("로그인 완료");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form onSubmit={login} className="flex flex-col w-full gap-5">
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
