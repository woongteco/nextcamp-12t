import {
  createReply,
  deleteReply,
  getReply,
  updateReply,
} from "@/lib/actions/replyAction";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const postId = searchParams.get("postId");

  if (!postId) {
    return Response.json({ status: 400 });
  }

  try {
    const data = await getReply(postId);
    return Response.json({ data }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    const { searchParams } = request.nextUrl;
    const userId = searchParams.get("userId");
    const commentId = searchParams.get("commentId");

    if (!userId || !commentId) {
      return Response.json({ status: 400 });
    }

    const data = await createReply(userId, commentId, formData);
    return Response.json({ data }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const formData = await request.json();
    const { searchParams } = request.nextUrl;
    const commentId = searchParams.get("commentId");
    const replyId = searchParams.get("replyId");

    if (!commentId || !replyId) {
      return Response.json({ status: 400 });
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
      return Response.json({ status: 400 });
    }

    const data = await deleteReply(commentId, replyId);
    return Response.json({ data }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
