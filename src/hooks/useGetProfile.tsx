import { getSession } from "@/auth";
import connectDB from "@/lib/db";
import { Profile, User } from "@/lib/schema";

export default async function useGetProfile() {
  const session = await getSession();
  let data;

  await connectDB();

  if (session?.account) {
    const userId = session.account.providerAccountId;
    const profile = await Profile.findOne({ userId });

    console.log("테스테스테ㅡ" + userId);
    console.log("유저 프로필" + profile);
    if (profile) {
      const user = await User.findOne({ userId });

      console.log("유저" + user);

      data = {
        id: userId,
        position_tag: profile.position_tag,
        introduce: profile.introduce,
        my_category: profile.my_category,
        user,
      };
    }
  }

  return JSON.stringify(data, null, 2);
}
