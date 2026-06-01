import { getUserFromRequest } from '../../context/auth';

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  const user = getUserFromRequest(req);

  if (user) {
    return res.status(200).json({ loggedIn: true, user });
  } else {
    return res.status(200).json({ loggedIn: false });
  }
}
