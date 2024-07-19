"use client";
import SideNavItem from "@/common/Layout/Sidebar/SideNavItem";
import UnstyledLogoutButton from "@/common/Layout/UnstyledLogoutButton";
import { MYPAGE_MENUS } from "@/constants/menu/my_page";
import { useSelectedLayoutSegment } from "next/navigation";

export default function MyPageSidebarNavs() {
  const segment = useSelectedLayoutSegment();
  return (
    <>
      {MYPAGE_MENUS.map(({ key, ...item }) => (
        <SideNavItem key={key} {...item} active={key === segment} />
      ))}
      <li>
        <UnstyledLogoutButton className="w-full inline-block rounded-[20px] text-H4 px-6 py-[26px] text-left text-label-alt bg-white hover:bg-label-alt/20">
          로그아웃
        </UnstyledLogoutButton>
      </li>
    </>
  );
}
