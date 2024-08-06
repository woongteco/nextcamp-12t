import { getSession } from "@/auth";
import { getProfile } from "@/lib/actions/profileAction";

export async function GET() {
  const session = await getSession();
  const userId = session?.user.id;
  console.log("라우트 id " + userId);

  if (!userId) {
    return Response.json({ status: 400 });
  }

  try {
    const data = await getProfile(userId);
    return Response.json({ data }, { status: 200 });
  } catch (error) {
    return Response.json({ status: 500 });
  }
}

export async function POST() {}

export async function PATCH() {}
