"use server";

import { signIn } from "@/auth";
import { hash } from "bcryptjs";

export async function hashPassword(password: string) {
  return await hash(password, 10);
}

export async function loginGoogle() {
  await signIn("google");
}

export async function loginKakao() {
  await signIn("kakao");
}
