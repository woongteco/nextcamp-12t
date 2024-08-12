"use client";

import { FormEvent, useState } from "react";
import { Input } from "./UserInput";
import { findEmail } from "@/lib/actions/authAction";
import handleAlert from "@/common/Molecules/handleAlert";
import LoadingContainer from "@/common/Layout/LoadingContainer";
import useFindEmail from "@/store/useFindEmail";

export default function FindAuthForm({ title }: { title?: string }) {
  const [sendEmail, setSendEmail] = useState(false);
  const [loading, setLoading] = useState(false);
  const { userEmail, setUserEmail } = useFindEmail();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      const result = await findEmail(formData);

      if (result.state) {
        setSendEmail(true);
        console.log(result.data);
        setUserEmail(result.data);
        handleAlert("success", result.message);
      } else {
        handleAlert("error", result.message);
      }
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  }

  console.log(userEmail);

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
        {title === "이메일" ? (
          <>
            <Input
              id="name"
              type="text"
              title="이름"
              placeholder="가입한 계정 이름"
            />
            <Input
              id="phone"
              type="tel"
              title="전화번호"
              placeholder="가입한 휴대폰 번호 입력 (- 제외)"
            />
          </>
        ) : (
          <Input
            id="email"
            type="email"
            title="가입한 이메일"
            placeholder="가입한 이메일을 입력하세요."
          />
        )}
        <div className="flex items-center justify-center gap-3">
          <Input
            id="email"
            type="email"
            title="이메일"
            placeholder="example@chemeet.com"
          />
          {loading ? (
            <div className="w-[7.5rem] px-2 mt-7">
              <LoadingContainer fullScreen={false} />
            </div>
          ) : (
            <button className="w-[7.5rem] border border-main-600 text-main-600 rounded-lg py-3 px-2 text-sm font-semibold mt-7 hover:bg-main-600 hover:text-white">
              {sendEmail ? "인증 재요청" : "인증 요청"}
            </button>
          )}
        </div>
      </form>
    </>
  );
}
