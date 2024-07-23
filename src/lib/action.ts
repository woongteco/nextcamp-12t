"use server";

import { signIn } from "@/auth";
import { hash } from "bcryptjs";

const emailValid = /^[\w.-]+@[\w-]+\.[a-zA-Z]{2,}$/;
const passwordValid = /^(?=.*[a-zA-Z])(?=.*[!@#*])(?=.*[0-9]).{12,}$/;
const nameValid = /^[가-힣]{2,4}$/;

export const handleValidate = (
  email: string,
  password: string,
  pwCheck: string,
  name: string,
  phone: string
) => {
  if (!emailValid.test(email)) {
    return { status: 400, message: "이메일 유형에 알맞게 입력해주세요." };
  }
  if (!passwordValid.test(password)) {
    return { status: 400, message: "조건에 맞는 비밀번호를 입력해주세요." };
  }
  if (!nameValid.test(name)) {
    return { status: 400, message: "조건에 맞는 이름을 입력해주세요." };
  }
  if (password !== pwCheck) {
    return { status: 400, message: "입력한 비밀번호와 일치하지 않습니다." };
  }
  if (phone.length !== 11) {
    return { status: 400, message: "휴대폰 번호 숫자 11자리를 입력해주세요." };
  }

  return null;
};

export async function handleHashPassword(password: string) {
  return await hash(password, 10);
}

export async function loginGoogle() {
  await signIn("google");
}

export async function loginKakao() {
  await signIn("kakao");
}

export async function loginGithub() {
  await signIn("github");
}
