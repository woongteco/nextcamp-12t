import Image from "next/image";
import { PasswordHide, PasswordCheck } from "@public/icons";
import { UserEmail, UserPassword } from "./UserInput";
import { register } from "@/lib/action";
import { useState } from "react";
import RegisterCheck from "./RegisterCheck";

export default function RegisterForm({ roles }: { roles: string[] }) {
  return (
    <>
      <form action={register} className="flex flex-col w-full gap-5 mb-5">
        <UserEmail />
        <div className="w-full flex flex-col gap-2">
          <UserPassword />
          <div className="self-start text-xs text-gray-300">
            {roles.map((role, index) => (
              <p key={index} className="flex items-center gap-1">
                <Image src={PasswordCheck} alt="비밀번호 유효성 체크" />
                {role}
              </p>
            ))}
          </div>
        </div>
        <UserPassword id={"pwCheck"} title={"비밀번호 확인"} />
        <div className="inputWrap">
          <label htmlFor="phone">휴대폰 번호</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="010-1234-5678"
            className="w-full border rounded-md border-gray-300 p-3"
            required
          />
        </div>
        <RegisterCheck />
        <button className="w-full rounded-md py-2 text-white bg-main-600">
          가입하기
        </button>
      </form>
    </>
  );
}
