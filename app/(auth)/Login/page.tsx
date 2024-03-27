"use client"

import Link from 'next/link';
import Image from 'next/image';
import IndianStudent from '../../../public/indian-kid-books.png';
import Cookies from 'js-cookie';
import { signIn } from 'next-auth/react';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = Cookies.get('jwtToken');
    if (token) {
      router.push('/');
    }
  }, []);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      setError(result.error);
    } else {
     
    }
  };

  return (
    <>

      <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 gap-4">

        <div className="justify-center pt-8 md:ml-24">
          <div className="max-w-screen-md p-5 m-5 justify-start">
            <h1 className="font-bold text-2xl text-white text-center md:text-left">
              <span className="text-pink-10">Log </span>In To{' '}
              <span className="text-orange-10">Your Account</span>
            </h1>
            <span className="text-red-100 text-center md:text-left block">
              Already A Member?{' '}
              <Link href="/Register" className="text-blue-500 underline">
                Sign in
              </Link>
            </span>
          </div>

          <div className="p-6 pt-10 justify-center rounded shadow-md w-full md:w-auto">
            <h1 className="text-4xl text-center font-semibold mb-9 text-red-100">Login</h1>

            <form onSubmit={handleLogin}>
              <input
                type="text"
                className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-yellow-500 hover:to-purple-400">
                <button type="submit" className="w-full text-white py-2 rounded-full">
                  Login
                </button>
              </div>
            </form>

            <button className="w-full bg-black text-white py-2 rounded mb-4">Sign In with Github</button>

            <div className="text-center text-gray-500 mb-4">- OR -</div>

            <Link href="/Register" className="block text-center text-blue-500 hover:underline mb-2">
              Register Here
            </Link>
          </div>
        </div>

        <div className="flex-1 items-start hidden md:block">
          <div className="h-full w-full relative z-20 flex-col gap-8 rounded-3xl px-2 py-8">
            <Image src={IndianStudent} alt="Indian Student" width={600} height={800} />
          </div>
        </div>
      </div>
    </>
  );
}
