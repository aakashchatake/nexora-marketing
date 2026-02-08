'use client';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-column">
            <h4>Nexora</h4>
            <p>Transform your academic institution with our comprehensive management platform.</p>
          </div>
          <div className="footer-column">
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#security">Security</a>
            <a href="#roadmap">Roadmap</a>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <a href="#about">About Us</a>
            <a href="#blog">Blog</a>
            <a href="#careers">Careers</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-column">
            <h4>Legal</h4>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookie Policy</a>
            <a href="#compliance">Compliance</a>
          </div>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-bottom">
          <div className="footer-copyright">
            © 2026 Nexora. All rights reserved.
          </div>
          <div className="footer-socials">
            <a href="#twitter" title="Twitter">𝕏</a>
            <a href="#linkedin" title="LinkedIn">in</a>
            <a href="#github" title="GitHub">GitHub</a>
            <a href="#discord" title="Discord">Discord</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
