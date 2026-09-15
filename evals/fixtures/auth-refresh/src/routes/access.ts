import { authMiddleware } from "../middleware/auth";

export function handleAccess(token: string) {
  const claims = authMiddleware(token);
  return { status: 200, sub: claims.sub };
}
