import SectionTitle from "@/common/Atoms/Text/SectionTitle";
import ProfileForms from "./_components/ProfileForms";
import { getSession } from "@/auth";
import useGetProfile from "@/hooks/useGetProfile";

export default async function MyProfilePage() {
  const session = await getSession();

  const data: string = await useGetProfile();

  console.log("profile data 가져오기" + data);

  return (
    <>
      <SectionTitle size="md" className="mb-6">
        프로필 수정
      </SectionTitle>
      <ProfileForms session={session} />
    </>
  );
}
