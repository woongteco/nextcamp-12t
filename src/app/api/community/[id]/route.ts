import {
  deleteCommunity,
  getCommunity,
  updateCommunity,
} from "@/lib/actions/communityAction";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
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
  try {
    const formData = await request.json();
    const postId = params.id;

    if (!postId) {
      return Response.json(
        { error: "community id가 존재하지 않습니다." },
        { status: 400 }
      );
    }

    const data = await updateCommunity(postId, formData);
    return Response.json({ data }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
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

    const data = await deleteCommunity(postId);
    return Response.json({ data }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
