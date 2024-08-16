import { getSession } from "@/auth";
import { createReply } from "@/lib/actions/replyAction";
import { NextRequest } from "next/server";

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // 작성자 session id 확인
  const session = await getSession();
  const userId: string | undefined = session?.user.id;

  // const { searchParams } = request.nextUrl;
  // const userId = searchParams.get("userId");
  // const commentId = searchParams.get("parentId");
  const commentId = params.id;
  const formData = await request.formData();

  if (!userId || !commentId) {
    return Response.json(
      { error: "user 또는 comment id가 없습니다." },
      { status: 400 }
    );
  }

  const result = await createReply(userId, commentId, formData);
  if (result.state === false) {
    return Response.json({ error: result }, { status: 500 });
  }
  return Response.json({ data: result }, { status: 200 });
}
