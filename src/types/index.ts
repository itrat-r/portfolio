export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location?: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies?: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  startYear: string;
  endYear: string;
  description?: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

export interface Language {
  name: string;
  level: string;
}

export interface Profile {
  personalInfo: PersonalInfo;
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  languages: Language[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormState {
  status: 'idle' | 'loading' | 'success' | 'error';
  error: string | null;
}

export interface ProfileState {
  data: Profile | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}
