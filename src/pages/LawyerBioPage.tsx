import React from 'react';
import {
  ArrowLeft,
  Download,
  FileText,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
} from 'lucide-react';
import { Attorney, NewsItem, PracticeAreaId } from '../types';
import { NEWS_ITEMS } from '../data/firmData';
import { downloadAttorneyBrief, downloadAttorneyVCard } from '../utils/downloads';
import { ResilientImage } from '../components/ResilientImage';

interface LawyerBioPageProps {
  attorney: Attorney;
  onBackToDirectory: () => void;
  onContactLawyer: (lawyer: Attorney) => void;
  onSelectPractice: (practiceId: PracticeAreaId) => void;
  onSelectNews: (article: NewsItem) => void;
}

export const LawyerBioPage: React.FC<LawyerBioPageProps> = ({
  attorney,
  onBackToDirectory,
  onContactLawyer,
  onSelectPractice,
  onSelectNews,
}) => {
  const relatedArticles = NEWS_ITEMS.filter((item) =>
    item.authorIds?.includes(attorney.id)
  );

  return (
    <div className="bg-white">
      {/* Breadcrumb Bar */}
      <div className="bg-[#F8F9FA] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            type="button"
            onClick={onBackToDirectory}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-[#0B1F3A] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Lawyers Directory
          </button>
        </div>
      </div>

      {/* Executive Profile Header */}
      <section className="bg-[#0B1F3A] text-white py-12 sm:py-16 border-b border-[#132D52]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Portrait */}
            <div className="lg:col-span-4 max-w-sm lg:max-w-none">
              <div className="aspect-[3/4] lg:h-full overflow-hidden border border-white/15 bg-[#132D52]">
                <ResilientImage
                  src={attorney.photoUrl}
                  alt={`${attorney.fullName}, ${attorney.title}`}
                  fallbackLabel={attorney.fullName}
                  className="w-full h-full object-cover"
                  objectPosition="object-top"
                />
              </div>
            </div>

            {/* Identity & Direct Contact */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#C9A962] tracking-wider uppercase">
                  <span>{attorney.title}</span>
                  <span aria-hidden="true">&middot;</span>
                  <span>{attorney.officeName}</span>
                </div>

                <h1 className="mt-3 font-serif text-3xl sm:text-5xl font-semibold text-white tracking-tight">
                  {attorney.fullName}
                </h1>

                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-300">
                  <button
                    type="button"
                    onClick={() => onSelectPractice(attorney.practiceAreaId)}
                    className="font-medium text-white underline decoration-[#C9A962] hover:text-[#C9A962] cursor-pointer"
                  >
                    {attorney.practiceAreaName}
                  </button>
                  {attorney.secondaryPractice && (
                    <>
                      <span aria-hidden="true">&middot;</span>
                      <span>{attorney.secondaryPractice}</span>
                    </>
                  )}
                </div>

                <p className="mt-6 text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
                  {attorney.summary}
                </p>
              </div>

              {/* Contact & Fast Downloads Strip */}
              <div className="mt-10 pt-8 border-t border-white/15 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="block text-xs text-slate-400 mb-1">Direct Phone</span>
                    <a
                      href={`tel:${attorney.phone.replace(/[^+\d]/g, '')}`}
                      className="inline-flex items-center gap-2 text-white hover:text-[#C9A962] tabular-nums font-medium"
                    >
                      <Phone className="w-4 h-4 text-[#C9A962]" />
                      {attorney.phone}
                    </a>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="block text-xs text-slate-400 mb-1">Direct Email</span>
                    <a
                      href={`mailto:${attorney.email}?subject=${encodeURIComponent(
                        `Client Inquiry — ${attorney.fullName}`
                      )}`}
                      className="inline-flex items-center gap-2 text-white hover:text-[#C9A962] underline decoration-white/30 font-medium break-all"
                    >
                      <Mail className="w-4 h-4 text-[#C9A962] shrink-0" />
                      {attorney.email}
                    </a>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => onContactLawyer(attorney)}
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#0B1F3A] bg-white hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Contact {attorney.firstName}
                  </button>
                  <button
                    type="button"
                    onClick={() => downloadAttorneyVCard(attorney)}
                    className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-white border border-white/30 hover:border-white hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    Download vCard
                  </button>
                  <button
                    type="button"
                    onClick={() => downloadAttorneyBrief(attorney)}
                    className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-white border border-white/30 hover:border-white hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <FileText className="w-4 h-4" />
                    Download Bio Brief
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Asymmetric Biography & Credentials Layout */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Main Column: Biography & Representative Matters */}
            <div className="lg:col-span-7 space-y-14">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#0B1F3A] pb-4 border-b border-slate-200">
                  Overview &amp; Practice Focus
                </h2>
                <div className="mt-6 space-y-5 text-base text-slate-700 leading-relaxed max-w-prose">
                  {attorney.biography.map((paragraph, idx) => (
                    <p
                      key={idx}
                      className={
                        idx === 0
                          ? 'first-letter:text-5xl first-letter:font-serif first-letter:font-semibold first-letter:text-[#0B1F3A] first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none'
                          : ''
                      }
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Representative Matters */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#0B1F3A] pb-4 border-b border-slate-200">
                  Representative Matters
                </h2>
                <div className="mt-4 divide-y divide-slate-200">
                  {attorney.representativeMatters.map((matter) => (
                    <div key={matter.id} className="py-6">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                        <span className="font-semibold text-[#9A7B3E] tabular-nums">
                          {matter.year}
                        </span>
                        <span aria-hidden="true">&middot;</span>
                        <span>{matter.sector}</span>
                      </div>
                      <h3 className="mt-2 font-serif text-xl font-semibold text-[#0B1F3A]">
                        {matter.headline}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                        {matter.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar: Credentials, Admissions & Publications */}
            <aside className="lg:col-span-5 space-y-10">
              <div className="border border-slate-200 bg-[#F8F9FA] p-6 sm:p-8">
                <h2 className="font-serif text-xl font-semibold text-[#0B1F3A] pb-4 border-b border-slate-200">
                  Credentials &amp; Admissions
                </h2>

                <dl className="divide-y divide-slate-200 text-sm">
                  <div className="py-5">
                    <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                      Education
                    </dt>
                    <dd className="space-y-2 text-slate-800">
                      {attorney.education.map((edu, i) => (
                        <p key={i} className="leading-snug">
                          {edu}
                        </p>
                      ))}
                    </dd>
                  </div>

                  {attorney.clerkships && attorney.clerkships.length > 0 && (
                    <div className="py-5">
                      <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                        Judicial Clerkships
                      </dt>
                      <dd className="space-y-2 text-slate-800">
                        {attorney.clerkships.map((clerk, i) => (
                          <p key={i} className="leading-snug">
                            {clerk}
                          </p>
                        ))}
                      </dd>
                    </div>
                  )}

                  <div className="py-5">
                    <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                      Bar &amp; Court Admissions
                    </dt>
                    <dd className="space-y-1.5 text-slate-800">
                      {attorney.barAdmissions.map((bar, i) => (
                        <p key={i} className="leading-snug">
                          {bar}
                        </p>
                      ))}
                    </dd>
                  </div>

                  <div className="py-5">
                    <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                      Honors &amp; Recognitions
                    </dt>
                    <dd className="space-y-1.5 text-slate-800">
                      {attorney.recognitions.map((rec, i) => (
                        <p key={i} className="leading-snug">
                          {rec}
                        </p>
                      ))}
                    </dd>
                  </div>

                  <div className="pt-5">
                    <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                      Primary Office
                    </dt>
                    <dd className="flex items-center gap-2 text-slate-800 font-medium">
                      <MapPin className="w-4 h-4 text-[#9A7B3E]" />
                      {attorney.officeName} Office
                    </dd>
                  </div>
                </dl>
              </div>

              {relatedArticles.length > 0 && (
                <div className="border border-slate-200 p-6 sm:p-8">
                  <h2 className="font-serif text-xl font-semibold text-[#0B1F3A] pb-4 border-b border-slate-200">
                    Related News &amp; Insights
                  </h2>
                  <div className="divide-y divide-slate-200">
                    {relatedArticles.map((article) => (
                      <div key={article.id} className="py-4 first:pt-4 last:pb-0">
                        <p className="text-xs text-slate-500">
                          {article.category} &middot; {article.date}
                        </p>
                        <button
                          type="button"
                          onClick={() => onSelectNews(article)}
                          className="mt-1.5 text-left font-serif text-base font-semibold text-[#0B1F3A] hover:underline decoration-[#9A7B3E] cursor-pointer"
                        >
                          {article.title}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};
