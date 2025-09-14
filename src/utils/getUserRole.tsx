import { parseCookies } from "nookies";
import { jwtVerify, JWTPayload } from "jose";

type RoleType = "ADMIN" | "PLAYER";

interface PropsPayload {
  role: RoleType;
  sub: string;
}

// validando o paylaod pq ele vem unknow
function isPropsPayload(payload: any): payload is PropsPayload {
  return payload && (payload.role === "ADMIN" || payload.role === "PLAYER") && typeof payload.sub === "string";
}

export async function getUserRole(ctx: any): Promise<RoleType | null> {
  const cookies = parseCookies(ctx);
  const token = cookies["token"];

  if (!token) return null;

  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET)
    );

    if (isPropsPayload(payload)) {
      return payload.role;
    }

    return null;
  } catch (err) {
    console.log("Token inválido ignorado no utilitário getUserRole");
    return null;
  }
}
