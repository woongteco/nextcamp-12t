"use client";

import { Input } from "./UserInput";
import { ChangeEvent, FormEvent, useState } from "react";
import RegisterCheck from "./RegisterCheck";
import axios from "axios";
import { useRouter } from "next/navigation";
import handleAlert from "./ErrorAlert";

export default function RegisterForm() {
  const [phoneData, setPhoneData] = useState<string>("");
  const router = useRouter();

  async function register(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    const pwCheck = formData.get("pwCheck");
    const name = formData.get("name");
    const phone = formData.get("phone");

    try {
      const response = await axios.post("/api/auth/register", {
        email,
        password,
        pwCheck,
        name,
        phone,
      });
      handleAlert("success", response.data.message);
      router.replace("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        handleAlert("error", error.response?.data.message);
      }
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
          placeholder="01012345678 (- 제외 숫자만 가능)"
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
