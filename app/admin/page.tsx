"use client";
import React, { useState } from 'react';
export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "admin.nexus@chatakeinnoworks.com" && password === "Nexus#Solapur@2026!CI") {
      localStorage.setItem('nexus_admin_session', 'true');
      window.location.href = window.location.pathname.replace(/\/admin\/?$/, '/admin/dashboard');
    } else {
      alert("Unauthorized Access");
    }
  };
  return (
    <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center">
      <div className="w-full max-w-md bg-[#141414] border border-[#262626] rounded-2xl p-8">
        <h1 className="text-2xl font-bold text-white mb-8 text-center uppercase tracking-widest">Corporate Access</h1>
        <form onSubmit={handleLogin} className="space-y-6">
          <input type="email" placeholder="Email" className="w-full bg-[#0B0B0B] border border-[#262626] rounded-lg p-3 text-white outline-none" onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Key" className="w-full bg-[#0B0B0B] border border-[#262626] rounded-lg p-3 text-white outline-none" onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" className="w-full py-4 bg-[#FF6A00] text-white font-bold rounded-lg hover:bg-orange-600 transition-all">LOGIN</button>
        </form>
      </div>
    </div>
  );
}
