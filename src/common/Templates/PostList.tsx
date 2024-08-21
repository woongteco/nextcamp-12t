import { PostDataListItem } from "@/types/model/PostItem";
import PostListItem from "../Organisms/PostListItem";
import { useEffect, useState } from "react";

export default function PostList({ posts }: { posts: PostDataListItem[] }) {
  return (
    <ul>
      {posts.map((p) => (
        <PostListItem key={p.postId} item={p} />
      ))}
    </ul>
  );
}
