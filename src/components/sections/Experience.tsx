import { profileData } from '@/data/profile';
import SectionTitle from '@/components/ui/SectionTitle';

export default function Experience() {
  const { experience } = profileData;

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Experience"
          subtitle="My professional journey and work history"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gray-200" />

          {experience.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow" />

              {/* Content */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'} pl-8 md:pl-0`}>
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                  <div className={`flex items-center gap-2 text-sm text-primary mb-2 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-dark mb-1">{exp.title}</h3>
                  <p className="text-primary font-medium mb-4">{exp.company}</p>
                  <ul className={`text-gray-600 space-y-2 ${index % 2 === 0 ? '' : 'md:text-right'}`}>
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1.5 flex-shrink-0">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                        </span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                  {exp.technologies && (
                    <div className={`mt-4 flex flex-wrap gap-2 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Empty space for timeline alignment */}
              <div className="hidden md:block md:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
