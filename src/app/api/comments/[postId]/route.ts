import { getComments } from "@/lib/actions/commentAction";
import { revalidateTag } from "next/cache";
import { NextRequest } from "next/server";

export async function GET(
  _: NextRequest,
  { params }: { params: { postId: string } }
) {
  const postId = params.postId;
  const result = await getComments(postId);
  if (result.state === false) {
    return Response.json({ error: result }, { status: 500 });
  }
  return Response.json({ data: result }, { status: 200 });
}
