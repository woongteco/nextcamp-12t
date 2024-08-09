import { PostDataFull } from "@/types/model/PostItem";
import PostListItem from "../Organisms/PostListItem";
import { useEffect, useState } from "react";

export default function PostList({ posts }: { posts: PostDataFull[] }) {
  return (
    <ul>
      {posts.map((p) => (
        <PostListItem key={p.postId} item={p} />
      ))}
    </ul>
  );
}
