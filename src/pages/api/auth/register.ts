import { NextApiRequest, NextApiResponse } from "next";
import { User } from "@/lib/schema";
import connectDB from "@/lib/db";
import { handleValidate, handleHashPassword } from "@/lib/action";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password, pwCheck, name, phone } = req.body;

  await connectDB();

  const userCheck = await User.findOne({ email });

  if (userCheck) {
    res.status(400).json({ message: "이미 가입된 이메일로 중복 입니다." });
    return;
  }

  const validateError = handleValidate(email, password, pwCheck, name, phone);

  if (validateError) {
    return res
      .status(validateError.status)
      .json({ message: validateError.message });
  }

  const hashedPassword = await handleHashPassword(password);

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
