import { Attorney, NewsItem, PracticeArea } from '../types';

function triggerBlobDownload(content: string, filename: string, mimeType: string): void {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function downloadAttorneyVCard(attorney: Attorney): void {
  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${attorney.lastName};${attorney.firstName};;;`,
    `FN:${attorney.fullName}`,
    'ORG:Lexford Legislator',
    `TITLE:${attorney.title} — ${attorney.practiceAreaName}`,
    `TEL;TYPE=WORK,VOICE:${attorney.phone}`,
    `EMAIL;TYPE=PREF,INTERNET:${attorney.email}`,
    `ADR;TYPE=WORK:;;${attorney.officeName} Office;;;;`,
    `NOTE:Practice Area: ${attorney.practiceAreaName}`,
    'END:VCARD',
  ].join('\r\n');

  triggerBlobDownload(vcard, `${attorney.slug}.vcf`, 'text/vcard;charset=utf-8');
}

export function downloadAttorneyBrief(attorney: Attorney): void {
  const lines: string[] = [
    'LEXFORD LEGISLATOR — ATTORNEY BIOGRAPHY DOSSIER',
    '====================================================================',
    '',
    `NAME:            ${attorney.fullName}`,
    `TITLE:           ${attorney.title}`,
    `PRACTICE AREA:   ${attorney.practiceAreaName}`,
    `OFFICE LOCATION: ${attorney.officeName}`,
    `DIRECT PHONE:    ${attorney.phone}`,
    `DIRECT EMAIL:    ${attorney.email}`,
    '',
    'EXECUTIVE OVERVIEW',
    '--------------------------------------------------------------------',
    attorney.summary,
    '',
    'BIOGRAPHY',
    '--------------------------------------------------------------------',
    ...attorney.biography.map((p) => `${p}\n`),
    'REPRESENTATIVE MATTERS',
    '--------------------------------------------------------------------',
    ...attorney.representativeMatters.map(
      (m) => `• [${m.year} | ${m.sector}] ${m.headline}\n  ${m.description}\n`
    ),
    'EDUCATION',
    '--------------------------------------------------------------------',
    ...attorney.education.map((e) => `• ${e}`),
    '',
    ...(attorney.clerkships && attorney.clerkships.length > 0
      ? [
          'JUDICIAL CLERKSHIPS',
          '--------------------------------------------------------------------',
          ...attorney.clerkships.map((c) => `• ${c}`),
          '',
        ]
      : []),
    'BAR & COURT ADMISSIONS',
    '--------------------------------------------------------------------',
    ...attorney.barAdmissions.map((b) => `• ${b}`),
    '',
    'HONORS & RECOGNITIONS',
    '--------------------------------------------------------------------',
    ...attorney.recognitions.map((r) => `• ${r}`),
    '',
    '--------------------------------------------------------------------',
    'Attorney Advertising. Prior results do not guarantee a similar outcome.',
    'Lexford Legislator · Lexford.law@legislator.com',
  ];

  triggerBlobDownload(
    lines.join('\n'),
    `${attorney.slug}-lexford-legislator-bio.txt`,
    'text/plain;charset=utf-8'
  );
}

export function downloadPracticeOverview(practice: PracticeArea): void {
  const lines: string[] = [
    'LEXFORD LEGISLATOR — PRACTICE CAPABILITIES BRIEF',
    '====================================================================',
    '',
    `PRACTICE GROUP: ${practice.indexLabel} ${practice.name}`,
    `SUMMARY:        ${practice.shortTagline}`,
    `BENCHMARK:      ${practice.benchmarkMetric} — ${practice.benchmarkLabel}`,
    '',
    'PRACTICE OVERVIEW',
    '--------------------------------------------------------------------',
    practice.overview,
    '',
    ...practice.editorialDetail.map((p) => `${p}\n`),
    'CORE CAPABILITIES',
    '--------------------------------------------------------------------',
    ...practice.keyCapabilities.map((c) => `• ${c}`),
    '',
    'REPRESENTATIVE ENGAGEMENTS',
    '--------------------------------------------------------------------',
    ...practice.featuredEngagements.map(
      (e) => `• ${e.title} (${e.valueOrOutcome})\n  ${e.summary}\n`
    ),
    '--------------------------------------------------------------------',
    'For further inquiries, contact Lexford.law@legislator.com',
    'Lexford Legislator · Attorney Advertising',
  ];

  triggerBlobDownload(
    lines.join('\n'),
    `${practice.id}-capabilities-brief.txt`,
    'text/plain;charset=utf-8'
  );
}

export function downloadNewsArticle(article: NewsItem): void {
  const lines: string[] = [
    'LEXFORD LEGISLATOR — CLIENT PUBLICATION & PRESS RELEASE',
    '====================================================================',
    '',
    `CATEGORY: ${article.category}`,
    `DATE:     ${article.date}`,
    `PRACTICE: ${article.practiceAreaName}`,
    '',
    article.title.toUpperCase(),
    '--------------------------------------------------------------------',
    article.excerpt,
    '',
    ...article.content.map((p) => `${p}\n`),
    '--------------------------------------------------------------------',
    'Disclaimer: This publication is for general informational purposes only',
    'and does not constitute legal advice.',
    'Lexford Legislator · Lexford.law@legislator.com',
  ];

  triggerBlobDownload(
    lines.join('\n'),
    `lexford-legislator-${article.id}.txt`,
    'text/plain;charset=utf-8'
  );
}
