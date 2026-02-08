import React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav h-20 flex items-center">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide text-white">
          NEXORA
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm text-brand-gray hover:text-white transition-colors">Features</Link>
          <Link href="#ecosystem" className="text-sm text-brand-gray hover:text-white transition-colors">Ecosystem</Link>
          <Link href="#podcasts" className="text-sm text-brand-gray hover:text-white transition-colors">Podcasts</Link>
          <Link href="https://about.chatakeinnoworks.com" className="text-sm text-brand-gray hover:text-white transition-colors">Company</Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link 
            href="https://aakashchatake.github.io/nexora-platform/#/access"
            className="px-6 py-2.5 bg-brand-orange hover:bg-orange-600 text-white font-semibold rounded-full transition-all text-sm"
          >
            Access Platform
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-brand-black border-b border-brand-border p-6 md:hidden flex flex-col gap-4">
          <Link href="#features" className="text-brand-gray hover:text-white">Features</Link>
          <Link href="https://aakashchatake.github.io/nexora-platform/#/access" className="text-brand-orange font-bold">Access Platform</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
