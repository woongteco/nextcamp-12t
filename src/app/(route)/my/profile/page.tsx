import SectionTitle from "@/common/Atoms/Text/SectionTitle";
import ProfileForms from "./_components/ProfileForms";
import { getSession } from "@/auth";
import { Profile } from "@/lib/schema";
import connectDB from "@/lib/db";
import mongoose, { isValidObjectId, Types } from "mongoose";

export default async function MyProfilePage() {
  const session = await getSession();
  const { ObjectId } = mongoose.Types;

  // 소셜로그인 id 값 이슈로 다시 확인
  console.log(session?.user.id);

  await connectDB();

  if (isValidObjectId(session?.user.id)) {
    const profile = await Profile.findOne({
      userId: new Types.ObjectId(session?.user.id),
    });

    if (profile) {
      console.log(profile);
    } else {
      console.log("프로필 미작성으로 작성 해주세요.");
    }
  } else {
    console.log("유효 하지 않음");
  }

  return (
    <>
      <SectionTitle size="md" className="mb-6">
        프로필 수정
      </SectionTitle>
      <ProfileForms session={session} />
    </>
  );
}
