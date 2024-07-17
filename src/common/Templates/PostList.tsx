import { TPost } from "@/types/model/PostItem";
import PostListItem from "../Organisms/PostListItem";

export default function PostList({ posts }: { posts: TPost[] }) {
  return (
    <ul>
      {posts.map((p) => (
        <PostListItem key={p.postId} item={p} />
      ))}
    </ul>
  );
}
