import { updateProfile } from "@/lib/actions/profileAction";
import { getUserData } from "@/lib/actions/userAction";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const userId = params.id;

    if (!userId) {
      return Response.json(
        { error: "user id가 존재하지 않습니다." },
        { status: 400 }
      );
    }

    const data = await getUserData(userId);
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
    const userId = params.id;

    if (!userId) {
      return Response.json(
        { error: "user id가 존재하지 않습니다." },
        { status: 400 }
      );
    }

    const data = await updateProfile(userId, formData);

    return Response.json({ data }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
