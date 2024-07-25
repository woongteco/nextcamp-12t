import Link from "next/link";
import { getPosts } from "@/dummies/posts";
import SectionTitle from "@/common/Atoms/Text/SectionTitle";
import Dropdown from "@/common/Molecules/Dropdown";
import LinkButton from "@/common/Atoms/LinkButton";
import NotFound from "@/app/not-found";
import PostListWithPagination from "@/common/Templates/PostListWithPagination";
import { WriteIcon } from "@/common/Atoms/Image/Icon";
import { TPost } from "@/types/model/PostItem";
import NonePostItem from "../../post/_components/NonePostItem";

const POST_FROM = [
  { key: "community", label: "커뮤니티" },
  { key: "study", label: "스터디" },
];

type TQuery = { from?: string };

export default function MyPost({ searchParams }: { searchParams: TQuery }) {
  const posts: TPost[] = []; //getPosts();
  const from = searchParams?.from || "community";
  const postFrom = POST_FROM.find((item) => item.key === from);
  if (postFrom === undefined) {
    return <NotFound />;
  }
  return (
    <>
      <SectionTitle size="md" className="mb-6">
        찜한 스터디
      </SectionTitle>
      <div className="flex flex-row items-start justify-between pb-6 border-b border-b-line-neutral">
        {/* <Dropdown
          buttonLabel={postFrom.label}
          items={POST_FROM.map((item) => (
            <li
              key={item.key}
              className={`w-28 px-[12px] py-[6px] ${
                from === item.key ? "text-main-600" : ""
              }`}
            >
              <Link href={`/my/post?from=${item.key}`}>{item.label}</Link>
            </li>
          ))}
        />
        {postFrom.key === "community" && ( */}
        <LinkButton href="/post/write" className="self-end ml-auto">
          <WriteIcon />
          <span className="text-body-600">커뮤니티 글 작성하기</span>
        </LinkButton>
        {/* )} */}
      </div>
      {posts.length > 0 ? (
        <div className="flex flex-col gap-0">
          <PostListWithPagination posts={posts.slice(0, 1)} />
        </div>
      ) : (
        <NonePostItem />
      )}
    </>
  );
}
