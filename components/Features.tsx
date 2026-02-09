'use client';

import {
  Users2,
  BookOpen,
  BarChart3,
  MessageSquare,
  Plug,
  Shield,
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Users2,
      title: 'Student Management',
      description: 'Comprehensive student profile management with enrollment tracking, attendance, and academic performance monitoring.',
    },
    {
      icon: BookOpen,
      title: 'Course Administration',
      description: 'Create, manage, and distribute courses with detailed curriculum planning and resource allocation.',
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Real-time insights into institutional performance with customizable reports and data visualization.',
    },
    {
      icon: MessageSquare,
      title: 'Communication Hub',
      description: 'Centralized messaging platform for seamless communication between students, faculty, and administration.',
    },
    {
      icon: Plug,
      title: 'Third-Party Integration',
      description: 'Connect with popular educational tools and platforms for enhanced functionality and workflow automation.',
    },
    {
      icon: Shield,
      title: 'Data Protection',
      description: 'Enterprise-grade security with encryption, compliance, and regular security audits.',
    },
  ];

  return (
    <section id="features" className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4">
            Powerful Features
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Everything you need to manage your academic institution effectively
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 md:p-8 rounded-xl border border-brand-border bg-white/5 hover:bg-white/10 hover:border-brand-accent transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/10 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="mb-4 inline-flex p-3 rounded-lg bg-brand-accent/10 group-hover:bg-brand-accent/20 transition-colors">
                  <Icon
                    className="w-6 h-6 text-brand-accent"
                    strokeWidth={2}
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-brand-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
