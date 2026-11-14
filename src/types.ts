export enum PageRoute {
  HOME = 'home',
  LAWYERS = 'lawyers',
  LAWYER_BIO = 'lawyer-bio',
  PRACTICES = 'practices',
  NEWS = 'news',
  ABOUT = 'about',
  LOCATIONS = 'locations',
}

export enum PracticeAreaId {
  CORPORATE = 'corporate-transactional',
  LITIGATION = 'litigation-arbitration',
  IP = 'intellectual-property',
  RESTRUCTURING = 'restructuring',
  REAL_ESTATE = 'real-estate',
}

export enum OfficeId {
  NEW_YORK = 'new-york',
  LONDON = 'london',
}

export enum AttorneyTitle {
  MANAGING_PARTNER = 'Managing Partner',
  PARTNER = 'Partner',
  SENIOR_COUNSEL = 'Senior Counsel',
  ASSOCIATE = 'Associate',
  LEGAL_OPERATIONS = 'Director of Legal Operations',
}

export interface RepresentativeMatter {
  id: string;
  headline: string;
  year: string;
  sector: string;
  description: string;
}

export interface Attorney {
  id: string;
  slug: string;
  firstName: string;
  lastName: string;
  fullName: string;
  title: AttorneyTitle;
  practiceAreaId: PracticeAreaId;
  practiceAreaName: string;
  secondaryPractice?: string;
  officeId: OfficeId;
  officeName: string;
  phone: string;
  email: string;
  photoUrl: string;
  isFeatured?: boolean;
  summary: string;
  biography: string[];
  education: string[];
  clerkships?: string[];
  barAdmissions: string[];
  recognitions: string[];
  representativeMatters: RepresentativeMatter[];
}

export interface PracticeArea {
  id: PracticeAreaId;
  indexLabel: string;
  name: string;
  shortTagline: string;
  overview: string;
  editorialDetail: string[];
  keyCapabilities: string[];
  benchmarkMetric: string;
  benchmarkLabel: string;
  featuredEngagements: {
    title: string;
    valueOrOutcome: string;
    summary: string;
  }[];
}

export interface NewsItem {
  id: string;
  title: string;
  category: 'Deal Announcements' | 'Case Wins' | 'Legal Insights' | 'Firm Honors & Awards';
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  practiceAreaName: string;
  authorIds?: string[];
  isLead?: boolean;
}

export interface OfficeLocation {
  id: OfficeId;
  city: string;
  region: 'North America' | 'Europe';
  addressLines: string[];
  phone: string;
  fax: string;
  email: string;
  managingPartner: string;
  established: string;
  attorneyCount: number;
  timezone: string;
}
