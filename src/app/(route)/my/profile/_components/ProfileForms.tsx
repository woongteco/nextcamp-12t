import ProfileInputArea from "./ProfileInputArea";
import ProfileImageInput from "./ProfileImageInput";
import FormEditProfile from "./FormEditProfile";
import SectionTitle from "@/common/Atoms/Text/SectionTitle";
import FormUpdatePassword from "./FormUpdatePassword";
import FormUpdatePhoneNumber from "./FormUpdatePhoneNumber";
import DeleteAccountConfirm from "./DeleteAccountConfirm";
import ProfilePreview from "./ProfilePreview";
import { getProfile } from "@/lib/actions/profileAction";
import { getSession } from "@/auth";

export default async function ProfileForms({
  userId,
  sessionProvider,
}: {
  userId: string;
  sessionProvider: string;
}) {
  const session = await getSession();
  const userProfile = await getProfile(userId);
  let profile = userProfile.data;
  let clientProfile = JSON.parse(JSON.stringify(profile));

  console.log("get 프로필 데이터" + profile);

  return (
    <>
      <div className="grid xl:grid-cols-[5fr_4fr] xl:items-start gap-gutter-xl">
        <div className="flex flex-col gap-8">
          <p className="text-H2 text-label-dimmed">{session?.user.name}</p>
          <ProfileInputArea label="아바타 이미지">
            <ProfileImageInput />
          </ProfileInputArea>
          <div className="w-full h-[1px] border-t border-t-line-normal"></div>
          <FormEditProfile
            // userId={userId}
            // sessionProvider={sessionProvider}
            session={session}
            profile={clientProfile}
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
          {/* 소셜로그인은 휴대폰 번호 x */}
          {/* <FormUpdatePhoneNumber defaultValue={profile.userId.phone} /> */}
          <div className="w-full h-[1px] border-t border-t-line-normal"></div>
          <DeleteAccountConfirm />
        </div>

        <div className="previewBox rounded-2xl hidden xl:sticky xl:top-20 p-6 border border-line-normal xl:flex flex-col gap-4">
          <ProfilePreview session={session} profile={profile} />
        </div>
      </div>
    </>
  );
}
