import { getSession } from "@/auth";
import connectDB from "@/lib/db";
import { Profile, User } from "@/lib/schema";

export default async function useGetProfile() {
  const session = await getSession();
  let profile;

  await connectDB();

  if (session?.account.provider === "credentials") {
    profile = await Profile.findOne({ userId: session.user.id }).populate(
      "userId"
    );
  } else {
    const providerAccountId = session?.account.providerAccountId;
    const socialProfile = await Profile.findOne({ providerAccountId });

    if (socialProfile) {
      const user = await User.findOne({ providerAccountId });
      profile = {
        _id: user._id,
        userId: user,
        position_tag: socialProfile.position_tag,
        introduce: socialProfile.introduce,
        my_category: socialProfile.my_category,
      };
    }
  }

  return JSON.stringify(profile, null, 2);
}
