import React from 'react';
import { asset } from '@/lib/assets';

const ImageCollage = () => {
  return (
    <section className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4">
            Academic Excellence in Action
          </h2>
          <p className="text-lg text-[#A3A3A3] max-w-2xl mx-auto">
            Experience the fusion of hands-on learning and collaborative research that defines modern education.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image 05 - Hands-on Learning */}
          <div className="relative rounded-2xl overflow-hidden group">
            <img
              src={asset('/assets/images/Image_05.avif')}
              alt="Hands-on Learning"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/80 to-transparent flex items-end">
              <div className="p-8 w-full">
                <h3 className="text-xl font-bold text-white">Hands-on Learning</h3>
                <p className="text-[#A3A3A3] text-sm mt-2">
                  Practical experience with cutting-edge technology and real-world scenarios.
                </p>
              </div>
            </div>
          </div>

          {/* Image 06 - Collaborative Research */}
          <div className="relative rounded-2xl overflow-hidden group">
            <img
              src={asset('/assets/images/Image_06.avif')}
              alt="Collaborative Research"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/80 to-transparent flex items-end">
              <div className="p-8 w-full">
                <h3 className="text-xl font-bold text-white">Collaborative Research</h3>
                <p className="text-[#A3A3A3] text-sm mt-2">
                  Working together to solve complex problems and push the boundaries of innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCollage;
