import { Sidebar } from "@/common/Layout";

const menus = [
  { href: "/post", label: "전체", active: true },
  { href: "/post", label: "스터디 홍보", active: false },
  { href: "/post", label: "프로젝트 모집", active: false },
  { href: "/post", label: "자유게시판", active: false },
  { href: "/post", label: "스터디 후기", active: false },
];

export default function CommunityPostList() {
  return (
    <Sidebar>
      <Sidebar.Nav
        menus={menus}
        // action={<button>로그아웃</button>}
      />
      <Sidebar.Container>Post List</Sidebar.Container>
    </Sidebar>
  );
}
