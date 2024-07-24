"use server";

import { getSession, signIn } from "@/auth";
import { hash } from "bcryptjs";
import connectDB from "./db";
import { Post, Profile, User } from "./schema";
import { redirect } from "next/navigation";
import mongoose from "mongoose";

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

// 회원가입
export async function authAction(formData: FormData) {
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
}

// 프로필 등록
export async function profileAction(session: any, formData: FormData) {
  const userId = session.user.id;
  const providerAccountId = session.account.providerAccountId;
  const position_tag = formData.get("positionTag") as string;
  const introduce = formData.get("introduce") as string;
  const my_category = formData.get("interest") as string;
  let profile;

  console.log(userId);

  if (!userId) {
    throw new Error("유효한 id가 필요합니다.");
  }

  if (!position_tag || !introduce || !my_category) {
    throw new Error("포지션 태그, 소개, 카테고리 모두 입력해주세요.");
  }

  await connectDB();

  if (session.account.provider === "credentials") {
    const profileCheck = await Profile.findOne({ userId });
    if (profileCheck) {
      throw new Error("작성된 프로필을 수정해주세요.");
    }
    profile = new Profile({
      userId,
      position_tag,
      introduce,
      my_category,
    });
  } else {
    const profileCheck = await Profile.findOne({ providerAccountId });
    if (profileCheck) {
      throw new Error("작성된 프로필을 수정해주세요.");
    }
    profile = new Profile({
      providerAccountId,
      position_tag,
      introduce,
      my_category,
    });
  }

  const dbSaveProfile = await profile.save();

  console.log("프로필 저장 완료" + dbSaveProfile);
}

// 커뮤니티 등록
export async function communityAction(formData: FormData) {
  const categoryValue = formData.get("categoryValue") as string;
  const categoryLabel = formData.get("categoryLabel") as string;
  const isRecruiting = formData.get("isRecruiting");
  const title = formData.get("title") as string;
  const body = formData.get("body") as string;
  const linkedStudyId = formData.get("linkedStudyId") as string;
  const userId = formData.get("userId") as string;
  const name = formData.get("name") as string;
  const role = formData.get("role") as string;
  const position = formData.get("position") as string;
  const profileUrl = formData.get("profileUrl") as string;

  if (!categoryLabel || !title || !body) {
    throw new Error("제목 또는 내용을 입력해주세요.");
  }

  await connectDB();

  const post = new Post({
    category: {
      value: categoryValue,
      label: categoryLabel,
      isRecruiting,
    },
    contents: {
      title,
      body,
      linkedStudyId,
    },
    writer: {
      userId,
      name,
      role,
      position,
      profileUrl,
    },
    createdAt: new Date(),
    view: 0,
    like: 0,
  });

  const dbSavePost = await post.save();

  console.log("커뮤니티 작성 완료" + dbSavePost);
}

// 댓글 작성
export async function commentAction(postId: string, formData: FormData) {
  const content = formData.get("content") as string;
  const userId = formData.get("userId") as string;
  const name = formData.get("name") as string;
  const role = formData.get("role") as string;
  const position = formData.get("position") as string;
  const profileUrl = formData.get("profileUrl") as string;

  if (!content) {
    throw new Error("댓글 내용을 입력해주세요.");
  }

  await connectDB();

  const comment = {
    content,
    writer: {
      userId,
      name,
      role,
      position,
      profileUrl,
    },
    createdAt: new Date(),
    reply: [],
  };

  const currentPost = await Post.findOne({ postId });

  if (!currentPost) {
    throw new Error("해당 포스트를 찾을 수 없습니다.");
  }

  currentPost.comments.push(comment);
  const dbSaveComment = await currentPost.save();

  console.log("댓글 추가 완료" + dbSaveComment);
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
