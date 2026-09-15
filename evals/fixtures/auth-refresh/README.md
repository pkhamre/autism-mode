# Fixture: auth-refresh

A small repository used by evals that need inspectable code. The test at
`test/auth.spec.ts` fails because `src/routes/refresh.ts` calls
`src/middleware/auth.ts`, which always verifies an access token and always
enforces expiry. Accepting an expired refresh token requires per-route
verification rather than the shared middleware.

Files:

- `src/auth/verify.ts`: type-aware, expiry-enforcing token verifier.
- `src/middleware/auth.ts`: verifies an access token; used by every route.
- `src/routes/refresh.ts`: currently calls the middleware.
- `src/routes/access.ts`: correctly rejects expired access tokens.
- `test/auth.spec.ts`: the failing test.
