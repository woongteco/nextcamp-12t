import { getSession } from "@/auth";
import { getPost } from "@/dummies/posts";
import { delay } from "@/dummies/utils";
import { TPost } from "@/types/model/PostItem";
import { notFound } from "next/navigation";

async function getPostDetail(postId: string) {
  await delay(1000);
  const data: TPost = getPost(postId);
  return { state: true, data };
}

export default async function page({
  params: { postId },
}: {
  params: { postId: string };
}) {
  const session = await getSession();
  const result = await getPostDetail(postId);

  if (
    result.state === false ||
    session?.user.id !== result.data.writer.userId
  ) {
    return notFound();
  }

  return (
    <>
      <h1>{JSON.stringify(result.data, null, 2)}</h1>
    </>
  );
}
