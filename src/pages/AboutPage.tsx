import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PageRoute } from '../types';
import { FIRM_ASSETS, FIRM_METRICS } from '../data/firmData';
import { ResilientImage } from '../components/ResilientImage';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-[#0B1F3A] text-white py-16 sm:py-20 border-b border-[#132D52]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C9A962] mb-3">
            The Institution
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-white text-balance">
            About Lexford Legislator
          </h1>
          <p className="mt-4 text-base text-slate-300 max-w-2xl leading-relaxed">
            Founded on an uncompromising standard of trial readiness and transactional rigor, the firm advises enterprises whose decisions shape global industries.
          </p>
        </div>
      </section>

      {/* Architectural Visual Feature */}
      <section className="py-14 sm:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            <div className="lg:col-span-7">
              <div className="aspect-[16/10] lg:h-full overflow-hidden border border-slate-200 bg-slate-100">
                <ResilientImage
                  src={FIRM_ASSETS.editorialLibrary}
                  alt="Lexford Legislator executive boardroom and legal library"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#9A7B3E]">
                Our Mandate
              </p>
              <h2 className="font-serif text-3xl font-semibold text-[#0B1F3A] leading-snug">
                Single-Tier Partnership. Unwavering Partner Engagement.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Founded in New York and anchored in Midtown Manhattan and London, United Kingdom, Lexford Legislator operates as a unified transatlantic corporate partnership. Every mandate—whether a sovereign debt restructuring or a contested Delaware merger trial—is led directly by senior partners invested in the long-term resilience of our clients.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                We reject bureaucratic silos in favor of agile, cross-disciplinary teams that align legal strategy directly with capital structure, operational reality, and regulatory posture.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate(PageRoute.LAWYERS)}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#0B1F3A] hover:bg-[#132D52] transition-colors cursor-pointer"
                >
                  Meet Our Leadership
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate(PageRoute.LOCATIONS)}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#0B1F3A] border border-slate-300 hover:border-[#0B1F3A] transition-colors cursor-pointer"
                >
                  New York &amp; London Offices
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="bg-[#F8F9FA] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
            {FIRM_METRICS.map((metric) => (
              <div key={metric.label} className="py-8 sm:px-6 first:sm:pl-0 last:sm:pr-0">
                <div className="font-serif text-3xl sm:text-4xl font-semibold text-[#0B1F3A] tabular-nums">
                  {metric.value}
                </div>
                <p className="mt-2 text-xs sm:text-sm text-slate-600">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Institutional Pillars */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="font-serif text-3xl font-semibold text-[#0B1F3A]">
              Institutional Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-slate-200 bg-white">
              <p className="font-serif text-lg text-[#9A7B3E] tabular-nums">01.</p>
              <h3 className="mt-3 font-serif text-2xl font-semibold text-[#0B1F3A]">
                Pro Bono &amp; Constitutional Advocacy
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Our attorneys dedicated more than 68,000 hours in 2025–2026 to appellate civil rights, asylum representation, veteran benefits appeals, and nonprofit corporate governance—receiving the same partner-led rigor as our commercial mandates.
              </p>
            </div>

            <div className="p-8 border border-slate-200 bg-white">
              <p className="font-serif text-lg text-[#9A7B3E] tabular-nums">02.</p>
              <h3 className="mt-3 font-serif text-2xl font-semibold text-[#0B1F3A]">
                Meritocratic Talent &amp; Inclusion
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                We recruit exceptional graduates, judicial clerks, and lateral leaders across our New York and London offices, providing structured mentorship, transparent partnership progression, and cross-border deal leadership.
              </p>
            </div>

            <div className="p-8 border border-slate-200 bg-white">
              <p className="font-serif text-lg text-[#9A7B3E] tabular-nums">03.</p>
              <h3 className="mt-3 font-serif text-2xl font-semibold text-[#0B1F3A]">
                Client Confidentiality &amp; Precision
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                ISO 27001-aligned information security protocols, dedicated legal operations teams, and disciplined matter budgeting ensure predictable execution on high-velocity global matters.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
