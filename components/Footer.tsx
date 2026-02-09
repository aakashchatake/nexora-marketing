import React from 'react';
import Link from 'next/link';
import { Github, Twitter, Linkedin, Youtube, Lock } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-[#0B0B0B] border-t border-[#262626] pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-bold tracking-wide text-white block">
              NEXORA
            </Link>
            <p className="text-[#A3A3A3] text-sm leading-relaxed">
              The next-generation academic management system built for modern institutions.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://twitter.com/chatakeinnoworks" className="text-[#525252] hover:text-[#FF6A00] transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="https://linkedin.com/company/chatakeinnoworks" className="text-[#525252] hover:text-[#FF6A00] transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="https://github.com/aakashchatake" className="text-[#525252] hover:text-[#FF6A00] transition-colors"><Github className="w-5 h-5" /></a>
              <a href="https://youtube.com/@mindforgeai" className="text-[#525252] hover:text-[#FF6A00] transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-[#A3A3A3]">
              <li><Link href="#features" className="hover:text-[#FF6A00] transition-colors">Features</Link></li>
              <li><Link href="https://aakashchatake.github.io/nexora-platform/#/access" className="hover:text-[#FF6A00] transition-colors">Platform Access</Link></li>
              <li><Link href="#contact" className="hover:text-[#FF6A00] transition-colors">Request Demo</Link></li>
              <li><Link href="/pricing" className="hover:text-[#FF6A00] transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Ecosystem Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Ecosystem</h4>
            <ul className="space-y-4 text-sm text-[#A3A3A3]">
              <li><a href="http://internship.chatakeinnoworks.com" className="hover:text-[#FF6A00] transition-colors">Internship Portal</a></li>
              <li><a href="https://www.chatakeinnoworks.com" className="hover:text-[#FF6A00] transition-colors">Chatake Innoworks</a></li>
              <li><a href="https://about.chatakeinnoworks.com" className="hover:text-[#FF6A00] transition-colors">About Us</a></li>
              <li><Link href="#podcasts" className="hover:text-[#FF6A00] transition-colors">Mindforge Podcasts</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-[#A3A3A3]">
              <li><Link href="/privacy" className="hover:text-[#FF6A00] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#FF6A00] transition-colors">Terms of Service</Link></li>
              <li><Link href="/security" className="hover:text-[#FF6A00] transition-colors">Security</Link></li>
              <li><a href="mailto:admin@chatakeinnoworks.com" className="hover:text-[#FF6A00] transition-colors">Contact Support</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#262626] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#525252] text-sm">
            © 2026 Chatake Innoworks Pvt. Ltd. All rights reserved.
          </p>
          
          <Link href="/admin" className="flex items-center gap-2 text-[#525252] hover:text-[#FF6A00] transition-colors text-sm">
            <Lock className="w-4 h-4" />
            <span>Corporate Login</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
