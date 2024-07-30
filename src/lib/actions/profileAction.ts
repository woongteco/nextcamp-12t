"use server";

import { revalidatePath } from "next/cache";
import connectDB from "../db";
import { Profile } from "../schema";

// post
export async function profileAction(id: string, formData: FormData) {
  const position_tag = formData.get("positionTag") as string;
  const introduce = formData.get("introduce") as string;
  const my_category = formData.get("interest") as string;

  if (!id) {
    return { state: false, message: "유효한 id가 필요합니다." };
  }

  if (!position_tag || !introduce || !my_category) {
    return {
      state: false,
      message: "포지션 태그, 소개, 카테고리 모두 입력해주세요.",
    };
  }

  await connectDB();

  try {
    const profile = new Profile({
      userId: id,
      position_tag,
      introduce,
      my_category,
    });
    await profile.save();
    return {
      state: true,
      message: "프로필 정보가 저장되었습니다.",
    };
  } catch (error) {
    console.log("profile error" + error);
    return {
      state: false,
      message: "프로필 저장에 실패했습니다.",
    };
  }
}

// get
export async function getProfile(userId: string) {
  await connectDB();

  try {
    let profile = await Profile.findOne({ userId }).populate("userId");

    if (!profile) {
      profile = {
        position_tag: "",
        introduce: "",
        my_category: [],
        userId: {
          email: "",
          name: "",
          profile_img: "",
          role: "",
          provider: "",
        },
      };
    } else {
      profile = profile;
    }

    return { state: true, data: profile };
  } catch (error) {
    console.log("get profile" + error);
    return { state: false, message: "프로필 정보 로딩에 실패했습니다." };
  }
}

// update
export async function updateProfile(id: string, formData: FormData) {
  const position_tag = formData.get("positionTag") as string;
  const introduce = formData.get("introduce") as string;
  const my_category = formData.get("interest") as string;

  try {
    const update = await Profile.findOneAndUpdate(
      { userId: id },
      { position_tag, introduce, my_category },
      { new: true }
    );

    if (!update) {
      return { state: false, message: "해당 프로필을 찾을 수 없습니다." };
    }

    revalidatePath("/my/profile");

    return {
      state: true,
      message: "프로필 정보가 업데이트 되었습니다.",
    };
  } catch (error) {
    console.log("update profile" + error);
    return {
      state: false,
      message: "프로필 정보 업데이트에 실패했습니다.",
    };
  }
}
