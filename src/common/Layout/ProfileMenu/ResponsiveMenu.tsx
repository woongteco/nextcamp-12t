import { ReactNode } from "react";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

export type TProfileImage = { profileImage: ReactNode };
export default function ResponsiveMenu(props: TProfileImage) {
  return (
    <>
      <MobileMenu {...props} />
      <DesktopMenu {...props} />
    </>
  );
}
