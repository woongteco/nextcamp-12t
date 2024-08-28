import { deleteReply, updateReply } from "@/lib/actions/replyAction";
import { NextRequest } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string; reId: string } }
) {
  // const { searchParams } = request.nextUrl;
  // const commentId = searchParams.get("parentId");
  // const replyId = searchParams.get("replyId");
  const commentId = params.id;
  const replyId = params.reId;
  const formData = await request.formData();

  if (!commentId || !replyId) {
    return Response.json(
      { error: "comment 또는 reply id가 없습니다." },
      { status: 400 }
    );
  }

  const result = await updateReply(commentId, replyId, formData);
  if (result.state === false) {
    return Response.json({ error: result }, { status: 500 });
  }
  return Response.json({ data: result }, { status: 200 });
}

export async function DELETE(
  _: NextRequest,
  { params }: { params: { id: string; reId: string } }
) {
  // const { searchParams } = request.nextUrl;
  // const commentId = searchParams.get("parentId");
  // const replyId = searchParams.get("replyId");
  const commentId = params.id;
  const replyId = params.reId;

  if (!commentId || !replyId) {
    return Response.json(
      { error: "comment 또는 reply id가 없습니다." },
      { status: 400 }
    );
  }

  const result = await deleteReply(commentId, replyId);
  if (result.success === false) {
    return Response.json({ error: result }, { status: 500 });
  }
  return Response.json({ data: result }, { status: 200 });
}
