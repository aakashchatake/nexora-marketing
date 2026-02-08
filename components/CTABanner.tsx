import React from 'react';
import Link from 'next/link';
import { asset } from '@/lib/assets';
import { ArrowRight } from 'lucide-react';

const CTABanner = () => {
  return (
    <section className="relative py-32 md:py-40 px-6 overflow-hidden bg-[#0B0B0B]">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={asset('/assets/images/Image_07.avif')}
          alt="CTA Background"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/95 via-[#0B0B0B]/80 to-[#0B0B0B]/60" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Ready to Transform Your Institution?
              </h2>
              <p className="text-lg text-[#A3A3A3] leading-relaxed max-w-lg">
                Join hundreds of educational institutions that have already revolutionized their operations with Nexora. Start your journey today.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://aakashchatake.github.io/nexora-platform/#/access"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FF6A00] hover:bg-orange-600 text-white font-bold rounded-full transition-all"
              >
                Get Started Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 hover:border-white/60 text-white font-semibold rounded-full transition-all"
              >
                Schedule Demo
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-[#FF6A00]">500+</div>
              <p className="text-[#A3A3A3]">Institutions</p>
            </div>

            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-[#FF6A00]">1M+</div>
              <p className="text-[#A3A3A3]">Students Managed</p>
            </div>

            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-[#FF6A00]">99.9%</div>
              <p className="text-[#A3A3A3]">Uptime</p>
            </div>

            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-[#FF6A00]">24/7</div>
              <p className="text-[#A3A3A3]">Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
