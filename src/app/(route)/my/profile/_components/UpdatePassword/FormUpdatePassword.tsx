"use client";
import { useState } from "react";
import Image from "next/image";
import ProfileInputArea from "../ProfileInputArea";
import Button from "@/common/Atoms/Form/Button";
import Input from "@/common/Molecules/Form/Input";
import { PasswordHide, PasswordShow } from "@public/icons";

export default function FormUpdatePassword() {
  const [pwShow, setPwShow] = useState(false);
  return (
    <form className="text-body-400">
      <ProfileInputArea>
        <button
          type="button"
          className="p-1 mx-2 hover:bg-slate-50 hover:rounded-md self-end flex gap-2 items-center"
          onClick={() => setPwShow(!pwShow)}
        >
          <span className="text-label-dimmed">비밀번호 확인</span>
          <Image
            src={pwShow ? PasswordShow : PasswordHide}
            alt={pwShow ? "비밀번호 숨기기" : "비밀번호 보기"}
          />
        </button>
        <Input.Password
          id="currentPassword"
          type={pwShow ? "text" : "password"}
          title="현재 비밀번호"
          placeholder="현재 비밀번호를 입력하세요"
        />
        <div className="w-full flex flex-col gap-2">
          <Input.Password
            id="newPassword"
            type={pwShow ? "text" : "password"}
            title="비밀번호"
            placeholder="********"
          />
          <p className="text-label-400 text-gray-400">
            ※ 영문 / 숫자 / 특수문자(!, @, #, *)중 1가지 포함 12자 이상
          </p>
        </div>
        <Input.Password
          id="newPasswordCheck"
          type={pwShow ? "text" : "password"}
          title="비밀번호 확인"
          placeholder="********"
        />
        <Button
          variation="outline"
          colors={{ bg: "bg-main-600", text: "text-main-600" }}
          className="self-start"
          disabled
        >
          비밀번호 변경
        </Button>
      </ProfileInputArea>
    </form>
  );
}
