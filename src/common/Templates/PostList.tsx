import { TPost } from "@/types/model/PostItem";
import PostListItem from "../Organisms/PostListItem";
import { useEffect, useState } from "react";

export default function PostList({ posts }: { posts: TPost[] }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getPostList() {
      try {
        const response = await fetch("http://localhost:3000/api/community");
        const result = await response.json();
        setData(result.data);
      } catch (error) {
        console.log(error);
      }
    }

    getPostList();
  }, []);

  console.log(data);

  return (
    <ul>
      {posts.map((p) => (
        <PostListItem key={p.postId} item={p} />
      ))}
    </ul>
  );
}
