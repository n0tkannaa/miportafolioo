export interface ProjectItem {
  id: string;
  slug: string;
  week: string;
  title: string;
  summary: string;
  problem: string;
  objective: string;
  technologies: string[];
  solution: string;
  results: string[];
  codeSnippet: string;
  image: string;
  imageCaption: string;
  repoUrl: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details: string;
}
