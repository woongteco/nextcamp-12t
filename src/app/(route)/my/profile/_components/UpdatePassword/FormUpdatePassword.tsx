"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";
import { PasswordHide, PasswordShow } from "@public/icons";
import ProfileInputArea from "../ProfileInputArea";
import Button from "@/common/Atoms/Form/Button";
import Input from "@/common/Molecules/Form/Input";
import handleAlert from "@/common/Molecules/handleAlert";

type TNewPw = {
  currentPassword: string;
  newPassword: string;
  newPasswordCheck: string;
};

const newPwInit = {
  currentPassword: "",
  newPassword: "",
  newPasswordCheck: "",
};

export default function FormUpdatePassword() {
  const [pwShow, setPwShow] = useState(false);
  const [newPw, setNewPw] = useState<TNewPw>(newPwInit);
  function onChangeNewPw(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget;
    setNewPw((prev) => ({ ...prev, [name]: value }));
  }
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (newPw.newPassword.length < 12 && newPw.newPasswordCheck.length < 12) {
      handleAlert("error", "비밀번호가 너무 짧습니다.");
      return;
    }

    const formData = new FormData(e.currentTarget);
    handleAlert("error", "비밀번호를 변경할 수 없습니다.");
  }
  return (
    <form onSubmit={handleSubmit} className="text-body-400">
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
          name="currentPassword"
          type={pwShow ? "text" : "password"}
          title="현재 비밀번호"
          placeholder="현재 비밀번호를 입력하세요"
          value={newPw.currentPassword}
          onChange={onChangeNewPw}
        />
        <div className="w-full flex flex-col gap-2">
          <Input.Password
            id="newPassword"
            name="newPassword"
            type={pwShow ? "text" : "password"}
            title="비밀번호"
            placeholder={pwShow ? "변경할 비밀번호를 입력하세요." : "********"}
            value={newPw.newPassword}
            onChange={onChangeNewPw}
          />
          <Input.Password
            id="newPasswordCheck"
            name="newPasswordCheck"
            type={pwShow ? "text" : "password"}
            title="비밀번호 확인"
            placeholder={
              pwShow ? "변경할 비밀번호를 한 번 더 입력하세요." : "********"
            }
            value={newPw.newPasswordCheck}
            onChange={onChangeNewPw}
          />
          <p className="text-label-400 text-gray-400">
            ※ 영문 / 숫자 / 특수문자(!, @, #, *)중 1가지 포함 12자 이상
          </p>
        </div>
        <Button
          variation="outline"
          className="self-start"
          disabled={
            newPw.currentPassword === "" ||
            newPw.newPassword !== newPw.newPasswordCheck
          }
        >
          비밀번호 변경
        </Button>
      </ProfileInputArea>
    </form>
  );
}
