'use client';

export default function Insights() {
  const insights = [
    { number: '500+', label: 'Institutions Using Nexora' },
    { number: '1M+', label: 'Students Managed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Customer Support' },
  ];

  return (
    <section id="insights" className="py-20 md:py-28 px-6 bg-brand-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Why Choose Nexora
          </h2>
          <p className="text-base md:text-lg text-brand-muted leading-relaxed max-w-2xl mx-auto">
            Trusted by institutions around the world to deliver excellence
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 rounded-xl border border-brand-border bg-white/5 hover:bg-white/10 hover:border-brand-accent transition-all duration-300 text-center"
            >
              {/* Large Number */}
              <div className="mb-3">
                <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-accent to-orange-400 bg-clip-text text-transparent">
                  {insight.number}
                </p>
              </div>

              {/* Label */}
              <p className="text-sm md:text-base text-brand-muted group-hover:text-white transition-colors">
                {insight.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
