"use client";
import { useState } from "react";
import { getUser } from "@/dummies/user";
import { CategoryOption } from "@/types/model/Category";
import SectionTitle from "@/common/Atoms/Text/SectionTitle";
import DeleteAccountConfirm from "./_components/DeleteAccountConfirm";
import ProfilePreview from "./_components/ProfilePreview";
import FormEditProfile from "./_components/FormEditProfile";
import FormUpdatePassword from "./_components/FormUpdatePassword";
import FormUpdatePhoneNumber from "./_components/FormUpdatePhoneNumber";
import { useSession } from "next-auth/react";

export type TProfileData = {
  profileUrl: string;
  positionTag: string;
  introduce: string;
  email: string;
  interest: Array<CategoryOption>;
};

export default function MyProfilePage() {
  const session = useSession();
  const user = getUser();
  const defaultData = {
    profileUrl: user.profileUrl,
    positionTag: user.position,
    introduce: "",
    email: user.email,
    interest: user.interest,
  };
  const [data, setData] = useState<TProfileData>(defaultData);

  return (
    <>
      <SectionTitle size="md" className="mb-6">
        프로필 수정
      </SectionTitle>
      <div className="grid xl:grid-cols-[5fr_4fr] xl:items-start gap-gutter-xl">
        <div className="flex flex-col gap-8">
          <p className="text-H2 text-label-dimmed">{session.data?.user.name}</p>
          <FormEditProfile data={data} setData={setData} />

          {session.data?.account.provider === "credentials" && (
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
        <div className="previewBox rounded-2xl xl:sticky xl:top-20 p-6 border border-line-normal flex flex-col gap-4">
          <ProfilePreview name={session.data?.user.name} data={data} />
        </div>
      </div>
    </>
  );
}
