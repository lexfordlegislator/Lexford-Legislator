import React, { useMemo, useState } from 'react';
import { ArrowUpRight, Mail, Phone, RotateCcw, Search } from 'lucide-react';
import { Attorney, AttorneyTitle, OfficeId, PracticeAreaId } from '../types';
import { ATTORNEYS, OFFICE_LOCATIONS, PRACTICE_AREAS } from '../data/firmData';
import { ResilientImage } from '../components/ResilientImage';

interface LawyersPageProps {
  initialPracticeFilter?: PracticeAreaId | 'all';
  onSelectLawyer: (lawyer: Attorney) => void;
  onContactLawyer: (lawyer: Attorney) => void;
}

const ROLE_FILTERS: { label: string; value: 'all' | AttorneyTitle }[] = [
  { label: 'All Roles', value: 'all' },
  { label: 'Managing Partner', value: AttorneyTitle.MANAGING_PARTNER },
  { label: 'Partner', value: AttorneyTitle.PARTNER },
  { label: 'Senior Counsel', value: AttorneyTitle.SENIOR_COUNSEL },
  { label: 'Associate', value: AttorneyTitle.ASSOCIATE },
  { label: 'Legal Operations', value: AttorneyTitle.LEGAL_OPERATIONS },
];

export const LawyersPage: React.FC<LawyersPageProps> = ({
  initialPracticeFilter = 'all',
  onSelectLawyer,
  onContactLawyer,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [practiceFilter, setPracticeFilter] = useState<PracticeAreaId | 'all'>(
    initialPracticeFilter
  );
  const [officeFilter, setOfficeFilter] = useState<OfficeId | 'all'>('all');
  const [roleFilter, setRoleFilter] = useState<'all' | AttorneyTitle>('all');

  const filteredAttorneys = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return ATTORNEYS.filter((attorney) => {
      if (practiceFilter !== 'all' && attorney.practiceAreaId !== practiceFilter) {
        return false;
      }
      if (officeFilter !== 'all' && attorney.officeId !== officeFilter) {
        return false;
      }
      if (roleFilter !== 'all' && attorney.title !== roleFilter) {
        return false;
      }
      if (!q) return true;

      const searchable = [
        attorney.fullName,
        attorney.title,
        attorney.practiceAreaName,
        attorney.secondaryPractice || '',
        attorney.officeName,
        attorney.summary,
        ...attorney.education,
        ...attorney.barAdmissions,
        ...attorney.representativeMatters.map((m) => `${m.headline} ${m.sector}`),
      ]
        .join(' ')
        .toLowerCase();

      return searchable.includes(q);
    });
  }, [searchQuery, practiceFilter, officeFilter, roleFilter]);

  const hasActiveFilters =
    searchQuery.trim() !== '' ||
    practiceFilter !== 'all' ||
    officeFilter !== 'all' ||
    roleFilter !== 'all';

  const resetFilters = () => {
    setSearchQuery('');
    setPracticeFilter('all');
    setOfficeFilter('all');
    setRoleFilter('all');
  };

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-[#0B1F3A] text-white py-16 sm:py-20 border-b border-[#132D52]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C9A962] mb-3">
            Professionals Directory
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-white text-balance">
            Lawyers &amp; Senior Professionals
          </h1>
          <p className="mt-4 text-base text-slate-300 max-w-2xl leading-relaxed">
            Search and filter our New York and London partners, senior counsel, associates, and legal operations leadership by practice area, office location, or professional role.
          </p>
        </div>
      </section>

      {/* Search & Filter Controls */}
      <section
        aria-label="Filter Directory"
        className="bg-[#F8F9FA] border-b border-slate-200 py-6"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <label htmlFor="lawyer-search" className="sr-only">
                Search lawyers by name, practice, school, or matter
              </label>
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="lawyer-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, practice, law school, or representative matter..."
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0B1F3A] focus:outline-none"
              />
            </div>

            {/* Practice Area Select */}
            <div className="md:col-span-3">
              <label htmlFor="practice-filter" className="sr-only">
                Filter by Practice Area
              </label>
              <select
                id="practice-filter"
                value={practiceFilter}
                onChange={(e) =>
                  setPracticeFilter(e.target.value as PracticeAreaId | 'all')
                }
                className="w-full px-3.5 py-2.5 bg-white border border-slate-300 text-sm text-slate-900 focus:border-[#0B1F3A] focus:outline-none"
              >
                <option value="all">All Practice Areas</option>
                {PRACTICE_AREAS.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Office Select */}
            <div className="md:col-span-3">
              <label htmlFor="office-filter" className="sr-only">
                Filter by Office Location
              </label>
              <select
                id="office-filter"
                value={officeFilter}
                onChange={(e) => setOfficeFilter(e.target.value as OfficeId | 'all')}
                className="w-full px-3.5 py-2.5 bg-white border border-slate-300 text-sm text-slate-900 focus:border-[#0B1F3A] focus:outline-none"
              >
                <option value="all">All Offices</option>
                {OFFICE_LOCATIONS.map((o) => (
                  <option key={o.id} value={o.id}>
                    {o.city === 'London' ? 'London, UK' : o.city}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Role Filter Tabs + Result Count */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pt-2">
            <div
              role="group"
              aria-label="Filter by Role"
              className="flex flex-wrap items-center gap-1.5"
            >
              {ROLE_FILTERS.map((role) => {
                const active = roleFilter === role.value;
                return (
                  <button
                    key={role.value}
                    type="button"
                    onClick={() => setRoleFilter(role.value)}
                    className={`px-3.5 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer border ${
                      active
                        ? 'bg-[#0B1F3A] text-white border-[#0B1F3A]'
                        : 'bg-white text-slate-700 border-slate-300 hover:border-[#0B1F3A] hover:text-[#0B1F3A]'
                    }`}
                  >
                    {role.label}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-4 text-xs text-slate-600">
              <span className="tabular-nums font-medium">
                Showing {filteredAttorneys.length} of {ATTORNEYS.length} Professionals
              </span>
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="inline-flex items-center gap-1.5 font-semibold text-[#0B1F3A] hover:text-[#9A7B3E] cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset Filters
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Directory Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredAttorneys.length === 0 ? (
            <div className="py-20 px-6 text-center border border-slate-200 bg-[#F8F9FA]">
              <h2 className="font-serif text-2xl font-semibold text-[#0B1F3A]">
                No Matching Professionals Found
              </h2>
              <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
                Adjust your search keywords or clear the selected practice, office, and role filters to view the full Lexford Legislator directory.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[#0B1F3A] hover:bg-[#132D52] transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                Show All Professionals
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAttorneys.map((attorney) => (
                <article
                  key={attorney.id}
                  className="border border-slate-200 bg-white flex flex-col justify-between hover:border-slate-400 transition-colors"
                >
                  <div>
                    {/* Headshot */}
                    <button
                      type="button"
                      onClick={() => onSelectLawyer(attorney)}
                      className="block w-full aspect-[4/4.5] overflow-hidden bg-slate-100 cursor-pointer group"
                    >
                      <ResilientImage
                        src={attorney.photoUrl}
                        alt={`${attorney.fullName}, ${attorney.title}`}
                        fallbackLabel={attorney.fullName}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        objectPosition="object-top"
                      />
                    </button>

                    {/* Identity & Practice */}
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <button
                            type="button"
                            onClick={() => onSelectLawyer(attorney)}
                            className="text-left cursor-pointer group"
                          >
                            <h2 className="font-serif text-2xl font-semibold text-[#0B1F3A] group-hover:underline decoration-[#9A7B3E]">
                              {attorney.fullName}
                            </h2>
                          </button>
                          <p className="mt-1 text-sm font-semibold text-[#9A7B3E]">
                            {attorney.title}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => onSelectLawyer(attorney)}
                          aria-label={`View full biography for ${attorney.fullName}`}
                          className="p-2 text-slate-400 hover:text-[#0B1F3A] transition-colors shrink-0 cursor-pointer"
                        >
                          <ArrowUpRight className="w-5 h-5" />
                        </button>
                      </div>

                      <p className="mt-3 text-xs font-medium text-slate-600">
                        {attorney.practiceAreaName} &middot; {attorney.officeName}
                      </p>

                      <p className="mt-4 text-sm text-slate-600 leading-relaxed line-clamp-3">
                        {attorney.summary}
                      </p>
                    </div>
                  </div>

                  {/* Direct Contact Block */}
                  <div className="px-6 pb-6 pt-5 border-t border-slate-100 bg-[#F8F9FA]/60 space-y-3">
                    <div className="space-y-1.5 text-xs text-slate-700">
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <a
                          href={`tel:${attorney.phone.replace(/[^+\d]/g, '')}`}
                          className="hover:text-[#0B1F3A] tabular-nums"
                        >
                          {attorney.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 min-w-0">
                        <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <a
                          href={`mailto:${attorney.email}?subject=${encodeURIComponent(
                            `Client Inquiry — ${attorney.practiceAreaName}`
                          )}`}
                          className="text-[#0B1F3A] font-medium hover:text-[#9A7B3E] underline decoration-slate-300 truncate"
                        >
                          {attorney.email}
                        </a>
                      </div>
                    </div>

                    <div className="pt-2 grid grid-cols-2 gap-2.5">
                      <button
                        type="button"
                        onClick={() => onContactLawyer(attorney)}
                        className="py-2.5 px-3 text-xs font-semibold text-white bg-[#0B1F3A] hover:bg-[#132D52] transition-colors whitespace-nowrap cursor-pointer"
                      >
                        Contact Lawyer
                      </button>
                      <button
                        type="button"
                        onClick={() => onSelectLawyer(attorney)}
                        className="py-2.5 px-3 text-xs font-semibold text-[#0B1F3A] bg-white border border-slate-300 hover:border-[#0B1F3A] transition-colors whitespace-nowrap cursor-pointer"
                      >
                        Full Biography
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
