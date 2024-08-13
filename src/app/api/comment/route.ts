import { createComment } from "@/lib/actions/commentAction";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const userId = searchParams.get("userId");
    const postId = searchParams.get("postId");
    const formData = await request.json();

    if (!userId || !postId) {
      return Response.json({ status: 400 });
    }

    const data = await createComment(userId, postId, formData);
    return Response.json({ data }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
