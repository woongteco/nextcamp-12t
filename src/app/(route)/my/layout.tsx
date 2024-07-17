"use client";

import SidebarAsideContentArea from "@/common/Layout/Sidebar/SidebarAsideContentArea";
import SidebarNavArea from "@/common/Layout/Sidebar/SidebarNavArea";
import SideNavItem from "@/common/Layout/Sidebar/SideNavItem";
import { TProps } from "@/types/component/props";
import { MYPAGE_MENUS } from "@/constants/menu/my_page";
import { signOut } from "next-auth/react";
import { useSelectedLayoutSegments, useRouter } from "next/navigation";
import UnstyledLogoutButton from "@/common/Layout/UnstyledLogoutButton";

export default function layout({ children }: TProps) {
  // ...get logged session
  const [segment] = useSelectedLayoutSegments();
  const router = useRouter();

  // async function onLogout() {
  //   await signOut({ redirect: false });
  //   router.replace("/");
  // }

  return (
    <>
      <SidebarAsideContentArea>
        <SidebarNavArea>
          {MYPAGE_MENUS.map(({ key, ...item }) => (
            <SideNavItem key={key} {...item} active={key === segment} />
          ))}
          <li>
            <UnstyledLogoutButton className="w-full inline-block rounded-[20px] text-H4 px-6 py-[26px] text-left text-label-alt bg-white hover:bg-label-alt/20">
              로그아웃
            </UnstyledLogoutButton>
            {/* <button
              className="w-full inline-block rounded-[20px] text-H4 px-6 py-[26px] text-left text-label-alt bg-white hover:bg-label-alt/20"
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              로그아웃
            </button> */}
          </li>
        </SidebarNavArea>
        <section>{children}</section>
      </SidebarAsideContentArea>
    </>
  );
}
