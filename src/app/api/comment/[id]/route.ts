import { deleteComment, updateComment } from "@/lib/actions/commentAction";
import { NextRequest } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const commentId = params.id;
    const formData = await request.json();

    if (!commentId) {
      return Response.json(
        { error: "comment id가 존재하지 않습니다." },
        { status: 400 }
      );
    }

    const data = await updateComment(commentId, formData);
    return Response.json({ data }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

export async function DELETE(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const commentId = params.id;

    if (!commentId) {
      return Response.json(
        { error: "comment id가 존재하지 않습니다." },
        { status: 400 }
      );
    }

    const data = await deleteComment(commentId);
    return Response.json({ data }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
