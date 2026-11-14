import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PageRoute } from '../types';

interface NavbarProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
}

const NAV_ITEMS: { label: string; route: PageRoute }[] = [
  { label: 'Lawyers', route: PageRoute.LAWYERS },
  { label: 'Practice Areas', route: PageRoute.PRACTICES },
  { label: 'News & Insights', route: PageRoute.NEWS },
  { label: 'About Us', route: PageRoute.ABOUT },
  { label: 'Locations', route: PageRoute.LOCATIONS },
];

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (route: PageRoute) => {
    setMobileMenuOpen(false);
    onNavigate(route);
  };

  const isRouteActive = (route: PageRoute) => {
    if (route === PageRoute.LAWYERS && currentRoute === PageRoute.LAWYER_BIO) {
      return true;
    }
    return currentRoute === route;
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <button
          type="button"
          onClick={() => handleNav(PageRoute.HOME)}
          className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-[#0B1F3A] whitespace-nowrap shrink-0 cursor-pointer hover:text-[#132D52] transition-colors"
        >
          Lexford Legislator
        </button>

        {/* Zone 2: 5 concise single-line navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-7"
        >
          {NAV_ITEMS.map((item) => {
            const active = isRouteActive(item.route);
            return (
              <button
                key={item.route}
                type="button"
                onClick={() => handleNav(item.route)}
                className={`relative py-2 text-sm font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                  active
                    ? 'text-[#0B1F3A]'
                    : 'text-slate-600 hover:text-[#0B1F3A]'
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 bottom-0 h-0.5 bg-[#9A7B3E] transition-opacity duration-150 ${
                    active ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleNav(PageRoute.LOCATIONS)}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#0B1F3A] hover:bg-[#132D52] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Contact
          </button>

          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 text-slate-700 hover:text-[#0B1F3A] cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <nav aria-label="Mobile Navigation" className="px-4 py-4 space-y-1">
            {NAV_ITEMS.map((item) => {
              const active = isRouteActive(item.route);
              return (
                <button
                  key={item.route}
                  type="button"
                  onClick={() => handleNav(item.route)}
                  className={`w-full text-left px-3 py-3 text-base font-medium border-b border-slate-100 transition-colors cursor-pointer ${
                    active
                      ? 'text-[#0B1F3A] bg-slate-50'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-[#0B1F3A]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="pt-3">
              <button
                type="button"
                onClick={() => handleNav(PageRoute.LOCATIONS)}
                className="w-full py-3 px-4 text-center text-sm font-medium text-white bg-[#0B1F3A] hover:bg-[#132D52] transition-colors cursor-pointer"
              >
                Contact the Firm
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
