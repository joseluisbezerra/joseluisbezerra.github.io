export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: 'Resume Analyzer',
    description:
      'A smart Python-based application to automate resume analysis using OCR and LLMs, all locally.',
    logo: '/logos/re.svg',
    link: 'https://github.com/joseluisbezerra/resume-analyzer',
    slug: 'resume-analyzer',
  },
  {
    title: 'Smart Library',
    description:
      'An AI-powered digital library that turns uploaded books into searchable knowledge bases, enabling semantic exploration and contextual conversations in Portuguese.',
    logo: '/logos/smart-book.png',
    link: 'https://github.com/joseluisbezerra/smart-library',
    slug: 'smart-library',
  },
];
