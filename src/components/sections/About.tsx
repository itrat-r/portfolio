import { profileData } from '@/data/profile';
import SectionTitle from '@/components/ui/SectionTitle';

export default function About() {
  const { summary, languages } = profileData;

  return (
    <section id="about" className="py-16 md:py-24 bg-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="About Me" subtitle="A brief introduction about myself" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold text-dark mb-4">
              Front-end Developer with a Passion for Clean Code
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">{summary}</p>
            <p className="text-gray-600 leading-relaxed">
              With a background in Bioinformatics, I bring a unique analytical perspective to
              software development. I enjoy solving complex problems and creating intuitive user
              experiences that make a real impact.
            </p>
          </div>

          <div className="animate-slide-up">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h4 className="text-lg font-semibold text-dark mb-4">Languages</h4>
              <div className="space-y-4">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between">
                    <span className="text-gray-700">{lang.name}</span>
                    <span className="text-gray-500 text-sm">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 text-center">
                <p className="text-3xl font-bold text-primary">3+</p>
                <p className="text-gray-600 text-sm">Years Experience</p>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 text-center">
                <p className="text-3xl font-bold text-primary">5+</p>
                <p className="text-gray-600 text-sm">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
