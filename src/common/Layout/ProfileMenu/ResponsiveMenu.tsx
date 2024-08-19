import { ReactNode } from "react";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import { getSession } from "@/auth";
import { getAlert } from "@/lib/actions/AlertAction";

export type TUserAlert = {
  contents: { title: string };
  postId: string;
  comments: string[];
};
export type TProfileImage = { profileImage: ReactNode };

export default async function ResponsiveMenu(props: TProfileImage) {
  const session = await getSession();
  const userId = session?.user.id;

  if (!userId) {
    return;
  }
  const alertList: TUserAlert[] = (await getAlert(userId)).result || [];

  return (
    <>
      <MobileMenu {...props} />
      <DesktopMenu {...props} alertList={alertList} />
    </>
  );
}
