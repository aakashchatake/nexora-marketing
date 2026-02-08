'use client';

import { Linkedin, Youtube, Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-brand-border py-20 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Nexora */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Nexora</h3>
            <p className="text-sm text-brand-muted leading-relaxed">Transform your academic institution with our comprehensive management platform.</p>
          </div>

          {/* Column 2: Product */}
          <div>
            <h4 className="text-md font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-sm text-brand-muted hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-sm text-brand-muted hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#security" className="text-sm text-brand-muted hover:text-white transition-colors">Security</a></li>
              <li><a href="#roadmap" className="text-sm text-brand-muted hover:text-white transition-colors">Roadmap</a></li>
            </ul>
          </div>

          {/* Column 3: Ecosystem */}
          <div>
            <h4 className="text-md font-semibold text-white mb-4">Ecosystem</h4>
            <ul className="space-y-2">
              <li><a href="http://internship.chatakeinnoworks.com" target="_blank" rel="noopener noreferrer" className="text-sm text-brand-muted hover:text-white transition-colors">Internship Portal</a></li>
              <li><a href="https://www.chatakeinnoworks.com" target="_blank" rel="noopener noreferrer" className="text-sm text-brand-muted hover:text-white transition-colors">Company Site</a></li>
              <li><a href="https://about.chatakeinnoworks.com" target="_blank" rel="noopener noreferrer" className="text-sm text-brand-muted hover:text-white transition-colors">About</a></li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h4 className="text-md font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#privacy" className="text-sm text-brand-muted hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="text-sm text-brand-muted hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#cookies" className="text-sm text-brand-muted hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-brand-border my-8"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-sm text-brand-muted text-center md:text-left">© 2026 Chatake Innoworks Pvt. Ltd. All rights reserved.</p>

          {/* Social Icons & Corporate Login */}
          <div className="flex items-center gap-6">
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="text-brand-muted hover:text-brand-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" title="YouTube" className="text-brand-muted hover:text-brand-accent transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="X (Twitter)" className="text-brand-muted hover:text-brand-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub" className="text-brand-muted hover:text-brand-accent transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>

            {/* Corporate Login */}
            <a href="/admin" className="text-sm text-brand-muted hover:text-white transition-colors border-l border-brand-border pl-6">
              Corporate Login
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
