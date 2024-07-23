"use server";

import { signIn } from "@/auth";
import { hash } from "bcryptjs";
import connectDB from "./db";
import { User } from "./schema";
import { redirect } from "next/navigation";

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
    throw new Error("이메일 유형에 알맞게 입력해주세요.");
  }
  if (!passwordValid.test(password)) {
    throw new Error("조건에 맞는 비밀번호를 입력해주세요.");
  }
  if (!nameValid.test(name)) {
    throw new Error("조건에 맞는 이름을 입력해주세요.");
  }
  if (password !== pwCheck) {
    throw new Error("입력한 비밀번호와 일치하지 않습니다.");
  }
  if (phone.length !== 11) {
    throw new Error("휴대폰 번호 숫자 11자리를 입력해주세요.");
  }
};

export const handleSignUpSignIn = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const pwCheck = formData.get("pwCheck") as string;
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;

  handleValidate(email, password, pwCheck, name, phone);

  await connectDB();

  const emailCheck = await User.findOne({ email });

  if (emailCheck) {
    throw new Error("이미 가입된 회원입니다.");
  }

  const hashedPassword = await hash(String(password), 10);
  const user = new User({
    name,
    email,
    password: hashedPassword,
    phone,
  });

  await user.save();

  await signIn("credentials", {
    redirect: false,
    email,
    password,
  });

  redirect("/");
};

export async function loginGoogle() {
  await signIn("google");
}

export async function loginKakao() {
  await signIn("kakao");
}

export async function loginGithub() {
  await signIn("github");
}
