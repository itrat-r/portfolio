'use client';

import { profileData } from '@/data/profile';

export default function Hero() {
  const { personalInfo, summary } = profileData;

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="animate-fade-in">
          <p className="text-primary font-medium mb-4">Hello, I&apos;m</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-dark mb-4">
            {personalInfo.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
            {personalInfo.title}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mb-8">{summary}</p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button onClick={scrollToContact} className="btn-primary">
              Get in Touch
            </button>
            <a
              href={`https://${personalInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-center"
            >
              View LinkedIn
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-gray-500">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a href={`mailto:${personalInfo.email}`} className="hover:text-primary transition-colors">
                {personalInfo.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
