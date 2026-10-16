import Link from "next/link";

export const metadata = {
  title: "About Us | Arihant Sankeshwar Gold LLP",
  description:
    "Learn about Arihant Sankeshwar Gold LLP, our appreciation for gold jewellery, timeless design and lasting business relationships.",
};

export default function About() {
  const values = [
    {
      title: "Trust",
      description:
        "We believe lasting relationships begin with honesty, clarity and mutual confidence.",
      icon: "fa-shield-halved",
    },
    {
      title: "Tradition",
      description:
        "We appreciate the cultural significance of gold and the stories carried through jewellery.",
      icon: "fa-landmark",
    },
    {
      title: "Design",
      description:
        "We value the details, forms and aesthetics that make jewellery meaningful.",
      icon: "fa-gem",
    },
    {
      title: "Relationships",
      description:
        "We believe strong partnerships are built through communication, consistency and shared growth.",
      icon: "fa-handshake-angle",
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
              ABOUT ARIHANT SANKESHWAR GOLD LLP
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-8 leading-tight">
            A Legacy of Gold. <br />
            <span className="text-gold-gradient italic font-normal">
              A Future of Possibilities.
            </span>
          </h1>
          <p className="text-gray-200 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
            Rooted in an appreciation for gold jewellery and enduring design, Arihant Sankeshwar Gold LLP values meaningful relationships, thoughtful choices and a commitment to building lasting business connections.
          </p>
        </div>
      </section>

      {/* 2. OUR STORY */}
      <section className="py-24 bg-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 reveal">
              <div className="relative group">
                <div className="absolute -top-5 -left-5 w-full h-full border border-gold-500/40 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2 pointer-events-none" />
                <div className="relative overflow-hidden shadow-2xl bg-emerald-950">
                  <img
                    src="https://mir-s3-cdn-cf.behance.net/projects/808/b042ba239235147.Y3JvcCw4NzM2LDY4MzMsMCw4NjQ.jpg"
                    alt="Arihant Sankeshwar Gold LLP Tradition"
                    className="w-full h-[520px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 p-5 bg-emerald-950/90 border border-gold-500/30 text-white">
                    <p className="font-serif text-2xl text-gold-300 italic mb-1">
                      Meaningful Connections
                    </p>
                    <p className="text-xs text-gray-300 font-light">
                      Built on honesty, clarity and mutual confidence.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 reveal">
              <div className="flex items-center mb-4">
                <span className="h-[1px] w-12 bg-gold-500 mr-4" />
                <span className="text-gold-600 uppercase tracking-[0.25em] text-xs font-bold">
                  Our Story
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-emerald-950 mb-8 leading-tight">
                More Than Gold. <br />
                <span className="text-gold-600 italic font-normal">
                  A Commitment to Relationships.
                </span>
              </h2>

              <p className="text-gray-700 text-base sm:text-lg font-light leading-relaxed mb-6">
                Gold has always held a special place in Indian culture. It represents celebration, tradition, personal milestones and memories that remain meaningful across generations.
              </p>

              <p className="text-gray-700 text-base sm:text-lg font-light leading-relaxed mb-6">
                At <strong className="font-semibold text-emerald-950">Arihant Sankeshwar Gold LLP</strong>, we recognise the significance gold holds for individuals, families and businesses. Our approach is shaped by respect for this heritage and an understanding of the importance of trust in every relationship.
              </p>

              <p className="text-gray-700 text-base sm:text-lg font-light leading-relaxed mb-10">
                We aim to create meaningful connections through our jewellery offering, professional approach and dedication to long-term business relationships.
              </p>

              {/* 3. OUR VISION */}
              <div className="bg-white border-l-4 border-gold-500 p-8 shadow-sm">
                <div className="flex items-center mb-2">
                  <span className="text-gold-600 text-xs font-bold uppercase tracking-[0.2em]">
                    Our Vision
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-emerald-950 mb-3">
                  Shaping Tomorrow, Inspired by Tradition.
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  To build lasting relationships in the gold jewellery industry by embracing timeless design, evolving preferences and a culture of trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR VALUES */}
      <section className="py-24 bg-emerald-950 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <span className="text-gold-400 uppercase tracking-[0.3em] text-xs font-semibold mb-3 block">
              Core Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-6">
              Our <span className="text-gold-gradient italic font-normal">Values</span>
            </h2>
            <p className="text-gray-300 font-light text-base sm:text-lg">
              The foundational pillars that guide our conduct, design philosophy, and partnerships every single day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <div
                key={val.title}
                className="bg-emerald-900/50 border border-gold-500/20 p-8 rounded-none hover:border-gold-500/60 transition-all duration-300 reveal flex flex-col justify-between"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div>
                  <div className="w-12 h-12 rounded-full border border-gold-500/50 flex items-center justify-center text-gold-400 text-lg mb-6">
                    <i className={`fas ${val.icon}`} />
                  </div>
                  <h3 className="font-serif text-2xl text-white mb-3">{val.title}</h3>
                  <p className="text-gray-300 text-sm font-light leading-relaxed">
                    {val.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-emerald-800/80">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gold-400/80 font-semibold">
                    0{idx + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GLOBAL VISION */}
      <section className="py-28 bg-cream relative overflow-hidden">
        <div className="absolute -top-40 right-0 w-96 h-96 bg-gold-100/60 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 reveal">
              <div className="relative group">
                <div className="absolute -top-4 -left-4 w-full h-full border border-gold-500/40 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2 pointer-events-none" />
                <div className="relative overflow-hidden shadow-2xl bg-emerald-950">
                  <div
                    className="w-full h-[480px] bg-cover bg-center"
                    style={{
                      backgroundImage: "url('/images/global-map-hero.png')",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 p-5 bg-emerald-950/90 border border-gold-500/30 backdrop-blur-sm">
                    <p className="font-serif text-xl text-gold-300 italic mb-1">
                      6 International Markets
                    </p>
                    <p className="text-xs text-gray-300 font-light">
                      Expanding India&apos;s gold jewellery heritage worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 reveal">
              <div className="flex items-center mb-4">
                <span className="h-[1px] w-12 bg-gold-500 mr-4" />
                <span className="text-gold-600 uppercase tracking-[0.25em] text-xs font-bold">
                  Our Global Vision
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-emerald-950 mb-8 leading-tight">
                Rooted in Indian Heritage.{" "}
                <br />
                <span className="text-gold-600 italic font-normal">
                  Connected to the World.
                </span>
              </h2>

              <p className="text-gray-700 text-base sm:text-lg font-light leading-relaxed mb-6">
                Arihantt Sankeshwar Gold LLP is committed to growing its presence in the gold jewellery wholesale and export sector. We believe that strong international business is built on trust, consistent communication, and a shared commitment to long-term growth.
              </p>

              <p className="text-gray-700 text-base sm:text-lg font-light leading-relaxed mb-6">
                Our international outlook reflects our ambition to connect Indian gold jewellery craftsmanship with jewellery businesses across different markets.
              </p>

              <p className="text-gray-600 text-base font-light leading-relaxed mb-10">
                From understanding the needs of trade partners to coordinating business enquiries, we aim to build meaningful relationships that support sustainable growth.
              </p>

              {/* Vision Statement */}
              <div className="bg-white border-l-4 border-gold-500 p-8 shadow-sm">
                <div className="flex items-center mb-2">
                  <span className="text-gold-600 text-xs font-bold uppercase tracking-[0.2em]">
                    Our Vision
                  </span>
                </div>
                <p className="text-gray-700 font-light leading-relaxed">
                  To strengthen our position as a trusted gold jewellery wholesale and export partner through lasting domestic and international business relationships.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/#global-presence"
                  className="inline-flex items-center bg-transparent border border-emerald-950 text-emerald-950 hover:bg-emerald-950 hover:text-white px-8 py-3.5 uppercase text-xs tracking-[0.2em] font-bold transition-all duration-300 group"
                >
                  <span>Explore Our Global Presence</span>
                  <i className="fas fa-arrow-right ml-3 text-gold-600 group-hover:text-gold-400 group-hover:translate-x-1 transition-all" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INTERNATIONAL BUSINESS PRESENCE */}
      <section className="py-28 bg-emerald-950 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gold-gradient opacity-40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <span className="text-gold-400 uppercase tracking-[0.3em] text-xs font-semibold mb-3 block">
              International Business Presence
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-6 leading-tight">
              Markets We{" "}
              <span className="text-gold-gradient italic font-normal">
                Connect With
              </span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed">
              Building trade relationships across key international markets through quality, trust, and professional partnerships.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {[
              { name: "Dubai, UAE", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=400&auto=format&fit=crop" },
              { name: "Australia", img: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=400&auto=format&fit=crop" },
              { name: "Sri Lanka", img: "https://images.unsplash.com/photo-1586116854898-d3e4c56c9b40?q=80&w=400&auto=format&fit=crop" },
              { name: "USA", img: "https://images.unsplash.com/photo-1485738422979-f5c462d49f04?q=80&w=400&auto=format&fit=crop" },
              { name: "Singapore", img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=400&auto=format&fit=crop" },
              { name: "UK", img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=400&auto=format&fit=crop" },
            ].map((market, idx) => (
              <div
                key={market.name}
                className="group relative overflow-hidden border border-gold-500/20 hover:border-gold-500/60 transition-all duration-500 reveal"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="relative h-36 md:h-44 w-full overflow-hidden">
                  <img
                    src={market.img}
                    alt={market.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                  <div className="w-2 h-2 rounded-full bg-gold-400 mx-auto mb-2 animate-pulse" />
                  <p className="text-gold-200 text-[10px] sm:text-xs uppercase tracking-[0.15em] font-bold">
                    {market.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center reveal">
            <Link
              href="/#global-presence"
              className="inline-flex items-center text-gold-300 hover:text-white transition-colors text-xs uppercase tracking-[0.2em] font-bold border-b border-gold-500 pb-1"
            >
              View Full Global Presence <i className="fas fa-arrow-right ml-2 text-gold-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. CLOSING CTA */}
      <section className="py-24 bg-cream border-t border-gray-200 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
          <span className="text-gold-600 uppercase tracking-[0.25em] text-xs font-bold mb-3 block">
            Start a Conversation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-emerald-950 mb-6 leading-tight">
            Let&apos;s Create <span className="italic text-gold-600 font-normal">Lasting Connections.</span>
          </h2>
          <p className="text-gray-700 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-10">
            Discover our offering and connect with our team to explore opportunities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Link
              href="/business-enquiries"
              className="bg-gold-500 text-emerald-950 px-10 py-4 uppercase text-xs tracking-[0.2em] font-bold hover:bg-gold-400 transition-colors shadow-lg"
            >
              Business Enquiries
            </Link>
            <Link
              href="/collections"
              className="border border-emerald-950 text-emerald-950 px-10 py-4 uppercase text-xs tracking-[0.2em] font-bold hover:bg-emerald-950 hover:text-white transition-colors"
            >
              Explore Collections
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
