import Button from "@/common/Atoms/Form/Button";
import ProfileFormsAndPreview from "./ProfileFormsAndPreview";
import { profileAction } from "@/lib/actions/profileAction";
import { TProfileData } from "@/types/model/Profile";

type FormEditProfileProps = {
  userId: string;
  profile: TProfileData;
};

export default function FormEditProfile(props: FormEditProfileProps) {
  const { userId, profile } = props;

  async function save(formData: FormData) {
    "use server";
    // e.preventDefault();

    // const userId = profile?.userId._id as string;
    // const formData = new FormData(e.currentTarget);

    try {
      await profileAction(userId, formData);
      // handleAlert("success", "프로필 정보가 저장되었습니다.");
    } catch (error: any) {
      // handleAlert("error", error.message);
      console.error("error", error.message);
    }
  }

  return (
    <form action={save} className="flex flex-col gap-8">
      <ProfileFormsAndPreview defaultValue={profile} />
      <Button type="submit" variation="solid" className="self-end">
        프로필 저장
      </Button>
    </form>
  );
}
