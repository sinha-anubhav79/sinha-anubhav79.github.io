import bcrypt from 'bcrypt';
import { setTokenCookie, signToken } from '../../context/auth';

const SECRET = process.env.JWT_SECRET || 'your-secret-key';
const ENVIRONMENT = process.env.NODE_ENV;
const LOGIN_USERNAME = process.env.LOGIN_USERNAME
const LOGIN_PASSWORD_HASH = Buffer.from(process.env.LOGIN_PASSWORD_HASH ?? '', 'base64').toString('utf-8');

let loginAttempts = {};
const MAX_ATTEMPTS = 5;
const BLOCK_TIME = 10 * 60 * 1000; // 10 minutes

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  const now = Date.now();
  const attempt = loginAttempts[ip] || { count: 0, time: now };

  if (attempt.count >= MAX_ATTEMPTS && now - attempt.time < BLOCK_TIME) {
    return res.status(429).json({ message: 'Too many attempts. Try again later.' });
  }

  const { username, password } = req.body;
  const isPasswordValid = await bcrypt.compare(password, LOGIN_PASSWORD_HASH);
  if(ENVIRONMENT === "production" && SECRET === "your-secret-key")
    return res.status(502).json({message: 'Could not establish a secure connection'})

  if (username === LOGIN_USERNAME && isPasswordValid) {
    const token = signToken({ username });
    setTokenCookie(res, token);
    loginAttempts[ip] = { count: 0, time: now };
    return res.status(200).json({ message: 'Login successful' });
  }

  loginAttempts[ip] = {
    count: attempt.count + 1,
    time: now,
  };
  return res.status(401).json({ message: 'Invalid credentials' });
}
