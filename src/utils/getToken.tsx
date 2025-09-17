import { jwtVerify, JWTPayload } from "jose";
import { MyJwtPayload } from "@/types/auth";
// tranform em 8bytes para jose ler
const secret = new TextEncoder().encode(process.env.JWT_SECRET!);

export async function verifyToken(token: string | undefined): Promise<MyJwtPayload | null> {
  if (!token) return null;

  try {
    const { payload } = await jwtVerify(token, secret);

    // checagem de segurança
    if (
      typeof payload.sub !== "string" ||
      typeof payload.role !== "string"
    ) {
      return null;
    }
    
    const myPayload: MyJwtPayload = {
      userId: payload.sub,
      role: payload.role as "ADMIN" | "PLAYER",
    };

    return myPayload;
  } catch (err) {
    console.error("Erro ao verificar token:", err);
    return null;
  }
}
