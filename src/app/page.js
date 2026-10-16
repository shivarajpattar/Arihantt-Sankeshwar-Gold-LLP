import Link from "next/link";
import GlobalPresence from "@/components/GlobalPresence";

export const metadata = {
  title: "Arihant Sankeshwar Gold LLP | Gold Jewellery",
  description:
    "Discover Arihant Sankeshwar Gold LLP, explore gold jewellery collections and connect with our team for collection and business enquiries.",
};

export default function Home() {
  const collectionHighlights = [
    {
      title: "Traditional Gold Jewellery",
      description: "Inspired by heritage, culture and enduring design.",
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1200&auto=format&fit=crop",
      badge: "Heritage",
    },
    {
      title: "Temple Jewellery",
      description: "Celebrating intricate details and the beauty of traditional artistry.",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/b57530127434121.6141d5dd1d00c.jpg",
      badge: "Artistry",
    },
    {
      title: "Bridal Jewellery",
      description: "Designed to complement the significance and splendour of life's special occasions.",
      image: "https://mir-s3-cdn-cf.behance.net/projects/404/8311f8230564540.Y3JvcCwxMjY5LDk5MiwzMTQsNjk.jpg",
      badge: "Celebration",
    },
    {
      title: "Contemporary Designs",
      description: "A modern expression of elegance with timeless appeal.",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop",
      badge: "Modern Elegance",
    },
  ];

  return (
    <>
      {/* 1. HERO SECTION */}
      <section id="home" className="relative h-screen w-full overflow-hidden">
        {/* Background Image with Ken Burns Effect */}
        <div
          className="absolute inset-0 bg-hero-pattern bg-cover bg-center bg-no-repeat animate-[scale_20s_infinite_alternate]"
          style={{ transform: "scale(1.1)", animation: "float 20s infinite alternate" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/75 via-emerald-950/60 to-emerald-950/95" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto pt-16">
          <div className="animate-fade-in-up">
            <div className="inline-block border-b border-gold-400/60 pb-2 mb-6">
              <p className="text-gold-300 tracking-[0.45em] uppercase text-xs md:text-sm font-semibold">
                THE ART OF GOLD
              </p>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-[1.1] tracking-tight">
              Gold That Carries <br />
              <span className="text-gold-gradient italic font-normal">a Story.</span>
            </h1>
          </div>

          <p className="text-gray-200 text-base sm:text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-delayed opacity-0">
            Discover gold jewellery where timeless design meets the beauty of tradition. Explore a world of intricate details, enduring elegance and designs made to be treasured.
          </p>

          <div
            className="flex flex-col sm:flex-row justify-center gap-5 w-full sm:w-auto animate-fade-in-delayed opacity-0"
            style={{ animationDelay: "0.6s" }}
          >
            <Link
              href="/collections"
              className="group relative bg-gold-500 text-emerald-950 px-9 py-4 overflow-hidden shadow-lg hover:shadow-gold-500/20 transition-all text-center"
            >
              <span className="relative z-10 uppercase tracking-[0.2em] text-xs font-bold group-hover:text-white transition-colors duration-300">
                Explore Our Collections
              </span>
              <div className="absolute inset-0 bg-emerald-900 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out" />
            </Link>
            <Link
              href="/business-enquiries"
              className="group px-9 py-4 border border-white/40 hover:border-gold-400 transition-all duration-300 text-center bg-black/10 backdrop-blur-sm"
            >
              <span className="uppercase tracking-[0.2em] text-xs font-bold text-white group-hover:text-gold-300">
                Business Enquiry
              </span>
            </Link>
          </div>
        </div>

        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gold-400 animate-float pointer-events-none">
          <div className="h-10 w-[1px] bg-gradient-to-b from-transparent to-gold-400 mx-auto" />
          <span className="text-[0.6rem] uppercase tracking-widest mt-2 block opacity-80">Scroll</span>
        </div>
      </section>

      {/* 2. BRAND INTRODUCTION */}
      <section className="py-28 bg-cream relative overflow-hidden">
        {/* Subtle decorative background shape */}
        <div className="absolute -top-40 right-0 w-96 h-96 bg-gold-100/60 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 reveal">
              <div className="relative group">
                <div className="absolute -top-4 -left-4 w-full h-full border border-gold-500/40 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2 pointer-events-none" />
                <div className="relative overflow-hidden shadow-2xl bg-emerald-950">
                  <img
                    src="https://mir-s3-cdn-cf.behance.net/projects/808/b042ba239235147.Y3JvcCw4NzM2LDY4MzMsMCw4NjQ.jpg"
                    alt="Where Tradition Meets Timeless Design"
                    className="w-full h-[480px] sm:h-[540px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 p-4 border border-gold-400/30 bg-emerald-950/80 backdrop-blur-sm">
                    <p className="text-[11px] text-gold-300 uppercase tracking-[0.25em] font-semibold">
                      Arihant Sankeshwar Gold LLP
                    </p>
                    <p className="text-xs text-gray-300 font-light italic mt-1">
                      Gold that carries a story.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Copy Column */}
            <div className="lg:col-span-7 reveal">
              <div className="flex items-center mb-4">
                <span className="h-[1px] w-12 bg-gold-500 mr-4" />
                <span className="text-gold-600 uppercase tracking-[0.25em] text-xs font-bold">
                  Brand Philosophy
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-emerald-950 mb-8 leading-tight">
                Where Tradition Meets <br />
                <span className="text-gold-600 italic font-normal">Timeless Design</span>
              </h2>

              <p className="text-gray-700 text-lg md:text-xl font-light leading-relaxed mb-6">
                Gold is more than an ornament. It carries memories, celebrates milestones and connects generations.
              </p>

              <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed mb-10">
                At <strong className="font-semibold text-emerald-950">Arihant Sankeshwar Gold LLP</strong>, we believe every design has a story to tell. Our approach brings together an appreciation for traditional aesthetics, thoughtful design and the lasting value of meaningful relationships.
              </p>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center bg-transparent border border-emerald-950 text-emerald-950 hover:bg-emerald-950 hover:text-white px-8 py-3.5 uppercase text-xs tracking-[0.2em] font-bold transition-all duration-300 group"
                >
                  <span>Discover Our Story</span>
                  <i className="fas fa-arrow-right ml-3 text-gold-600 group-hover:text-gold-400 group-hover:translate-x-1 transition-all" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COLLECTIONS SECTION */}
      <section className="py-28 bg-emerald-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 reveal">
            <div className="max-w-2xl">
              <p className="text-gold-400 uppercase tracking-[0.3em] text-xs font-semibold mb-3">
                Curated Creations
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-5 leading-tight">
                A Collection for <span className="text-gold-gradient italic">Every Celebration</span>
              </h2>
              <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed">
                From the richness of traditional designs to the elegance of contemporary aesthetics, explore jewellery that reflects individuality, culture and personal style.
              </p>
            </div>
            <div className="mt-8 md:mt-0">
              <Link
                href="/collections"
                className="inline-flex items-center text-gold-300 hover:text-white transition-colors text-xs uppercase tracking-[0.2em] font-bold border-b border-gold-500 pb-1"
              >
                Explore All Collections <i className="fas fa-arrow-right ml-2 text-gold-400" />
              </Link>
            </div>
          </div>

          {/* Collections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {collectionHighlights.map((item, index) => (
              <div
                key={item.title}
                className="group relative bg-emerald-900/40 border border-gold-500/20 overflow-hidden reveal flex flex-col h-full hover:border-gold-500/60 transition-all duration-500"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative h-72 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/20 to-transparent" />
                  <span className="absolute top-4 left-4 bg-emerald-950/90 text-gold-300 text-[10px] uppercase tracking-[0.2em] px-3 py-1 font-bold border border-gold-500/30">
                    {item.badge}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl text-white group-hover:text-gold-300 transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>
                  <Link
                    href="/collections"
                    className="inline-flex items-center text-[11px] uppercase tracking-[0.2em] font-bold text-gold-400 hover:text-white transition-colors"
                  >
                    View Designs <i className="fas fa-arrow-right ml-2 text-xs group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center reveal">
            <Link
              href="/collections"
              className="inline-block bg-gold-500 text-emerald-950 px-10 py-4 uppercase text-xs tracking-[0.2em] font-bold hover:bg-gold-400 transition-colors shadow-lg"
            >
              Explore All Collections
            </Link>
          </div>
        </div>
      </section>

      {/* 4. CRAFTSMANSHIP SECTION */}
      <section
        className="py-32 bg-emerald-950 relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11, 36, 32, 0.92), rgba(11, 36, 32, 0.92)), url('https://images.unsplash.com/photo-1618403088890-3d1339bd6711?q=80&w=2000&auto=format&fit=crop')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="reveal text-white">
              <div className="flex items-center mb-4">
                <span className="h-[1px] w-12 bg-gold-500 mr-4" />
                <span className="text-gold-400 uppercase tracking-[0.3em] text-xs font-semibold">
                  Artistry & Precision
                </span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-8 leading-tight">
                Every Detail <br />
                <span className="italic text-gold-400 font-normal">Tells a Story.</span>
              </h2>

              <p className="text-gray-200 mb-6 text-base sm:text-lg font-light leading-relaxed">
                Beauty lives in the details. From intricate patterns to carefully considered forms, jewellery reflects the creativity and artistry behind its design.
              </p>

              <p className="text-gray-300 mb-10 text-base sm:text-lg font-light leading-relaxed">
                Discover designs that celebrate the richness of Indian jewellery traditions and the enduring appeal of gold.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 border-t border-emerald-900 pt-8">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full border border-gold-500/50 flex items-center justify-center text-gold-400 flex-shrink-0">
                    <i className="fas fa-drafting-compass text-sm" />
                  </div>
                  <div>
                    <h4 className="text-white font-serif text-base mb-1">Considered Forms</h4>
                    <p className="text-xs text-gray-400 font-light">Artistry woven into every curve and contour.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full border border-gold-500/50 flex items-center justify-center text-gold-400 flex-shrink-0">
                    <i className="fas fa-gem text-sm" />
                  </div>
                  <div>
                    <h4 className="text-white font-serif text-base mb-1">Intricate Patterns</h4>
                    <p className="text-xs text-gray-400 font-light">Celebrating timeless Indian decorative heritage.</p>
                  </div>
                </div>
              </div>

              <Link
                href="/collections"
                className="inline-block bg-transparent border border-gold-500 text-gold-300 px-8 py-3.5 uppercase text-xs tracking-[0.2em] font-bold hover:bg-gold-500 hover:text-emerald-950 transition-all duration-300"
              >
                Explore Collections
              </Link>
            </div>

            <div className="reveal">
              <div className="relative p-4 border border-gold-500/30">
                <div className="absolute inset-0 bg-gold-500/10 translate-x-3 translate-y-3 pointer-events-none" />
                <img
                  src="https://mir-s3-cdn-cf.behance.net/projects/404/da7b96205029751.Y3JvcCw0MjQ3LDMzMjIsMzc4LDA.jpg"
                  alt="Jewellery Craftsmanship in Gold"
                  className="relative z-10 w-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 object-cover max-h-[500px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TRUST SECTION */}
      <section className="py-24 bg-cream border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <span className="text-gold-600 uppercase tracking-[0.25em] text-xs font-bold mb-3 block">
              Our Commitment
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-emerald-950 mb-6 leading-tight">
              Built on Relationships. <br />
              <span className="text-gold-600 italic font-normal">Guided by Trust.</span>
            </h2>
            <p className="text-gray-700 text-base sm:text-lg font-light leading-relaxed">
              Strong relationships are at the heart of lasting business. We value the confidence our customers and business partners place in us and believe that trust grows through consistency, communication and mutual respect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
            <div className="bg-white p-8 border-t-2 border-gold-500 shadow-sm text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gold-100 flex items-center justify-center text-gold-600 text-xl">
                <i className="fas fa-handshake" />
              </div>
              <h3 className="font-serif text-xl text-emerald-950 mb-2">Mutual Confidence</h3>
              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                Nurturing long-term relationships through transparency and reliable business conduct.
              </p>
            </div>

            <div className="bg-white p-8 border-t-2 border-gold-500 shadow-sm text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gold-100 flex items-center justify-center text-gold-600 text-xl">
                <i className="fas fa-comments" />
              </div>
              <h3 className="font-serif text-xl text-emerald-950 mb-2">Clear Communication</h3>
              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                Prioritizing open, timely dialogues that empower partners and celebrate collaborative growth.
              </p>
            </div>

            <div className="bg-white p-8 border-t-2 border-gold-500 shadow-sm text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gold-100 flex items-center justify-center text-gold-600 text-xl">
                <i className="fas fa-shield-alt" />
              </div>
              <h3 className="font-serif text-xl text-emerald-950 mb-2">Consistent Integrity</h3>
              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                Upholding enduring values and steadfast dedication in every interaction and collection.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center reveal">
            <Link
              href="/about"
              className="inline-flex items-center text-xs uppercase tracking-[0.2em] font-bold text-emerald-950 hover:text-gold-600 border-b border-emerald-950 hover:border-gold-600 pb-1 transition-all"
            >
              Get to Know Us <i className="fas fa-arrow-right ml-2 text-gold-500" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. GLOBAL PRESENCE SECTION */}
      <GlobalPresence />

      {/* 7. BUSINESS ENQUIRY SECTION */}
      <section className="py-24 bg-emerald-900 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 reveal">
          <p className="text-gold-300 uppercase tracking-[0.3em] text-xs font-semibold mb-4">
            Partnerships & Collaboration
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl text-white mb-6 leading-tight">
            Let&apos;s Build Something <br />
            <span className="text-gold-gradient italic font-normal">Lasting Together.</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Looking to explore our collections or discuss a business opportunity? Connect with our team to start a conversation.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Link
              href="/business-enquiries"
              className="bg-gold-500 text-emerald-950 px-8 py-4 uppercase text-xs tracking-[0.2em] font-bold hover:bg-gold-400 transition-colors shadow-lg"
            >
              Make a Business Enquiry
            </Link>
            <Link
              href="/about"
              className="border border-white/40 text-white px-8 py-4 uppercase text-xs tracking-[0.2em] font-bold hover:border-gold-400 hover:text-gold-300 transition-colors"
            >
              Discover Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* 7. CLOSING BRAND STATEMENT */}
      <section className="py-20 bg-cream border-t border-gray-200 text-center">
        <div className="max-w-4xl mx-auto px-4 reveal">
          <div className="w-16 h-[1px] bg-gold-500 mx-auto mb-6" />
          <h3 className="font-serif text-2xl sm:text-3xl text-emerald-950 font-bold mb-3 tracking-wide">
            Arihant Sankeshwar Gold LLP
          </h3>
          <p className="font-serif text-lg sm:text-xl text-gold-700 italic font-normal">
            &ldquo;Gold that carries a story. Relationships that stand the test of time.&rdquo;
          </p>
          <div className="w-16 h-[1px] bg-gold-500 mx-auto mt-6" />
        </div>
      </section>
    </>
  );
}
