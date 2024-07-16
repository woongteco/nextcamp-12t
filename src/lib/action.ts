"use server";

import { signIn } from "@/auth";
import connectDB from "./db";
import { User } from "./schema";
import { hash } from "bcryptjs";
import { redirect } from "next/navigation";

export async function register(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const passwordCheck = formData.get("pwCheck");
  const phone = formData.get("phone");

  if (!email || !password || !passwordCheck || !phone) {
    alert("입력한 정보를 다시 확인해 주세요.");
  }

  // 유효성 부분 클라이언트에서 처리 필요
  const emailRegex = /^[\w.-]+@[\w-]+\.[a-zA-Z]{2,}$/;
  const passwordValid = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{12,}$/;

  if (!emailRegex.test(email)) {
    throw new Error("유효한 이메일을 입력해 주세요.");
  }

  if (!passwordValid.test(password)) {
    throw new Error("비밀번호는 문자, 숫자, 특수기호 포함 12자 이상");
  }

  if (password !== passwordCheck) {
    throw new Error("비밀번호가 일치하지 않습니다.");
  }

  connectDB();

  const userCheck = await User.findOne({ email });
  if (userCheck) {
    alert("이미 가입된 회원입니다.");
  }

  const hashPassword = await hash(String(password), 10);
  const user = new User({
    email,
    password: hashPassword,
    phone,
  });

  try {
    const dbSave = await user.save();
    console.log("회원가입 정보 저장 완료" + dbSave);
  } catch (error) {
    console.log(error);
  }

  redirect("/");
}

export const loginGoogle = async () => {
  await signIn("google");
};

export const loginKakao = async () => {
  await signIn("kakao");
};
