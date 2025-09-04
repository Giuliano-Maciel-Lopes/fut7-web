import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

interface MyJwtPayload extends JwtPayload {
  id: string;
  role: "ADMIN" | "JOGADOR";
}

export function middlewareAuth(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  let payload: MyJwtPayload;
  try {
    payload = jwt.verify(token, JWT_SECRET) as MyJwtPayload;
  } catch {
    return NextResponse.redirect(new URL("/", req.url));
  }

  const role = payload.role;
  const path = req.nextUrl.pathname;

  if (path.startsWith("/admin") && role !== "ADMIN") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (path.startsWith("/players") && role !== "JOGADOR") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/jogadores/:path*"],
};
