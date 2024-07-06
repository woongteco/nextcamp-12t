import { Sidebar } from "@/common/Layout";
import { TProps } from "@/types/component/props";

export const menus = [
  { key: "profile", href: `/my/test/profile`, label: "프로필", active: false },
  {
    key: "study",
    href: `/my/test/study`,
    label: "내 스터디 활동",
    active: true,
  },
  {
    key: "like-study",
    href: `/my/test/like-study`,
    label: "찜한 스터디",
    active: true,
  },
  ,
  { key: "post", href: `/my/test/post`, label: "내가 작성한 글", active: true },
];

export default function layout({ children }: TProps) {
  return (
    <>
      <Sidebar>
        {/* <Sidebar.Nav menus={menus.map((item) => item)} /> */}
        <Sidebar.Container>{children}</Sidebar.Container>
      </Sidebar>
    </>
  );
}
