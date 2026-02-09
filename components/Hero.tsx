import React from 'react';
import Link from 'next/link';
import { asset } from '@/lib/assets'; 

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-[#0B0B0B]">
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#FF6A00]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white">
              Academic management, <br /><span className="text-gray-500">unified.</span>
            </h1>
            <p className="text-lg text-[#A3A3A3] max-w-xl mx-auto lg:mx-0 leading-relaxed">
              The operating system for modern institutions. Secure, scalable, and built by Chatake Innoworks.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link href="https://aakashchatake.github.io/nexora-platform/#/access" className="w-full sm:w-auto px-8 py-4 bg-[#FF6A00] hover:bg-orange-600 text-white rounded-full font-bold transition-all flex items-center justify-center gap-2">
                Get Started
              </Link>
              <Link href="#footer" className="w-full sm:w-auto px-8 py-4 border-2 border-[#FF6A00] hover:bg-[#FF6A00]/10 text-[#FF6A00] rounded-full font-semibold transition-all flex items-center justify-center gap-2">
                Request Demo
              </Link>
            </div>
          </div>
          <div className="relative mt-10 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden border border-[#262626] shadow-lg bg-[#141414] aspect-video">
              <img src={asset("/assets/images/Image_01.avif")} alt="Nexora Dashboard" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/60 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
