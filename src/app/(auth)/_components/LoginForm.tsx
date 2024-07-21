"use client";

import { FormEvent } from "react";
import Link from "next/link";
import { Input } from "./UserInput";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import handleAlert from "./ErrorAlert";

export default function LoginForm() {
  const router = useRouter();

  async function login(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
      handleAlert("error", "입력한 정보를 다시 확인해 주세요.");
      return;
    }

    const login = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (login?.error) {
      handleAlert("error", "이메일 또는 비밀번호를 다시 확인해주세요.");
      return;
    }

    router.refresh();
  }

  return (
    <>
      <form onSubmit={login} className="flex flex-col w-full gap-5">
        <Input
          id="email"
          type="email"
          title="이메일"
          placeholder="example@chemeet.com"
        />
        <Input
          id="password"
          type="password"
          title="비밀번호"
          placeholder="********"
        />
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
