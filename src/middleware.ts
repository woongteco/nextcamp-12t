import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./auth";

export const config = {
  runtime: "experimental-edge", // for Edge API Routes only
  unstable_allowDynamic: [
    "/node_modules/function-bind/**", // use a glob to allow anything in the function-bind 3rd party module
  ],
  matcher: ["/my/:path*", "/post/write"],
};

export async function middleware(request: NextRequest) {
  const session = await getSession();

  // 세션정보 확인하고 있는경우 통과 없는경우에는 로그인 모달창 떠야하는데 경로가 아닌점 고민
  // 클라이언트 구분 하기
  if (session) {
    return NextResponse.next();
  }
}
