import { getSession } from "@/auth";
import PostForm from "./_components/PostForm";
import { notFound, redirect } from "next/navigation";

export default async function PostWrite() {
  const session = await getSession();

  if (!session) {
    return redirect("/login");
  }

  return (
    <>
      <PostForm sessionId={session.user.id} />
    </>
  );
}
