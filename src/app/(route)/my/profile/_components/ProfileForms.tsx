import FormEditProfile from "./EditProfile/FormEditProfile";
import SectionTitle from "@/common/Atoms/Text/SectionTitle";
import FormUpdatePassword from "./UpdatePassword/FormUpdatePassword";
import FormUpdatePhoneNumber from "./UpdatePhoneNumber/FormUpdatePhoneNumber";
import DeleteAccountConfirm from "./DeleteAccountConfirm";
import { getProfile } from "@/lib/actions/profileAction";
import { getSession } from "@/auth";
import FormEditProfileImageWithPreview from "./EditProfileImage/FormEditProfileImageWithPreview";
import NotFound from "@/app/not-found";

export default async function ProfileForms() {
  const session = await getSession();

  if (session === null) {
    return <NotFound />;
  }

  const userId = session.user.id;
  const sessionProvider = session.account.provider;
  const userProfile = await getProfile(userId);
  let profile = userProfile.data;
  let clientProfile = JSON.parse(JSON.stringify(profile));

  console.log("id", session?.user.id);

  console.log("get 프로필 데이터" + JSON.stringify(profile));

  return (
    <div className="w-full lg:w-[calc(100vw-2rem-240px-30px)] xl:w-[calc(1200px-280px-30px)] grid xl:grid-cols-[5fr_4fr] xl:items-start gap-gutter-xl">
      <div className="flex flex-col gap-8">
        <p className="text-H2 text-label-dimmed">{session.user.name}</p>
        <FormEditProfileImageWithPreview
          id={session.user.id}
          initProfileUrl={profile.userId.id}
        />
        <div className="w-full h-[1px] border-t border-t-line-normal"></div>
        <FormEditProfile session={session} profile={clientProfile} />
        {sessionProvider === "credentials" && (
          <>
            <div className="w-full h-[1px] border-t border-t-line-normal"></div>
            <SectionTitle size="md">비밀번호 수정</SectionTitle>
            <FormUpdatePassword />
            <div className="w-full h-[1px] border-t border-t-line-normal"></div>
            <SectionTitle size="md" className="mb-2">
              연락처 수정
            </SectionTitle>
            <FormUpdatePhoneNumber defaultValue={profile.userId.phone} />
            <div className="w-full h-[1px] border-t border-t-line-normal"></div>
            <DeleteAccountConfirm email={session.user.email as string} />
          </>
        )}
      </div>
    </div>
  );
}
