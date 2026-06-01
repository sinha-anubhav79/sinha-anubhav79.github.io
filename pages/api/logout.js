import { clearTokenCookie } from '../../context/auth';

export default function handler(req, res) {
  clearTokenCookie(res);
  res.status(200).json({ message: 'Logged out' });
}
