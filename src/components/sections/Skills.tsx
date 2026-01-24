import { profileData } from '@/data/profile';
import SectionTitle from '@/components/ui/SectionTitle';

export default function Skills() {
  const { skills } = profileData;

  const categories = {
    frontend: { label: 'Frontend', color: 'bg-blue-500' },
    backend: { label: 'Backend', color: 'bg-green-500' },
    tools: { label: 'Tools & Others', color: 'bg-purple-500' },
    other: { label: 'Other', color: 'bg-gray-500' },
  };

  const groupedSkills = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, typeof skills>
  );

  return (
    <section id="skills" className="py-16 md:py-24 bg-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Skills"
          subtitle="Technologies and tools I work with"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(Object.keys(groupedSkills) as Array<keyof typeof categories>).map((category) => (
            <div
              key={category}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-3 h-3 rounded-full ${categories[category]?.color || 'bg-gray-500'}`} />
                <h3 className="text-lg font-semibold text-dark">
                  {categories[category]?.label || category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {groupedSkills[category].map((skill) => (
                  <span
                    key={skill.name}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
