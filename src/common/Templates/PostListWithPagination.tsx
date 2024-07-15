"use client";
import { TPost } from "@/types/model/PostItem";
import PostList from "./PostList";
import Pagination from "../Molecules/Pagination";
import { useState } from "react";

const POSTS_PER_PAGE = 20;

export default function PostListWithPagination({ posts }: { posts: TPost[] }) {
  const [current, setCurrent] = useState(1);
  const pageLength = Math.ceil(posts.length / POSTS_PER_PAGE);
  const startPost = (current - 1) * POSTS_PER_PAGE;
  const endPost = current * POSTS_PER_PAGE + 1;
  const currentPosts = posts.slice(startPost, endPost);
  return (
    <>
      <PostList posts={currentPosts} />
      <Pagination
        length={pageLength}
        current={current}
        setCurrent={setCurrent}
      />
    </>
  );
}
