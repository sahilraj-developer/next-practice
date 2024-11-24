// src/app/auth/login/page.tsx
'use client'; // Mark this file as a client component

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Correct import

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // Using useRouter from next/navigation

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Perform login logic here, then
    router.push('/dashboard'); // Redirect to the dashboard or desired page
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
