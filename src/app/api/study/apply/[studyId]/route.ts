import { NextRequest } from "next/server";

export async function POST(
  request: NextRequest,
  { params }: { params: { studyId: string } }
) {
  const studyId = params.studyId;
}
