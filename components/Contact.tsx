import React from 'react';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-[#0B0B0B] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-[#A3A3A3] text-lg leading-relaxed max-w-lg">
                Ready to transform your institution? Our team at Chatake Innoworks is here to help you deploy Nexora.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-[#262626] hover:border-[#FF6A00]/50 transition-colors">
                <div className="p-3 rounded-lg bg-[#FF6A00]/10 text-[#FF6A00]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Email Us</h3>
                  <a href="mailto:admin@chatakeinnoworks.com" className="text-[#A3A3A3] hover:text-[#FF6A00] transition-colors">
                    admin@chatakeinnoworks.com
                  </a>
                  <div className="mt-1 text-sm text-[#A3A3A3]">
                    nexora@chatakeinnoworks.com
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-[#262626] hover:border-[#FF6A00]/50 transition-colors">
                <div className="p-3 rounded-lg bg-[#FF6A00]/10 text-[#FF6A00]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Call Us</h3>
                  <a href="tel:+918600182228" className="text-[#A3A3A3] hover:text-[#FF6A00] transition-colors">
                    +91 86001 82228
                  </a>
                  <p className="text-sm text-[#525252] mt-1">Mon-Fri, 9am-6pm IST</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-[#262626] hover:border-[#FF6A00]/50 transition-colors">
                <div className="p-3 rounded-lg bg-[#FF6A00]/10 text-[#FF6A00]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Visit Us</h3>
                  <p className="text-[#A3A3A3] leading-relaxed">
                    Chatake Innoworks Pvt. Ltd.<br />
                    Nehru Industrial Estate, Damani Nagar,<br />
                    Solapur - 413001, Maharashtra, India.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="relative">
            <form className="space-y-4 p-8 rounded-2xl bg-white/5 border border-[#262626]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#A3A3A3]">First Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-[#0B0B0B] border border-[#262626] rounded-lg text-white focus:outline-none focus:border-[#FF6A00] transition-colors" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#A3A3A3]">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-[#0B0B0B] border border-[#262626] rounded-lg text-white focus:outline-none focus:border-[#FF6A00] transition-colors" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#A3A3A3]">Email Address</label>
                <input type="email" className="w-full px-4 py-3 bg-[#0B0B0B] border border-[#262626] rounded-lg text-white focus:outline-none focus:border-[#FF6A00] transition-colors" placeholder="john@institution.edu" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#A3A3A3]">Institution Name</label>
                <input type="text" className="w-full px-4 py-3 bg-[#0B0B0B] border border-[#262626] rounded-lg text-white focus:outline-none focus:border-[#FF6A00] transition-colors" placeholder="Solapur Institute of Technology" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#A3A3A3]">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-[#0B0B0B] border border-[#262626] rounded-lg text-white focus:outline-none focus:border-[#FF6A00] transition-colors" placeholder="Tell us about your requirements..." />
              </div>

              <button type="submit" className="w-full py-4 bg-[#FF6A00] hover:bg-orange-600 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 mt-4">
                Send Message <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
