'use client';

export default function Insights() {
  const insights = [
    { number: '500+', label: 'Institutions Using Nexora' },
    { number: '1M+', label: 'Students Managed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Customer Support' },
  ];

  return (
    <section id="insights" className="insights-section">
      <div className="insights-container">
        <div className="section-header">
          <h2>Why Choose Nexora</h2>
          <p>Trusted by institutions around the world to deliver excellence</p>
        </div>
        <div className="insights-grid">
          {insights.map((insight, index) => (
            <div key={index} className="insight-card">
              <div className="insight-number">{insight.number}</div>
              <div className="insight-label">{insight.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
