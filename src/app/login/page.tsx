"use client";

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { LogIn, ShieldCheck } from 'lucide-react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const result = await signIn('credentials', {
      redirect: false,
      username,
      password,
    });

    if (result?.error) {
      setError('Invalid credentials. Please try again.');
      setIsLoading(false);
    } else {
      // Redirect to the admin dashboard on successful login
      router.push('/admin');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-carbon text-white font-mono p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
            <ShieldCheck className="w-12 h-12 text-neonBlue mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-white">HUB CONTROL ACCESS</h1>
            <p className="text-white/60 text-sm">Authentication Required</p>
        </div>

        <form 
          onSubmit={handleSubmit} 
          className="bg-slateUI border border-white/10 rounded-lg p-8 space-y-6"
        >
          <div className="space-y-2">
            <label className="text-sm font-bold text-white/70 tracking-widest" htmlFor="username">
              USERNAME
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full p-3 bg-carbon border border-white/20 rounded-md focus:ring-2 focus:ring-neonBlue focus:outline-none transition"
              placeholder="admin"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-white/70 tracking-widest" htmlFor="password">
              PASSWORD
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 bg-carbon border border-white/20 rounded-md focus:ring-2 focus:ring-neonBlue focus:outline-none transition"
              placeholder="password"
            />
          </div>
          
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-neonBlue text-black font-bold rounded-md hover:shadow-[0_0_20px_-5px_rgba(0,229,255,0.4)] transition-all disabled:opacity-50"
          >
            {isLoading ? 'Authenticating...' : 'Authorize'}
            <LogIn className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
}
