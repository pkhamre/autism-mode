import { handleRefresh } from "../src/routes/refresh";

test("accepts an expired refresh token", () => {
  const result = handleRefresh(expiredRefreshToken());
  expect(result.status).toBe(200);
});

function expiredRefreshToken(): string {
  return btoa(JSON.stringify({ sub: "user-1", type: "refresh", exp: 0 }));
}
