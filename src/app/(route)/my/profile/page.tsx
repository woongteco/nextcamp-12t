import SectionTitle from "@/common/Atoms/Text/SectionTitle";
import ProfileForms from "./_components/ProfileForms";
import { getSession } from "@/auth";

export default async function MyProfilePage() {
  const session = await getSession();

  return (
    <>
      <SectionTitle size="md" className="mb-6">
        프로필 수정
      </SectionTitle>
      <ProfileForms session={session} />
    </>
  );
}
