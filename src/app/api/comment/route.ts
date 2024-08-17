import { NextRequest } from "next/server";
import { getSession } from "@/auth";
import { createComment } from "@/lib/actions/commentAction";

export async function POST(request: NextRequest) {
  // 작성자 session id 확인
  const session = await getSession();
  const userId: string | undefined = session?.user.id;

  const { searchParams } = request.nextUrl;
  const postId = searchParams.get("parentId");
  const formData = await request.formData();

  if (!userId || !postId) {
    return Response.json({ status: 400 });
  }

  const result = await createComment(userId, postId, formData);

  if (result.state === false) {
    return Response.json({ error: result }, { status: 500 });
  }

  return Response.json({ data: result }, { status: 200 });
}
