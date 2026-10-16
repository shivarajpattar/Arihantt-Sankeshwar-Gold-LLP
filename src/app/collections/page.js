import Link from "next/link";

export const metadata = {
  title: "Gold Jewellery Collections | Arihant Sankeshwar Gold LLP",
  description:
    "Explore gold jewellery designs inspired by tradition, contemporary aesthetics and the beauty of Indian jewellery.",
};

export default function Collections() {
  const collections = [
    {
      id: "traditional",
      title: "Traditional Gold Jewellery",
      description:
        "Inspired by India's rich jewellery heritage, traditional designs celebrate intricate patterns, cultural influences and enduring elegance.",
      image:
        "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1200&auto=format&fit=crop",
      badge: "Heritage",
    },
    {
      id: "temple",
      title: "Temple Jewellery",
      description:
        "Discover designs inspired by the artistry, symbolism and decorative details of traditional Indian temple jewellery.",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/fs/b57530127434121.6141d5dd1d00c.jpg",
      badge: "Divine Artistry",
    },
    {
      id: "bridal",
      title: "Bridal Jewellery",
      description:
        "Celebrate life's most meaningful occasions with jewellery that complements the beauty, emotion and significance of the moment.",
      image:
        "https://mir-s3-cdn-cf.behance.net/projects/404/8311f8230564540.Y3JvcCwxMjY5LDk5MiwzMTQsNjk.jpg",
      badge: "Splendour",
    },
    {
      id: "contemporary",
      title: "Contemporary Gold Jewellery",
      description:
        "Discover modern interpretations of gold jewellery, bringing together refined aesthetics and versatile styling.",
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop",
      badge: "Refined Modern",
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
              SIGNATURE OFFERINGS
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
            Discover the <br />
            <span className="text-gold-gradient italic font-normal">
              Beauty of Gold.
            </span>
          </h1>
          <p className="text-gray-200 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
            Explore jewellery designs that celebrate tradition, individuality and timeless elegance.
          </p>
        </div>
      </section>

      {/* 2. COLLECTION INTRODUCTION */}
      <section className="py-20 bg-cream border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <div className="w-12 h-[1px] bg-gold-500 mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-serif text-emerald-950 mb-6 leading-tight">
            Designs That Speak <span className="text-gold-600 italic font-normal">Beyond Words.</span>
          </h2>
          <p className="text-gray-700 text-base sm:text-lg font-light leading-relaxed">
            Every jewellery design expresses something unique. From cultural influences to contemporary styling, explore a selection of designs for different tastes, occasions and expressions of personal style.
          </p>
        </div>
      </section>

      {/* 3. COLLECTION CATEGORIES */}
      <section className="py-24 bg-[#F5F2EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {collections.map((item, idx) => (
              <div
                key={item.id}
                className="group bg-white border border-gray-200/80 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden reveal flex flex-col justify-between"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-emerald-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent" />
                  <span className="absolute top-5 left-5 bg-emerald-950 text-gold-300 text-[10px] uppercase tracking-[0.2em] px-3.5 py-1.5 font-bold border border-gold-500/40">
                    {item.badge}
                  </span>
                </div>

                <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-emerald-950 group-hover:text-gold-600 transition-colors mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-base font-light leading-relaxed mb-8">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <Link
                      href={`/business-enquiries?type=Collection+Enquiry&collection=${encodeURIComponent(item.title)}`}
                      className="inline-flex items-center text-xs uppercase tracking-[0.2em] font-bold text-emerald-950 group-hover:text-gold-600 transition-colors"
                    >
                      <span>Explore Designs</span>
                      <i className="fas fa-arrow-right ml-2 text-gold-500 group-hover:translate-x-1.5 transition-transform" />
                    </Link>
                    <span className="text-xs text-gray-400 font-mono">0{idx + 1}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ENQUIRY CTA */}
      <section className="py-24 bg-emerald-950 text-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <span className="text-gold-400 uppercase tracking-[0.25em] text-xs font-semibold mb-3 block">
            Bespoke Inquiries
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-6 leading-tight">
            Looking for <span className="text-gold-gradient italic font-normal">Something Specific?</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-10">
            Connect with our team to learn more about our collections and available designs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Link
              href="/business-enquiries"
              className="bg-gold-500 text-emerald-950 px-10 py-4 uppercase text-xs tracking-[0.2em] font-bold hover:bg-gold-400 transition-colors shadow-lg"
            >
              Enquire About Our Collections
            </Link>
            <Link
              href="/about"
              className="border border-white/40 text-white px-10 py-4 uppercase text-xs tracking-[0.2em] font-bold hover:border-gold-400 hover:text-gold-300 transition-colors"
            >
              Discover Our Story
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
