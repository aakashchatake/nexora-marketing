"use client";
import React, { useEffect } from 'react';
export default function AdminDashboard() {
  useEffect(() => {
    if (!localStorage.getItem('nexus_admin_session')) {
      window.location.href = window.location.pathname.replace(/\/admin\/dashboard\/?$/, '/admin');
    }
  }, []);
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white p-12">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-12 border-b border-[#262626] pb-8">
          <h1 className="text-2xl font-bold text-[#FF6A00]">NEXORA MGMT COCKPIT</h1>
          <button onClick={() => { localStorage.removeItem('nexus_admin_session'); window.location.href = window.location.pathname.replace(/\/admin\/dashboard\/?$/, '/admin'); }} className="text-red-500 font-bold text-xs uppercase">Logout</button>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="p-6 bg-[#141414] border border-white/10 rounded-2xl text-center">
            <p className="text-[#525252] text-xs font-bold mb-2 uppercase">Leads</p>
            <h3 className="text-3xl font-bold">24</h3>
          </div>
          <div className="p-6 bg-[#141414] border border-white/10 rounded-2xl text-center">
            <p className="text-[#525252] text-xs font-bold mb-2 uppercase">Institutes</p>
            <h3 className="text-3xl font-bold">12</h3>
          </div>
          <div className="p-6 bg-[#141414] border border-white/10 rounded-2xl text-center">
            <p className="text-[#525252] text-xs font-bold mb-2 uppercase">Students</p>
            <h3 className="text-3xl font-bold">14,200</h3>
          </div>
          <div className="p-6 bg-[#141414] border border-green-500/30 rounded-2xl text-center">
            <p className="text-[#525252] text-xs font-bold mb-2 uppercase text-green-500">AWS Status</p>
            <h3 className="text-3xl font-bold text-green-500">Live</h3>
          </div>
        </div>
        <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6">
          <div className="flex items-center justify-between p-4 bg-[#0B0B0B] rounded-lg">
            <div>
              <p className="font-mono text-[#FF6A00]">SIT-2026</p>
              <p className="text-xs text-[#525252]">Solapur Institute of Technology</p>
            </div>
            <button className="text-xs font-bold text-red-500 bg-red-500/10 px-4 py-2 rounded">FREEZE</button>
          </div>
        </div>
      </div>
    </div>
  );
}
