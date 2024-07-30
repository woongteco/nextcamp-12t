"use client";

import { Input } from "./UserInput";
import { ChangeEvent, FormEvent, useState } from "react";
import RegisterCheck from "./RegisterCheck";
import handleAlert from "./ErrorAlert";
import { authAction } from "@/lib/actions/authAction";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [phoneData, setPhoneData] = useState<string>("");
  const router = useRouter();

  async function register(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      const result = await authAction(formData);

      if (result.state) {
        handleAlert("success", result.message);
        router.replace("/");
      } else {
        handleAlert("error", result.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handlePhoneInput(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setPhoneData(value);
  }

  return (
    <>
      <form
        onSubmit={register}
        className="flex flex-col w-full gap-4 xxl:gap-6 duration-300"
      >
        <Input
          id="email"
          type="email"
          title="이메일"
          placeholder="example@chemeet.com"
        />
        <div className="w-full flex flex-col gap-2">
          <Input
            id="password"
            type="password"
            title="비밀번호"
            placeholder="********"
          />
          <p className="text-xs text-gray-400">
            ※ 영문 / 숫자 / 특수문자(!, @, #, *)중 1가지 포함 12자 이상
          </p>
        </div>
        <Input
          id="pwCheck"
          type="password"
          title="비밀번호 확인"
          placeholder="********"
        />
        <Input id="name" type="text" title="이름" placeholder="한글 2~4자" />
        <Input
          id="phone"
          type="tel"
          title="휴대폰 번호"
          placeholder="휴대폰 번호 입력 (- 제외)"
          onChange={handlePhoneInput}
          value={phoneData}
        />
        <RegisterCheck />
        <button className="w-full rounded-md py-2 text-white bg-main-600">
          가입하기
        </button>
      </form>
    </>
  );
}
