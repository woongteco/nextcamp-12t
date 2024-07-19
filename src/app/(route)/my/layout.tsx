import SidebarAsideContentArea from "@/common/Layout/Sidebar/SidebarAsideContentArea";
import SidebarNavArea from "@/common/Layout/Sidebar/SidebarNavArea";
import { TProps } from "@/types/component/props";
import NotFound from "@/app/not-found";
import MyPageSidebarNavs from "./_components/MyPageSidebarNavs";
import { getSession } from "@/auth";

export default async function layout({ children }: TProps) {
  const session = await getSession();
  if (!session) {
    return <NotFound />;
  }

  return (
    <>
      <SidebarAsideContentArea>
        <SidebarNavArea>
          <MyPageSidebarNavs />
          {/* {MYPAGE_MENUS.map(({ key, ...item }) => (
            <SideNavItem key={key} {...item} active={false} />
          ))}
          <li>
            <UnstyledLogoutButton className="w-full inline-block rounded-[20px] text-H4 px-6 py-[26px] text-left text-label-alt bg-white hover:bg-label-alt/20">
              로그아웃
            </UnstyledLogoutButton>
          </li> */}
        </SidebarNavArea>
        <section>{children}</section>
      </SidebarAsideContentArea>
    </>
  );
}
