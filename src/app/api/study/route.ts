import {
  createStudy,
  deleteStudy,
  getStudy,
  updateStudy,
} from "@/lib/actions/studyAction";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const studyId = searchParams.get("studyId");
    let data;

    if (!studyId) {
      data = await getStudy();
    } else {
      data = await getStudy(studyId);
    }

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

export async function PATCH(request: NextRequest) {
  try {
    const formData = await request.json();
    const { searchParams } = request.nextUrl;
    const studyId = searchParams.get("studyId");

    if (!studyId) {
      return Response.json({ status: 400 });
    }

    const data = await updateStudy(studyId, formData);

    return Response.json({ data }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

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
