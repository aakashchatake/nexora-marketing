import React from 'react';
import { asset } from '@/lib/assets';

const VisionBanner = () => {
  return (
    <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden bg-[#0B0B0B]">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={asset('/assets/images/Image_04.avif')}
          alt="Vision Banner"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto">
          Built for the future of technical education.
        </h2>
      </div>
    </section>
  );
};

export default VisionBanner;
