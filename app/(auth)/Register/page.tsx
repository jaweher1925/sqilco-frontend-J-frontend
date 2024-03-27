"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar';
import IndianStudent from '../../../public/indian-kid-books.png'
import Image from 'next/image'
import axios from 'axios';

import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';


interface RegisterResponse {
  message: string;
}

const baseUrl = "http://localhost:8000"

export default function Register() {
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  useEffect(() => {
    const token = Cookies.get('jwtToken');
    if (token) {
      router.push('/');
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
        setError('Password must contain at least one letter and one number, and at least 8 characters alpha-numeric');
        return;
      }
      const name = firstName + " " + lastName
      const response = await axios.post(`${baseUrl}/api/register`, { name, email, password, phone });
      if (response.status === 201) {
        const data: RegisterResponse = response.data;
        router.push('/Login'); // Redirect to dashboard or protected route
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-7xl p-3">
        <div className="flex flex-col justify-center">
          <div className="max-w-lg mx-auto">
            <span className="text-red-100 mt-8">Start For Free!</span>
            <h1 className="font-bold text-4xl lg:text-5xl text-white my-4">
              <span className="text-pink-500">Create</span> New <span className="text-orange-500">Account</span>
            </h1>
            <span className="text-red-100">Already A Member? <Link href="/Login" className="text-blue-500">Log In</Link></span>
          </div>
          <div className="p-6 pt-10 rounded shadow-md w-full md:max-w-md mx-auto">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
                placeholder="First Name"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
                placeholder="Last Name"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
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
                className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && <p className="text-red-500">{passwordError}</p>}
              <input
                type="text"
                className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
                placeholder="Phone Number"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {error && <p className="text-red-500">{error}</p>}
              <div className='bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-yellow-500 hover:to-purple-400'>
                <button
                  type="submit"
                  className="w-full text-white py-2 rounded-full "
                >
                  Sign In
                </button>
              </div>
            </form>
            <div className="text-center text-gray-500 mt-4">- OR -</div>
            <Link
              className="block text-center text-blue-500 hover:underline mt-2"
              href="/Login"
            >
              Login with an existing account
            </Link>
          </div>
        </div>
        <div className="justify-center  items-center">
          <div className="w-full">
            <Image
              src={IndianStudent}
              alt="Indian Student"
              width={600}
              height={800}
            />
          </div>
        </div>
      </div>
    </>
  );
}
