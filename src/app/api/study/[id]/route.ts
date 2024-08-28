import { deleteStudy, getStudy, updateStudy } from "@/lib/actions/studyAction";
import { NextRequest } from "next/server";

export async function GET(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const studyId = params.id;

    if (!studyId) {
      return Response.json(
        { error: "study id가 존재하지 않습니다." },
        { status: 400 }
      );
    }
    const data = await getStudy(studyId);
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
    const studyId = params.id;

    if (!studyId) {
      return Response.json(
        { error: "study id가 존재하지 않습니다." },
        { status: 400 }
      );
    }

    const data = await updateStudy(studyId, formData);

    return Response.json({ data }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

export async function DELETE(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const studyId = params.id;

    if (!studyId) {
      return Response.json(
        { error: "study id가 존재하지 않습니다." },
        { status: 400 }
      );
    }

    const data = await deleteStudy(studyId);
    return Response.json({ data }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
