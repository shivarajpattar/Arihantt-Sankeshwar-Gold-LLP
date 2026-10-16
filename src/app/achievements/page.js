import Link from "next/link";

export const metadata = {
  title: "Our Achievements | Arihant Sankeshwar Gold LLP",
  description:
    "Discover the milestones, hallmark certifications, master artisan heritage, and 25+ years of achievements at Arihant Sankeshwar Gold LLP in Bengaluru.",
};

export default function AchievementsPage() {
  const stats = [
    {
      number: "25+",
      label: "Years of Legacy",
      detail: "Crafting pure gold heirlooms with unbroken trust since 1998.",
      icon: "fa-crown",
    },
    {
      number: "100%",
      label: "BIS Hallmarked",
      detail: "Certified purity and complete hallmark assurance on every piece.",
      icon: "fa-certificate",
    },
    {
      number: "4",
      label: "Jewellery Houses",
      detail: "Iconic destinations in Bengaluru representing diverse gold traditions.",
      icon: "fa-landmark",
    },
    {
      number: "10K+",
      label: "Trusted Relationships",
      detail: "Valued partnerships with retailers, trade buyers, and families.",
      icon: "fa-handshake",
    },
  ];

  const milestones = [
    {
      year: "1998",
      title: "Foundation of Trust",
      description:
        "Arihant Sankeshwar Gold began its journey with a commitment to pure gold, honest melting standards, and enduring customer relationships in Bengaluru.",
      badge: "Inception",
    },
    {
      year: "2005",
      title: "Purity Certification & Hallmarking",
      description:
        "Became early pioneers of complete BIS hallmarking, establishing verifiable benchmarks for quality, melting accuracy, and consumer transparency.",
      badge: "Quality Benchmark",
    },
    {
      year: "2014",
      title: "Expansion of Heritage Houses",
      description:
        "Expanded boutique footprint across Nagarathpet and Ranganatha Mansion, offering curated bridal and vintage temple jewellery creations.",
      badge: "Growth",
    },
    {
      year: "2020",
      title: "Contemporary & Lightweight Innovations",
      description:
        "Introduced contemporary lines blending traditional gold artistry with versatile, everyday modern aesthetics.",
      badge: "Design Evolution",
    },
    {
      year: "2026",
      title: "Leading B2B Trade & Partnership Network",
      description:
        "Operating as a premier wholesale and retail gold jewellery house trusted by trade partners and retailers throughout Southern India.",
      badge: "Milestone",
    },
  ];

  const pillars = [
    {
      title: "Uncompromising Purity",
      description:
        "Strict adherence to official purity grades (91.6% 22KT, 18KT, and heritage melting standards) with complete hallmarking certification on every ornament.",
      icon: "fa-gem",
    },
    {
      title: "Master Artisan Heritage",
      description:
        "Preserving intricate South Indian temple motifs, filigree, and royal bridal artistry passed down through generations of skilled goldsmiths.",
      icon: "fa-fire-burner",
    },
    {
      title: "Relationships That Endure",
      description:
        "Honoring client and partner commitments with utmost transparency, consistent communication, and mutual respect.",
      icon: "fa-people-roof",
    },
  ];

  return (
    <div className="pt-24 bg-cream min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="py-20 md:py-28 bg-emerald-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-15" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-block border-b border-gold-400/50 pb-2 mb-6">
            <span className="text-gold-300 tracking-[0.35em] uppercase text-xs font-semibold">
              LEGACY & RECOGNITION
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
            Our <br />
            <span className="text-gold-gradient italic font-normal">
              Achievements & Milestones
            </span>
          </h1>
          <p className="text-gray-200 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
            Celebrating over 25 years of enduring craftsmanship, unbroken trust, and industry distinction in Bengaluru.
          </p>
        </div>
      </section>

      {/* 2. STATS / KEY ACHIEVEMENTS */}
      <section className="py-20 bg-[#F5F2EB] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className="bg-white p-8 border-t-2 border-gold-500 shadow-sm hover:shadow-xl transition-all duration-300 text-center reveal"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-gold-100 flex items-center justify-center text-gold-600 text-xl mb-4">
                  <i className={`fas ${stat.icon}`} />
                </div>
                <h3 className="font-serif text-4xl sm:text-5xl text-emerald-950 mb-2 font-bold">
                  {stat.number}
                </h3>
                <p className="text-xs uppercase tracking-[0.2em] text-gold-700 font-bold mb-3">
                  {stat.label}
                </p>
                <p className="text-gray-600 text-xs sm:text-sm font-light leading-relaxed">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MILESTONES TIMELINE */}
      <section className="py-24 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 reveal">
            <span className="text-gold-600 uppercase tracking-[0.25em] text-xs font-bold mb-3 block">
              The Journey of Excellence
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-emerald-950 mb-6 leading-tight">
              Milestones That Shaped <br />
              <span className="text-gold-600 italic font-normal">Our Legacy</span>
            </h2>
            <p className="text-gray-700 text-base sm:text-lg font-light leading-relaxed">
              Every milestone represents our steadfast dedication to genuine purity, master goldsmithing, and trusted relationships.
            </p>
          </div>

          <div className="relative border-l-2 border-gold-400/40 ml-4 sm:ml-32 space-y-12">
            {milestones.map((item, index) => (
              <div key={item.year} className="relative pl-8 sm:pl-12 group reveal">
                {/* Year Marker */}
                <div className="hidden sm:flex absolute -left-32 top-0 w-24 text-right items-center justify-end">
                  <span className="font-serif text-2xl font-bold text-emerald-950 group-hover:text-gold-600 transition-colors">
                    {item.year}
                  </span>
                </div>

                {/* Node circle */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-gold-500 border-4 border-cream group-hover:scale-125 transition-transform" />

                {/* Content Box */}
                <div className="bg-white p-6 sm:p-8 border border-gray-200/80 shadow-sm group-hover:shadow-lg transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="sm:hidden font-serif text-lg font-bold text-gold-600">
                      {item.year}
                    </span>
                    <span className="bg-emerald-950 text-gold-300 text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 font-bold">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-emerald-950 mb-3 group-hover:text-gold-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PILLARS OF OUR SUCCESS */}
      <section className="py-24 bg-emerald-950 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <span className="text-gold-400 uppercase tracking-[0.3em] text-xs font-semibold mb-3 block">
              Enduring Standards
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-6">
              Pillars of Our <span className="text-gold-gradient italic font-normal">Reputation</span>
            </h2>
            <p className="text-gray-300 font-light text-base sm:text-lg">
              The foundational strengths that have earned Arihant Sankeshwar Gold LLP its trusted standing in the gold jewellery industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="bg-emerald-900/50 border border-gold-500/20 p-8 sm:p-10 hover:border-gold-500/60 transition-all duration-300 reveal flex flex-col justify-between"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div>
                  <div className="w-14 h-14 rounded-full border border-gold-500/50 flex items-center justify-center text-gold-400 text-2xl mb-6">
                    <i className={`fas ${pillar.icon}`} />
                  </div>
                  <h3 className="font-serif text-2xl text-white mb-4">{pillar.title}</h3>
                  <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-emerald-800/80">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gold-400/80 font-semibold">
                    Core Standard 0{idx + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CLOSING CTA */}
      <section className="py-24 bg-cream border-t border-gray-200 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
          <span className="text-gold-600 uppercase tracking-[0.25em] text-xs font-bold mb-3 block">
            Partner With Excellence
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-emerald-950 mb-6 leading-tight">
            Be Part of Our <span className="italic text-gold-600 font-normal">Continuing Story.</span>
          </h2>
          <p className="text-gray-700 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-10">
            Connect with our team to explore signature gold jewellery collections or discuss trade partnership opportunities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Link
              href="/collections"
              className="bg-gold-500 text-emerald-950 px-10 py-4 uppercase text-xs tracking-[0.2em] font-bold hover:bg-gold-400 transition-colors shadow-lg"
            >
              Explore Collections
            </Link>
            <Link
              href="/business-enquiries"
              className="border border-emerald-950 text-emerald-950 px-10 py-4 uppercase text-xs tracking-[0.2em] font-bold hover:bg-emerald-950 hover:text-white transition-colors"
            >
              Make a Business Enquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
