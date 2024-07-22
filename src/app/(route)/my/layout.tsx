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
        </SidebarNavArea>
        <section>{children}</section>
      </SidebarAsideContentArea>
    </>
  );
}
