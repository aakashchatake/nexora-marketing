'use client';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Nexora</div>
        <ul className="navbar-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#insights">Insights</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#contact" className="navbar-cta">Get Started</a>
      </div>
    </nav>
  );
}
