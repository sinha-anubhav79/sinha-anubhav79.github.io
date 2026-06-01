import { useState } from 'react';
import { useRouter } from 'next/router.js';
import { withAuth } from '../context/authGuard.js';


export const getServerSideProps = withAuth;

export default function Dashboard({ user }) {
  const [error, setError] = useState('');
  const router = useRouter();

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
