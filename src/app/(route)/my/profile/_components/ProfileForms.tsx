import FormEditProfile from "./FormEditProfile";
import SectionTitle from "@/common/Atoms/Text/SectionTitle";
import FormUpdatePassword from "./UpdatePassword/FormUpdatePassword";
import FormUpdatePhoneNumber from "./UpdatePhoneNumber/FormUpdatePhoneNumber";
import DeleteAccountConfirm from "./DeleteAccountConfirm";
import { getProfile } from "@/lib/actions/profileAction";
import { getSession } from "@/auth";
import FormEditProfileImageWithPreview from "./EditProfileImage/FormEditProfileImageWithPreview";

export default async function ProfileForms({ userId }: { userId: string }) {
  const session = await getSession();
  const sessionProvider = session?.account.provider;
  const userProfile = await getProfile(userId);
  let profile = userProfile.data;
  let clientProfile = JSON.parse(JSON.stringify(profile));

  console.log("get 프로필 데이터" + JSON.stringify(profile));

  return (
    <>
      <div className="grid xl:grid-cols-[5fr_4fr] xl:items-start gap-gutter-xl">
        <div className="flex flex-col gap-8">
          <p className="text-H2 text-label-dimmed">
            {session?.user.name as string}
          </p>
          <FormEditProfileImageWithPreview
            id={session?.user.id as string}
            initProfileUrl={profile.userId.id}
          />
          <div className="w-full h-[1px] border-t border-t-line-normal"></div>
          <FormEditProfile session={session} profile={clientProfile} />
          {sessionProvider === "credentials" && (
            <>
              <div className="w-full h-[1px] border-t border-t-line-normal"></div>
              <SectionTitle size="md">비밀번호 수정</SectionTitle>
              <FormUpdatePassword />
            </>
          )}
          <div className="w-full h-[1px] border-t border-t-line-normal"></div>
          {sessionProvider === "credentials" && (
            <>
              <SectionTitle size="md" className="mb-2">
                연락처 수정
              </SectionTitle>
              <FormUpdatePhoneNumber defaultValue={profile.userId.phone} />
              <div className="w-full h-[1px] border-t border-t-line-normal"></div>
            </>
          )}
          <DeleteAccountConfirm />
        </div>
      </div>
    </>
  );
}
