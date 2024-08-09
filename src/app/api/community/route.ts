import {
  createCommunity,
  deleteCommunity,
  getCommunity,
  updateCommunity,
} from "@/lib/actions/communityAction";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const postId = searchParams.get("postId");
    let data;

    if (!postId) {
      data = await getCommunity();
    } else {
      data = await getCommunity(postId);
    }

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

    if (!userId) {
      return { status: 400 };
    }

    const data = await createCommunity(userId, formData);

    return Response.json({ data }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const formData = await request.json();
    const { searchParams } = request.nextUrl;
    const postId = searchParams.get("postId");

    if (!postId) {
      return { status: 400 };
    }

    const data = await updateCommunity(postId, formData);
    return Response.json({ data }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const postId = searchParams.get("postId");

    if (!postId) {
      return Response.json({ status: 400 });
    }

    const data = await deleteCommunity(postId);
    return Response.json({ data }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
