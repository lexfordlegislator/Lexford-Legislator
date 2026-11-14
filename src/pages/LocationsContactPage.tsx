import React, { useState } from 'react';
import { CheckCircle2, Clock, Mail, MapPin, Phone, Send, UserCheck } from 'lucide-react';
import { OFFICE_LOCATIONS, PRACTICE_AREAS } from '../data/firmData';

export const LocationsContactPage: React.FC = () => {
  const [regionFilter, setRegionFilter] = useState<'All' | 'North America' | 'Europe'>(
    'All'
  );

  // General Client Inquiry Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [organization, setOrganization] = useState('');
  const [officePref, setOfficePref] = useState(OFFICE_LOCATIONS[0].city);
  const [practicePref, setPracticePref] = useState(PRACTICE_AREAS[0].name);
  const [matterDetails, setMatterDetails] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const visibleOffices = OFFICE_LOCATIONS.filter(
    (office) => regionFilter === 'All' || office.region === regionFilter
  );

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setFormError('Please provide your full name.');
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.trim())) {
      setFormError('Please provide a valid email address.');
      return;
    }
    if (!matterDetails.trim() || matterDetails.trim().length < 20) {
      setFormError('Please summarize your inquiry in at least 20 characters.');
      return;
    }
    if (!agreed) {
      setFormError(
        'Please acknowledge the legal disclaimer notice before submitting your inquiry.'
      );
      return;
    }
    setFormError(null);
    setFormSubmitted(true);
  };

  const resetForm = () => {
    setFullName('');
    setEmail('');
    setPhone('');
    setOrganization('');
    setMatterDetails('');
    setAgreed(false);
    setFormError(null);
    setFormSubmitted(false);
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-[#0B1F3A] text-white py-16 sm:py-20 border-b border-[#132D52]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C9A962] mb-3">
            New York &amp; London
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-white text-balance">
            Locations &amp; Client Inquiries
          </h1>
          <p className="mt-4 text-base text-slate-300 max-w-2xl leading-relaxed">
            Connect directly with our offices in New York and London, United Kingdom, or submit a general business inquiry to our client intake desk.
          </p>
        </div>
      </section>

      {/* Main Split: Office Directory + General Inquiry Form */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left 7 Columns: Office Locations */}
            <div className="lg:col-span-7 space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-200">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#0B1F3A]">
                  Office Directory
                </h2>
                <div
                  role="group"
                  aria-label="Filter Offices by Region"
                  className="flex items-center gap-1.5"
                >
                  {(['All', 'North America', 'Europe'] as const).map((region) => (
                    <button
                      key={region}
                      type="button"
                      onClick={() => setRegionFilter(region)}
                      className={`px-3.5 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 border transition-colors cursor-pointer ${
                        regionFilter === region
                          ? 'bg-[#0B1F3A] text-white border-[#0B1F3A]'
                          : 'bg-white text-slate-700 border-slate-300 hover:border-[#0B1F3A]'
                      }`}
                    >
                      {region}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {visibleOffices.map((office) => (
                  <article
                    key={office.id}
                    className="p-6 sm:p-7 border border-slate-200 bg-white flex flex-col justify-between space-y-6"
                  >
                    <div>
                      <div className="flex items-baseline justify-between gap-2 pb-4 border-b border-slate-100">
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#9A7B3E] mb-1">
                            {office.region}
                          </p>
                          <h3 className="font-serif text-2xl font-semibold text-[#0B1F3A]">
                            {office.city === 'London' ? 'London, UK' : office.city}
                          </h3>
                        </div>
                        <span className="text-xs text-slate-500 tabular-nums">
                          Est. {office.established}
                        </span>
                      </div>

                      <div className="mt-5 flex items-start gap-2.5 text-sm text-slate-700">
                        <MapPin className="w-4 h-4 text-[#9A7B3E] mt-0.5 shrink-0" />
                        <address className="not-italic leading-relaxed">
                          {office.addressLines.map((line, i) => (
                            <span key={i} className="block">
                              {line}
                            </span>
                          ))}
                        </address>
                      </div>

                      <div className="mt-5 space-y-2 text-xs text-slate-600">
                        <p className="flex items-center gap-2">
                          <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <a
                            href={`tel:${office.phone.replace(/[^+\d]/g, '')}`}
                            className="font-medium text-slate-900 hover:text-[#0B1F3A] tabular-nums"
                          >
                            {office.phone}
                          </a>
                          <span className="text-slate-400">&middot;</span>
                          <span className="tabular-nums text-slate-500">
                            Fax {office.fax}
                          </span>
                        </p>
                        <p className="flex items-center gap-2">
                          <Mail className="w-3.5 h-3.5 text-[#9A7B3E] shrink-0" />
                          <a
                            href={`mailto:${office.email}`}
                            className="font-semibold text-[#0B1F3A] underline decoration-[#9A7B3E] hover:text-[#9A7B3E]"
                          >
                            {office.email}
                          </a>
                        </p>
                        <p className="flex items-center gap-2 text-slate-500">
                          <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span>{office.timezone}</span>
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5">
                        <UserCheck className="w-3.5 h-3.5 text-[#9A7B3E]" />
                        Lead: <strong className="text-slate-800">{office.managingPartner}</strong>
                      </span>
                      <span className="tabular-nums">{office.attorneyCount} Attorneys</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Right 5 Columns: General Client Inquiry Form */}
            <div className="lg:col-span-5">
              <div className="border border-slate-200 bg-[#F8F9FA] p-6 sm:p-8">
                <h2 className="font-serif text-2xl font-semibold text-[#0B1F3A]">
                  General Client Inquiry
                </h2>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  For new representation, media inquiries, or speaking requests, complete the form below or email{' '}
                  <a
                    href="mailto:Lexford.law@legislator.com"
                    className="font-semibold text-[#0B1F3A] underline decoration-[#9A7B3E]"
                  >
                    Lexford.law@legislator.com
                  </a>
                  .
                </p>

                {formSubmitted ? (
                  <div className="mt-8 py-8 px-5 bg-white border border-slate-200 text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-[#0B1F3A]">
                      Inquiry Received
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Thank you, <span className="font-semibold text-slate-900">{fullName}</span>. Your inquiry regarding{' '}
                      <span className="font-semibold text-slate-900">{practicePref}</span> has been routed to our{' '}
                      <span className="font-semibold text-slate-900">{officePref}</span> office at{' '}
                      <span className="font-semibold text-slate-900">Lexford.law@legislator.com</span>.
                    </p>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-5 py-2.5 text-xs font-semibold text-white bg-[#0B1F3A] hover:bg-[#132D52] transition-colors cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="mt-6 space-y-4" noValidate>
                    {formError && (
                      <div
                        role="alert"
                        className="p-3 bg-red-50 border border-red-200 text-red-800 text-xs font-medium"
                      >
                        {formError}
                      </div>
                    )}

                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold text-slate-700 mb-1.5"
                      >
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Robert Sterling"
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 text-sm text-slate-900 focus:border-[#0B1F3A] focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-xs font-semibold text-slate-700 mb-1.5"
                        >
                          Business Email *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@company.com"
                          className="w-full px-3.5 py-2.5 bg-white border border-slate-300 text-sm text-slate-900 focus:border-[#0B1F3A] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="contact-phone"
                          className="block text-xs font-semibold text-slate-700 mb-1.5"
                        >
                          Telephone
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+1 (212) 555-0190"
                          className="w-full px-3.5 py-2.5 bg-white border border-slate-300 text-sm text-slate-900 focus:border-[#0B1F3A] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-org"
                        className="block text-xs font-semibold text-slate-700 mb-1.5"
                      >
                        Organization / Company
                      </label>
                      <input
                        id="contact-org"
                        type="text"
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        placeholder="NorthStar Capital Management"
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 text-sm text-slate-900 focus:border-[#0B1F3A] focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="contact-office"
                          className="block text-xs font-semibold text-slate-700 mb-1.5"
                        >
                          Preferred Office
                        </label>
                        <select
                          id="contact-office"
                          value={officePref}
                          onChange={(e) => setOfficePref(e.target.value)}
                          className="w-full px-3.5 py-2.5 bg-white border border-slate-300 text-sm text-slate-900 focus:border-[#0B1F3A] focus:outline-none"
                        >
                          {OFFICE_LOCATIONS.map((o) => (
                            <option key={o.id} value={o.city}>
                              {o.city === 'London' ? 'London, UK' : o.city}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="contact-practice"
                          className="block text-xs font-semibold text-slate-700 mb-1.5"
                        >
                          Practice Area
                        </label>
                        <select
                          id="contact-practice"
                          value={practicePref}
                          onChange={(e) => setPracticePref(e.target.value)}
                          className="w-full px-3.5 py-2.5 bg-white border border-slate-300 text-sm text-slate-900 focus:border-[#0B1F3A] focus:outline-none"
                        >
                          {PRACTICE_AREAS.map((p) => (
                            <option key={p.id} value={p.name}>
                              {p.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-details"
                        className="block text-xs font-semibold text-slate-700 mb-1.5"
                      >
                        Nature of Inquiry *
                      </label>
                      <textarea
                        id="contact-details"
                        rows={4}
                        required
                        value={matterDetails}
                        onChange={(e) => setMatterDetails(e.target.value)}
                        placeholder="Provide a non-confidential summary of your legal inquiry..."
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 text-sm text-slate-900 focus:border-[#0B1F3A] focus:outline-none resize-y"
                      />
                    </div>

                    <label className="flex items-start gap-2.5 text-xs text-slate-600 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="mt-0.5 w-4 h-4 accent-[#0B1F3A] shrink-0"
                      />
                      <span>
                        I acknowledge that contacting Lexford Legislator via this form does not establish an attorney-client relationship.
                      </span>
                    </label>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 text-sm font-semibold text-white bg-[#0B1F3A] hover:bg-[#132D52] transition-colors cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      Submit Client Inquiry
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
