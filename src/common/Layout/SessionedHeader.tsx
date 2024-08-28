import Image from "next/image";
import ResponsiveMenu from "./ProfileMenu/ResponsiveMenu";
import { DummyProfileImg } from "@public/images";
import { getUserData } from "@/lib/actions/userAction";

export default async function SessionedHeader({
  sessionId,
}: {
  sessionId: string;
}) {
  const result = await getUserData(sessionId);

  if (result.state === false) {
    throw new Error(result.message);
  }

  const user = result.data;

  return (
    <div data-name="header__right-side__profile">
      <ResponsiveMenu
        profileImage={
          <div className="flex items-center">
            <span className="my-3 w-10 h-10 overflow-hidden rounded-full">
              <Image
                src={user.profile_img || DummyProfileImg}
                width="40"
                height="40"
                alt="profile img"
                className="object-cover min-w-full h-full"
              />
            </span>
            <span className="pl-4 lg:hidden">{user.name}</span>
          </div>
        }
      />
    </div>
  );
}
