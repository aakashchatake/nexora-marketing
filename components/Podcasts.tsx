'use client';

export default function Podcasts() {
  return (
    <section id="podcasts" className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4">Listen to Our Podcasts</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">Explore in-depth discussions on AI, machine learning, and academy innovation</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Python Podcast */}
          <div className="p-6 md:p-8 border border-brand-border rounded-xl bg-white/5 hover:bg-white/10 transition-colors overflow-hidden">
            <h3 className="text-xl font-semibold text-white mb-4">Mindforge AI: Python Insights</h3>
            <div className="rounded-xl overflow-hidden w-full max-w-full">
              <iframe
                data-testid="embed-iframe"
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/episode/4OB7n7RGQAHhcGfcTz88Uw?utm_source=generator"
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Python episode"
              ></iframe>
            </div>
          </div>

          {/* ML Podcast */}
          <div className="p-6 md:p-8 border border-brand-border rounded-xl bg-white/5 hover:bg-white/10 transition-colors overflow-hidden">
            <h3 className="text-xl font-semibold text-white mb-4">Mindforge ML: Machine Learning Deep Dive</h3>
            <div className="rounded-xl overflow-hidden w-full max-w-full">
              <iframe
                data-testid="embed-iframe"
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/episode/6t5sC5yXY9OyKArTyKbCM3?utm_source=generator"
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Machine Learning episode"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
