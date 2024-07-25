"use client";
import ProfileInputArea from "./ProfileInputArea";
import ProfileImageInput from "./ProfileImageInput";
import FormEditProfile from "./FormEditProfile";
import { getUser } from "@/dummies/user";
import { useEffect, useState } from "react";
import SectionTitle from "@/common/Atoms/Text/SectionTitle";
import FormUpdatePassword from "./FormUpdatePassword";
import FormUpdatePhoneNumber from "./FormUpdatePhoneNumber";
import DeleteAccountConfirm from "./DeleteAccountConfirm";
import ProfilePreview from "./ProfilePreview";
import { Session } from "next-auth";
import { CategoryOption } from "@/types/model/Category";
import { ProfileSchema } from "@/types/model/Profile";
import { CATEGORIES_ALL_OPTIONS } from "@/constants/categories/job_category";

export type TProfileData = {
  profileUrl: string;
  positionTag: string;
  introduce: string;
  email: string;
  interest: Array<CategoryOption>;
};

export default function ProfileForms({
  userId,
  profile,
  sessionProvider,
}: {
  userId: string;
  profile: ProfileSchema | null;
  sessionProvider: string;
}) {
  // const user = getUser();
  const interestCategory: CategoryOption[] =
    profile?.my_category && profile.my_category.length > 0
      ? profile?.my_category.map(
          (value) =>
            CATEGORIES_ALL_OPTIONS.find(
              (opt) => opt.value === value
            ) as CategoryOption
        )
      : [];
  const profileData = {
    profileUrl: profile?.userId.profile_img || "",
    positionTag: profile?.position_tag || "",
    introduce: profile?.introduce || "",
    email: profile?.userId.email || "",
    interest: interestCategory || [],
  };
  console.log({ profile, profileData });

  const [data, setData] = useState<TProfileData>(profileData);
  const setProfileImage = (image: string) => {
    setData((prev) => ({ ...prev, profileUrl: image }));
  };

  return (
    <>
      <div className="grid xl:grid-cols-[5fr_4fr] xl:items-start gap-gutter-xl">
        <div className="flex flex-col gap-8">
          <p className="text-H2 text-label-dimmed">{profile?.userId.name}</p>
          <ProfileInputArea label="아바타 이미지">
            <ProfileImageInput />
          </ProfileInputArea>
          <div className="w-full h-[1px] border-t border-t-line-normal"></div>
          <FormEditProfile
            userId={userId}
            profile={profileData}
            sessionProvider={sessionProvider}
          />
          {sessionProvider === "credentials" && (
            <>
              <div className="w-full h-[1px] border-t border-t-line-normal"></div>
              <SectionTitle size="md" className="mb-2">
                비밀번호 수정
              </SectionTitle>
              <FormUpdatePassword />
            </>
          )}
          <div className="w-full h-[1px] border-t border-t-line-normal"></div>
          <SectionTitle size="md" className="mb-2">
            연락처 수정
          </SectionTitle>
          <FormUpdatePhoneNumber defaultValue={profile?.userId.phone} />
          <div className="w-full h-[1px] border-t border-t-line-normal"></div>
          <DeleteAccountConfirm />
        </div>

        {/* <div className="previewBox rounded-2xl hidden xl:sticky xl:top-20 p-6 border border-line-normal xl:flex flex-col gap-4">
          <ProfilePreview name={profile?.userId.name} data={profileData} />
        </div> */}
      </div>
    </>
  );
}
