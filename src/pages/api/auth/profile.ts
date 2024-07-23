import { NextApiRequest, NextApiResponse } from "next";
import { Profile } from "@/lib/schema";
import connectDB from "@/lib/db";
import mongoose from "mongoose";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { userId, position_tag, introduce, my_category } = req.body;
    // console.log("userId", mongoose.Types.ObjectId.isValid(userId));

    await connectDB();

    // if (!userId) {
    //   return res.status(400).json({ message: "사용자의 id가 필요합니다." });
    // }

    const profile = new Profile({
      // userId,
      position_tag,
      introduce,
      my_category,
    });

    const dbSaveProfile = await profile.save();
    console.log("프로필 정보 저장 완료" + dbSaveProfile);
    res
      .status(200)
      .json({ message: "프로필 정보 저장 완료", profile: dbSaveProfile });
  } else {
    res.status(400).json({ message: "프로필 정보 저장 실패" });
  }
}
