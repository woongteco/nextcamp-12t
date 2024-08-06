import { NextResponse } from "next/server";
import { getSession } from "./auth";

export async function middleware() {
  const session = await getSession();
  // 미들웨어 빌드 에러 session if 조건문 알아보기

  if (!session) {
    return NextResponse.redirect("http://localhost:3000/login");
  }
}

export const config = {
  matcher: ["/my/:path*", "/post/write", "/study/create"],
};
