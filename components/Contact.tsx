'use client';

import { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', institution: '', message: '' });
    alert('Thank you for reaching out! We will contact you soon.');
  };

  return (
    <section id="contact" className="py-20 md:py-28 px-6 bg-brand-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">Get in Touch</h2>
          <p className="text-base md:text-lg text-brand-muted leading-relaxed max-w-2xl mx-auto">Have questions about Nexora? Get in touch with our team today.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Cards */}
          <div className="space-y-6">
            <div className="p-6 md:p-8 border border-brand-border rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-brand-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                  <p className="text-brand-muted">contact@nexora.com</p>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 border border-brand-border rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-brand-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                  <p className="text-brand-muted">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 border border-brand-border rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-brand-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Office</h3>
                  <p className="text-brand-muted">123 Tech Street, Innovation City, IC 12345</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-white mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-white/5 border border-brand-border rounded-xl text-white placeholder-brand-muted focus:outline-none focus:border-brand-accent focus:bg-white/10 transition-colors min-h-[48px]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@institution.edu"
                className="w-full px-4 py-3 bg-white/5 border border-brand-border rounded-xl text-white placeholder-brand-muted focus:outline-none focus:border-brand-accent focus:bg-white/10 transition-colors min-h-[48px]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">Institution Name</label>
              <input
                type="text"
                name="institution"
                value={formData.institution}
                onChange={handleChange}
                required
                placeholder="Your University"
                className="w-full px-4 py-3 bg-white/5 border border-brand-border rounded-xl text-white placeholder-brand-muted focus:outline-none focus:border-brand-accent focus:bg-white/10 transition-colors min-h-[48px]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your needs..."
                rows={4}
                className="w-full px-4 py-3 bg-white/5 border border-brand-border rounded-xl text-white placeholder-brand-muted focus:outline-none focus:border-brand-accent focus:bg-white/10 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-brand-accent text-white font-semibold rounded-xl hover:opacity-90 transition-opacity min-h-[48px]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
