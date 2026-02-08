'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Phone, ArrowRight, Check, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    institution: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage(false);
    setErrorMessage(false);

    // Structure the data as JSON with timestamp
    const submissionData = {
      timestamp: new Date().toISOString(),
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      institution: formData.institution,
      message: formData.message,
    };

    // Console log for development
    console.log('📨 Contact Form Submission:', submissionData);

    try {
      // TODO: Replace with actual AWS API Gateway URL
      // const response = await fetch('https://your-aws-api-gateway-url/contacts', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(submissionData),
      // });
      
      // if (!response.ok) throw new Error('Submission failed');
      
      // Simulating API call success
      setTimeout(() => {
        setSuccessMessage(true);
        setFormData({ firstName: '', lastName: '', email: '', institution: '', message: '' });
        setLoading(false);
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => setSuccessMessage(false), 5000);
      }, 1000);
    } catch (error) {
      console.error('❌ Submission Error:', error);
      setErrorMessage(true);
      setLoading(false);
    }
  };

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
            {/* Success Message */}
            {successMessage && (
              <div className="mb-4 p-4 rounded-xl bg-green-500/20 border border-green-500/50 flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-green-400 font-semibold">Thank you!</p>
                  <p className="text-sm text-green-300">We've received your message and will contact you soon.</p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {errorMessage && (
              <div className="mb-4 p-4 rounded-xl bg-red-500/20 border border-red-500/50 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-red-400 font-semibold">Oops!</p>
                  <p className="text-sm text-red-300">Something went wrong. Please try again.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 p-8 rounded-2xl bg-white/5 border border-[#262626]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#A3A3A3]">First Name</label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0B0B0B] border border-[#262626] rounded-lg text-white focus:outline-none focus:border-[#FF6A00] transition-colors" 
                    placeholder="John" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#A3A3A3]">Last Name</label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0B0B0B] border border-[#262626] rounded-lg text-white focus:outline-none focus:border-[#FF6A00] transition-colors" 
                    placeholder="Doe" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#A3A3A3]">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0B0B0B] border border-[#262626] rounded-lg text-white focus:outline-none focus:border-[#FF6A00] transition-colors" 
                  placeholder="john@institution.edu" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#A3A3A3]">Institution Name</label>
                <input 
                  type="text" 
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0B0B0B] border border-[#262626] rounded-lg text-white focus:outline-none focus:border-[#FF6A00] transition-colors" 
                  placeholder="Solapur Institute of Technology" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#A3A3A3]">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4} 
                  className="w-full px-4 py-3 bg-[#0B0B0B] border border-[#262626] rounded-lg text-white focus:outline-none focus:border-[#FF6A00] transition-colors" 
                  placeholder="Tell us about your requirements..." 
                />
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-4 bg-[#FF6A00] hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 mt-4"
              >
                {loading ? 'Sending...' : 'Send Message'} 
                {!loading && <ArrowRight className="w-5 h-5" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
