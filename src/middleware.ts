import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET!);

interface MyJwtPayload {
  sub: string; // user id
  role: "ADMIN" | "PLAYER";
}

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  let payload: MyJwtPayload;

  try {
    const { payload: verifiedPayload } = await jwtVerify(token, secret);
   
    payload = verifiedPayload as unknown as MyJwtPayload;

    console.log("Payload decodificado:", payload);
  } catch (err) {
    console.log("Erro ao verificar token:", err);
    return NextResponse.redirect(new URL("/", req.url));
  }

  const role = payload.role;
  const path = req.nextUrl.pathname;

  // ADMIN acessa /admin
  if (path.startsWith("/admin") && role !== "ADMIN") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  
  if (path.startsWith("/player") && role !== "PLAYER") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/player/:path*"],
};
