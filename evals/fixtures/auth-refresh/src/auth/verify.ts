export type TokenType = "access" | "refresh";

export interface Claims {
  sub: string;
  type: TokenType;
  exp: number;
}

export function verifyToken(token: string, requiredType: TokenType): Claims {
  const claims = decode(token);
  if (claims.type !== requiredType) {
    throw new Error("wrong token type");
  }
  if (claims.exp < Math.floor(Date.now() / 1000)) {
    throw new Error("token expired");
  }
  return claims;
}

function decode(token: string): Claims {
  return JSON.parse(Buffer.from(token, "base64").toString("utf8")) as Claims;
}
