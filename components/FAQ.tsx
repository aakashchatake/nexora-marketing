'use client';

import { useState } from 'react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is Nexora?',
      answer: 'Nexora is a comprehensive academic management system designed to streamline operations in educational institutions, from student enrollment to performance tracking.',
    },
    {
      question: 'How easily can we integrate Nexora with existing systems?',
      answer: 'Nexora provides APIs and third-party integrations with most popular educational platforms. Our technical team will guide you through the integration process.',
    },
    {
      question: 'Is my data secure with Nexora?',
      answer: 'Yes, we employ enterprise-grade security measures including encryption, regular security audits, and compliance with international data protection standards.',
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We offer 24/7 customer support through multiple channels including email, chat, and phone. We also provide comprehensive documentation and training materials.',
    },
    {
      question: 'Can we customize the system for our institution?',
      answer: 'Absolutely. Nexora is highly customizable with configurable workflows, custom fields, and white-label options to match your institution\'s branding.',
    },
  ];

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="section-header">
        <h2>Frequently Asked Questions</h2>
        <p>Find answers to common questions about Nexora</p>
      </div>
      <div style={{ marginTop: 'var(--spacing-3xl)' }}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          >
            <div className="faq-question" onClick={() => toggleFaq(index)}>
              <span>{faq.question}</span>
              <div className="faq-toggle">▼</div>
            </div>
            <div className="faq-answer">{faq.answer}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
