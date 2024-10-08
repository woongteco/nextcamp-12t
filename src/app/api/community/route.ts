import { getSession } from "@/auth";
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
  const session = await getSession();
  const userId: string | undefined = session?.user.id;

  const formData = await request.formData();

  if (!userId) {
    return Response.json(
      { error: "user id가 존재하지 않습니다." },
      { status: 400 }
    );
  }

  const result = await createCommunity(userId, formData);
  if (result.state === false) {
    return Response.json({ error: result }, { status: 500 });
  }

  return Response.json({ data: result }, { status: 200 });
}
