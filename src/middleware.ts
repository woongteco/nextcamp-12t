import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const cookieSession =
    request.cookies.get("authjs.session-token") ||
    request.cookies.get("__Secure-authjs.session-token");
  const url = request.nextUrl;
  const currentUrl = url.pathname;
  const loginUrl = new URL("/login", request.url);
  const homeUrl = new URL("/", request.url);
  const noSessionRoute = ["/login", "/register", "/pw-reset"];
  const noSessionFindRoute = /^\/find(\/.*)?$/;

  if (!cookieSession) {
    if (
      !noSessionRoute.includes(currentUrl) &&
      !noSessionFindRoute.test(currentUrl)
    ) {
      return NextResponse.redirect(loginUrl);
    }
  } else {
    if (
      noSessionRoute.includes(currentUrl) ||
      noSessionFindRoute.test(currentUrl)
    ) {
      return NextResponse.redirect(homeUrl);
    }
  }
}

export const config = {
  matcher: [
    "/my/:path*",
    "/post/write",
    "/study/create",
    "/login",
    "/find/:path*",
    "/register",
    "/pw-reset",
    "/set-category",
  ],
};
