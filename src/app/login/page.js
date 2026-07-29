"use client";

import { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Sistem autentikasi segera hadir!"); // Nanti kita hubungkan ke Firebase Auth
  };

  return (
    <main className="min-h-screen bg-[#faf8f5] flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 w-full max-w-md">
        <h1 className="text-3xl font-serif font-bold text-center mb-2 text-[#cda274]">Selamat Datang</h1>
        <p className="text-center text-gray-500 mb-8 text-sm">Masuk untuk mengelola undangan Anda</p>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-[#cda274] outline-none text-black" placeholder="nama@email.com" required />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-[#cda274] outline-none text-black" placeholder="••••••••" required />
          </div>

          <button type="submit" className="w-full bg-[#1e293b] text-white font-bold py-3 rounded-lg hover:bg-[#334155] transition mt-2">
            Masuk
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          Belum punya akun? <Link href="/login" className="text-[#cda274] font-bold hover:underline">Daftar sekarang</Link>
          <br /><br />
          <Link href="/" className="text-gray-400 hover:text-gray-700">&larr; Kembali ke Beranda</Link>
        </div>
      </div>
    </main>
  );
}