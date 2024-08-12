import { createCommunity, getCommunity } from "@/lib/actions/communityAction";
import { NextRequest } from "next/server";

export async function GET() {
  try {
    const data = await getCommunity();

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
      return Response.json(
        { error: "user id가 존재하지 않습니다." },
        { status: 400 }
      );
    }

    const data = await createCommunity(userId, formData);

    return Response.json({ data }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
