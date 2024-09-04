import { ReactNode } from "react";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import { getSession } from "@/auth";
import { getAlert } from "@/lib/actions/AlertAction";

export type TAlertItem = {
  type: "post" | "study";
  typeId: string;
  title: string;
  comments: {
    _id: string;
    comment: string;
    read: boolean;
  }[];
};
export type TAlert = {
  alertList: TAlertItem[];
  allRead: boolean;
};
export type TProfileImage = { profileImage: ReactNode };

export default async function ResponsiveMenu(props: TProfileImage) {
  const session = await getSession();
  const userId = session?.user.id;

  if (!userId) {
    return;
  }

  const data: TAlert[] = (await getAlert(userId)).data || [];

  return (
    <>
      <MobileMenu {...props} />
      <DesktopMenu {...props} userId={userId} data={data} />
    </>
  );
}
