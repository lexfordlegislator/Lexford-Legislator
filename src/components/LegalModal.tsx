import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
  type: 'disclaimer' | 'privacy' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (type) {
      window.addEventListener('keydown', handleKey);
    }
    return () => window.removeEventListener('keydown', handleKey);
  }, [type, onClose]);

  if (!type) return null;

  const isDisclaimer = type === 'disclaimer';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#061326]/75 backdrop-blur-xs"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white w-full max-w-2xl border border-slate-200 shadow-2xl max-h-[88vh] flex flex-col">
        <div className="px-6 py-5 bg-[#0B1F3A] text-white flex items-center justify-between gap-4">
          <h2 id="legal-modal-title" className="font-serif text-xl font-semibold">
            {isDisclaimer
              ? 'Legal Disclaimers & Attorney Advertising Notice'
              : 'Privacy Policy & Terms of Use'}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close legal notice"
            className="p-2 text-slate-300 hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto space-y-5 text-sm text-slate-700 leading-relaxed">
          {isDisclaimer ? (
            <>
              <p>
                <strong>No Attorney-Client Relationship:</strong> The materials appearing on this website are provided by Lexford Legislator for general informational purposes only and do not constitute legal advice or establish an attorney-client relationship. You should not act or refrain from acting based on any content included on this site without seeking appropriate legal counsel licensed in your jurisdiction.
              </p>
              <p>
                <strong>Attorney Advertising:</strong> Under the rules of certain jurisdictions, this website may constitute Attorney Advertising. Prior results described on this site—including transaction values, trial verdicts, and regulatory clearances—do not guarantee a similar outcome in future matters.
              </p>
              <p>
                <strong>Confidentiality of Unsolicited Communications:</strong> Sending an electronic mail message or submitting an inquiry form to Lexford Legislator or any of its attorneys does not create an attorney-client relationship. Information transmitted prior to the execution of a formal engagement letter and completion of conflict-of-interest checks may not be treated as privileged or confidential.
              </p>
              <p>
                <strong>Practice Jurisdictions:</strong> Lexford Legislator is a limited liability partnership practicing law in accordance with applicable bar regulations in New York, Illinois, the District of Columbia, California, Texas, and England &amp; Wales. Individual attorney bar admissions are listed on each lawyer’s biography page.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>Information We Collect:</strong> When you submit a client inquiry form or send direct correspondence to a Lexford Legislator professional, we collect the contact details and matter summary you voluntarily provide solely for the purpose of evaluating your inquiry, conducting conflict-of-interest screening, and responding to your request.
              </p>
              <p>
                <strong>Data Security &amp; Retention:</strong> Lexford Legislator maintains administrative, technical, and physical safeguards designed to protect personal information against unauthorized disclosure. We do not sell, rent, or trade client or visitor contact information to third parties.
              </p>
              <p>
                <strong>International Transfers &amp; GDPR / CCPA Rights:</strong> Visitors residing in the European Economic Area, the United Kingdom, or California may request access to, correction of, or deletion of personal data held by the firm by contacting our Privacy Officer at{' '}
                <a
                  href="mailto:Lexford.law@legislator.com"
                  className="text-[#0B1F3A] underline decoration-[#9A7B3E]"
                >
                  Lexford.law@legislator.com
                </a>
                .
              </p>
              <p>
                <strong>Document Downloads:</strong> Client publications, vCards, and capability briefs downloaded from this website are provided for personal institutional reference and remain the intellectual property of Lexford Legislator.
              </p>
            </>
          )}
        </div>

        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-sm font-medium text-white bg-[#0B1F3A] hover:bg-[#132D52] transition-colors cursor-pointer"
          >
            Close Notice
          </button>
        </div>
      </div>
    </div>
  );
};
