import heroLawHeadquarters from '../assets/images/hero_law_headquarters_1794656088163.jpg';
import editorialFirmLibrary from '../assets/images/editorial_firm_library_1794656088781.jpg';
import portraitMarcusSterling from '../assets/images/portrait_marcus_sterling_1794656089895.jpg';
import portraitJulianThorne from '../assets/images/portrait_julian_thorne_1794656090744.jpg';
import portraitClaireLin from '../assets/images/portrait_claire_lin_1794656091313.jpg';
import portraitDavidKessler from '../assets/images/portrait_david_kessler_1794656092351.jpg';
import portraitSofiaMendoza from '../assets/images/portrait_sofia_mendoza_1794656092279.jpg';
import portraitArthurPendleton from '../assets/images/portrait_arthur_pendleton_1794656092659.jpg';
import portraitNadiaOkafor from '../assets/images/portrait_nadia_okafor_1794656092572.jpg';

import {
  Attorney,
  AttorneyTitle,
  NewsItem,
  OfficeId,
  OfficeLocation,
  PracticeArea,
  PracticeAreaId,
} from '../types';

export const FIRM_ASSETS = {
  heroHeadquarters: heroLawHeadquarters,
  editorialLibrary: editorialFirmLibrary,
};

export const FIRM_METRICS = [
  {
    value: '$480B+',
    label: 'Global M&A & Private Equity Volume (2023–2026)',
  },
  {
    value: '1,420+',
    label: 'Attorneys & Legal Professionals Worldwide',
  },
  {
    value: '94%',
    label: 'Appellate & Dispositive Motion Win Rate',
  },
  {
    value: 'Tier 1',
    label: 'Chambers Global & Legal 500 Band Rankings',
  },
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: PracticeAreaId.CORPORATE,
    indexLabel: '01.',
    name: 'Corporate & Transactional',
    shortTagline: 'Defining mergers, private equity buyouts, and cross-border capital deployment.',
    overview:
      'Lexford Legislator advises sovereign wealth funds, private equity sponsors, and Fortune 100 boards on their most consequential acquisitions, carve-outs, joint ventures, and capital markets offerings.',
    editorialDetail: [
      'Our Corporate & Transactional practice is engineered for speed, structural precision, and commercial judgment under intense market scrutiny. Rather than delegating complex negotiations across fragmented specialty silos, we deploy tightly integrated deal teams uniting M&A, leveraged finance, tax, and antitrust partners from the first term sheet through closing.',
      'Over the past three years, our attorneys have served as lead counsel on more than $480 billion in announced transactions across North America, Europe, and Asia-Pacific—spanning take-privates, distressed acquisitions, continuation funds, and multi-jurisdictional regulatory clearances.',
    ],
    keyCapabilities: [
      'Public & Private Mergers and Acquisitions',
      'Private Equity Buyouts & Portfolio Company Counsel',
      'Investment Fund Formation & Secondary Liquidity',
      'Debt Finance, Direct Lending & Capital Markets',
      'Board Advisory, Shareholder Activism & Corporate Governance',
      'Executive Compensation & Global Tax Structuring',
    ],
    benchmarkMetric: '$480B+',
    benchmarkLabel: 'Advised Transaction Volume (2023–2026)',
    featuredEngagements: [
      {
        title: 'Acquisition of NorthStar Infrastructure Partners',
        valueOrOutcome: '$18.4B Take-Private',
        summary:
          'Represented a consortium of institutional sponsors in the acquisition and multi-tranche debt financing of NorthStar Infrastructure across 14 regulatory jurisdictions.',
      },
      {
        title: 'Vanguard Biopharma Cross-Border Spin-Off',
        valueOrOutcome: '$11.2B Separation',
        summary:
          'Lead corporate and tax counsel on the separation and NYSE listing of Vanguard’s oncology diagnostics division.',
      },
    ],
  },
  {
    id: PracticeAreaId.LITIGATION,
    indexLabel: '02.',
    name: 'Litigation & Arbitration',
    shortTagline: 'Trial-ready advocacy in bet-the-company disputes and sovereign arbitrations.',
    overview:
      'When enterprise value, board integrity, or regulatory standing is on the line, clients turn to Lexford Legislator trial lawyers built to take complex commercial and constitutional matters to verdict.',
    editorialDetail: [
      'We prepare every dispute as though it will be tried before a jury or international arbitral tribunal. That courtroom readiness creates immediate leverage in dispositive motion practice, regulatory negotiations, and appellate review.',
      'Our litigation bench includes former federal appellate clerks, senior enforcement officials, and Fellows of the American College of Trial Lawyers who routinely defend multinationals in securities class actions, antitrust challenges, Delaware Chancery fiduciary litigation, and ICC/ICSID arbitrations.',
    ],
    keyCapabilities: [
      'Complex Commercial & Post-M&A Trial Litigation',
      'Antitrust & Competition Defense (DOJ, FTC, EC)',
      'Securities Fraud & Shareholder Derivative Defense',
      'Delaware Court of Chancery & Corporate Governance Disputes',
      'International Commercial & Investment Treaty Arbitration',
      'U.S. Supreme Court & Federal Appellate Advocacy',
    ],
    benchmarkMetric: '42',
    benchmarkLabel: 'Major Defense Verdicts & Dismissals Since 2022',
    featuredEngagements: [
      {
        title: 'In re Pinnacle Energy Antitrust MDL',
        valueOrOutcome: 'Complete Summary Judgment Victory',
        summary:
          'Secured full dismissal with prejudice of $6.8 billion treble-damages claims in the Southern District of New York.',
      },
      {
        title: 'Republic Offshore Pipeline ICC Arbitration',
        valueOrOutcome: '$1.45B Award Defeated',
        summary:
          'Defeated expropriation and force-majeure claims brought before a three-member tribunal seated in London.',
      },
    ],
  },
  {
    id: PracticeAreaId.IP,
    indexLabel: '03.',
    name: 'Intellectual Property',
    shortTagline: 'Protecting foundational technologies, life sciences patents, and trade secrets.',
    overview:
      'Our Intellectual Property practice combines deep scientific and engineering fluency with unmatched federal district court, PTAB, ITC, and appellate trial experience.',
    editorialDetail: [
      'More than two-thirds of our IP practitioners hold advanced technical degrees in electrical engineering, molecular biology, computer science, or chemical engineering. That domain fluency allows our trial teams to translate intricate technical architectures into clear, persuasive courtroom narratives.',
      'Beyond litigation, we structure strategic patent portfolios, AI data licensing frameworks, semiconductor joint-development agreements, and IP diligence for multi-billion-dollar technology acquisitions.',
    ],
    keyCapabilities: [
      'District Court & ITC Section 337 Patent Trial Litigation',
      'PTAB Inter Partes Review (IPR) & Post-Grant Proceedings',
      'Trade Secret Protection & Employee Mobility Litigation',
      'Hatch-Waxman & Biologics (BPCIA) Pharmaceutical Disputes',
      'Technology Transactions, AI Licensing & Strategic Joint Ventures',
      'Federal Circuit Appellate Representation',
    ],
    benchmarkMetric: '88%',
    benchmarkLabel: 'Favorable PTAB & District Court Dispositions',
    featuredEngagements: [
      {
        title: 'Aether Semiconductor v. Nexus Silicon',
        valueOrOutcome: '$420M Jury Verdict Upheld',
        summary:
          'Won and preserved on Federal Circuit appeal a landmark patent infringement verdict covering next-generation wafer interconnects.',
      },
      {
        title: 'Helix Therapeutics Oncology Licensing',
        valueOrOutcome: '$3.1B Collaboration',
        summary:
          'Structured global co-development and royalty monetization agreements across North America, Europe, and Japan.',
      },
    ],
  },
  {
    id: PracticeAreaId.RESTRUCTURING,
    indexLabel: '04.',
    name: 'Restructuring',
    shortTagline: 'Orchestrating complex liability management, Chapter 11 reorganizations, and distressed M&A.',
    overview:
      'Recognized globally for creative capital-structure solutions, our Restructuring group guides debtors, sponsor-backed issuers, and ad hoc creditor committees through transformative turnarounds.',
    editorialDetail: [
      'In volatile credit markets, preserving enterprise value requires immediate clarity across multi-tiered debt stacks, intercreditor agreements, and cross-border insolvency regimes. Our partners move seamlessly between out-of-court liability management transactions and contested Chapter 11 confirmations.',
      'Working hand-in-hand with our Debt Finance, Tax, and Litigation teams, we help boards and financial sponsors stabilize liquidity, restructure legacy liabilities, and position reorganized companies for long-term growth.',
    ],
    keyCapabilities: [
      'Chapter 11 Debtor & Sponsor Representation',
      'Out-of-Court Liability Management & Exchange Offers',
      'Ad Hoc Creditor Committee & Special Situations Counsel',
      'Distressed M&A & Section 363 Asset Sales',
      'Cross-Border Insolvency & UK Restructuring Plans',
      'Fiduciary Duty Advisory in Zones of Insolvency',
    ],
    benchmarkMetric: '$115B',
    benchmarkLabel: 'Restructured Debt Liabilities Since 2022',
    featuredEngagements: [
      {
        title: 'Atlas Aviation Holdings Chapter 11',
        valueOrOutcome: '$9.6B Debt Eliminated',
        summary:
          'Confirmed a consensual pre-packaged plan of reorganization in 58 days, preserving 14,000 jobs and full fleet operations.',
      },
      {
        title: 'Pacific Fiber Networks Liability Management',
        valueOrOutcome: '$2.8B New-Money Liquidity',
        summary:
          'Advised the ad hoc first-lien lender group in a bespoke uptiering and maturity extension transaction.',
      },
    ],
  },
  {
    id: PracticeAreaId.REAL_ESTATE,
    indexLabel: '05.',
    name: 'Real Estate',
    shortTagline: 'Structuring institutional property acquisitions, REIT platforms, and landmark developments.',
    overview:
      'Lexford Legislator’s Real Estate practice advises private equity real estate funds, institutional owners, sovereign investors, and major lenders on sophisticated property transactions worldwide.',
    editorialDetail: [
      'From trophy urban office towers and hyperscale data-center campuses to logistics portfolios and hospitality platforms, our lawyers structure the equity joint ventures, CMBS and mezzanine financings, and ground leases that anchor institutional real assets.',
      'During periods of capital market dislocation, our Real Estate team partners directly with our Restructuring group on loan workouts, preferred equity rescues, and complex portfolio recapitalizations.',
    ],
    keyCapabilities: [
      'Real Estate Private Equity & Joint Venture Structuring',
      'Data Center, Logistics & Digital Infrastructure Development',
      'Commercial Mortgage, Mezzanine & Construction Finance',
      'REIT M&A, Formation & Public Capital Markets',
      'Distressed Real Estate Workouts & Recapitalizations',
      'Cross-Border Real Asset Portfolio Acquisitions',
    ],
    benchmarkMetric: '$64B+',
    benchmarkLabel: 'Institutional Real Assets Financed & Acquired',
    featuredEngagements: [
      {
        title: 'CloudCore Hyperscale Campus Joint Venture',
        valueOrOutcome: '$4.7B Development Platform',
        summary:
          'Represented a sovereign infrastructure investor in forming a 1.2 GW North American data-center development venture.',
      },
      {
        title: 'Midtown Manhattan Trophy Tower Recapitalization',
        valueOrOutcome: '$1.9B Refinancing & Equity',
        summary:
          'Structured senior mortgage modification, mezzanine conversion, and anchor tenant lease extensions.',
      },
    ],
  },
];

