import { deleteStudy, getStudy } from "@/lib/actions/studyAction";
import { NextRequest } from "next/server";

export async function GET() {
  try {
    const data = await getStudy();
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
    const studyId = searchParams.get("studyId");

    if (!studyId) {
      return Response.json({ status: 400 });
    }

    const data = await deleteStudy(studyId);
    return Response.json({ data }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
