import React, { useEffect, useState } from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { Attorney, PracticeAreaId } from '../types';
import { ATTORNEYS, PRACTICE_AREAS } from '../data/firmData';
import { downloadPracticeOverview } from '../utils/downloads';
import { ResilientImage } from '../components/ResilientImage';

interface PracticeAreasPageProps {
  initialPracticeId?: PracticeAreaId;
  onSelectLawyer: (lawyer: Attorney) => void;
  onContactLawyer: (lawyer: Attorney) => void;
  onBrowsePracticeLawyers: (practiceId: PracticeAreaId) => void;
}

export const PracticeAreasPage: React.FC<PracticeAreasPageProps> = ({
  initialPracticeId,
  onSelectLawyer,
  onContactLawyer,
  onBrowsePracticeLawyers,
}) => {
  const [activePracticeId, setActivePracticeId] = useState<PracticeAreaId>(
    initialPracticeId || PRACTICE_AREAS[0].id
  );

  useEffect(() => {
    if (initialPracticeId) {
      setActivePracticeId(initialPracticeId);
    }
  }, [initialPracticeId]);

  const activePractice =
    PRACTICE_AREAS.find((p) => p.id === activePracticeId) || PRACTICE_AREAS[0];

  const practiceLeaders = ATTORNEYS.filter(
    (a) => a.practiceAreaId === activePractice.id
  );

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-[#0B1F3A] text-white py-16 sm:py-20 border-b border-[#132D52]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C9A962] mb-3">
            Services &amp; Capabilities
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-white text-balance">
            Practice Areas
          </h1>
          <p className="mt-4 text-base text-slate-300 max-w-2xl leading-relaxed">
            Our multidisciplinary practices unite transactional precision, federal courtroom advocacy, and regulatory fluency across the world’s primary financial and legal centers.
          </p>
        </div>
      </section>

      {/* Interactive Practice Selector Strip */}
      <div className="bg-[#F8F9FA] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div
            role="tablist"
            aria-label="Practice Area Categories"
            className="flex flex-wrap items-center gap-2"
          >
            {PRACTICE_AREAS.map((practice) => {
              const isActive = practice.id === activePractice.id;
              return (
                <button
                  key={practice.id}
                  role="tab"
                  aria-selected={isActive}
                  type="button"
                  onClick={() => setActivePracticeId(practice.id)}
                  className={`px-4 py-2.5 text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer border ${
                    isActive
                      ? 'bg-[#0B1F3A] text-white border-[#0B1F3A]'
                      : 'bg-white text-slate-700 border-slate-300 hover:border-[#0B1F3A] hover:text-[#0B1F3A]'
                  }`}
                >
                  <span className="tabular-nums mr-1.5 opacity-75">
                    {practice.indexLabel}
                  </span>
                  {practice.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Selected Practice Detail */}
      <section className="py-14 sm:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Editorial Narrative & Capabilities */}
            <div className="lg:col-span-7 space-y-10">
              <div>
                <p className="font-serif text-lg text-[#9A7B3E] tabular-nums">
                  {activePractice.indexLabel}
                </p>
                <h2 className="mt-1 font-serif text-3xl sm:text-4xl font-semibold text-[#0B1F3A]">
                  {activePractice.name}
                </h2>
                <p className="mt-4 text-lg text-slate-700 font-medium leading-relaxed">
                  {activePractice.overview}
                </p>
                <div className="mt-6 space-y-4 text-base text-slate-600 leading-relaxed max-w-prose">
                  {activePractice.editorialDetail.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Core Capabilities List */}
              <div className="pt-8 border-t border-slate-200">
                <h3 className="font-serif text-2xl font-semibold text-[#0B1F3A] mb-5">
                  Core Capabilities
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm text-slate-700">
                  {activePractice.keyCapabilities.map((cap) => (
                    <li
                      key={cap}
                      className="py-2.5 border-b border-slate-200 flex items-start gap-2.5"
                    >
                      <span
                        aria-hidden="true"
                        className="text-[#9A7B3E] font-serif font-semibold"
                      >
                        &mdash;
                      </span>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onBrowsePracticeLawyers(activePractice.id)}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#0B1F3A] hover:bg-[#132D52] transition-colors cursor-pointer"
                >
                  View {activePractice.name} Lawyers
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => downloadPracticeOverview(activePractice)}
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-[#0B1F3A] border border-slate-300 hover:border-[#0B1F3A] transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  Download Practice Brief
                </button>
              </div>
            </div>

            {/* Right Column: Benchmark + Featured Engagements + Practice Leaders */}
            <aside className="lg:col-span-5 space-y-8">
              {/* Benchmark Card */}
              <div className="p-8 bg-[#0B1F3A] text-white">
                <p className="text-xs uppercase tracking-widest text-[#C9A962]">
                  Practice Standing
                </p>
                <div className="mt-3 font-serif text-4xl sm:text-5xl font-semibold tabular-nums">
                  {activePractice.benchmarkMetric}
                </div>
                <p className="mt-2 text-sm text-slate-300">
                  {activePractice.benchmarkLabel}
                </p>
              </div>

              {/* Representative Engagements */}
              <div className="border border-slate-200 bg-[#F8F9FA] p-6 sm:p-8">
                <h3 className="font-serif text-xl font-semibold text-[#0B1F3A] pb-4 border-b border-slate-200">
                  Selected Engagements
                </h3>
                <div className="divide-y divide-slate-200">
                  {activePractice.featuredEngagements.map((eng) => (
                    <div key={eng.title} className="py-5 first:pt-5 last:pb-0">
                      <p className="text-xs font-semibold text-[#9A7B3E] tabular-nums">
                        {eng.valueOrOutcome}
                      </p>
                      <h4 className="mt-1 font-serif text-lg font-semibold text-[#0B1F3A]">
                        {eng.title}
                      </h4>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                        {eng.summary}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Practice Leaders */}
              <div className="border border-slate-200 p-6 sm:p-8">
                <h3 className="font-serif text-xl font-semibold text-[#0B1F3A] pb-4 border-b border-slate-200">
                  Practice Contacts
                </h3>
                <div className="divide-y divide-slate-200">
                  {practiceLeaders.map((leader) => (
                    <div
                      key={leader.id}
                      className="py-4 first:pt-4 last:pb-0 flex items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <button
                          type="button"
                          onClick={() => onSelectLawyer(leader)}
                          className="w-12 h-14 overflow-hidden bg-slate-100 shrink-0 cursor-pointer"
                        >
                          <ResilientImage
                            src={leader.photoUrl}
                            alt={leader.fullName}
                            className="w-full h-full object-cover"
                            objectPosition="object-top"
                          />
                        </button>
                        <div className="min-w-0">
                          <button
                            type="button"
                            onClick={() => onSelectLawyer(leader)}
                            className="font-serif text-base font-semibold text-[#0B1F3A] hover:underline decoration-[#9A7B3E] text-left truncate block cursor-pointer"
                          >
                            {leader.fullName}
                          </button>
                          <p className="text-xs text-slate-500 truncate">
                            {leader.title} &middot; {leader.officeName}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <a
                          href={`mailto:${leader.email}`}
                          aria-label={`Email ${leader.fullName}`}
                          className="p-2 text-slate-600 hover:text-[#0B1F3A] border border-slate-200 hover:border-[#0B1F3A] transition-colors"
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                        <button
                          type="button"
                          onClick={() => onContactLawyer(leader)}
                          className="px-3 py-2 text-xs font-semibold text-white bg-[#0B1F3A] hover:bg-[#132D52] transition-colors cursor-pointer"
                        >
                          Contact
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Complete 5-Category Directory Matrix */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#0B1F3A] pb-6 border-b border-slate-200">
            All Five Core Practice Groups
          </h2>
          <div className="divide-y divide-slate-200">
            {PRACTICE_AREAS.map((practice) => (
              <div
                key={practice.id}
                className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="max-w-2xl">
                  <div className="flex items-baseline gap-3">
                    <span className="font-serif text-base text-[#9A7B3E] tabular-nums">
                      {practice.indexLabel}
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        setActivePracticeId(practice.id);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="font-serif text-xl font-semibold text-[#0B1F3A] hover:underline decoration-[#9A7B3E] text-left cursor-pointer"
                    >
                      {practice.name}
                    </button>
                  </div>
                  <p className="mt-1.5 text-sm text-slate-600">
                    {practice.shortTagline}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setActivePracticeId(practice.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#0B1F3A] hover:text-[#9A7B3E] whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Inspect Practice
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
