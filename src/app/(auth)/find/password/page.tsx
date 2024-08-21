"use client";

import AuthWrap from "../../_components/AuthWrap";
import Image from "next/image";
import { Logo } from "@public/icons";
import { Input } from "../../_components/UserInput";
import useFindEmail from "@/store/findEmailStore";
import { updatePassword } from "@/lib/actions/authAction";
import { FormEvent } from "react";
import handleAlert from "@/common/Molecules/handleAlert";
import { useRouter } from "next/navigation";
import FindNoData from "../../_components/FindNoData";

export default function page() {
  const { userEmail } = useFindEmail();
  const router = useRouter();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    if (!userEmail) {
      handleAlert("error", "비밀번호를 변경할 유저의 이메일이 없습니다.");
      return;
    }

    try {
      const result = await updatePassword(userEmail, formData);

      if (result?.state) {
        router.replace("/login");
        handleAlert("success", result.message);
      } else {
        handleAlert("error", result.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <AuthWrap>
        <Image src={Logo} alt="logo" />
        {userEmail ? (
          <>
            <p>새로운 비밀번호로 변경해주세요.</p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-full gap-6"
            >
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
              <button className="w-full rounded-md py-2 text-white bg-main-600 text-center">
                변경 완료 후 로그인 페이지 이동
              </button>
            </form>
          </>
        ) : (
          <FindNoData link="pw-reset" />
        )}
      </AuthWrap>
    </>
  );
}
