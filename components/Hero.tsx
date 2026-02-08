import React from 'react';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';
// Helper to handle GitHub Pages paths
import { asset } from '@/lib/assets'; 

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-black">
      {/* Background Gradient Mesh (Optional subtle glow) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-orange/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-orange text-sm font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
              Nexora Platform v2.0
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white">
              Academic management, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                unified and secure.
              </span>
            </h1>
            
            <p className="text-lg text-brand-gray max-w-xl mx-auto lg:mx-0 leading-relaxed">
              The operating system for modern institutions. Streamline admissions, academics, and corporate compliance in one unified interface.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link 
                href="https://aakashchatake.github.io/nexora-platform/#/access"
                className="w-full sm:w-auto px-8 py-4 bg-brand-orange hover:bg-orange-600 text-white rounded-full font-semibold transition-all flex items-center justify-center gap-2"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 border border-white/20 hover:bg-white/5 text-white rounded-full font-semibold transition-all flex items-center justify-center gap-2"
              >
                Request Demo <Play className="w-4 h-4 fill-current" />
              </Link>
            </div>
          </div>

          {/* Right Image (The Visual) */}
          <div className="relative">
             {/* Main Image Card */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#1a1a1a]">
              {/* Overlay Gradient to make text readable if image is too bright */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 to-transparent z-10" />
              
              <img 
                src={asset("/assets/images/Image_01.avif")} 
                alt="Nexora Dashboard" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-duration-700"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-brand-surface border border-white/10 p-6 rounded-xl shadow-xl z-20 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-green-500/20 flex items-center justify-center">
                  <div className="h-6 w-6 rounded-full bg-green-500 animate-pulse" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">System Status</p>
                  <p className="text-white font-bold">99.9% Operational</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
