import React from 'react';
import { PageRoute, PracticeAreaId } from '../types';
import { OFFICE_LOCATIONS, PRACTICE_AREAS } from '../data/firmData';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
  onSelectPractice: (practiceId: PracticeAreaId) => void;
  onOpenLegal: (type: 'disclaimer' | 'privacy') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onSelectPractice,
  onOpenLegal,
}) => {
  return (
    <footer className="bg-[#0B1F3A] text-slate-300 border-t border-[#132D52]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div>
            <button
              type="button"
              onClick={() => onNavigate(PageRoute.HOME)}
              className="font-serif text-2xl font-semibold text-white tracking-tight text-left cursor-pointer hover:text-[#C9A962] transition-colors"
            >
              Lexford Legislator
            </button>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Global corporate counsel advising institutional investors, financial sponsors, and public corporations on landmark transactions and high-stakes disputes.
            </p>
            <div className="mt-5 space-y-1.5 text-xs text-slate-400">
              <p>
                Official Email:{' '}
                <a
                  href="mailto:Lexford.law@legislator.com"
                  className="text-slate-200 hover:text-white underline decoration-white/30"
                >
                  Lexford.law@legislator.com
                </a>
              </p>
              <p>
                New York Switchboard:{' '}
                <a
                  href="tel:+12125550100"
                  className="text-slate-200 hover:text-white underline decoration-white/30 tabular-nums"
                >
                  +1 (212) 555-0100
                </a>
              </p>
            </div>
          </div>

          {/* Firm Navigation */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-wider text-[#C9A962] mb-4">
              The Firm
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate(PageRoute.LAWYERS)}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Lawyers &amp; Staff Directory
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate(PageRoute.PRACTICES)}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Practice Areas
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate(PageRoute.NEWS)}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  News &amp; Insights
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate(PageRoute.ABOUT)}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Us &amp; Governance
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate(PageRoute.LOCATIONS)}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Global Offices &amp; Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-wider text-[#C9A962] mb-4">
              Capabilities
            </h3>
            <ul className="space-y-3 text-sm">
              {PRACTICE_AREAS.map((practice) => (
                <li key={practice.id}>
                  <button
                    type="button"
                    onClick={() => onSelectPractice(practice.id)}
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    {practice.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Locations */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-wider text-[#C9A962] mb-4">
              Office Locations
            </h3>
            <div className="space-y-4">
              {OFFICE_LOCATIONS.map((office) => (
                <div key={office.id} className="space-y-1 text-sm text-slate-300">
                  <button
                    type="button"
                    onClick={() => onNavigate(PageRoute.LOCATIONS)}
                    className="font-medium text-white hover:text-[#C9A962] transition-colors text-left cursor-pointer"
                  >
                    {office.city === 'London' ? 'London, UK' : office.city}
                  </button>
                  <address className="not-italic text-xs text-slate-400 leading-relaxed">
                    {office.addressLines[0]}, {office.addressLines[1]}
                  </address>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-slate-400 leading-relaxed">
              Attorney Advertising. Prior results do not guarantee a similar outcome.
            </p>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
          <p>&copy; 2026 Lexford Legislator. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <button
              type="button"
              onClick={() => onOpenLegal('disclaimer')}
              className="hover:text-white underline decoration-white/25 cursor-pointer"
            >
              Legal Disclaimers &amp; Attorney Advertising
            </button>
            <button
              type="button"
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-white underline decoration-white/25 cursor-pointer"
            >
              Privacy Policy &amp; Terms of Use
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
