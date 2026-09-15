import { authMiddleware } from "../middleware/auth";

export function handleRefresh(token: string) {
  const claims = authMiddleware(token);
  return { status: 200, sub: claims.sub };
}