export const ATTORNEYS: Attorney[] = [
  {
    id: 'att-robert-brodrick',
    slug: 'robert-brodrick',
    firstName: 'Robert',
    lastName: 'Brodrick',
    fullName: 'Robert Brodrick',
    title: AttorneyTitle.MANAGING_PARTNER,
    practiceAreaId: PracticeAreaId.CORPORATE,
    practiceAreaName: 'Corporate & Transactional',
    secondaryPractice: 'Private Equity & Board Advisory',
    officeId: OfficeId.NEW_YORK,
    officeName: 'New York',
    phone: '+1 (212) 555-0142',
    email: 'rbrodrick@legislator.com',
    photoUrl: '/assets/aistudio/Screenshot_2026-11-14_at_5.15.21_AM_5a877dc3.png',
    isFeatured: true,
    summary:
      'Firmwide Managing Partner advising global private equity sponsors and Fortune 50 boards on landmark public M&A, cross-border carve-outs, and governance strategy.',
    biography: [
      'Robert Brodrick serves as Managing Partner of Lexford Legislator and co-chairs the firm’s Global Corporate & Private Equity Executive Committee. With over two decades of experience at the center of global capital markets, he regularly counsels boards of directors, special committees, and institutional buyout funds on transformative mergers, contested takeovers, and strategic separations.',
      'Clients routinely turn to Robert when transactions face heightened regulatory, shareholder-activist, or geopolitical complexity. His work blends disciplined negotiation with pragmatic boardroom counsel, guiding executive leadership through multi-jurisdictional clearances and high-velocity deal timelines.',
      'Before assuming firmwide leadership in 2022, Robert chaired the firm’s Global Private Equity practice and served as lead deal counsel on more than $140 billion in completed corporate combinations.',
    ],
    education: [
      'J.D., Harvard Law School, magna cum laude (Notes Editor, Harvard Law Review)',
      'B.A., Yale University, summa cum laude, Phi Beta Kappa',
    ],
    clerkships: ['Law Clerk, Hon. Ruth Bader Ginsburg, Supreme Court of the United States'],
    barAdmissions: ['New York State Bar', 'District of Columbia Bar', 'U.S. Supreme Court'],
    recognitions: [
      'Chambers Global — Band 1, Corporate/M&A: Elite (New York)',
      'The American Lawyer — Dealmaker of the Year (2024)',
      'Lawdragon 500 Leading Dealmakers in America',
    ],
    representativeMatters: [
      {
        id: 'm-brodrick-1',
        headline: 'NorthStar Infrastructure Partners $18.4B Take-Private',
        year: '2026',
        sector: 'Infrastructure & Private Equity',
        description:
          'Lead counsel to a sovereign and sponsor consortium in the acquisition and $11.5 billion syndicated debt financing of NorthStar Infrastructure.',
      },
      {
        id: 'm-brodrick-2',
        headline: 'Vanguard Biopharma $11.2B Tax-Free Spin-Off',
        year: '2025',
        sector: 'Life Sciences',
        description:
          'Advised the board of directors of Vanguard Biopharma on the separation and New York Stock Exchange listing of its diagnostics business.',
      },
      {
        id: 'm-brodrick-3',
        headline: 'Apex Aerospace & Defense Strategic Merger',
        year: '2024',
        sector: 'Aerospace & Industrials',
        description:
          'Represented Apex Aerospace in its $9.8 billion stock-for-stock merger of equals, including CFIUS and European Commission clearance.',
      },
    ],
  },
  {
    id: 'att-marcus-sterling',
    slug: 'marcus-sterling',
    firstName: 'Marcus',
    lastName: 'Sterling',
    fullName: 'Marcus A. Sterling',
    title: AttorneyTitle.PARTNER,
    practiceAreaId: PracticeAreaId.CORPORATE,
    practiceAreaName: 'Corporate & Transactional',
    secondaryPractice: 'Capital Markets & Leveraged Finance',
    officeId: OfficeId.NEW_YORK,
    officeName: 'New York',
    phone: '+1 (212) 555-0188',
    email: 'marcus.sterling@legislator.com',
    photoUrl: portraitMarcusSterling,
    isFeatured: true,
    summary:
      'Senior Corporate Partner leading leveraged buyouts, direct lending platforms, and investment-grade capital markets issuances for sponsors and industrial issuers.',
    biography: [
      'Marcus A. Sterling co-heads Lexford Legislator’s Corporate & Finance practice in New York. He advises private equity firms, credit funds, and Fortune 500 issuers on leveraged buyouts, acquisition financings, high-yield debt offerings, and complex joint ventures.',
      'Known for executing tight syndication schedules in volatile rate environments, Marcus has structured more than $95 billion in senior secured credit facilities, unitranche direct loans, and cross-border bond issuances.',
      'He also serves on the firm’s Pro Bono Committee and chairs the board of the New York Legal Opportunity Fellowship.',
    ],
    education: [
      'J.D., University of Chicago Law School, with High Honors (Order of the Coif)',
      'B.S., Wharton School of the University of Pennsylvania, magna cum laude',
    ],
    barAdmissions: ['Illinois State Bar', 'New York State Bar'],
    recognitions: [
      'Chambers USA — Band 1, Banking & Finance (Illinois)',
      'IFLR1000 — Market Leader in Leveraged Finance',
      'National Law Journal — Finance Trailblazer',
    ],
    representativeMatters: [
      {
        id: 'm-sterling-1',
        headline: 'Great Lakes Logistics $6.4B Leveraged Buyout',
        year: '2026',
        sector: 'Transportation & Logistics',
        description:
          'Represented the lead private equity sponsor in structuring a dual-currency term loan B and private credit bridge package.',
      },
      {
        id: 'm-sterling-2',
        headline: 'Crescent Energy $4.2B Senior Notes & Revolver',
        year: '2025',
        sector: 'Energy & Power',
        description:
          'Acted as issuer’s counsel in an investment-grade multi-tranche debt offering and $2.5 billion sustainability-linked credit facility.',
      },
    ],
  },
  {
    id: 'att-julian-thorne',
    slug: 'julian-thorne',
    firstName: 'Julian',
    lastName: 'Thorne',
    fullName: 'Julian R. Thorne',
    title: AttorneyTitle.PARTNER,
    practiceAreaId: PracticeAreaId.LITIGATION,
    practiceAreaName: 'Litigation & Arbitration',
    secondaryPractice: 'Antitrust & Appellate',
    officeId: OfficeId.NEW_YORK,
    officeName: 'New York',
    phone: '+1 (212) 555-0119',
    email: 'julian.thorne@legislator.com',
    photoUrl: portraitJulianThorne,
    isFeatured: true,
    summary:
      'Chair of Global Litigation & Trial Practice defending Fortune 100 enterprises in antitrust MDLs, federal enforcement actions, and U.S. Supreme Court appeals.',
    biography: [
      'Julian R. Thorne is Chair of Lexford Legislator’s Litigation & Arbitration group. A Fellow of the American College of Trial Lawyers, he has served as lead trial and appellate counsel in more than 35 federal jury trials, bench trials, and U.S. Courts of Appeals arguments.',
      'Julian regularly represents global technology, energy, and healthcare leaders in high-stakes DOJ and FTC merger challenges, multi-district class actions, and constitutional challenges to federal agency rulemaking.',
      'Prior to joining the firm, Julian served as Deputy Assistant Attorney General in the Antitrust Division of the U.S. Department of Justice.',
    ],
    education: [
      'J.D., Yale Law School (Senior Editor, Yale Law Journal)',
      'A.B., Princeton University, summa cum laude',
    ],
    clerkships: [
      'Law Clerk, Hon. Merrick B. Garland, U.S. Court of Appeals for the D.C. Circuit',
      'Law Clerk, Hon. Anthony M. Kennedy, Supreme Court of the United States',
    ],
    barAdmissions: [
      'District of Columbia Bar',
      'New York State Bar',
      'U.S. Supreme Court',
      'U.S. Courts of Appeals for the Second, Third, Seventh, Ninth, and D.C. Circuits',
    ],
    recognitions: [
      'Chambers USA — Star Individual, Antitrust Litigation',
      'Benchmark Litigation — Trial Lawyer of the Year Finalist',
      'Fellow, American College of Trial Lawyers',
    ],
    representativeMatters: [
      {
        id: 'm-thorne-1',
        headline: 'In re Pinnacle Energy Antitrust MDL',
        year: '2026',
        sector: 'Energy Markets',
        description:
          'Obtained complete summary judgment dismissing $6.8 billion in putative class-action treble-damage claims in SDNY.',
      },
      {
        id: 'm-thorne-2',
        headline: 'FTC v. Horizon Health Systems Merger Trial',
        year: '2025',
        sector: 'Healthcare',
        description:
          'Lead trial counsel defeating preliminary injunction motion in federal district court, clearing $5.1 billion hospital network combination.',
      },
    ],
  },
  {
    id: 'att-claire-lin',
    slug: 'claire-lin',
    firstName: 'Claire',
    lastName: 'Lin',
    fullName: 'Claire H. Lin, Ph.D.',
    title: AttorneyTitle.PARTNER,
    practiceAreaId: PracticeAreaId.IP,
    practiceAreaName: 'Intellectual Property',
    secondaryPractice: 'Patent Trials & Life Sciences',
    officeId: OfficeId.NEW_YORK,
    officeName: 'New York',
    phone: '+1 (212) 555-0164',
    email: 'claire.lin@legislator.com',
    photoUrl: portraitClaireLin,
    isFeatured: true,
    summary:
      'Patent trial lawyer and molecular biologist representing semiconductor, AI infrastructure, and biopharma innovators in federal courts, the ITC, and the Federal Circuit.',
    biography: [
      'Dr. Claire H. Lin leads Lexford Legislator’s Intellectual Property Litigation practice in New York. Combining a Ph.D. in Molecular & Cell Biology from Stanford University with two decades of courtroom advocacy, she tries high-stakes patent, trade secret, and biosimilar disputes nationwide.',
      'Claire has secured landmark jury verdicts and complete defense wins in the Northern District of California, District of Delaware, Western District of Texas, and before the U.S. International Trade Commission.',
      'She frequently advises boards on AI training-data IP risk, standard-essential patent (FRAND) negotiations, and freedom-to-operate diligence for billion-dollar strategic acquisitions.',
    ],
    education: [
      'J.D., Stanford Law School, Order of the Coif',
      'Ph.D., Molecular & Cell Biology, Stanford University',
      'B.S., Bioengineering, University of California, Berkeley',
    ],
    clerkships: ['Law Clerk, Hon. Kimberly A. Moore, U.S. Court of Appeals for the Federal Circuit'],
    barAdmissions: [
      'California State Bar',
      'U.S. Patent and Trademark Office (USPTO)',
      'U.S. Court of Appeals for the Federal Circuit',
    ],
    recognitions: [
      'Chambers USA — Band 1, Intellectual Property: Patent Litigation (California)',
      'IAM Patent 1000 — Gold Tier Litigation Individual',
      'Managing IP — Top 250 Women in IP',
    ],
    representativeMatters: [
      {
        id: 'm-lin-1',
        headline: 'Aether Semiconductor v. Nexus Silicon',
        year: '2026',
        sector: 'Semiconductors',
        description:
          'Secured $420 million jury verdict for Aether Semiconductor on advanced packaging patents and preserved full judgment at the Federal Circuit.',
      },
      {
        id: 'm-lin-2',
        headline: 'Helix Therapeutics BPCIA Biosimilar Defense',
        year: '2025',
        sector: 'Biotechnology',
        description:
          'Defeated preliminary injunction in District of Delaware, clearing commercial launch of a flagship oncology biologic.',
      },
    ],
  },
  {
    id: 'att-david-kessler',
    slug: 'david-kessler',
    firstName: 'David',
    lastName: 'Kessler',
    fullName: 'David J. Kessler',
    title: AttorneyTitle.PARTNER,
    practiceAreaId: PracticeAreaId.RESTRUCTURING,
    practiceAreaName: 'Restructuring',
    secondaryPractice: 'Liability Management & Distressed M&A',
    officeId: OfficeId.NEW_YORK,
    officeName: 'New York',
    phone: '+1 (212) 555-0193',
    email: 'david.kessler@legislator.com',
    photoUrl: portraitDavidKessler,
    summary:
      'Restructuring partner advising boards, financial sponsors, and ad hoc lender groups on Chapter 11 reorganizations and out-of-court liability management.',
    biography: [
      'David J. Kessler concentrates his practice on complex corporate restructurings, distressed acquisitions, and bespoke liability management transactions. He represents debtors, private equity sponsors, and major institutional creditors in matters spanning aviation, telecommunications, healthcare, and energy.',
      'David is widely recognized for designing consensual pre-packaged Chapter 11 plans that preserve enterprise operations while eliminating unsustainable leverage on accelerated timetables.',
    ],
    education: [
      'J.D., Columbia Law School, Harlan Fiske Stone Scholar',
      'B.A., Cornell University, magna cum laude',
    ],
    barAdmissions: [
      'New York State Bar',
      'U.S. Bankruptcy Courts for S.D.N.Y. and District of Delaware',
    ],
    recognitions: [
      'Chambers USA — Band 1, Bankruptcy/Restructuring (New York)',
      'Turnarounds & Workouts — Outstanding Restructuring Lawyer',
    ],
    representativeMatters: [
      {
        id: 'm-kessler-1',
        headline: 'Atlas Aviation Holdings $9.6B Reorganization',
        year: '2026',
        sector: 'Aviation',
        description:
          'Lead debtor counsel guiding Atlas Aviation through a 58-day pre-packaged Chapter 11 confirmation in SDNY.',
      },
      {
        id: 'm-kessler-2',
        headline: 'Pacific Fiber Networks Liability Management',
        year: '2025',
        sector: 'Telecommunications',
        description:
          'Represented ad hoc first-lien lenders in providing $2.8 billion in new-money liquidity and maturity extensions.',
      },
    ],
  },
  {
    id: 'att-sofia-mendoza',
    slug: 'sofia-mendoza',
    firstName: 'Sofia',
    lastName: 'Mendoza',
    fullName: 'Sofia E. Mendoza',
    title: AttorneyTitle.SENIOR_COUNSEL,
    practiceAreaId: PracticeAreaId.LITIGATION,
    practiceAreaName: 'Litigation & Arbitration',
    secondaryPractice: 'International Arbitration & Cross-Border Disputes',
    officeId: OfficeId.NEW_YORK,
    officeName: 'New York',
    phone: '+1 (212) 555-0151',
    email: 'sofia.mendoza@legislator.com',
    photoUrl: portraitSofiaMendoza,
    summary:
      'Senior Counsel specializing in international energy arbitrations, Latin American infrastructure disputes, and cross-border judgment enforcement.',
    biography: [
      'Sofia E. Mendoza advises multinational energy, mining, and infrastructure corporations in bilingual English-Spanish arbitrations under ICC, LCIA, ICSID, and UNCITRAL rules.',
      'She brings over 15 years of experience handling multi-billion-dollar construction delay claims, natural gas pricing arbitrations, and bilateral investment treaty disputes across the Americas and Europe.',
    ],
    education: [
      'LL.M., Georgetown University Law Center, with Distinction',
      'J.D., University of Texas School of Law, with Honors',
      'B.A., Rice University',
    ],
    barAdmissions: ['Texas State Bar', 'New York State Bar'],
    recognitions: [
      'Global Arbitration Review — Future Leader in International Arbitration',
      'Latinvex — Top 100 Female Lawyers in Latin America Practice',
    ],
    representativeMatters: [
      {
        id: 'm-mendoza-1',
        headline: 'Andes LNG Supply & Pricing Arbitration',
        year: '2025',
        sector: 'Energy & LNG',
        description:
          'Secured $610 million price-revision award in favor of international LNG supplier under ICC rules.',
      },
      {
        id: 'm-mendoza-2',
        headline: 'Republic Offshore Pipeline Sovereign Defense',
        year: '2024',
        sector: 'Infrastructure',
        description:
          'Co-lead counsel defeating $1.45 billion expropriation claim before an ICSID tribunal.',
      },
    ],
  },
  {
    id: 'att-arthur-pendleton',
    slug: 'arthur-pendleton',
    firstName: 'Arthur',
    lastName: 'Pendleton',
    fullName: 'Arthur W. Pendleton',
    title: AttorneyTitle.ASSOCIATE,
    practiceAreaId: PracticeAreaId.RESTRUCTURING,
    practiceAreaName: 'Restructuring',
    secondaryPractice: 'Cross-Border Insolvency & UK Schemes',
    officeId: OfficeId.LONDON,
    officeName: 'London',
    phone: '+44 20 7946 0821',
    email: 'arthur.pendleton@legislator.com',
    photoUrl: portraitArthurPendleton,
    summary:
      'Senior Associate in London focusing on English Part 26A Restructuring Plans, European special situations, and cross-border Chapter 15 recognition.',
    biography: [
      'Arthur W. Pendleton is a dual-qualified English solicitor and New York attorney in Lexford Legislator’s London office. He advises credit funds, private equity sponsors, and corporate groups on cross-border financial restructurings and distressed debt investments.',
      'Arthur regularly coordinates parallel UK Part 26A Restructuring Plans and U.S. Chapter 15 proceedings for European industrial and retail issuers.',
    ],
    education: [
      'LPC, BPP Law School London, Distinction',
      'B.A. Jurisprudence, University of Oxford (Magdalen College), First Class Honours',
    ],
    barAdmissions: [
      'Solicitor of the Senior Courts of England and Wales',
      'New York State Bar',
    ],
    recognitions: ['Legal 500 UK — Rising Star in Restructuring & Insolvency'],
    representativeMatters: [
      {
        id: 'm-pendleton-1',
        headline: 'Nordic Maritime Group €1.8B Restructuring Plan',
        year: '2026',
        sector: 'Maritime & Shipping',
        description:
          'Core team member advising senior secured bondholders on English High Court sanction and U.S. Chapter 15 recognition.',
      },
    ],
  },
  {
    id: 'att-nadia-okafor',
    slug: 'nadia-okafor',
    firstName: 'Nadia',
    lastName: 'Okafor',
    fullName: 'Nadia C. Okafor',
    title: AttorneyTitle.LEGAL_OPERATIONS,
    practiceAreaId: PracticeAreaId.REAL_ESTATE,
    practiceAreaName: 'Real Estate',
    secondaryPractice: 'Institutional Portfolio & Deal Operations',
    officeId: OfficeId.NEW_YORK,
    officeName: 'New York',
    phone: '+1 (212) 555-0177',
    email: 'nadia.okafor@legislator.com',
    photoUrl: portraitNadiaOkafor,
    summary:
      'Director of Legal Operations & Real Estate Counsel managing multi-state portfolio closings, digital infrastructure joint ventures, and institutional client delivery.',
    biography: [
      'Nadia C. Okafor serves as Director of Legal Operations and Real Estate Counsel in New York, orchestrating multi-jurisdictional title, diligence, and closing workflows for Lexford Legislator’s largest real estate private equity and data-center clients.',
      'Trained as a real estate finance attorney before stepping into firmwide transaction operations, Nadia oversees cross-practice deal execution teams from our New York headquarters.',
    ],
    education: [
      'J.D., University of Pennsylvania Carey Law School',
      'B.A., Howard University, summa cum laude',
    ],
    barAdmissions: ['New York State Bar', 'New Jersey State Bar'],
    recognitions: ['Corporate Legal Operations Consortium (CLOC) — Operational Excellence Honoree'],
    representativeMatters: [
      {
        id: 'm-okafor-1',
        headline: 'CloudCore $4.7B Hyperscale Data Center JV',
        year: '2026',
        sector: 'Digital Infrastructure',
        description:
          'Directed multi-state real estate diligence, power-easement structuring, and simultaneous closing across 11 campus sites.',
      },
    ],
  },
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'northstar-infrastructure-take-private',
    title: 'Lexford Legislator Advises Consortium on $18.4 Billion Acquisition of NorthStar Infrastructure',
    category: 'Deal Announcements',
    date: 'November 10, 2026',
    readTime: '4 min read',
    practiceAreaName: 'Corporate & Transactional',
    authorIds: ['att-robert-brodrick', 'att-marcus-sterling'],
    isLead: true,
    excerpt:
      'A cross-border Lexford Legislator deal team led by Robert Brodrick and Marcus Sterling guided the institutional sponsor consortium through complex regulatory clearances and multi-tranche debt financing.',
    content: [
      'Lexford Legislator served as lead corporate and financing counsel to an institutional sponsor consortium in its $18.4 billion take-private acquisition of NorthStar Infrastructure Partners, marking one of the largest infrastructure transactions of 2026.',
      'The transaction encompassed regulated grid assets, fiber backhaul corridors, and renewable storage facilities across 14 state and international regulatory jurisdictions. Coordinating out of our New York headquarters, the firm structured both the equity consortium governance and an $11.5 billion syndicated senior and private credit financing package.',
      '“Transactions of this scale demand seamless alignment between M&A negotiation, debt execution, and regulatory strategy from day one,” said Managing Partner Robert Brodrick. “Our team delivered certainty of closing on an accelerated five-month timeline.”',
    ],
  },
  {
    id: 'pinnacle-energy-antitrust-summary-judgment',
    title: 'Trial Team Secures Complete Summary Judgment Defeating $6.8 Billion Energy Antitrust MDL',
    category: 'Case Wins',
    date: 'October 28, 2026',
    readTime: '3 min read',
    practiceAreaName: 'Litigation & Arbitration',
    authorIds: ['att-julian-thorne'],
    excerpt:
      'Judge grants full summary judgment with prejudice in the Southern District of New York, dismissing all putative class claims following five years of expert discovery.',
    content: [
      'A Lexford Legislator trial team led by Litigation Chair Julian R. Thorne obtained complete summary judgment in the U.S. District Court for the Southern District of New York, dismissing $6.8 billion in treble-damages antitrust claims against our energy client.',
      'In a 94-page opinion, the court adopted our econometric and market-structure arguments in full, holding that the plaintiffs’ damages model failed to isolate lawful competitive pricing from alleged parallel conduct.',
      'The ruling terminates five years of multidistrict litigation without a dollar in settlement exposure and establishes pivotal precedent on expert admissibility under amended Federal Rule of Evidence 702.',
    ],
  },
  {
    id: 'ai-training-data-ip-governance-2026',
    title: '2026 Board Briefing: Managing Intellectual Property & Trade Secret Risk in Enterprise AI Deployment',
    category: 'Legal Insights',
    date: 'October 14, 2026',
    readTime: '6 min read',
    practiceAreaName: 'Intellectual Property',
    authorIds: ['att-claire-lin'],
    excerpt:
      'Dr. Claire H. Lin examines recent Federal Circuit guidance, indemnification structures in enterprise model licensing, and trade secret hygiene for R&D-intensive corporations.',
    content: [
      'As enterprise adoption of foundation models shifts from pilot programs to core product engineering, corporate boards face an evolving intersection of copyright, patent, and trade secret liability.',
      'Recent appellate decisions clarify that contractual indemnification caps rarely align with statutory or injunctive remedies when proprietary training corpora or clean-room source code boundaries are compromised.',
      'In this briefing, our Intellectual Property Litigation and Technology Transactions teams outline five structural safeguards for vendor agreements, internal model fine-tuning policies, and M&A IP diligence checklists.',
    ],
  },
  {
    id: 'atlas-aviation-chapter-11-confirmation',
    title: 'Atlas Aviation Confirms $9.6 Billion Pre-Packaged Chapter 11 Plan in 58 Days',
    category: 'Deal Announcements',
    date: 'September 29, 2026',
    readTime: '4 min read',
    practiceAreaName: 'Restructuring',
    authorIds: ['att-david-kessler', 'att-arthur-pendleton'],
    excerpt:
      'With Lexford Legislator as lead restructuring counsel, Atlas Aviation eliminated $9.6 billion in funded debt while maintaining uninterrupted global flight schedules.',
    content: [
      'The U.S. Bankruptcy Court for the Southern District of New York confirmed Atlas Aviation Holdings’ consensual pre-packaged plan of reorganization just 58 days after filing, deleveraging the carrier by $9.6 billion.',
      'Led by New York Restructuring Partner David J. Kessler alongside dual-qualified Senior Associate Arthur W. Pendleton, the team secured 99% creditor approval prior to petition date and coordinated parallel recognition of aircraft lease modifications in the United Kingdom.',
    ],
  },
  {
    id: 'chambers-global-tier-1-recognition-2026',
    title: 'Lexford Legislator Named Band 1 Across Corporate, Litigation, and Restructuring in Chambers Global 2026',
    category: 'Firm Honors & Awards',
    date: 'September 12, 2026',
    readTime: '2 min read',
    practiceAreaName: 'Corporate & Transactional',
    authorIds: ['att-robert-brodrick'],
    excerpt:
      'Chambers & Partners awarded the firm 28 Band 1 practice and individual rankings across North America and Europe.',
    content: [
      'Lexford Legislator earned top-tier Band 1 rankings in Chambers Global 2026 across Corporate/M&A, Private Equity, Antitrust Litigation, Patent Litigation, and Restructuring/Insolvency.',
      'Client commentary cited by Chambers highlighted the firm’s “unmatched partner engagement, surgical commercial instincts, and seamless coordination between transactional and courtroom specialists.”',
    ],
  },
  {
    id: 'cloudcore-hyperscale-data-center-jv',
    title: 'Structuring Hyperscale Digital Infrastructure: Lessons from the $4.7B CloudCore Joint Venture',
    category: 'Legal Insights',
    date: 'August 21, 2026',
    readTime: '5 min read',
    practiceAreaName: 'Real Estate',
    authorIds: ['att-nadia-okafor'],
    excerpt:
      'How institutional sponsors and sovereign investors allocate grid-interconnection risk, build-to-suit milestones, and long-term lease covenants in 1GW+ campuses.',
    content: [
      'Hyperscale data-center development sits at the crossroads of institutional real estate, project finance, and utility regulation. Traditional commercial lease forms fail to address multi-year substation buildouts and liquid-cooling capital expenditure cycles.',
      'Drawing from our representation on the $4.7 billion CloudCore joint venture, this memorandum details best practices in phased capital commitments, power-purchase backstops, and non-recourse construction financing.',
    ],
  },
];

export const OFFICE_LOCATIONS: OfficeLocation[] = [
  {
    id: OfficeId.NEW_YORK,
    city: 'New York',
    region: 'North America',
    addressLines: ['601 Lexington Avenue, Floors 42–50', 'New York, NY 10022', 'United States'],
    phone: '+1 (212) 555-0100',
    fax: '+1 (212) 555-0101',
    email: 'Lexford.law@legislator.com',
    managingPartner: 'Robert Brodrick',
    established: '1978',
    attorneyCount: 480,
    timezone: 'EST (UTC-5)',
  },
  {
    id: OfficeId.LONDON,
    city: 'London',
    region: 'Europe',
    addressLines: ['30 St Mary Axe, Level 24', 'London EC3A 8BF', 'United Kingdom'],
    phone: '+44 20 7946 0800',
    fax: '+44 20 7946 0801',
    email: 'Lexford.law@legislator.com',
    managingPartner: 'Arthur W. Pendleton',
    established: '1999',
    attorneyCount: 190,
    timezone: 'GMT (UTC+0)',
  },
];
