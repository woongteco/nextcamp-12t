import SectionTitle from "@/common/Atoms/Text/SectionTitle";
import ProfileForms from "./_components/ProfileForms";
import { getSession } from "@/auth";
import { Profile } from "@/lib/schema";
import connectDB from "@/lib/db";
import { ProfileSchema } from "@/types/model/Profile";
import NotFound from "@/app/not-found";
import useGetProfile from "@/hooks/useGetProfile";

async function getProfile(userId: string) {
  await connectDB();

  const profile = await Profile.findOne({ userId }).populate("userId");
  return profile;
}

export default async function MyProfilePage() {
  const session = await getSession();

  if (session === null) {
    return <NotFound />;
  }

  const profile: ProfileSchema | null = await getProfile(
    session?.user.id as string
  );
  console.log("profile", profile);

  const data: string = await useGetProfile();

  console.log("profile data 가져오기" + data);

  return (
    <>
      <SectionTitle size="md" className="mb-6">
        프로필 수정
      </SectionTitle>
      <ProfileForms
        userId={session.account.providerAccountId}
        sessionProvider={session?.account.provider || ""}
        profile={profile}
      />
    </>
  );
}
