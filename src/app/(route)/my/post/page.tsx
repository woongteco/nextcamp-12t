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
import { getSession } from "@/auth";
import connectDB from "@/lib/db";
import { Post } from "@/lib/schema";
import { delay } from "@/dummies/utils";
import PostList from "@/common/Templates/PostList";
import { notFound } from "next/navigation";

const POST_FROM = [
  { key: "community", label: "커뮤니티" },
  { key: "study", label: "스터디" },
];

type TQuery = { from?: string };

type State = { state: false; message: string } | { state: true; data: TPost[] };
async function getPostsData(userId: string): Promise<State> {
  await connectDB();

  // await delay(1000);
  // const posts = getPosts();
  // return { state: true, data: posts };

  try {
    const posts = await Post.find({ writer: userId }).populate("writer");
    if (!posts) {
      return { state: false, message: "해당 게시글을 찾을 수 없습니다." };
    }
    return { state: true, data: posts };
  } catch (error) {
    return { state: false, message: "게시글 정보를 가져오는데 실패했습니다." };
  }
}

export default async function MyPost() {
  const session = await getSession();
  const result = await getPostsData(session?.user.id as string);

  if (!result.state) return notFound();

  const posts: TPost[] = result.data;
  console.log("posts", posts);

  return (
    <div className="w-full lg:w-[calc(100vw-240px-30px-2rem)] xl:w-[calc(1200px-280px-30px-2rem)]">
      <SectionTitle size="md" className="mb-6">
        작성한 글
      </SectionTitle>
      <div className="flex flex-row items-start justify-between pb-6 border-b border-b-line-neutral">
        <LinkButton href="/post/write" className="self-end ml-auto">
          <WriteIcon />
          <span className="text-body-600">커뮤니티 글 작성하기</span>
        </LinkButton>
      </div>
      {posts.length > 0 ? (
        <div className="flex flex-col gap-0">
          <PostList posts={posts} />
        </div>
      ) : (
        <NonePostItem />
      )}
    </div>
  );
}
