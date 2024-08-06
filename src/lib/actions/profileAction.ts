"use server";

import { revalidatePath } from "next/cache";
import connectDB from "../db";
import { Profile, User } from "../schema";
import { getSession } from "@/auth";
import { TUserBase } from "@/types/model/User";

/**
 * userId 값을 이용하여 새로운 사용자 프로필 데이터 추가
 */
export async function createProfile(id: string, formData: FormData) {
  const position_tag = formData.get("positionTag") as string;
  const introduce = formData.get("introduce") as string;
  const my_category = JSON.parse(formData.get("myCategory") as string);

  if (!id) {
    return { state: false, message: "유효한 id가 필요합니다." };
  }

  console.log("create", { position_tag, introduce, my_category });

  // if (!position_tag || !introduce || !my_category) {
  //   return {
  //     state: false,
  //     message: "포지션 태그, 소개, 카테고리 모두 입력해주세요.",
  //   };
  // }

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

/**
 * userId 값을 통해 프로필 정보 가져오기
 */
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

/**
 * 사용자 프로필 정보 업데이트
 */
export async function updateProfile(id: string, formData: FormData) {
  const position_tag = formData.get("positionTag") as string;
  const introduce = formData.get("introduce") as string;
  const my_category = JSON.parse(formData.get("myCategory") as string);

  console.log("update", { position_tag, introduce, my_category });

  try {
    const update = await Profile.findOneAndUpdate(
      { userId: id },
      { position_tag, introduce, my_category },
      { new: true }
    );

    if (!update) {
      return { state: false, message: "해당 프로필을 찾을 수 없습니다." };
    }

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

/**
 * 사용: `<SetCategoryFavor />`
 *
 * 관심 카테고리 저장
 * SetCategoryFavor 모달에서 사용
 */
export async function saveMyCategory(formData: FormData) {
  const session = await getSession();
  const userId = session?.user.id;

  if (!userId) {
    return { state: false, message: "유효한 id가 필요합니다." };
  }

  await connectDB();

  const profileExist = await Profile.findOne({ userId });

  const position_tag = "";
  const introduce = "";
  const my_category = JSON.parse(formData.get("my_category") as string);

  try {
    profileExist
      ? await Profile.findOneAndUpdate(
          { userId },
          { position_tag, introduce, my_category },
          { new: true }
        )
      : await new Profile({
          userId,
          position_tag,
          introduce,
          my_category,
        }).save();

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

/**
 * 사용 경로: /my/profile
 *
 * `updateDoc`으로 업데이트할 사용자 정보를 타입에 맞게 전달하여
 * 사용자 정보 업데이트
 */
type NonStaticUserData = Pick<TUserBase, "profile_img" | "phone" | "role">;
type UpdateDocument = Partial<NonStaticUserData>;
export async function updateUserInfo(id: string, updateDoc: UpdateDocument) {
  await connectDB();

  const check = await User.findOne({ _id: id });
  console.log({ exist: check });

  try {
    const update = await User.findOneAndUpdate({ _id: id }, updateDoc, {
      new: true,
    });

    if (!update) {
      return { state: false, message: "해당 프로필을 찾을 수 없습니다." };
    }
    console.log("update", { update });

    revalidatePath("/my/profile", "page");
    // revalidatePath("/", "layout");

    return {
      state: true,
      message: "프로필 정보가 변경되었습니다.",
    };
  } catch (error: any) {
    console.log("get profile" + error);
    return { state: false, message: "프로필 정보 로딩에 실패했습니다." };
  }
}
