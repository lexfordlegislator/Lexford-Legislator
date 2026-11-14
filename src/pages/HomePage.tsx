import React from 'react';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import { Attorney, NewsItem, PageRoute, PracticeAreaId } from '../types';
import {
  ATTORNEYS,
  FIRM_ASSETS,
  FIRM_METRICS,
  NEWS_ITEMS,
  PRACTICE_AREAS,
} from '../data/firmData';
import { ResilientImage } from '../components/ResilientImage';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
  onSelectLawyer: (lawyer: Attorney) => void;
  onContactLawyer: (lawyer: Attorney) => void;
  onSelectPractice: (practiceId: PracticeAreaId) => void;
  onSelectNews: (article: NewsItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectLawyer,
  onContactLawyer,
  onSelectPractice,
  onSelectNews,
}) => {
  const featuredAttorneys = ATTORNEYS.filter((a) => a.isFeatured).slice(0, 4);
  const leadNews = NEWS_ITEMS[0];
  const secondaryNews = NEWS_ITEMS.slice(1, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#0B1F3A] text-white overflow-hidden">
        <div className="absolute inset-0">
          <ResilientImage
            src={FIRM_ASSETS.heroHeadquarters}
            alt="Lexford Legislator New York Headquarters at twilight"
            className="w-full h-full object-cover opacity-55"
            objectPosition="object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#061326]/95 via-[#0B1F3A]/85 to-[#0B1F3A]/45"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <p className="text-xs sm:text-sm font-medium tracking-widest uppercase text-[#C9A962] mb-5">
              New York &middot; London, United Kingdom
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1] text-balance">
              Counsel for Defining Transactions and High-Stakes Disputes.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
              Lexford Legislator represents global financial sponsors, Fortune 100 boards, and sovereign institutions in consequential mergers, federal trials, restructurings, and cross-border regulatory matters.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate(PageRoute.LAWYERS)}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-[#0B1F3A] bg-white hover:bg-slate-100 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Find a Lawyer
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate(PageRoute.PRACTICES)}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-medium text-white border border-white/40 hover:border-white hover:bg-white/10 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Explore Practice Areas
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Firm Standing & Scale Strip (Claim-to-Proof Adjacency) */}
      <section aria-label="Firm Standing" className="bg-[#F8F9FA] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
            {FIRM_METRICS.map((metric) => (
              <div key={metric.label} className="py-8 sm:px-6 first:sm:pl-0 last:sm:pr-0">
                <div className="font-serif text-3xl sm:text-4xl font-semibold text-[#0B1F3A] tabular-nums">
                  {metric.value}
                </div>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-snug">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities / Practice Areas */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-200">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#9A7B3E] mb-3">
                Core Capabilities
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#0B1F3A] text-balance">
                Integrated Practices Built for Complex Mandates
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate(PageRoute.PRACTICES)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B1F3A] hover:text-[#9A7B3E] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              View All Practice Areas
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRACTICE_AREAS.map((practice, index) => (
              <button
                key={practice.id}
                type="button"
                onClick={() => onSelectPractice(practice.id)}
                className={`group text-left p-8 border border-slate-200 bg-white hover:border-[#0B1F3A] transition-colors flex flex-col justify-between cursor-pointer ${
                  index === 0 ? 'lg:col-span-2 bg-[#F8F9FA]' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="font-serif text-lg font-medium text-[#9A7B3E] tabular-nums">
                      {practice.indexLabel}
                    </span>
                    <span className="text-xs font-medium text-slate-500 tabular-nums">
                      {practice.benchmarkMetric}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-[#0B1F3A] group-hover:text-[#132D52]">
                    {practice.name}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {practice.overview}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-200/80 flex items-center justify-between text-xs font-semibold text-[#0B1F3A]">
                  <span>Explore Capabilities</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Leadership / Lawyers Spotlight */}
      <section className="py-20 sm:py-24 bg-[#F8F9FA] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-200">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#9A7B3E] mb-3">
                Leadership &amp; Counsel
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#0B1F3A] text-balance">
                Direct Access to Senior Practice Leaders
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate(PageRoute.LAWYERS)}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[#0B1F3A] hover:bg-[#132D52] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Browse Full Directory
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredAttorneys.map((attorney) => (
              <article
                key={attorney.id}
                className="bg-white border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <button
                    type="button"
                    onClick={() => onSelectLawyer(attorney)}
                    className="block w-full aspect-[3/4] overflow-hidden bg-slate-100 cursor-pointer group"
                  >
                    <ResilientImage
                      src={attorney.photoUrl}
                      alt={`${attorney.fullName}, ${attorney.title}`}
                      fallbackLabel={attorney.fullName}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      objectPosition="object-top"
                    />
                  </button>

                  <div className="p-6">
                    <button
                      type="button"
                      onClick={() => onSelectLawyer(attorney)}
                      className="text-left cursor-pointer group"
                    >
                      <h3 className="font-serif text-xl font-semibold text-[#0B1F3A] group-hover:underline decoration-[#9A7B3E]">
                        {attorney.fullName}
                      </h3>
                    </button>
                    <p className="mt-1 text-sm font-medium text-slate-700">
                      {attorney.title}
                    </p>
                    <p className="mt-2 text-xs text-slate-500">
                      {attorney.practiceAreaName} &middot; {attorney.officeName}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-4 border-t border-slate-100 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-600">
                    <a
                      href={`tel:${attorney.phone.replace(/[^+\d]/g, '')}`}
                      className="inline-flex items-center gap-1.5 hover:text-[#0B1F3A] tabular-nums"
                    >
                      <Phone className="w-3.5 h-3.5 text-slate-400" />
                      {attorney.phone}
                    </a>
                    <a
                      href={`mailto:${attorney.email}`}
                      aria-label={`Email ${attorney.fullName}`}
                      className="inline-flex items-center gap-1 font-medium text-[#0B1F3A] hover:text-[#9A7B3E]"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      Email
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={() => onContactLawyer(attorney)}
                    className="w-full py-2 px-3 text-xs font-semibold text-[#0B1F3A] border border-slate-300 hover:border-[#0B1F3A] hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    Contact Lawyer
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial News & Insights Preview */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-200">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#9A7B3E] mb-3">
                News &amp; Legal Insights
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#0B1F3A] text-balance">
                Recent Matters, Verdicts &amp; Client Briefings
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate(PageRoute.NEWS)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B1F3A] hover:text-[#9A7B3E] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              All News &amp; Insights
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Lead Story */}
            <article className="lg:col-span-6 p-8 border border-slate-200 bg-[#F8F9FA] flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                  <span className="font-semibold text-[#9A7B3E]">{leadNews.category}</span>
                  <span aria-hidden="true">&middot;</span>
                  <span>{leadNews.date}</span>
                  <span aria-hidden="true">&middot;</span>
                  <span>{leadNews.readTime}</span>
                </div>
                <h3 className="mt-4 font-serif text-2xl sm:text-3xl font-semibold text-[#0B1F3A] leading-snug">
                  <button
                    type="button"
                    onClick={() => onSelectNews(leadNews)}
                    className="text-left hover:underline decoration-[#9A7B3E] cursor-pointer"
                  >
                    {leadNews.title}
                  </button>
                </h3>
                <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {leadNews.excerpt}
                </p>
              </div>
              <div className="mt-8 pt-5 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500">
                  {leadNews.practiceAreaName}
                </span>
                <button
                  type="button"
                  onClick={() => onSelectNews(leadNews)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B1F3A] hover:text-[#9A7B3E] cursor-pointer"
                >
                  Read Briefing
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>

            {/* Secondary Editorial List */}
            <div className="lg:col-span-6 divide-y divide-slate-200 border-t border-b border-slate-200">
              {secondaryNews.map((item) => (
                <article key={item.id} className="py-6 first:pt-2 last:pb-2">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                    <span className="font-semibold text-[#9A7B3E]">{item.category}</span>
                    <span aria-hidden="true">&middot;</span>
                    <span>{item.date}</span>
                    <span aria-hidden="true">&middot;</span>
                    <span>{item.practiceAreaName}</span>
                  </div>
                  <h3 className="mt-2 font-serif text-xl font-semibold text-[#0B1F3A] leading-snug">
                    <button
                      type="button"
                      onClick={() => onSelectNews(item)}
                      className="text-left hover:underline decoration-[#9A7B3E] cursor-pointer"
                    >
                      {item.title}
                    </button>
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 line-clamp-2">
                    {item.excerpt}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
