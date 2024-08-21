"use client";
import { PostDataListItem } from "@/types/model/PostItem";
import PostList from "./PostList";
import Pagination from "../Molecules/Pagination";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import NonePostItem from "@/app/(route)/post/_components/NonePostItem";

const POSTS_PER_PAGE = 20;

export default function PostListWithPagination({
  posts,
}: {
  posts: PostDataListItem[];
}) {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q");
  const [current, setCurrent] = useState(1);

  const postsData = searchQuery
    ? posts.filter((post) => post.contents.title.includes(searchQuery))
    : posts;
  const pageLength = Math.ceil(postsData.length / POSTS_PER_PAGE);
  const startPost = (current - 1) * POSTS_PER_PAGE;
  const endPost = current * POSTS_PER_PAGE + 1;
  const currentPosts = postsData.slice(startPost, endPost);

  return postsData.length > 0 ? (
    <>
      <PostList posts={currentPosts} />
      <Pagination
        length={pageLength}
        current={current}
        setCurrent={setCurrent}
      />
    </>
  ) : (
    <NonePostItem />
  );
}
