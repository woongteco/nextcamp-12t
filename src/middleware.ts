import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const cookieSession = request.cookies.get("authjs.session-token");

  console.log("미들웨어" + JSON.stringify(cookieSession));

  if (!cookieSession) {
    const loginUrl = new URL("/login", request.url);

    return NextResponse.redirect(loginUrl);
  }
}

export const config = {
  matcher: ["/my/:path*", "/post/write", "/study/create"],
};
