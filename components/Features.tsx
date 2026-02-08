'use client';

export default function Features() {
  const features = [
    {
      badge: 'Core Feature',
      title: 'Student Management',
      description: 'Comprehensive student profile management with enrollment tracking, attendance, and academic performance monitoring.',
    },
    {
      badge: 'Core Feature',
      title: 'Course Administration',
      description: 'Create, manage, and distribute courses with detailed curriculum planning and resource allocation.',
    },
    {
      badge: 'Innovation',
      title: 'Analytics Dashboard',
      description: 'Real-time insights into institutional performance with customizable reports and data visualization.',
    },
    {
      badge: 'Engagement',
      title: 'Communication Hub',
      description: 'Centralized messaging platform for seamless communication between students, faculty, and administration.',
    },
    {
      badge: 'Integration',
      title: 'Third-Party Integration',
      description: 'Connect with popular educational tools and platforms for enhanced functionality and workflow automation.',
    },
    {
      badge: 'Security',
      title: 'Data Protection',
      description: 'Enterprise-grade security with encryption, compliance, and regular security audits.',
    },
  ];

  return (
    <section id="features" className="features-section">
      <div className="section-header">
        <h2>Powerful Features</h2>
        <p>Everything you need to manage your academic institution effectively</p>
      </div>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-badge">{feature.badge}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
