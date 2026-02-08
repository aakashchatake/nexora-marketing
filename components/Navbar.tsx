'use client';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black/40 backdrop-blur-xl border-b border-brand">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-white">
              NEXORA
            </a>
          </div>

          {/* Center: Navigation Links */}
          <ul className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            <li>
              <a href="#features" className="text-sm text-brand-muted hover:text-white transition-colors">
                Features
              </a>
            </li>
            <li>
              <a href="#roles" className="text-sm text-brand-muted hover:text-white transition-colors">
                Roles
              </a>
            </li>
            <li>
              <a href="#podcasts" className="text-sm text-brand-muted hover:text-white transition-colors">
                Podcasts
              </a>
            </li>
            <li>
              <a href="#support" className="text-sm text-brand-muted hover:text-white transition-colors">
                Support
              </a>
            </li>
          </ul>

          {/* Right: CTA Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="https://aakashchatake.github.io/nexora-platform/#/access"
              className="hidden sm:inline-block px-5 py-2.5 bg-brand-accent text-white text-sm font-medium rounded-xl hover:opacity-90 transition-opacity"
            >
              Access Platform
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 border border-brand-border text-white text-sm font-medium rounded-xl hover:bg-white/5 transition-colors"
            >
              Request demo
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
