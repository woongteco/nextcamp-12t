"use client";

import SidebarAsideContentArea from "@/common/Layout/Sidebar/SidebarAsideContentArea";
import SidebarNavArea from "@/common/Layout/Sidebar/SidebarNavArea";
import SideNavItem from "@/common/Layout/Sidebar/SideNavItem";
import { TProps } from "@/types/component/props";
import { MYPAGE_MENUS } from "@/constants/menu/my_page";
import { useSelectedLayoutSegments } from "next/navigation";
import UnstyledLogoutButton from "@/common/Layout/UnstyledLogoutButton";

export default function layout({ children }: TProps) {
  const [segment] = useSelectedLayoutSegments();

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
          </li>
        </SidebarNavArea>
        <section>{children}</section>
      </SidebarAsideContentArea>
    </>
  );
}
