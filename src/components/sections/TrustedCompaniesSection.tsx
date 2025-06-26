
const TrustedCompaniesSection = () => {
  const companies = [
    { name: 'Think41', logo: '/logos/think41.png' },
    { name: 'BasePair', logo: '/logos/basepair.png' },
    { name: 'S Company', logo: '/logos/scompany.png' },
    { name: 'Zyoin', logo: '/logos/zyoin.png' },
    { name: 'IIT Dharwad', logo: '/logos/iitdharwad.png' },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Join 10+ innovative companies that have transformed their hiring process with Recruit41
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {companies.map((company, index) => (
            <div
              key={index}
              className="group hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <div className="relative">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="h-12 md:h-16 lg:h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 rounded-lg shadow-sm hover:shadow-md"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-orange-50 px-6 py-3 rounded-full border border-orange-200">
            <div className="flex -space-x-2">
              {companies.slice(0, 3).map((company, index) => (
                <img
                  key={index}
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="h-8 w-8 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <span className="text-orange-600 font-semibold text-sm">
              +10 companies trust us with their hiring
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompaniesSection;