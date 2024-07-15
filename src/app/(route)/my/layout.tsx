"use client";
import SidebarAsideContentArea from "@/common/Layout/Sidebar/SidebarAsideContentArea";
import SidebarNavArea from "@/common/Layout/Sidebar/SidebarNavArea";
import SideNavItem from "@/common/Layout/Sidebar/SideNavItem";
import { TProps } from "@/types/component/props";
import { signOut } from "next-auth/react";
import { useSelectedLayoutSegments, useRouter } from "next/navigation";

export const MYPAGE_MENUS = [
  { key: "profile", href: `/my/test/profile`, label: "프로필" },
  {
    key: "study",
    href: `/my/test/study`,
    label: "내 스터디 활동",
  },
  {
    key: "like-study",
    href: `/my/test/like-study`,
    label: "찜한 스터디",
  },
  { key: "post", href: `/my/test/post`, label: "내가 작성한 글" },
];

export default function layout({ children }: TProps) {
  const [_, segment] = useSelectedLayoutSegments();
  const router = useRouter();

  async function onLogout() {
    await signOut({ redirect: false });
    router.replace("/");
  }

  return (
    <>
      <SidebarAsideContentArea>
        <SidebarNavArea>
          {MYPAGE_MENUS.map(({ key, ...item }) => (
            <SideNavItem key={key} {...item} active={key === segment} />
          ))}
          <li>
            <button
              className="w-full inline-block rounded-[20px] text-H4 px-6 py-[26px] text-left text-label-alt bg-white hover:bg-label-alt/20"
              onClick={onLogout}
            >
              로그아웃
            </button>
          </li>
        </SidebarNavArea>
        {/* <Sidebar.Nav menus={menus.map((item) => item)} /> */}
        <section>{children}</section>
      </SidebarAsideContentArea>
    </>
  );
}
