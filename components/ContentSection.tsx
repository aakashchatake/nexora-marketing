'use client';

import { asset } from '../lib/assets';
import { Check } from 'lucide-react';

export default function ContentSection() {
  const features = [
    'Automated enrollment and registration processes',
    'Real-time performance tracking and analytics',
    'Integrated communication tools for collaboration',
    'Customizable workflows and automation',
    '24/7 customer support and resources',
  ];

  return (
    <section className="py-20 md:py-28 px-6 bg-brand-black">
      <div className="max-w-7xl mx-auto space-y-20 md:space-y-32">
        {/* First Row: Text on left, Image on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text & Features */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                Streamline Your Institution
              </h2>
              <p className="text-lg text-brand-muted leading-relaxed">
                Nexora provides an integrated platform that simplifies academic operations and enhances the learning experience for students, faculty, and administrators.
              </p>
            </div>

            {/* Features List */}
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                  <span className="text-brand-muted">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="#features"
                className="inline-block px-8 py-3 bg-brand-accent text-white font-semibold rounded-xl hover:opacity-90 transition-opacity min-h-[48px] flex items-center"
              >
                Explore Features
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div className="hidden lg:block">
            <div className="rounded-xl overflow-hidden border border-brand-border shadow-lg">
              <img
                src={asset('/assets/images/Image_02.avif')}
                alt="Streamlined Operations"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Second Row: Image on left, Text on right (reversed) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="hidden lg:block">
            <div className="rounded-xl overflow-hidden border border-brand-border shadow-lg">
              <img
                src={asset('/assets/images/Image_03.avif')}
                alt="Analytics & Performance"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right: Text */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                Powerful Analytics & Insights
              </h3>
              <p className="text-lg text-brand-muted leading-relaxed">
                Gain deep visibility into institutional performance with our comprehensive analytics dashboard. Track student progress, identify trends, and make data-driven decisions to improve outcomes.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-3">
              {[
                'Real-time performance metrics',
                'Customizable reports and dashboards',
                'Predictive analytics and insights',
                'Export and share data easily',
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                  <span className="text-brand-muted">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="#"
                className="inline-block px-8 py-3 border border-brand-border text-white font-semibold rounded-xl hover:bg-white/5 transition-colors min-h-[48px] flex items-center"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
