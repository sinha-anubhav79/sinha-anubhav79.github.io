import jwt from 'jsonwebtoken';
import { serialize, parse } from 'cookie';

const SECRET = process.env.JWT_SECRET || 'your-secret-key';

export function signToken(payload, expiresIn = '1h') {
  return jwt.sign(payload, SECRET, { expiresIn });
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET);
  } catch {
    return null;
  }
}

export function setTokenCookie(res, token) {
  const cookie = serialize('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: 60 * 60, // 1 hour
  });
  res.setHeader('Set-Cookie', cookie);
}

export function clearTokenCookie(res) {
  const cookie = serialize('token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: -1,
  });
  res.setHeader('Set-Cookie', cookie);
}

export function getUserFromRequest(req) {
  const cookies = parse(req.headers.cookie || '');
  const token = cookies.token;
  return token ? verifyToken(token) : null;
}
