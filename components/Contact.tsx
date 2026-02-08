'use client';

import { useState } from 'react';

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
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Get in Touch</h2>
          <p>Have questions about Nexora? Get in touch with our team today.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="name"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              name="email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@institution.edu"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Institution Name</label>
            <input
              type="text"
              name="institution"
              className="form-input"
              value={formData.institution}
              onChange={handleChange}
              required
              placeholder="Your University"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea
              name="message"
              className="form-textarea"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell us about your needs..."
            />
          </div>
          <button type="submit" className="form-submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
