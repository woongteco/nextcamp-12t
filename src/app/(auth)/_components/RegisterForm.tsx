"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "./UserInput";
import RegisterCheck from "./RegisterCheck";
import handleAlert from "@/common/Molecules/handleAlert";
import { register } from "@/lib/actions/authAction";
import { formatPhoneNumber } from "@/utils/formatPhoneNumber";

export default function RegisterForm() {
  const router = useRouter();
  const [phoneData, setPhoneData] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      const result = await register(formData);

      if (result.state) {
        router.replace("/set-category");
      } else {
        handleAlert("error", result.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handlePhoneInput(e: ChangeEvent<HTMLInputElement>) {
    const formatData = formatPhoneNumber(e.target.value);
    setPhoneData(formatData);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
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
          다음 단계로
        </button>
      </form>
    </>
  );
}
