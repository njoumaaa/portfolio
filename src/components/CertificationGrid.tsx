
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CertificationGrid = () => {
  const certifications = [
    {
      name: "Algorithms",
      issuer: "Online Course",
      year: "2023",
      category: "Programming"
    },
    {
      name: "C Programming",
      issuer: "Technical Institute",
      year: "2022",
      category: "Programming"
    },
    {
      name: "Python Developer",
      issuer: "Python Institute",
      year: "2023",
      category: "Programming"
    },
    {
      name: "HTML5 & CSS3",
      issuer: "Web Academy",
      year: "2021",
      category: "Web Development"
    },
    {
      name: "Salesforce SaaS",
      issuer: "Salesforce",
      year: "2024",
      category: "Cloud"
    },
    {
      name: "Linux Administration",
      issuer: "Linux Foundation",
      year: "2023",
      category: "System Admin"
    }
  ];

  const awards = [
    {
      name: "We Make Competition",
      description: "First place in web development challenge",
      year: "2024"
    },
    {
      name: "Embassy of Palestine Recognition",
      description: "Outstanding contribution to community development",
      year: "2024"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Awards</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Professional certifications and recognition that validate my expertise
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-teal-500">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-bold text-gray-900">{cert.name}</h4>
                    <Badge variant="outline" className="text-xs">{cert.year}</Badge>
                  </div>
                  <p className="text-gray-600 mb-3">{cert.issuer}</p>
                  <Badge className="bg-teal-100 text-teal-800">{cert.category}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Awards & Recognition</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-yellow-500">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-bold text-gray-900">{award.name}</h4>
                    <Badge variant="outline" className="text-xs bg-yellow-50 text-yellow-800">{award.year}</Badge>
                  </div>
                  <p className="text-gray-600">{award.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationGrid;
