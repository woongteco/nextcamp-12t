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

    if (profile) {
      const user = await User.findOne({
        providerAccountId: session.account.providerAccountId,
      });

      data = {
        id: user.providerAccountId,
        userId: user,
        position_tag: profile.position_tag,
        introduce: profile.introduce,
        my_category: profile.my_category,
      };
    }
  }

  return JSON.stringify(data, null, 2);
}
