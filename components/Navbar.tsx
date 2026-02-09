import React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center bg-[#0B0B0B] border-b border-[#262626]">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-wide text-white">NEXORA</Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm text-[#A3A3A3] hover:text-white transition-colors">Features</Link>
          <Link href="#ecosystem" className="text-sm text-[#A3A3A3] hover:text-white transition-colors">Ecosystem</Link>
          <Link href="/about" className="text-sm text-[#A3A3A3] hover:text-white transition-colors">About</Link>
          <Link href="/contact" className="text-sm text-[#A3A3A3] hover:text-white transition-colors">Support</Link>
        </div>
        <div className="hidden md:block">
          <Link href="https://aakashchatake.github.io/nexora-platform/#/access" className="px-6 py-2.5 bg-[#FF6A00] hover:bg-orange-600 text-white font-semibold rounded-full transition-all text-sm">
            Access Platform
          </Link>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#0B0B0B] border-b border-[#262626] p-6 md:hidden flex flex-col gap-4">
          <Link href="#features" className="text-[#A3A3A3] hover:text-white">Features</Link>
          <Link href="#ecosystem" className="text-[#A3A3A3] hover:text-white">Ecosystem</Link>
          <Link href="/about" className="text-[#A3A3A3] hover:text-white">About</Link>
          <Link href="/contact" className="text-[#A3A3A3] hover:text-white">Support</Link>
          <Link href="https://aakashchatake.github.io/nexora-platform/#/access" className="text-[#FF6A00] font-bold">Access Platform</Link>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
