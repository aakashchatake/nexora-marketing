'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, Globe, Users, Zap, Award, Download } from 'lucide-react';

export default function About() {
  return (
    <main className="bg-white">
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="pt-24 pb-6 px-6">
        <div className="container mx-auto">
          <Link href="/" className="flex items-center gap-2 text-[#FF6A00] hover:text-orange-600 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-[#0B0B0B] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Chatake Innoworks
            </h1>
            <p className="text-xl text-[#A3A3A3]">
              Building innovative solutions for educational institutions and modern organizations since 2025.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Vision */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="inline-block p-4 bg-[#FF6A00]/10 rounded-lg mb-6">
                <Zap className="w-8 h-8 text-[#FF6A00]" />
              </div>
              <h2 className="text-3xl font-bold text-[#0B0B0B] mb-4">Our Mission</h2>
              <p className="text-lg text-[#525252] leading-relaxed">
                To empower educational institutions with cutting-edge technology solutions that streamline operations, 
                enhance student experiences, and drive organizational excellence through innovation and dedication.
              </p>
            </div>
            <div>
              <div className="inline-block p-4 bg-[#FF6A00]/10 rounded-lg mb-6">
                <Globe className="w-8 h-8 text-[#FF6A00]" />
              </div>
              <h2 className="text-3xl font-bold text-[#0B0B0B] mb-4">Our Vision</h2>
              <p className="text-lg text-[#525252] leading-relaxed">
                To become the leading provider of intelligent academic management systems, transforming how institutions 
                operate and enabling them to focus on what matters most: educating and developing the next generation of leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-24 bg-[#0B0B0B]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Company Overview</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/5 border border-[#262626] rounded-xl hover:border-[#FF6A00]/50 transition-colors">
              <Users className="w-10 h-10 text-[#FF6A00] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Team-Driven</h3>
              <p className="text-[#A3A3A3]">
                Led by experienced professionals from Codesmith Division with a passion for educational innovation 
                and cutting-edge technology solutions.
              </p>
            </div>
            
            <div className="p-8 bg-white/5 border border-[#262626] rounded-xl hover:border-[#FF6A00]/50 transition-colors">
              <Award className="w-10 h-10 text-[#FF6A00] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Quality-Focused</h3>
              <p className="text-[#A3A3A3]">
                We maintain the highest standards of excellence in every solution we deliver to our partner institutions 
                and corporate clients.
              </p>
            </div>
            
            <div className="p-8 bg-white/5 border border-[#262626] rounded-xl hover:border-[#FF6A00]/50 transition-colors">
              <Zap className="w-10 h-10 text-[#FF6A00] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Innovation-Led</h3>
              <p className="text-[#A3A3A3]">
                Continuously evolving our technology stack and methodologies to deliver next-generation solutions 
                for modern challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Products */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B0B0B] text-center mb-12">Our Products</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 border-2 border-[#FF6A00] rounded-xl bg-white hover:bg-[#0B0B0B] group transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#0B0B0B] group-hover:text-white mb-3 transition-colors">NEXORA</h3>
              <p className="text-[#525252] group-hover:text-[#A3A3A3] mb-4 transition-colors">
                Next-generation academic management system designed for modern institutions. NEXORA streamlines 
                administrative processes, enhances student engagement, and provides comprehensive analytics for better decision-making.
              </p>
              <Link href="/" className="text-[#FF6A00] font-semibold group-hover:text-[#FF6A00] hover:underline">
                Learn more about NEXORA →
              </Link>
            </div>
            
            <div className="p-8 border-2 border-[#FF6A00] rounded-xl bg-white hover:bg-[#0B0B0B] group transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#0B0B0B] group-hover:text-white mb-3 transition-colors">Internship Portal</h3>
              <p className="text-[#525252] group-hover:text-[#A3A3A3] mb-4 transition-colors">
                Comprehensive platform for managing internship programs. Connect students with opportunities, 
                track progress, and measure program success with built-in analytics and reporting tools.
              </p>
              <a href="http://internship.chatakeinnoworks.com" className="text-[#FF6A00] font-semibold group-hover:text-[#FF6A00] hover:underline">
                Visit Internship Portal →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Download Booklet */}
      <section className="py-16 md:py-24 bg-[#0B0B0B]">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-block p-4 bg-[#FF6A00]/10 rounded-lg mb-6">
              <Download className="w-8 h-8 text-[#FF6A00]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Download Our Corporate Profile
            </h2>
            <p className="text-[#A3A3A3] text-lg mb-8">
              Get comprehensive insights into our company, vision, product roadmap, and strategic initiatives for 2025-2028.
            </p>
            <a 
              href="/assets/Chatake-Innoworks-Corporate-Profile-Vision-2025-2028-Second-Edition.pdf" 
              download
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#FF6A00] hover:bg-orange-600 text-white font-semibold rounded-full transition-all text-lg"
            >
              <Download className="w-5 h-5" />
              Download Corporate Profile (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B0B0B] mb-4">
            Interested in working together?
          </h2>
          <p className="text-[#525252] mb-8">
            Get in touch with us to discuss how we can support your institution.
          </p>
          <Link 
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#FF6A00] hover:bg-orange-600 text-white font-semibold rounded-full transition-all"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
