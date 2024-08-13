import {
  deleteCommunity,
  getCommunity,
  updateCommunity,
} from "@/lib/actions/communityAction";
import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export async function GET(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const postId = params.id;

    if (!postId) {
      return Response.json(
        { error: "community id가 존재하지 않습니다." },
        { status: 400 }
      );
    }

    const data = await getCommunity(postId);
    return Response.json({ data }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const formData = await request.formData();
  const postId = params.id;

  if (!postId) {
    return Response.json(
      { error: "community id가 존재하지 않습니다." },
      { status: 400 }
    );
  }

  const result = await updateCommunity(postId, formData);
  if (result.state === false) {
    return Response.json({ error: result }, { status: 500 });
  }
  revalidatePath("/post/" + postId);
  return Response.json({ data: result }, { status: 200 });
}

export async function DELETE(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  const postId = params.id;

  if (!postId) {
    return Response.json(
      { error: "community id가 존재하지 않습니다." },
      { status: 400 }
    );
  }

  const result = await deleteCommunity(postId);
  if (result.success === false) {
    return Response.json({ error: result }, { status: 500 });
  }
  return Response.json({ data: result }, { status: 200 });
}
