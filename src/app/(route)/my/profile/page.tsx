import SectionTitle from "@/common/Atoms/Text/SectionTitle";
import ProfileForms from "./_components/ProfileForms";
import { getSession } from "@/auth";
import { Profile } from "@/lib/schema";
import connectDB from "@/lib/db";
import { ProfileFullDataSchema } from "@/types/model/Profile";
import NotFound from "@/app/not-found";

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

  const profile: ProfileFullDataSchema | null = await getProfile(
    session?.user.id as string
  );
  console.log("profile", profile);

  const profileData: ProfileFullDataSchema = JSON.parse(
    JSON.stringify(profile)
  );

  return (
    <>
      <SectionTitle size="md" className="mb-6">
        프로필 수정
      </SectionTitle>
      <ProfileForms session={session} profile={profileData} />
    </>
  );
}
