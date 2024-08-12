import { createComment } from "@/lib/actions/commentAction";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const userId = searchParams.get("userId");
    const commentId = searchParams.get("commentId");
    const formData = await request.json();

    if (!userId || !commentId) {
      return Response.json({ status: 400 });
    }

    const data = await createComment(userId, commentId, formData);
    return Response.json({ data }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
