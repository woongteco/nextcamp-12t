"use server";

import { hash } from "bcryptjs";
import connectDB from "../db";
import { User } from "../schema";
import { signIn } from "@/auth";
import { transporter } from "@/utils/mailer";

const emailValid = /^[\w.-]+@[\w-]+\.[a-zA-Z]{2,}$/;
const passwordValid = /^(?=.*[a-zA-Z])(?=.*[!@#*])(?=.*[0-9]).{12,}$/;
const nameValid = /^[가-힣]{2,4}$/;

export async function register(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const pwCheck = formData.get("pwCheck") as string;
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const hashedPassword = await hash(String(password), 10);

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

    return { state: true };
  } catch (error) {
    console.log("auth error" + error);
    return { state: false, message: "회원가입에 실패했습니다." };
  }
}

export async function login(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    return { state: false, message: "입력한 정보를 다시 확인해주세요." };
  }

  try {
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    // 알림 수정 필요
    if (result?.error) {
      return {
        state: false,
        message: result.error || "아이디와 비밀번호를 확인해주세요.",
      };
    } else {
      return { state: true, message: "로그인 되었습니다." };
    }
  } catch (error) {
    console.log("login error" + error);
    return {
      state: false,
      message: "로그인중 문제가 발생하여 다시 시도해주세요.",
    };
  }
}

export async function findEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const email = formData.get("email") as string;

  if (!email || !phone || !name) {
    return {
      state: false,
      message: "가입한 정보와 인증할 메일을 입력해주세요.",
    };
  }

  await connectDB();

  const user = await User.findOne({ name, phone });

  if (!user) {
    return { state: false, message: "해당 유저가 없습니다." };
  }

  try {
    const option = {
      from: `"CHEMEET" <${process.env.NEXT_APP_EMAIL}>`,
      to: email,
      subject: "CHEMEET 인증코드",
      html: `<p>아래 링크를 클릭하여 이메일 찾기를 완료하세요.</p>
      <a href="${process.env.BASE_URL}/find/email">이메일 찾기 링크로 이동하기</a>
      <p>※ 입력하신 정보는 10분간 유효하여 유효시간 내에 완료하세요.</p>
      `,
    };

    await transporter.sendMail(option);

    return {
      state: true,
      data: user.email,
      message: "해당 이메일로 인증 링크를 보냈습니다.",
    };
  } catch (error) {
    console.log("find email error" + error);
    return {
      state: false,
      message: "인증 요청에 실패했습니다.",
    };
  }
}

export async function findPassword(formData: FormData) {
  const joinEmail = formData.get("join-email") as string;
  const email = formData.get("email") as string;

  if (!email || !joinEmail) {
    return {
      state: false,
      message: "가입한 이메일과 인증할 메일을 입력해주세요.",
    };
  }

  await connectDB();

  const user = await User.findOne({ email: joinEmail });
  if (!user) {
    return { state: false, message: "가입한 이메일 정보가 없습니다." };
  }

  try {
    const option = {
      from: `"CHEMEET" <${process.env.NEXT_APP_EMAIL}>`,
      to: email,
      subject: "CHEMEET 인증코드",
      html: `<p>아래 링크를 클릭하여 새로운 비밀번호로 변경하세요.</p>
      <a href="${process.env.BASE_URL}/find/password">비밀번호 변경 링크로 이동하기</a>
      <p>※ 입력하신 정보는 10분간 유효하여 유효시간 내에 완료하세요.</p>
      `,
    };

    await transporter.sendMail(option);
    return {
      state: true,
      data: user.email,
      message: "해당 이메일로 인증 링크를 보냈습니다.",
    };
  } catch (error) {
    console.log("find password error" + error);
    return {
      state: false,
      message: "인증 요청에 실패했습니다.",
    };
  }
}

export async function updatePassword(email: string, formData: FormData) {
  const userEmail = email;
  const newPassword = formData.get("password") as string;
  const newPwCheck = formData.get("pwCheck") as string;
  const hashedPassword = await hash(String(newPassword), 10);

  if (!userEmail) {
    return {
      state: false,
      message: "비밀번호를 변경할 유저의 이메일이 없습니다.",
    };
  }

  if (!newPassword || !newPwCheck) {
    return { state: false, message: "변경할 비밀번호를 입력해주세요." };
  }

  if (newPassword !== newPwCheck) {
    return { state: false, message: "입력한 비밀번호와 일치하지 않습니다." };
  }

  await connectDB();

  try {
    const update = await User.findOneAndUpdate(
      { email: userEmail },
      { $set: { password: hashedPassword } }
    );

    if (update) {
      return { state: true, message: "새로운 비밀번호로 변경되었습니다." };
    } else {
      return {
        state: false,
        message: "해당 유저를 찾지 못해 비밀번호 변경에 실패했습니다.",
      };
    }
  } catch (error) {
    console.log("update password error" + error);
    return { state: false, message: "비밀번호 변경이 실패했습니다." };
  }
}

/**
 * 회원탈퇴: email 값을 전달받아 사용자 데이터 삭제.
 * 로그인한 사용자 중 이메일로 가입한 사용자만 회원탈퇴 기능 사용 가능
 *
 * 삭제된 사용자는 populate로 가져와도 null 처리됨.
 * NULL_USER_FOR_PROFILE 데이터 대신 하여 익명 처리
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
