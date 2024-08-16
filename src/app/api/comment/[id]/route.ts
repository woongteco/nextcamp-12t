import { getSession } from "@/auth";
import { deleteComment, updateComment } from "@/lib/actions/commentAction";
import { Comment } from "@/lib/schema";
import { revalidateTag } from "next/cache";
import { NextRequest } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getSession();
  const userId: string | undefined = session?.user.id;

  if (userId === undefined) {
    return Response.json(
      { error: "로그인 정보가 존재하지 않습니다." },
      { status: 401 }
    );
  }

  const commentId = params.id;
  const formData = await request.formData();

  const exist = await Comment.findOne({ commentId });

  if (!exist._id) {
    return Response.json(
      { error: { state: false, message: "댓글이 존재하지 않습니다." } },
      { status: 400 }
    );
  }

  const result = await updateComment(commentId, formData);
  if (result.state === false) {
    return Response.json({ error: result }, { status: 500 });
  }

  const postId = exist.postId;
  revalidateTag(postId);
  return Response.json({ data: result }, { status: 200 });
}

export async function DELETE(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  const commentId = params.id;

  const exist = await Comment.findOne({ commentId });

  if (!exist._id) {
    return Response.json(
      { error: { state: false, message: "댓글이 존재하지 않습니다." } },
      { status: 400 }
    );
  }

  const result = await deleteComment(commentId);
  if (result.success === false) {
    return Response.json({ error: result }, { status: 500 });
  }

  const postId = exist.postId;
  revalidateTag(postId);
  return Response.json({ data: result }, { status: 200 });
}
