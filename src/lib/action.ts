"use server";

import { signIn } from "@/auth";
import { hash } from "bcryptjs";
import connectDB from "./db";
import { Post, Profile, Study, User } from "./schema";
import { redirect } from "next/navigation";
const { v4: uuidv4 } = require("uuid");

const emailValid = /^[\w.-]+@[\w-]+\.[a-zA-Z]{2,}$/;
const passwordValid = /^(?=.*[a-zA-Z])(?=.*[!@#*])(?=.*[0-9]).{12,}$/;
const nameValid = /^[가-힣]{2,4}$/;

// 회원가입
export async function authAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const pwCheck = formData.get("pwCheck") as string;
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;

  if (!emailValid.test(email)) {
    return "이메일 유형에 알맞게 입력해주세요.";
  }
  if (!passwordValid.test(password)) {
    return "조건에 맞는 비밀번호를 입력해주세요.";
  }
  if (!nameValid.test(name)) {
    return "조건에 맞는 이름을 입력해주세요.";
  }
  if (password !== pwCheck) {
    return "입력한 비밀번호와 일치하지 않습니다.";
  }
  if (phone.length !== 11) {
    return "휴대폰 번호 숫자 11자리를 입력해주세요.";
  }

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

// 마이페이지

// 프로필 등록
export async function profileAction(id: string, formData: FormData) {
  const userId = id;
  const position_tag = "ㅎㅎ";
  const introduce = "ㅎㅎ";
  const my_category = "ㅎㅎㄴㅇ";
  let profile;

  if (!userId) {
    throw new Error("유효한 id가 필요합니다.");
  }

  console.log("프로필 쪽 고유아이디" + userId);

  if (!position_tag || !introduce || !my_category) {
    throw new Error("포지션 태그, 소개, 카테고리 모두 입력해주세요.");
  }

  await connectDB();

  const profileCheck = await Profile.findOne({ userId });
  // 일단 계속 등록되니 막아둠
  if (profileCheck) {
    throw new Error("작성된 프로필을 수정해주세요.");
  }

  profile = new Profile({
    userId,
    position_tag,
    introduce,
    my_category,
  });

  const dbSaveProfile = await profile.save();

  console.log("프로필 저장 완료" + dbSaveProfile);
}

// 커뮤니티 등록
export async function communityAction(formData: FormData) {
  const postId = uuidv4();
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
    throw new Error("커뮤니티 등록하려면 필수 정보를 입력해주세요.");
  }

  await connectDB();

  const post = new Post({
    postId,
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
  const commentId = uuidv4();
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
    commentId,
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

  console.log("댓글 추가 완료 post 업데이트" + dbSaveComment);
}

// 답글 작성
export async function replyAction(
  postId: string,
  commentId: string,
  formData: FormData
) {
  const replyId = uuidv4();
  const content = formData.get("content") as string;
  const userId = formData.get("userId") as string;
  const name = formData.get("name") as string;
  const role = formData.get("role") as string;
  const position = formData.get("position") as string;
  const profileUrl = formData.get("profileUrl") as string;

  if (!content) {
    throw new Error("답글 내용을 입력해주세요.");
  }

  await connectDB();

  const reply = {
    replyId,
    content,
    writer: {
      userId,
      name,
      role,
      position,
      profileUrl,
    },
    createdAt: new Date(),
  };

  const currentPost = await Post.findOne({ postId });
  const comment = currentPost.comments.id(commentId);

  if (!currentPost) {
    throw new Error("해당 포스트를 찾을 수 없습니다.");
  }

  if (!comment) {
    throw new Error("해당 댓글을 찾을 수 없습니다.");
  }

  comment.reply.push(reply);
  const dbSaveReply = await currentPost.save();

  console.log("답글 추가 완료 post 업데이트" + dbSaveReply);
}

// 스터디 및 스터디 리스트
export async function studyAction(formData: FormData) {
  const studyId = uuidv4();
  const thumbnailUrl = formData.get("thumbnailUrl") as string;
  const title = formData.get("title") as string;
  const jobCategory = formData.get("jobCategory") as string;
  const targetCategory = formData.get("targetCategory") as string;
  const expense = Number(formData.get("expense"));
  const recruitmentPeople = Number(formData.get("recruitmentPeople"));
  const recruitmentPeriod = formData.get("recruitmentPeriod");
  const studyPeriod = formData.get("studyPeriod") as string;
  const location = formData.get("location") as string;
  const place = formData.get("place") as string;
  const content = formData.get("content") as string;
  const userId = formData.get("userId") as string;
  const name = formData.get("name") as string;
  const role = formData.get("role") as string;
  const position = formData.get("position") as string;
  const profileUrl = formData.get("profileUrl") as string;
  const rule = formData.get("rule");
  const curriculum = formData.get("curriculum");
  const heartCount = Number(formData.get("heartCount"));

  if (!title) {
    throw new Error("스터디 제목을 입력해주세요.");
  }
  if (!jobCategory) {
    throw new Error("직무 카테고리를 선택해주세요.");
  }
  if (!targetCategory) {
    throw new Error("목표 카테고리를 선택해주세요.");
  }
  if (!expense) {
    throw new Error("참가비용을 입력해주세요.");
  }
  if (!recruitmentPeople) {
    throw new Error("스터디인원을 지정해주세요.");
  }
  if (!recruitmentPeriod) {
    throw new Error("모집기간을 선택해주세요.");
  }
  if (!studyPeriod) {
    throw new Error("스터디기간을 선택해주세요.");
  }
  if (!location) {
    throw new Error("온오프여부를 선택해주세요.");
  }
  if (!content) {
    throw new Error("내용을 입력해주세요.");
  }

  await connectDB();

  const study = new Study({
    studyId,
    thumbnailInfo: {
      thumbnailUrl,
      title,
      jobCategory,
      targetCategory,
      recruitmentPeople,
      recruitmentPeriod,
      studyPeriod,
      location,
      expense,
      place,
    },
    contents: {
      content,
      rule,
      curriculum,
    },
    writer: {
      userId,
      name,
      role,
      position,
      profileUrl,
    },
    heartCount,
    createdAt: new Date(),
  });

  const dbSaveStudy = await study.save();
  console.log("스터디 개설 완료" + dbSaveStudy);
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
