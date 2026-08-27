'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">
          Register
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Buat akun baru
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="block mb-1 font-medium">
              Nama Lengkap:
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Masukkan nama"
              className="w-full p-3 border rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Email:
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Masukkan email"
              className="w-full p-3 border rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Password:
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan password"
              className="w-full p-3 border rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Konfirmasi Password:
            </label>

            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Ulangi password"
              className="w-full p-3 border rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-md"
          >
            Register
          </button>
        </form>

        <div className="text-center mt-5 pt-4 border-t">
          <p className="text-sm text-gray-600">
            Sudah punya akun?{' '}
            <Link
              href="/login"
              className="text-blue-600 hover:underline"
            >
              Login di sini
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}