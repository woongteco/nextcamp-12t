import SectionTitle from "@/common/Atoms/Text/SectionTitle";
import ProfileForms from "./_components/ProfileForms";
import { getSession } from "@/auth";
import { Profile } from "@/lib/schema";
import connectDB from "@/lib/db";
import { ProfileSchema } from "@/types/model/Profile";
import NotFound from "@/app/not-found";

async function getProfile(userId: string) {
  await connectDB();

  const profile = await Profile.findOne({ userId }).populate("userId");
  return profile;
}

export default async function MyProfilePage() {
  const session = await getSession();

  // 소셜로그인 id 값 이슈로 다시 확인
  // console.log(session?.user.id);

  if (session === null) {
    return <NotFound />;
  }

  const profile: ProfileSchema | null = await getProfile(
    session?.user.id as string
  );
  console.log("profile", profile);

  return (
    <>
      <SectionTitle size="md" className="mb-6">
        프로필 수정
      </SectionTitle>
      <ProfileForms
        userId={session.user.id}
        sessionProvider={session?.account.provider || ""}
        profile={profile}
      />
    </>
  );
}
