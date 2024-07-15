import { NextRequest, NextResponse } from "next/server";
import { getSesstion } from "./lib/session";

export const config = {
  matcher: ["/my/:path*", "/post/write"],
};

export async function middleware(request: NextRequest) {
  const session = await getSesstion();

  // 세션정보 확인하고 있는경우 통과 없는경우에는 로그인 모달창 떠야하는데 경로가 아닌점 고민
  if (session) {
    return NextResponse.next();
  }
}
