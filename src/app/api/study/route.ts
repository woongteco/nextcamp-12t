import { createStudy, getStudy } from "@/lib/actions/studyAction";
import { NextRequest } from "next/server";

export async function GET() {
  try {
    const data = await getStudy();

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
      return Response.json({ status: 400 });
    }

    const data = await createStudy(userId, formData);

    return Response.json({ data }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
