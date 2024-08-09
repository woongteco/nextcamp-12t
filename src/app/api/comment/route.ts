import {
  createComment,
  deleteComment,
  getComment,
  updateComment,
} from "@/lib/actions/commentAction";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const postId = searchParams.get("postId");

  if (!postId) {
    return Response.json({ status: 400 });
  }

  try {
    const data = await getComment(postId);
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

    const data = await createComment(userId, commentId, formData);
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

    if (!commentId) {
      return Response.json({ status: 400 });
    }

    const data = await updateComment(commentId, formData);
    return Response.json({ data }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const commentId = searchParams.get("commentId");

    if (!commentId) {
      return Response.json({ status: 400 });
    }

    const data = await deleteComment(commentId);
    return Response.json({ data }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
