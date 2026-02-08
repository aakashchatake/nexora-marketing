'use client';

export default function Trust() {
  const logos = [
    'TechUniv',
    'EduPro',
    'NextGen',
    'InnovatED',
    'SmartAcad',
    'FutureLearn',
  ];

  return (
    <section className="trust-section">
      <div className="trust-title">Trusted by leading educational institutions worldwide</div>
      <div className="logo-grid">
        {logos.map((logo, index) => (
          <div key={index} className="logo-item">
            <div style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--text-secondary)' }}>
              {logo}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
