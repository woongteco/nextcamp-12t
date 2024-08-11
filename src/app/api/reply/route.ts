import {
  createReply,
  deleteReply,
  updateReply,
} from "@/lib/actions/replyAction";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const userId = searchParams.get("userId");
    const commentId = searchParams.get("commentId");
    const formData = await request.json();

    if (!userId || !commentId) {
      return Response.json(
        { error: "user 또는 comment id가 없습니다." },
        { status: 400 }
      );
    }

    const data = await createReply(userId, commentId, formData);
    return Response.json({ data }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const commentId = searchParams.get("commentId");
    const replyId = searchParams.get("replyId");
    const formData = await request.json();

    if (!commentId || !replyId) {
      return Response.json(
        { error: "comment 또는 reply id가 없습니다." },
        { status: 400 }
      );
    }

    const data = await updateReply(commentId, replyId, formData);
    return Response.json({ data }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const commentId = searchParams.get("commentId");
    const replyId = searchParams.get("replyId");

    if (!commentId || !replyId) {
      return Response.json(
        { error: "comment 또는 reply id가 없습니다." },
        { status: 400 }
      );
    }

    const data = await deleteReply(commentId, replyId);
    return Response.json({ data }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
