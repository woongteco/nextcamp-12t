import SectionTitle from "@/common/Atoms/Text/SectionTitle";
import ProfileForms from "./_components/ProfileForms";
import { getSession } from "@/auth";
import NotFound from "@/app/not-found";

export default async function MyProfilePage() {
  const session = await getSession();

  if (session === null) {
    return <NotFound />;
  }

  return (
    <>
      <SectionTitle size="md" className="mb-6">
        프로필 수정
      </SectionTitle>

      <ProfileForms
        userId={session.user.id}
        sessionProvider={session?.account.provider}
      />
    </>
  );
}
