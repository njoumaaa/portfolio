
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceTimeline = () => {
  const experiences = [
    {
      year: "2025",
      title: "CEO & Founder",
      company: "APEX.TUN",
      description: "Leading a innovative tech company focused on digital solutions and creative services.",
      current: true
    },
    {
      year: "2025",
      title: "Web Development Intern",
      company: "TRITUX GROUP",
      description: "Developed responsive web applications and collaborated with senior developers on client projects.",
      current: true
    },
    {
      year: "2020–2025",
      title: "Content Creator",
      company: "We Make Hamam-Linf",
      description: "Created educational content and managed social media presence, building a community of developers and creators.",
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My professional journey and the roles that have shaped my expertise
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-teal-200"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-teal-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                        {exp.current && (
                          <Badge className="bg-teal-100 text-teal-800">Current</Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-3 mb-3">
                        <h4 className="text-lg font-semibold text-teal-600">{exp.company}</h4>
                        <Badge variant="outline">{exp.year}</Badge>
                      </div>
                      <p className="text-gray-600">{exp.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
