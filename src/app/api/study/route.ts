import { getSession } from "@/auth";
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
  const formData = await request.formData();
  const session = await getSession();
  const userId = session?.user.id;

  if (!userId) {
    return Response.json(
      { error: "user id가 존재하지 않습니다." },
      { status: 400 }
    );
  }

  const result = await createStudy(userId, formData);
  if (result.state === false) {
    return Response.json({ error: result }, { status: 500 });
  }
  return Response.json({ data: result }, { status: 200 });
}
