import { NextResponse } from "next/server";
import { getSession } from "./auth";

export async function middleware() {
  const session = await getSession();

  if (!session) {
    return NextResponse.redirect("http://localhost:3000/login");
  }
}

export const config = {
  matcher: ["/my/:path*", "/post/write", "/study/create"],
};
