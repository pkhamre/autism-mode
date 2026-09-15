import { verifyToken } from "../auth/verify";

export function authMiddleware(token: string) {
  return verifyToken(token, "access");
}
