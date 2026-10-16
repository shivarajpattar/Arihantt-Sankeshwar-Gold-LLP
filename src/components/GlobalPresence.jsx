"use client";

import Link from "next/link";
import { useState } from "react";

const markets = [
  {
    country: "Dubai, UAE",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop",
    description:
      "A major international business hub connecting jewellery trade across diverse markets.",
    tag: "International Trade & Partnerships",
    icon: "fa-mosque",
  },
  {
    country: "Australia",
    image:
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=800&auto=format&fit=crop",
    description:
      "Connecting with jewellery businesses and exploring opportunities for long-term trade relationships.",
    tag: "Global Business Connections",
    icon: "fa-globe-oceania",
  },
  {
    country: "Sri Lanka",
    image:
      "https://images.unsplash.com/photo-1586116854898-d3e4c56c9b40?q=80&w=800&auto=format&fit=crop",
    description:
      "Strengthening regional trade connections through gold jewellery export activities and business partnerships.",
    tag: "Regional Trade Network",
    icon: "fa-water",
  },
  {
    country: "United States (USA)",
    image:
      "https://images.unsplash.com/photo-1485738422979-f5c462d49f04?q=80&w=800&auto=format&fit=crop",
    description:
      "Extending our international business reach and building connections with jewellery trade partners.",
    tag: "International Market Reach",
    icon: "fa-flag-usa",
  },
  {
    country: "Singapore",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=800&auto=format&fit=crop",
    description:
      "Building cross-border business relationships in a globally connected commercial market.",
    tag: "Cross-Border Partnerships",
    icon: "fa-city",
  },
  {
    country: "United Kingdom (UK)",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop",
    description:
      "Developing international trade relationships and connecting with jewellery businesses in the UK market.",
    tag: "Global Trade Opportunities",
    icon: "fa-landmark-dome",
  },
];

const whyChoose = [
  {
    title: "Indian Gold Jewellery Heritage",
    description:
      "Our identity is rooted in the tradition and craftsmanship associated with India's gold jewellery industry.",
    icon: "fa-crown",
  },
  {
    title: "Long-Term Business Partnerships",
    description:
      "We value professional communication, mutual trust, and relationships built around shared business goals.",
    icon: "fa-handshake",
  },
  {
    title: "Wholesale & Export Support",
    description:
      "We coordinate business enquiries and discuss wholesale requirements with prospective trade partners.",
    icon: "fa-boxes-stacked",
  },
  {
    title: "International Outlook",
    description:
      "We focus on building business connections across markets while respecting applicable export and destination requirements.",
    icon: "fa-earth-americas",
  },
];

