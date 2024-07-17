export const POST_CATEGORY = [
  { key: "all", href: "/post?category=all", label: "전체", active: false },
  {
    key: "study",
    href: "/post?category=study",
    label: "스터디 홍보",
    active: false,
  },
  {
    key: "project",
    href: "/post?category=project",
    label: "프로젝트 모집",
    active: false,
  },
  {
    key: "free",
    href: "/post?category=free",
    label: "자유게시판",
    active: false,
  },
  {
    key: "review",
    href: "/post?category=review",
    label: "스터디 후기",
    active: false,
  },
];
export const POST_SORT_BY = [
  { key: "latest", label: "최신순" },
  { key: "comments", label: "댓글많은순" },
  { key: "likes", label: "좋아요순" },
  { key: "views", label: "조회순" },
];
