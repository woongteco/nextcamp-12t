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

export type TProfileData = {
  profileUrl: string;
  positionTag: string;
  introduce: string;
  email: string;
  interest: Array<CategoryOption>;
};

export default function ProfileForms({ session }: { session: Session | null }) {
  const user = getUser();
  const defaultData = {
    profileUrl: session?.user.image || "",
    positionTag: user.position,
    introduce: "",
    email: session?.user.email || "",
    interest: user.interest,
  };
  const [data, setData] = useState<TProfileData>(defaultData);

  const setProfileImage = (image: string) => {
    setData((prev) => ({ ...prev, profileUrl: image }));
  };

  return (
    <>
      <div className="grid xl:grid-cols-[5fr_4fr] xl:items-start gap-gutter-xl">
        <div className="flex flex-col gap-8">
          <p className="text-H2 text-label-dimmed">{session?.user.name}</p>
          <ProfileInputArea label="아바타 이미지">
            <ProfileImageInput setProfileImage={setProfileImage} />
          </ProfileInputArea>
          <div className="w-full h-[1px] border-t border-t-line-normal"></div>
          <FormEditProfile data={data} setData={setData} session={session} />
          {session?.account.provider === "credentials" && (
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
          <FormUpdatePhoneNumber defaultValue={user.phone} />
          <div className="w-full h-[1px] border-t border-t-line-normal"></div>
          <DeleteAccountConfirm />
        </div>

        <div className="previewBox rounded-2xl hidden xl:sticky xl:top-20 p-6 border border-line-normal xl:flex flex-col gap-4">
          <ProfilePreview name={session?.user.name} data={data} />
        </div>
      </div>
    </>
  );
}
