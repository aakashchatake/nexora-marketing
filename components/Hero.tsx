import React from 'react';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';
import { asset } from '@/lib/assets'; 

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-brand-black">
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Text */}
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white">
              Academic management, <br />
              <span className="text-gray-500">unified.</span>
            </h1>
            <p className="text-lg text-brand-gray max-w-xl mx-auto lg:mx-0 leading-relaxed">
              The operating system for modern institutions. Secure, scalable, and built by Chatake Innoworks.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link 
                href="https://aakashchatake.github.io/nexora-platform/#/access"
                className="w-full sm:w-auto px-8 py-4 bg-brand-orange hover:bg-orange-600 text-white rounded-full font-bold transition-all flex items-center justify-center gap-2"
              >
                Get Started
              </Link>
              <Link 
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 border border-white/20 hover:bg-white/5 text-white rounded-full font-semibold transition-all flex items-center justify-center gap-2"
              >
                Request Demo
              </Link>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative mt-10 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#141414] aspect-video">
              {/* Image with fallback */}
              <img 
                src={asset("/assets/images/Image_01.avif")} 
                alt="Nexora Dashboard" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/800x600/141414/FFF?text=Image+01+Missing";
                }}
              />
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
