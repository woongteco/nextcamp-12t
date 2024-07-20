import { NextApiRequest, NextApiResponse } from "next";
import { User } from "@/lib/schema";
import connectDB from "@/lib/db";
import { hashPassword } from "@/lib/action";

const emailValid = /^[\w.-]+@[\w-]+\.[a-zA-Z]{2,}$/;
const passwordValid = /^(?=.*[a-zA-Z])(?=.*[!@#*])(?=.*[0-9]).{12,}$/;
const nameValid = /^[가-힣]{2,4}$/;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return null;

  const data = req.body;
  const { email, password, pwCheck, name, phone } = data;

  if (!email || !password || !pwCheck || !name || !phone) {
    res.status(400).json({ message: "다시 한번 정보를 확인해주세요." });
  }

  if (!emailValid.test(email)) {
    res.status(400).json({ message: "이메일 유형에 알맞게 입력해주세요." });
  }

  if (!passwordValid.test(password)) {
    res.status(400).json({
      message: "조건에 맞는 비밀번호를 입력해주세요.",
    });
  }

  if (!nameValid.test(name)) {
    res.status(400).json({ message: "조건에 맞는 이름을 입력해주세요." });
  }

  if (password !== pwCheck) {
    res.status(400).json({ message: "입력한 비밀번호와 일치하지 않습니다." });
  }

  if (phone.length <= 10) {
    res
      .status(400)
      .json({ message: "휴대폰 번호 11자리 숫자만 입력해주세요." });
  }

  await connectDB();

  const userCheck = await User.findOne({ email });

  if (userCheck) {
    res.status(400).json({ message: "이미 가입된 이메일이 있습니다." });
    return;
  }

  const hashedPassword = await hashPassword(password);

  const user = new User({
    email,
    password: hashedPassword,
    name,
    phone,
  });

  if (user) {
    const dbSave = await user.save();
    console.log("회원정보 저장 완료" + dbSave);
    res.status(200).json({ message: "회원가입 완료" });
  } else {
    res.status(400).json({ message: "회원가입 실패" });
  }
}
