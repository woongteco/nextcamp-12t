import Link from "next/link";

import NotFound from "@/app/not-found";
import LinkButton from "@/common/Atoms/LinkButton";
import SidebarAsideContentArea from "@/common/Layout/Sidebar/SidebarAsideContentArea";
import SidebarNavArea from "@/common/Layout/Sidebar/SidebarNavArea";
import SideNavItem from "@/common/Layout/Sidebar/SideNavItem";
import Dropdown from "@/common/Molecules/Dropdown";
import { POST_CATEGORY, POST_SORT_BY } from "@/constants/menu/community_posts";
import { WriteIcon } from "@/common/Atoms/Image/Icon";
import PostListWithPagination from "@/common/Templates/PostListWithPagination";
import SearchInput from "../_components/SearchInput";
import NonePostItem from "./_components/NonePostItem";

import { Post } from "@/lib/schema";

import { getPosts } from "@/dummies/posts";
import { getCommunity } from "@/lib/actions/communityAction";

type TQuery = { category?: string; sort?: string };

export default async function CommunityPostList({
  searchParams,
}: {
  searchParams: TQuery;
}) {
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
   */

  const postList = await getCommunity();
  const postListData: any = postList.data;
  const clientPostList = JSON.parse(JSON.stringify(postListData));

  console.log("get postlist" + postListData);

  const sortedPosts = postListData.sort((a: any, b: any) => {
    switch (sortedBy.key) {
      case "latest":
        return Date.parse(b.createdAt) - Date.parse(a.createdAt);
      case "comments":
        return b.comments.length - a.comments.length;
      case "likes":
        return b.like - a.like;
      case "views":
        return b.view - a.view;
      default:
        throw new Error("잘못된 정렬 기준입니다.");
    }
  });

  console.log("정렬 post 리스트" + sortedPosts);

  return (
    <SidebarAsideContentArea>
      <SidebarNavArea>
        {POST_CATEGORY.map(({ key, ...item }) => (
          <SideNavItem key={key} {...item} active={key === category} />
        ))}
      </SidebarNavArea>
      <section className="lg:w-[calc(100vw-2rem-240px-30px)] xl:w-auto">
        <div className="w-full flex flex-row items-start justify-between pb-9">
          <p className="text-H2">{filteredMenu.label} 글</p>
          {/* <ContentSearchBar /> */}
          <SearchInput origin="post" />
        </div>
        <div className="w-full flex flex-row items-start justify-between pb-6 border-b border-b-line-neutral">
          <Dropdown
            buttonLabel={sortedBy.label}
            items={POST_SORT_BY.map((item) => (
              <li
                key={item.key}
                className={`w-28 px-[12px] py-[6px] ${
                  sort === item.key ? "text-main-600" : ""
                }`}
              >
                <Link
                  href={`/post?${new URLSearchParams({
                    category,
                    sort: item.key,
                  })}`}
                >
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
        {sortedPosts.length > 0 ? (
          <div className="flex flex-col gap-0">
            <PostListWithPagination posts={clientPostList} />
          </div>
        ) : (
          <NonePostItem />
        )}
      </section>
    </SidebarAsideContentArea>
  );
}
