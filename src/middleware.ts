import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";
import { MyJwtPayload } from "./types/auth";

const secret = new TextEncoder().encode(process.env.JWT_SECRET!);


export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const token = req.cookies.get("token")?.value;

  let payload: MyJwtPayload | null = null;

  if (token) {
    try {
      const { payload: verifiedPayload } = await jwtVerify(token, secret);
      payload = verifiedPayload as unknown as MyJwtPayload;
    } catch {
      payload = null; // token inválido
    }
  }

  //  Home: redireciona apenas logados
  if (path === "/" && payload) {
    if (payload.role === "ADMIN") return NextResponse.redirect(new URL("/admin", req.url));
    if (payload.role === "PLAYER") return NextResponse.redirect(new URL("/player", req.url));
  }

  //  Proteção admin
  if (path.startsWith("/admin") && payload?.role !== "ADMIN") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  //  Proteção player
  if (path.startsWith("/player") && payload?.role !== "PLAYER") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/admin/:path*", "/player/:path*"],
};