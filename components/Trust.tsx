'use client';

export default function Trust() {
  const companies = [
    'TechUniv',
    'EduPro',
    'NextGen',
    'InnovatED',
    'SmartAcad',
    'FutureLearn',
  ];

  return (
    <section className="py-20 md:py-28 px-6 bg-brand-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-sm text-brand-accent font-semibold uppercase tracking-wide mb-3">
            Trusted by leaders
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Trusted by leading educational institutions worldwide
          </h2>
          <p className="text-base md:text-lg text-brand-muted leading-relaxed max-w-2xl mx-auto">
            Join hundreds of institutions that are transforming education with Nexora
          </p>
        </div>

        {/* Logo/Company Pills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {companies.map((company, index) => (
            <div
              key={index}
              className="px-4 py-3 md:px-6 md:py-4 border border-brand-border rounded-xl bg-white/5 hover:bg-white/10 hover:border-brand-accent transition-all duration-300 text-center"
            >
              <p className="text-xs md:text-sm font-medium text-brand-muted hover:text-white transition-colors">
                {company}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
