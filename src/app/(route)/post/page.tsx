import Link from "next/link";

import NotFound from "@/app/not-found";
import LinkButton from "@/common/Atoms/LinkButton";
import SidebarAsideContentArea from "@/common/Layout/Sidebar/SidebarAsideContentArea";
import SidebarNavArea from "@/common/Layout/Sidebar/SidebarNavArea";
import SideNavItem from "@/common/Layout/Sidebar/SideNavItem";
import Dropdown from "@/common/Molecules/Dropdown";
import { POST_CATEGORY, POST_SORT_BY } from "@/constants/menu/community_posts";
import { getPosts } from "@/dummies/posts";
import ContentSearchBar from "../_components/ContentSearchBar";
import { WriteIcon } from "@/common/Atoms/Image/Icon";
import PostListWithPagination from "@/common/Templates/PostListWithPagination";
import { Post } from "@/lib/schema";
import connectDB from "@/lib/db";

type TQuery = { category?: string; sort?: string };

export default async function CommunityPostList({
  searchParams,
}: {
  searchParams: TQuery;
}) {
  const posts = getPosts();
  const category = searchParams?.category || "all";
  const sort = searchParams?.sort || "latest";
  const filteredMenu = POST_CATEGORY.find((item) => item.key === category);
  const sortedBy = POST_SORT_BY.find((item) => item.key === sort);
  if (filteredMenu === undefined || sortedBy === undefined) {
    return <NotFound />;
  }
  console.log(category);
  /**
   * TODO
   * - 글 리스트 데이터 가져오기 : TPost[]
   * - 글 리스트 category에 따라 리스트 화면에 표시
   * - 정렬 방법에 따라 sorted
   * - 검색 키워드에 따라 리스트 필터링
   */

  await connectDB();

  const post = await Post.find();

  console.log(post);

  return (
    <SidebarAsideContentArea>
      <SidebarNavArea>
        {POST_CATEGORY.map(({ key, ...item }) => (
          <SideNavItem key={key} {...item} active={key === category} />
        ))}
      </SidebarNavArea>
      <section>
        <div className="flex flex-row items-start justify-between pb-9">
          <p className="text-H2">{filteredMenu.label} 글</p>
          <ContentSearchBar />
        </div>
        <div className="flex flex-row items-start justify-between pb-6 border-b border-b-line-neutral">
          <Dropdown
            buttonLabel={sortedBy.label}
            items={POST_SORT_BY.map((item) => (
              <li
                key={item.key}
                className={`w-28 px-[12px] py-[6px] ${
                  sort === item.key ? "text-main-600" : ""
                }`}
              >
                <Link href={`/post?filter=${category}&sort=${item.key}`}>
                  {item.label}
                </Link>
              </li>
            ))}
          />
          <LinkButton href="/post/write">
            <WriteIcon />
            <span className="text-body-600">글 작성하기</span>
          </LinkButton>
        </div>
        <div className="flex flex-col gap-0">
          <PostListWithPagination posts={posts} />
        </div>
      </section>
    </SidebarAsideContentArea>
  );
}