export default function GlobalPresence({ variant = "full" }) {
  const [copied, setCopied] = useState(false);

  const handleCopyContact = () => {
    const contactText = `Arihantt Sankeshwar Gold LLP
Email: arihanttsankeshwargoldllp@gmail.com
Phone: 080-4208 6068 / 080-4169 5664
Address: #109, 1st Floor, Shop No. 101, PANCHHRATNAA, Nagarathpet, Bengaluru – 560 002, Karnataka, India.`;
    navigator.clipboard.writeText(contactText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      {/* ═══════════════════════════════════════════════════ */}
      {/* GLOBAL MAP HERO SECTION                            */}
      {/* ═══════════════════════════════════════════════════ */}
      <section
        id="global-presence"
        className="relative min-h-[85vh] md:min-h-[90vh] w-full overflow-hidden flex items-center justify-center bg-emerald-950"
      >
        {/* Background Map Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: "url('/images/global-map-hero.png')",
            animation: "globalPulse 12s ease-in-out infinite alternate",
          }}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-emerald-950/40 to-emerald-950/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/60 via-transparent to-emerald-950/60" />

        {/* Animated gold particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gold-400/20"
              style={{
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `particleFloat ${Math.random() * 10 + 8}s ease-in-out infinite alternate`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <div className="animate-fade-in-up">
            <div className="inline-block border-b border-gold-400/60 pb-2 mb-6">
              <p className="text-gold-300 tracking-[0.45em] uppercase text-xs md:text-sm font-semibold">
                OUR GLOBAL REACH
              </p>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-[1.1] tracking-tight">
              Indian Craftsmanship.
              <br />
              <span className="text-gold-gradient italic font-normal">
                Global Connections.
              </span>
            </h1>
          </div>

          <p className="text-gray-200 text-base sm:text-lg md:text-xl mb-10 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-delayed opacity-0">
            At Arihantt Sankeshwar Gold LLP, we connect India&apos;s rich gold
            jewellery heritage with international markets. Through our export
            activities and business relationships, we aim to serve jewellery
            businesses across borders with a commitment to quality, trust, and
            long-term partnerships.
          </p>

          <div
            className="animate-fade-in-delayed opacity-0"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href="#explore-markets"
              className="group relative inline-flex items-center bg-gold-500 text-emerald-950 px-9 py-4 overflow-hidden shadow-lg hover:shadow-gold-500/20 transition-all"
            >
              <span className="relative z-10 uppercase tracking-[0.2em] text-xs font-bold group-hover:text-white transition-colors duration-300">
                Explore Our Markets
              </span>
              <i className="fas fa-arrow-down ml-3 relative z-10 group-hover:text-white group-hover:translate-y-1 transition-all duration-300" />
              <div className="absolute inset-0 bg-emerald-900 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out" />
            </a>
          </div>

          {/* Floating location markers */}
          <div className="mt-16 flex flex-wrap justify-center gap-4 md:gap-6 animate-fade-in-delayed opacity-0" style={{ animationDelay: "0.9s" }}>
            {["Dubai", "Australia", "Sri Lanka", "USA", "Singapore", "UK"].map(
              (loc) => (
                <div
                  key={loc}
                  className="flex items-center gap-2 bg-emerald-900/60 border border-gold-500/30 px-4 py-2 backdrop-blur-sm"
                >
                  <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
                  <span className="text-[11px] text-gold-200 uppercase tracking-[0.15em] font-medium">
                    {loc}
                  </span>
                </div>
              )
            )}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gold-400 animate-float pointer-events-none">
          <div className="h-10 w-[1px] bg-gradient-to-b from-transparent to-gold-400 mx-auto" />
          <span className="text-[0.6rem] uppercase tracking-widest mt-2 block opacity-80">
            Scroll
          </span>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* INTRO TEXT BAND                                    */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="py-16 bg-cream relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold-100/60 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 reveal">
          <p className="text-gray-700 text-lg md:text-xl font-light leading-relaxed">
            Our growing international presence reflects our vision of bringing
            Indian gold jewellery craftsmanship to a{" "}
            <strong className="font-semibold text-emerald-950">
              wider global audience
            </strong>
            .
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* SIX MARKET CARDS                                   */}
      {/* ═══════════════════════════════════════════════════ */}
      <section
        id="explore-markets"
        className="py-28 bg-emerald-950 relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gold-gradient opacity-40" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gold-gradient opacity-40" />
        <div className="absolute top-20 -right-20 w-80 h-80 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 -left-20 w-80 h-80 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <span className="text-gold-400 uppercase tracking-[0.3em] text-xs font-semibold mb-3 block">
              International Markets
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-6 leading-tight">
              Where Our{" "}
              <span className="text-gold-gradient italic font-normal">
                Business Connects
              </span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed">
              Exploring opportunities and building trade relationships across
              key international markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {markets.map((market, index) => (
              <div
                key={market.country}
                className="group relative bg-emerald-900/40 border border-gold-500/20 overflow-hidden reveal hover:border-gold-500/60 transition-all duration-500 flex flex-col"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={market.image}
                    alt={market.country}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/30 to-transparent" />

                  {/* Gold border accent */}
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gold-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Country badge */}
                  <div className="absolute top-4 left-4 bg-emerald-950/90 border border-gold-500/40 px-4 py-1.5 backdrop-blur-sm">
                    <span className="text-gold-300 text-[10px] uppercase tracking-[0.2em] font-bold">
                      {market.country}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-gray-300 text-sm font-light leading-relaxed mb-4">
                      {market.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-emerald-800/80">
                    <span className="text-[10px] uppercase tracking-[0.15em] text-gold-400/80 font-semibold">
                      {market.tag}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-emerald-950 transition-all duration-300">
                      <i className="fas fa-arrow-right text-[10px] group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* WHY CHOOSE US                                      */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="py-28 bg-cream relative overflow-hidden">
        <div className="absolute -bottom-40 left-0 w-96 h-96 bg-gold-100/60 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <span className="text-gold-600 uppercase tracking-[0.25em] text-xs font-bold mb-3 block">
              Our Strengths
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-emerald-950 mb-6 leading-tight">
              Why Choose{" "}
              <span className="text-gold-600 italic font-normal">
                Arihantt Sankeshwar Gold LLP?
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, idx) => (
              <div
                key={item.title}
                className="bg-white p-8 border-t-2 border-gold-500 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center reveal group"
                style={{ transitionDelay: `${idx * 120}ms` }}
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-gold-100 flex items-center justify-center text-gold-600 text-xl group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
                  <i className={`fas ${item.icon}`} />
                </div>
                <h3 className="font-serif text-lg text-emerald-950 mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* GLOBAL ENQUIRY CTA                                 */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="py-24 bg-emerald-900 text-white relative overflow-hidden">
        {/* Decorative map overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('/images/global-map-hero.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/90 via-emerald-900/80 to-emerald-900/90" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 reveal">
          <p className="text-gold-300 uppercase tracking-[0.3em] text-xs font-semibold mb-4">
            Global Business Enquiries
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-6 leading-tight">
            Let&apos;s Build a{" "}
            <span className="text-gold-gradient italic font-normal">
              Global Partnership
            </span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Are you a jewellery retailer, wholesaler, or trade partner? Connect
            with our team to discuss your wholesale and export requirements.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Link
              href="/business-enquiries"
              className="group relative bg-gold-500 text-emerald-950 px-9 py-4 overflow-hidden shadow-lg hover:shadow-gold-500/20 transition-all"
            >
              <span className="relative z-10 uppercase tracking-[0.2em] text-xs font-bold group-hover:text-white transition-colors duration-300">
                Make a Business Enquiry
              </span>
              <div className="absolute inset-0 bg-emerald-900 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out" />
            </Link>

            <button
              onClick={handleCopyContact}
              className="group px-9 py-4 border border-white/40 hover:border-gold-400 transition-all duration-300 bg-black/10 backdrop-blur-sm cursor-pointer"
            >
              <span className="uppercase tracking-[0.2em] text-xs font-bold text-white group-hover:text-gold-300">
                {copied ? (
                  <>
                    <i className="fas fa-check mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <i className="fas fa-copy mr-2" />
                    Copy Business Contact Details
                  </>
                )}
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
