/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useEffect, useState } from 'react';
import { Attorney, NewsItem, PageRoute, PracticeAreaId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuickContactModal } from './components/QuickContactModal';
import { LegalModal } from './components/LegalModal';
import { HomePage } from './pages/HomePage';
import { LawyersPage } from './pages/LawyersPage';
import { LawyerBioPage } from './pages/LawyerBioPage';
import { PracticeAreasPage } from './pages/PracticeAreasPage';
import { NewsInsightsPage } from './pages/NewsInsightsPage';
import { AboutPage } from './pages/AboutPage';
import { LocationsContactPage } from './pages/LocationsContactPage';
import { ATTORNEYS } from './data/firmData';

export default function App() {
  const [route, setRoute] = useState<PageRoute>(PageRoute.HOME);
  const [selectedLawyer, setSelectedLawyer] = useState<Attorney>(ATTORNEYS[0]);
  const [practiceFilter, setPracticeFilter] = useState<PracticeAreaId | 'all'>('all');
  const [selectedPracticeId, setSelectedPracticeId] = useState<PracticeAreaId>(
    PracticeAreaId.CORPORATE
  );
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);
  const [contactModalAttorney, setContactModalAttorney] = useState<Attorney | null>(null);
  const [legalModalType, setLegalModalType] = useState<'disclaimer' | 'privacy' | null>(
    null
  );

  const navigateTo = useCallback((nextRoute: PageRoute) => {
    setRoute(nextRoute);
    if (nextRoute !== PageRoute.LAWYERS) {
      setPracticeFilter('all');
    }
    if (nextRoute !== PageRoute.NEWS) {
      setSelectedArticle(null);
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const handleSelectLawyer = useCallback((lawyer: Attorney) => {
    setSelectedLawyer(lawyer);
    setRoute(PageRoute.LAWYER_BIO);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const handleSelectPractice = useCallback((practiceId: PracticeAreaId) => {
    setSelectedPracticeId(practiceId);
    setRoute(PageRoute.PRACTICES);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const handleBrowsePracticeLawyers = useCallback((practiceId: PracticeAreaId) => {
    setPracticeFilter(practiceId);
    setRoute(PageRoute.LAWYERS);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const handleSelectNews = useCallback((article: NewsItem) => {
    setSelectedArticle(article);
    setRoute(PageRoute.NEWS);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  useEffect(() => {
    document.title = 'Lexford Legislator | Global Corporate Law Firm';
  }, [route]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar currentRoute={route} onNavigate={navigateTo} />

      <main className="flex-1">
        {route === PageRoute.HOME && (
          <HomePage
            onNavigate={navigateTo}
            onSelectLawyer={handleSelectLawyer}
            onContactLawyer={setContactModalAttorney}
            onSelectPractice={handleSelectPractice}
            onSelectNews={handleSelectNews}
          />
        )}

        {route === PageRoute.LAWYERS && (
          <LawyersPage
            key={practiceFilter}
            initialPracticeFilter={practiceFilter}
            onSelectLawyer={handleSelectLawyer}
            onContactLawyer={setContactModalAttorney}
          />
        )}

        {route === PageRoute.LAWYER_BIO && (
          <LawyerBioPage
            attorney={selectedLawyer}
            onBackToDirectory={() => navigateTo(PageRoute.LAWYERS)}
            onContactLawyer={setContactModalAttorney}
            onSelectPractice={handleSelectPractice}
            onSelectNews={handleSelectNews}
          />
        )}

        {route === PageRoute.PRACTICES && (
          <PracticeAreasPage
            initialPracticeId={selectedPracticeId}
            onSelectLawyer={handleSelectLawyer}
            onContactLawyer={setContactModalAttorney}
            onBrowsePracticeLawyers={handleBrowsePracticeLawyers}
          />
        )}

        {route === PageRoute.NEWS && (
          <NewsInsightsPage
            initialArticle={selectedArticle}
            onSelectLawyer={handleSelectLawyer}
          />
        )}

        {route === PageRoute.ABOUT && <AboutPage onNavigate={navigateTo} />}

        {route === PageRoute.LOCATIONS && <LocationsContactPage />}
      </main>

      <Footer
        onNavigate={navigateTo}
        onSelectPractice={handleSelectPractice}
        onOpenLegal={setLegalModalType}
      />

      <QuickContactModal
        attorney={contactModalAttorney}
        onClose={() => setContactModalAttorney(null)}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
