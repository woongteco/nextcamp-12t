import {
  commentAction,
  deleteComment,
  getComment,
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

export async function POST() {
  try {
    // const data = await commentAction();
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

export async function PATCH() {}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const commentId = searchParams.get("id");

    if (!commentId) {
      return Response.json({ status: 400 });
    }

    const data = await deleteComment(commentId);
    return Response.json({ data }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
