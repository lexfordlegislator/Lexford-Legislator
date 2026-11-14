import React, { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, Download, Search } from 'lucide-react';
import { Attorney, NewsItem } from '../types';
import { ATTORNEYS, NEWS_ITEMS } from '../data/firmData';
import { downloadNewsArticle } from '../utils/downloads';

interface NewsInsightsPageProps {
  initialArticle?: NewsItem | null;
  onSelectLawyer: (lawyer: Attorney) => void;
}

const CATEGORIES: ('All' | NewsItem['category'])[] = [
  'All',
  'Deal Announcements',
  'Case Wins',
  'Legal Insights',
  'Firm Honors & Awards',
];

export const NewsInsightsPage: React.FC<NewsInsightsPageProps> = ({
  initialArticle = null,
  onSelectLawyer,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | NewsItem['category']>(
    'All'
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticle, setActiveArticle] = useState<NewsItem | null>(initialArticle);

  useEffect(() => {
    setActiveArticle(initialArticle);
  }, [initialArticle]);

  const filteredNews = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return NEWS_ITEMS.filter((item) => {
      if (selectedCategory !== 'All' && item.category !== selectedCategory) {
        return false;
      }
      if (!q) return true;
      return (
        item.title.toLowerCase().includes(q) ||
        item.excerpt.toLowerCase().includes(q) ||
        item.practiceAreaName.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
      );
    });
  }, [selectedCategory, searchQuery]);

  if (activeArticle) {
    const authors = ATTORNEYS.filter((a) =>
      activeArticle.authorIds?.includes(a.id)
    );

    return (
      <div className="bg-white">
        <div className="bg-[#F8F9FA] border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => setActiveArticle(null)}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-[#0B1F3A] cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to News &amp; Insights
            </button>
            <button
              type="button"
              onClick={() => downloadNewsArticle(activeArticle)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B1F3A] hover:text-[#9A7B3E] cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              Download Briefing
            </button>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <span className="font-semibold text-[#9A7B3E]">
              {activeArticle.category}
            </span>
            <span aria-hidden="true">&middot;</span>
            <span>{activeArticle.date}</span>
            <span aria-hidden="true">&middot;</span>
            <span>{activeArticle.practiceAreaName}</span>
            <span aria-hidden="true">&middot;</span>
            <span>{activeArticle.readTime}</span>
          </div>

          <h1 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0B1F3A] leading-tight text-balance">
            {activeArticle.title}
          </h1>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed border-b border-slate-200 pb-8">
            {activeArticle.excerpt}
          </p>

          <div className="mt-10 space-y-6 text-base text-slate-800 leading-relaxed max-w-prose">
            {activeArticle.content.map((para, index) => (
              <p
                key={index}
                className={
                  index === 0
                    ? 'first-letter:text-5xl first-letter:font-serif first-letter:font-semibold first-letter:text-[#0B1F3A] first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none'
                    : ''
                }
              >
                {para}
              </p>
            ))}
          </div>

          {authors.length > 0 && (
            <div className="mt-14 pt-8 border-t border-slate-200">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
                Featured Lexford Legislator Professionals
              </h2>
              <div className="flex flex-wrap gap-6">
                {authors.map((author) => (
                  <button
                    key={author.id}
                    type="button"
                    onClick={() => onSelectLawyer(author)}
                    className="text-left group cursor-pointer"
                  >
                    <span className="font-serif text-lg font-semibold text-[#0B1F3A] group-hover:underline decoration-[#9A7B3E] block">
                      {author.fullName}
                    </span>
                    <span className="text-xs text-slate-500">
                      {author.title} &middot; {author.officeName}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-[#0B1F3A] text-white py-16 sm:py-20 border-b border-[#132D52]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C9A962] mb-3">
            Editorial &amp; Press
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-white text-balance">
            News, Press Releases &amp; Insights
          </h1>
          <p className="mt-4 text-base text-slate-300 max-w-2xl leading-relaxed">
            Recent transaction announcements, federal trial victories, firm honors, and legal analysis authored by Lexford Legislator partners.
          </p>
        </div>
      </section>

      {/* Filter & Search Toolbar */}
      <section className="bg-[#F8F9FA] border-b border-slate-200 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div
            role="group"
            aria-label="Filter News by Category"
            className="flex flex-wrap items-center gap-1.5"
          >
            {CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer border ${
                    active
                      ? 'bg-[#0B1F3A] text-white border-[#0B1F3A]'
                      : 'bg-white text-slate-700 border-slate-300 hover:border-[#0B1F3A] hover:text-[#0B1F3A]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="relative w-full lg:w-72">
            <label htmlFor="news-search" className="sr-only">
              Search News and Insights
            </label>
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id="news-search"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search announcements & articles..."
              className="w-full pl-9 pr-3 py-2 bg-white border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:border-[#0B1F3A] focus:outline-none"
            />
          </div>
        </div>
      </section>

      {/* Editorial Feed */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredNews.length === 0 ? (
            <div className="py-16 px-6 text-center border border-slate-200 bg-[#F8F9FA]">
              <h2 className="font-serif text-2xl font-semibold text-[#0B1F3A]">
                No Publications Match Your Filter
              </h2>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="mt-4 px-5 py-2.5 text-xs font-semibold text-white bg-[#0B1F3A] hover:bg-[#132D52] cursor-pointer"
              >
                Reset News Filters
              </button>
            </div>
          ) : (
            <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
              {filteredNews.map((item, idx) => (
                <article
                  key={item.id}
                  className={`py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start ${
                    idx === 0 && selectedCategory === 'All' && !searchQuery
                      ? 'bg-[#F8F9FA]/70 px-6 sm:px-8 -mx-4 sm:mx-0 border border-slate-200'
                      : ''
                  }`}
                >
                  <div className="lg:col-span-3 text-xs text-slate-500 space-y-1">
                    <p className="font-semibold text-[#9A7B3E]">{item.category}</p>
                    <p className="tabular-nums">{item.date}</p>
                    <p>
                      {item.practiceAreaName} &middot; {item.readTime}
                    </p>
                  </div>

                  <div className="lg:col-span-9 space-y-3">
                    <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#0B1F3A] leading-snug">
                      <button
                        type="button"
                        onClick={() => setActiveArticle(item)}
                        className="text-left hover:underline decoration-[#9A7B3E] cursor-pointer"
                      >
                        {item.title}
                      </button>
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
                      {item.excerpt}
                    </p>
                    <div className="pt-2 flex flex-wrap items-center gap-6">
                      <button
                        type="button"
                        onClick={() => setActiveArticle(item)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B1F3A] hover:text-[#9A7B3E] cursor-pointer"
                      >
                        Read Full Publication
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => downloadNewsArticle(item)}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-[#0B1F3A] cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5" />
                        Download Text Brief
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
