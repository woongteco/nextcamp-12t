import NotFound from "@/app/not-found";
import LinkButton from "@/common/Atoms/LinkButton";
import { Sidebar } from "@/common/Layout";
import Dropdown from "@/common/Molecules/Dropdown";
import PostListItem from "@/common/Organisms/PostListItem";
import { getPosts } from "@/dummies/posts";
import { TUserBase } from "@/types/model/User";
import Link from "next/link";

export type TPost = {
  postId: string;
  filter: {
    value: string;
    label: string;
    isRecruiting: boolean | null;
  };
  contents: {
    title: string;
    body: string;
    linkedStudyId: null | string;
  };
  writer: TUserBase;
  createdAt: string;
  view: number;
  like: number;
};

export const menus = [
  { key: "all", href: "/post?filter=all", label: "전체", active: false },
  {
    key: "study",
    href: "/post?filter=study",
    label: "스터디 홍보",
    active: false,
  },
  {
    key: "project",
    href: "/post?filter=project",
    label: "프로젝트 모집",
    active: false,
  },
  {
    key: "free",
    href: "/post?filter=free",
    label: "자유게시판",
    active: false,
  },
  {
    key: "review",
    href: "/post?filter=review",
    label: "스터디 후기",
    active: false,
  },
];

const sorts = [
  { key: "latest", label: "최신순" },
  { key: "comments", label: "댓글많은순" },
  { key: "likes", label: "좋아요순" },
  { key: "views", label: "조회순" },
];

type TQuery = { filter?: string; page?: string; sort?: string };

export default function CommunityPostList({
  searchParams,
}: {
  searchParams: TQuery;
}) {
  const posts = getPosts();
  const filter = searchParams?.filter || "all";
  const page = searchParams?.page || "1";
  const sort = searchParams?.sort || "latest";
  const filteredMenu = menus.find((item) => item.key === filter);
  const sortedBy = sorts.find((item) => item.key === sort);
  if (filteredMenu === undefined || sortedBy === undefined) {
    return <NotFound />;
  }
  /**
   * TODO
   * - 글 리스트 데이터 가져오기 : TPost[]
   * - 글 리스트 filter에 따라 리스트 화면에 표시
   * - 정렬 방법에 따라 sorted
   * - 검색 키워드에 따라 리스트 필터링
   */
  return (
    <Sidebar>
      <Sidebar.Nav
        menus={menus.map((item) =>
          item.key === filter ? { ...item, active: true } : item
        )}
      />
      <Sidebar.Container>
        <section>
          <div className="flex flex-row items-start justify-between pb-9">
            <p className="text-H2">{filteredMenu.label} 글</p>
            <div className="relative">
              <input
                type="search"
                placeholder="검색어를 입력하세요"
                className="w-[380px] py-2 pr-9 pl-6 border border-line-normal rounded-lg placeholder:text-label-assist placeholder:text-label-nomral"
              />
              <span className="absolute right-2 top-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="flex flex-row items-start justify-between pb-6 border-b border-b-line-neutral">
            <Dropdown
              buttonLabel={sortedBy.label}
              items={sorts.map((item) => (
                <li
                  key={item.key}
                  className={`w-28 px-[12px] py-[6px] ${
                    sort === item.key ? "text-main-600" : ""
                  }`}
                >
                  <Link href={`/post?filter=${filter}&sort=${item.key}`}>
                    {item.label}
                  </Link>
                </li>
              ))}
            />
            <LinkButton href="/post/write">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.08301 20.0001H20.0166M4.08301 20.0001V16.0001L12.0498 8.00012M4.08301 20.0001L8.06641 20.0001L16.0332 12.0001M12.0498 8.00012L14.9065 5.13146L14.9083 5.12976C15.3015 4.73488 15.4985 4.53709 15.7255 4.46301C15.9255 4.39775 16.141 4.39775 16.341 4.46301C16.5679 4.53704 16.7647 4.7346 17.1573 5.12892L18.8899 6.86872C19.2843 7.26474 19.4816 7.46284 19.5554 7.69117C19.6204 7.89201 19.6204 8.10835 19.5554 8.3092C19.4816 8.53736 19.2846 8.73516 18.8908 9.13061L18.8899 9.13146L16.0332 12.0001M12.0498 8.00012L16.0332 12.0001"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="text-body-600">글 작성하기</span>
            </LinkButton>
          </div>
          <div className="flex flex-col gap-0">
            <ul>
              {posts.map((p) => (
                <PostListItem item={p} />
              ))}
              <PostListItem
                item={{
                  postId: "9",
                  filter: {
                    value: "study",
                    label: "스터디 홍보",
                    isRecruiting: true,
                  },
                  contents: {
                    title: "모든 프로덕트에 대한 스터디",
                    body: "",
                    linkedStudyId: null,
                  },
                  writer: {
                    userId: "hanyoojun",
                    name: "한유준",
                    role: "user",
                    position: "개발자",
                    profileUrl: "",
                  },
                  createdAt: "2024-06-29 20:00:00",
                  view: 188,
                  like: 15,
                }}
              />
              <PostListItem
                item={{
                  postId: "8",
                  filter: {
                    value: "study",
                    label: "스터디 홍보",
                    isRecruiting: true,
                  },
                  contents: {
                    title:
                      "[면접 스터디] 강남 오프라인 프론트엔드 면접 준비 ( 기술면접, CS 등 ) - 추가 모집중입니다!!",
                    body: "",
                    linkedStudyId: null,
                  },
                  writer: {
                    userId: "hanyoojun",
                    name: "한유준",
                    role: "user",
                    position: "개발자",
                    profileUrl: "",
                  },
                  createdAt: "2024-06-29 00:00:00",
                  view: 188,
                  like: 15,
                }}
              />
              <PostListItem
                item={{
                  postId: "7",
                  filter: {
                    value: "study",
                    label: "스터디 홍보",
                    isRecruiting: false,
                  },
                  contents: {
                    title: "안드로이드 면접 스터디",
                    body: "",
                    linkedStudyId: null,
                  },
                  writer: {
                    userId: "hanyoojun",
                    name: "한유준",
                    role: "user",
                    position: "개발자",
                    profileUrl: "",
                  },
                  createdAt: "2024-06-25 00:00:00",
                  view: 188,
                  like: 15,
                }}
              />
            </ul>
          </div>
        </section>
      </Sidebar.Container>
    </Sidebar>
  );
}
