export type Language = 'es' | 'en';

export interface Project {
  id: string;
  category: string;
  year: string;
  cover: string;
  screenshots: string[];
  stack: string[];
  githubUrl: string;
  demoUrl: string;
  content: {
    es: {
      title: string;
      summary: string;
      challenge: string;
      solution: string;
      details: string;
      imageAlt: string;
    };
    en: {
      title: string;
      summary: string;
      challenge: string;
      solution: string;
      details: string;
      imageAlt: string;
    };
  };
}
