"use server";

import { hash } from "bcryptjs";
import connectDB from "../db";
import { User } from "../schema";
import { signIn } from "@/auth";

const emailValid = /^[\w.-]+@[\w-]+\.[a-zA-Z]{2,}$/;
const passwordValid = /^(?=.*[a-zA-Z])(?=.*[!@#*])(?=.*[0-9]).{12,}$/;
const nameValid = /^[가-힣]{2,4}$/;

export async function authAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const pwCheck = formData.get("pwCheck") as string;
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;

  if (!emailValid.test(email)) {
    return { state: false, message: "이메일 유형에 맞게 입력해주세요." };
  }
  if (!passwordValid.test(password)) {
    return { state: false, message: "비밀번호 유형에 맞게 입력해주세요." };
  }
  if (!nameValid.test(name)) {
    return { state: false, message: "이름 유형에 맞게 입력해주세요." };
  }
  if (password !== pwCheck) {
    return { state: false, message: "입력한 비밀번호와 일치하지 않습니다." };
  }
  if (phone.length !== 11) {
    return { state: false, message: "휴대폰 번호 11자리를 입력해주세요." };
  }

  await connectDB();

  const emailCheck = await User.findOne({ email });

  if (emailCheck) {
    return { state: false, message: "이미 가입된 회원입니다." };
  }

  try {
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
    return {
      state: true,
      message: "회원가입 완료되어 로그인 되었습니다.",
    };
  } catch (error) {
    console.log("auth error" + error);
    return { state: false, message: "회원가입에 실패했습니다." };
  }
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

/**
 * 회원탈퇴: email 값을 전달받아 사용자 데이터 삭제.
 * 로그인한 사용자 중 이메일로 가입한 사용자만 회원탈퇴 기능 사용 가능
 */
export async function unregisterAction(email: string) {
  await connectDB();

  const userCheck = await User.findOne({ email });
  console.log({ userCheck });
  if (!userCheck) {
    return { state: false, message: "잘못된 email입니다." };
  }

  try {
    await User.findOneAndDelete({ email });
    return { state: true, message: "데이터가 삭제되었습니다." };
  } catch (error) {
    console.log("auth error" + error);
    return { state: false, message: "데이터 삭제에 실패했습니다." };
  }
}
