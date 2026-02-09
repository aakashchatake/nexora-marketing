'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, ArrowLeft, Send, Check, AlertCircle } from 'lucide-react';

export default function ContactSupport() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setErrorMessage('Please fill in all required fields');
      return;
    }

    setLoading(true);
    setSuccessMessage(false);
    setErrorMessage('');

    try {
      // Create mailto link data
      const emailSubject = `Contact Form: ${formData.subject || 'Support Request'}`;
      const emailBody = `
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Subject: ${formData.subject}

Message:
${formData.message}

Sent from: Chatake Innoworks Contact Form
Date: ${new Date().toLocaleString()}
      `.trim();

      // Open mailto in a new window (user's email client will open)
      window.location.href = `mailto:admin@chatakeinnoworks.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

      // Simulate success message
      setTimeout(() => {
        setSuccessMessage(true);
        setFormData({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' });
        setLoading(false);
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => setSuccessMessage(false), 5000);
      }, 500);
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Failed to send message. Please try again.');
      setLoading(false);
    }
  };

  return (
    <main className="bg-white">
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="pt-24 pb-6 px-6">
        <div className="container mx-auto">
          <Link href="/" className="flex items-center gap-2 text-[#FF6A00] hover:text-orange-600 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-[#0B0B0B] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact Support
            </h1>
            <p className="text-xl text-[#A3A3A3]">
              Have questions? Our team is here to help you with any inquiries about our products and services.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-[#0B0B0B] mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex gap-4">
                  <div className="p-3 rounded-lg bg-[#FF6A00]/10 text-[#FF6A00] flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0B0B0B] mb-1">Email</h3>
                    <a href="mailto:admin@chatakeinnoworks.com" className="text-[#525252] hover:text-[#FF6A00] transition-colors">
                      admin@chatakeinnoworks.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="p-3 rounded-lg bg-[#FF6A00]/10 text-[#FF6A00] flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0B0B0B] mb-1">Phone</h3>
                    <p className="text-[#525252]">
                      Available during business hours<br />
                      <span className="text-sm text-[#A3A3A3]">Monday - Friday, 9 AM - 6 PM IST</span>
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex gap-4">
                  <div className="p-3 rounded-lg bg-[#FF6A00]/10 text-[#FF6A00] flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0B0B0B] mb-1">Location</h3>
                    <p className="text-[#525252]">
                      Chatake Innoworks Pvt. Ltd.<br />
                      <span className="text-sm text-[#A3A3A3]">Visit our main portal at:<br />www.chatakeinnoworks.com</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12 pt-8 border-t border-[#E0E0E0]">
                <h3 className="font-semibold text-[#0B0B0B] mb-4">Follow Us</h3>
                <div className="flex flex-col gap-3">
                  <a href="https://www.linkedin.com/company/chatakeinnoworks" target="_blank" rel="noopener noreferrer" className="text-[#525252] hover:text-[#FF6A00] transition-colors">
                    LinkedIn: company/chatakeinnoworks
                  </a>
                  <a href="https://www.facebook.com/chatakeinnoworks" target="_blank" rel="noopener noreferrer" className="text-[#525252] hover:text-[#FF6A00] transition-colors">
                    Facebook: chatakeinnoworks
                  </a>
                  <a href="https://github.com/Chatake-Innoworks" target="_blank" rel="noopener noreferrer" className="text-[#525252] hover:text-[#FF6A00] transition-colors">
                    GitHub: Chatake-Innoworks
                  </a>
                  <a href="https://x.com/ChatakeInno" target="_blank" rel="noopener noreferrer" className="text-[#525252] hover:text-[#FF6A00] transition-colors">
                    Twitter/X: @ChatakeInno
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-[#F5F5F5] p-8 rounded-xl">
                <h2 className="text-2xl font-bold text-[#0B0B0B] mb-6">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Success Message */}
                  {successMessage && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-green-900">Message sent successfully!</p>
                        <p className="text-sm text-green-800">
                          We'll get back to you as soon as possible. Check your email client to complete sending the message.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Error Message */}
                  {errorMessage && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-red-900">Error</p>
                        <p className="text-sm text-red-800">{errorMessage}</p>
                      </div>
                    </div>
                  )}

                  {/* Name Row */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#0B0B0B] mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        className="w-full px-4 py-3 border border-[#D0D0D0] rounded-lg focus:outline-none focus:border-[#FF6A00] transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0B0B0B] mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        className="w-full px-4 py-3 border border-[#D0D0D0] rounded-lg focus:outline-none focus:border-[#FF6A00] transition-colors"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-[#0B0B0B] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border border-[#D0D0D0] rounded-lg focus:outline-none focus:border-[#FF6A00] transition-colors"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-[#0B0B0B] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 border border-[#D0D0D0] rounded-lg focus:outline-none focus:border-[#FF6A00] transition-colors"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-semibold text-[#0B0B0B] mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#D0D0D0] rounded-lg focus:outline-none focus:border-[#FF6A00] transition-colors bg-white"
                    >
                      <option value="">Select a subject...</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Product Demo">Request Product Demo</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Pricing & Plans">Pricing & Plans</option>
                      <option value="Partnership">Partnership Opportunity</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-[#0B0B0B] mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      className="w-full px-4 py-3 border border-[#D0D0D0] rounded-lg focus:outline-none focus:border-[#FF6A00] transition-colors resize-none"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#FF6A00] hover:bg-orange-600 text-white font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <span className="animate-spin">⏳</span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-xs text-[#A3A3A3]">
                    Your message will be sent to admin@chatakeinnoworks.com. We typically respond within 24-48 hours during business days.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
