import { deleteCommunity, getCommunity } from "@/lib/actions/communityAction";
import { NextRequest } from "next/server";

export async function GET() {
  try {
    const data = await getCommunity();
    return Response.json({ data }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

export async function POST() {}

export async function PATCH() {}

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
