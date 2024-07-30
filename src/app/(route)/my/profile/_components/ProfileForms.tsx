import SectionTitle from "@/common/Atoms/Text/SectionTitle";
import FormUpdatePassword from "./UpdatePassword/FormUpdatePassword";
import FormUpdatePhoneNumber from "./UpdatePhoneNumber/FormUpdatePhoneNumber";
import DeleteAccountConfirm from "./DeleteAccountConfirm";
import { CategoryOption } from "@/types/model/Category";
import { ProfileFullDataSchema } from "@/types/model/Profile";
import { CATEGORIES_ALL_OPTIONS } from "@/constants/categories/job_category";
import FormEditProfileImageWithPreview from "./EditProfileImage/FormEditProfileImageWithPreview";
import FormEditProfile from "./FormEditProfile";
import connectDB from "@/lib/db";
import { User } from "@/lib/schema";
import { Session } from "next-auth";

export type TProfileData = {
  positionTag: string;
  introduce: string;
  email: string;
  interest: Array<CategoryOption>;
};

export default async function ProfileForms({
  session,
  profile,
}: {
  session: Session | null;
  profile: ProfileFullDataSchema | null;
}) {
  const userId = session?.user.id as string;
  const sessionProvider = session?.account.provider as string;
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
  const initProfileUrl = profile?.userId.profile_img || "";
  const profileData = {
    positionTag: profile?.position_tag || "",
    introduce: profile?.introduce || "",
    email: profile?.userId.email || "",
    interest: interestCategory || [],
  };
  console.log({ profile, profileData });

  async function saveImage(imageUrl: string) {
    "use server";
    await connectDB();

    try {
      const updated = await User.findOneAndUpdate(
        { userId },
        { image: imageUrl }
      );
      return updated;
      // handleAlert("success", "프로필 이미지가 저장되었습니다.");
    } catch (error: any) {
      // handleAlert("error", error.message);
    }
  }

  return (
    <>
      <div className="flex flex-col gap-8">
        <p className="text-H2 text-label-dimmed">{session?.user.name}</p>
        <FormEditProfileImageWithPreview
          saveImage={saveImage}
          initProfileUrl={initProfileUrl}
        />
        <div className="w-full h-[1px] border-t border-t-line-normal"></div>
        <FormEditProfile userId={userId} profile={profileData} />
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
    </>
  );
}
