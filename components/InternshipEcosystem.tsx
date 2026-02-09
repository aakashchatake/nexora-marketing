import React from 'react';
import { ExternalLink } from 'lucide-react';

const InternshipEcosystem = () => {
  return (
    <section className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Education & Internships
              </h2>
              <p className="text-lg text-[#A3A3A3] leading-relaxed max-w-lg">
                At Chatake Innoworks, our existing educational services and research work are unified through our Internship Portal. We provide hands-on experience, mentorship, and real-world project exposure to students and professionals looking to develop their skills in cutting-edge technologies.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#FF6A00] rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-1">Structured Programs</h3>
                  <p className="text-[#A3A3A3] text-sm">Curated internship opportunities across multiple domains</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#FF6A00] rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-1">Mentorship & Guidance</h3>
                  <p className="text-[#A3A3A3] text-sm">Learn from industry experts and experienced professionals</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#FF6A00] rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-1">Career Development</h3>
                  <p className="text-[#A3A3A3] text-sm">Build your portfolio and networks for future opportunities</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="http://internship.chatakeinnoworks.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF6A00] hover:bg-orange-600 text-white font-bold rounded-full transition-all"
              >
                Visit Internship Portal
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right: Benefits Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-[#262626] hover:border-[#FF6A00]/50 transition-colors">
              <div className="text-3xl font-bold text-[#FF6A00] mb-2">50+</div>
              <p className="text-[#A3A3A3] text-sm">Active Internships</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-[#262626] hover:border-[#FF6A00]/50 transition-colors">
              <div className="text-3xl font-bold text-[#FF6A00] mb-2">500+</div>
              <p className="text-[#A3A3A3] text-sm">Alumni Network</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-[#262626] hover:border-[#FF6A00]/50 transition-colors">
              <div className="text-3xl font-bold text-[#FF6A00] mb-2">98%</div>
              <p className="text-[#A3A3A3] text-sm">Satisfaction Rate</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-[#262626] hover:border-[#FF6A00]/50 transition-colors">
              <div className="text-3xl font-bold text-[#FF6A00] mb-2">12</div>
              <p className="text-[#A3A3A3] text-sm">Focus Areas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipEcosystem;
