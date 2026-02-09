'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

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
    <section id="faq" className="py-20 md:py-28 px-6 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-base md:text-lg text-brand-muted leading-relaxed max-w-2xl mx-auto">Find answers to common questions about Nexora</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-5">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-brand-border rounded-xl overflow-hidden bg-white/5 hover:bg-white/10 transition-colors">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-medium text-white text-lg">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-brand-accent flex-shrink-0 transform transition-transform ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {activeIndex === index && (
                <div className="px-6 py-4 border-t border-brand-border bg-brand-black/50 text-brand-muted leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
