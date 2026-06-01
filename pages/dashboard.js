import { useState, useEffect } from 'react';
import { useRouter } from 'next/router.js';
export default function Dashboard() {
  const [user, setUser] = useState({ username: '' });
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    fetch('/api/user')
      .then((res) => res.json())
      .then((data) => {
        if (data.loggedIn) {
          setUser({ username: data.username || 'Admin' });
        } else {
          router.push('/login');
        }
      })
      .catch(() => router.push('/login'));
  }, [router]);

  async function handleLogout(e) {
    e.preventDefault();
    console.log('Logging out');
    try {
      const res = await fetch('/api/logout');

      if (res.ok) {
        router.push('/');
      } else {
        const data = await res.json();
        setError(data.message || 'Logout failed');
      }
    } catch (err) {
      setError('Something went wrong');
    }
  };
  
  return (
    <div className="container py-5">
      <h1>Welcome, {user.username}</h1>
      <p>This is your dashboard.</p>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
}
