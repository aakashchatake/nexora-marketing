import { Lock } from 'lucide-react';

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-brand-black flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <div className="p-4 rounded-full bg-brand-accent/10 border border-brand-accent/30">
            <Lock className="w-8 h-8 text-brand-accent" />
          </div>
        </div>

        {/* Content */}
        <h1 className="text-4xl md:text-5xl font-semibold text-white mb-3">Corporate Login</h1>
        <p className="text-lg text-brand-muted mb-8 leading-relaxed">
          The corporate login system is coming soon. We're building a secure platform for institutional administrators.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/"
            className="px-8 py-3 bg-brand-accent text-white font-semibold rounded-xl hover:opacity-90 transition-opacity text-center min-h-[48px] flex items-center justify-center"
          >
            Back to Home
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-brand-border text-white font-semibold rounded-xl hover:bg-white/5 transition-colors text-center min-h-[48px] flex items-center justify-center"
          >
            Request Access
          </a>
        </div>

        {/* Status Badge */}
        <div className="mt-12 p-4 border border-brand-border rounded-xl bg-white/5">
          <p className="text-sm text-brand-muted">
            Need administrative access? Contact our team at <span className="text-white font-medium">admin@nexora.com</span>
          </p>
        </div>
      </div>
    </div>
  );
}
