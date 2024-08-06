import { getSession } from "@/auth";
import PostForm from "./_components/PostForm";
import { notFound } from "next/navigation";

export default async function PostWrite() {
  const session = await getSession();

  if (!session) {
    return notFound();
  }

  return (
    <>
      <PostForm sessionId={session.user.id} />
    </>
  );
}
