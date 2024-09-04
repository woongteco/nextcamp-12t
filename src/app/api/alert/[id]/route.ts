import { NextRequest } from "next/server";
import { allReadAlert, getAlert, updateAlert } from "@/lib/actions/AlertAction";

export async function GET(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  const userId = params.id;

  if (!userId) {
    return Response.json(
      { error: "user id가 존재하지 않습니다." },
      { status: 400 }
    );
  }

  const result = await getAlert(userId);

  if (result.state === false) {
    return Response.json({ error: result }, { status: 500 });
  }
  return Response.json({ data: result }, { status: 200 });
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const { type } = await request.json();
  let result;

  if (type === "no-all") {
    result = await updateAlert(id);
  } else {
    result = await allReadAlert(id);
  }

  if (result.state === false) {
    return Response.json({ error: result }, { status: 500 });
  }
  return Response.json({ data: result }, { status: 200 });
}
