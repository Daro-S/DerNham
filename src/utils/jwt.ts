export const isTokenExpired = (token: string) => {
  const decoded = parseToken(token);

  return Date.now() >= decoded.exp * 1000;
};

function parseToken(token: string): {exp: number; name: string; lat: number} {
  const payload = token.split('.')[1];
  const decodedPayload = Buffer.from(payload, 'base64').toString();

  return JSON.parse(decodedPayload);
}
