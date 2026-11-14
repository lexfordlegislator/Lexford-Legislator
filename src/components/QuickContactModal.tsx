import React, { useEffect, useState } from 'react';
import { CheckCircle2, Mail, Send, X } from 'lucide-react';
import { Attorney } from '../types';
import { ResilientImage } from './ResilientImage';

interface QuickContactModalProps {
  attorney: Attorney | null;
  onClose: () => void;
}

export const QuickContactModal: React.FC<QuickContactModalProps> = ({
  attorney,
  onClose,
}) => {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [acknowledged, setAcknowledged] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (attorney) {
      setSenderName('');
      setSenderEmail('');
      setOrganization('');
      setSubject(`Inquiry for ${attorney.fullName} (${attorney.practiceAreaName})`);
      setMessage('');
      setAcknowledged(false);
      setError(null);
      setSubmitted(false);
    }
  }, [attorney]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (attorney) {
      window.addEventListener('keydown', handleKey);
    }
    return () => window.removeEventListener('keydown', handleKey);
  }, [attorney, onClose]);

  if (!attorney) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName.trim()) {
      setError('Please enter your full name.');
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(senderEmail.trim())) {
      setError('Please enter a valid business email address.');
      return;
    }
    if (!message.trim() || message.trim().length < 15) {
      setError('Please provide a brief overview of your inquiry (at least 15 characters).');
      return;
    }
    if (!acknowledged) {
      setError('Please acknowledge the non-confidentiality notice before sending.');
      return;
    }
    setError(null);
    setSubmitted(true);
  };

  const mailtoHref = `mailto:${attorney.email}?subject=${encodeURIComponent(
    subject || `Client Inquiry — ${attorney.practiceAreaName}`
  )}&body=${encodeURIComponent(
    message
      ? `${message}\n\nFrom: ${senderName || '[Your Name]'}${organization ? ` (${organization})` : ''}`
      : `Dear ${attorney.fullName},\n\nI would like to schedule a consultation regarding ${attorney.practiceAreaName}.\n`
  )}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="quick-contact-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#061326]/75 backdrop-blur-xs"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white w-full max-w-xl border border-slate-200 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="px-6 py-5 bg-[#0B1F3A] text-white flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 min-w-0">
            <div className="w-12 h-14 overflow-hidden bg-slate-800 shrink-0 border border-white/15">
              <ResilientImage
                src={attorney.photoUrl}
                alt={attorney.fullName}
                className="w-full h-full object-cover"
                objectPosition="object-top"
              />
            </div>
            <div className="min-w-0">
              <h2
                id="quick-contact-title"
                className="font-serif text-lg sm:text-xl font-semibold text-white truncate"
              >
                Contact {attorney.fullName}
              </h2>
              <p className="text-xs text-slate-300 truncate">
                {attorney.title} &middot; {attorney.officeName} &middot; {attorney.practiceAreaName}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close contact dialog"
            className="p-2 text-slate-300 hover:text-white transition-colors shrink-0 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="py-6 text-center space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-50 text-emerald-700 border border-emerald-200">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-[#0B1F3A]">
                Message Dispatched
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Your inquiry has been routed directly to{' '}
                <span className="font-semibold text-slate-900">{attorney.fullName}</span>{' '}
                and their practice assistant in {attorney.officeName}. Expect a response within one business day.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={mailtoHref}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[#0B1F3A] border border-slate-300 hover:border-[#0B1F3A] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Open in Email Client
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 text-sm font-medium text-white bg-[#0B1F3A] hover:bg-[#132D52] transition-colors cursor-pointer"
                >
                  Return to Directory
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Direct Email Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-200 text-xs text-slate-600">
                <span>
                  Direct Email:{' '}
                  <a
                    href={mailtoHref}
                    className="font-medium text-[#0B1F3A] underline decoration-[#9A7B3E]"
                  >
                    {attorney.email}
                  </a>
                </span>
                <span className="tabular-nums">Direct: {attorney.phone}</span>
              </div>

              {error && (
                <div
                  role="alert"
                  className="p-3 bg-red-50 border border-red-200 text-red-800 text-xs font-medium"
                >
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="qc-name"
                    className="block text-xs font-semibold text-slate-700 mb-1.5"
                  >
                    Full Name *
                  </label>
                  <input
                    id="qc-name"
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-[#0B1F3A] focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="qc-email"
                    className="block text-xs font-semibold text-slate-700 mb-1.5"
                  >
                    Business Email *
                  </label>
                  <input
                    id="qc-email"
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="jane.doe@company.com"
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-[#0B1F3A] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="qc-org"
                    className="block text-xs font-semibold text-slate-700 mb-1.5"
                  >
                    Organization / Company
                  </label>
                  <input
                    id="qc-org"
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="Acme Holdings Inc."
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-[#0B1F3A] focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="qc-subject"
                    className="block text-xs font-semibold text-slate-700 mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    id="qc-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 text-slate-900 focus:border-[#0B1F3A] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="qc-message"
                  className="block text-xs font-semibold text-slate-700 mb-1.5"
                >
                  Matter Summary *
                </label>
                <textarea
                  id="qc-message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Briefly describe the nature of your inquiry without disclosing confidential or privileged information..."
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-[#0B1F3A] focus:outline-none resize-y"
                />
              </div>

              <label className="flex items-start gap-2.5 text-xs text-slate-600 cursor-pointer">
                <input
                  type="checkbox"
                  checked={acknowledged}
                  onChange={(e) => setAcknowledged(e.target.checked)}
                  className="mt-0.5 w-4 h-4 accent-[#0B1F3A] shrink-0"
                />
                <span>
                  I understand that submitting this inquiry does not create an attorney-client relationship and that I should not transmit confidential information prior to conflict clearance.
                </span>
              </label>

              <div className="pt-2 flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-3">
                <a
                  href={mailtoHref}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-700 border border-slate-300 hover:border-[#0B1F3A] hover:text-[#0B1F3A] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Launch Email Client ({attorney.firstName})
                </a>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium text-white bg-[#0B1F3A] hover:bg-[#132D52] transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Send Direct Message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
