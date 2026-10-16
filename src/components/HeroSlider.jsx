"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1627293509201-5197c3d3a3b8?q=80&w=1600&auto=format&fit=crop",
    eyebrow: "THE ART OF GOLD",
    title: "Gold That Carries a Story.",
    subtitle: "Where timeless design meets the beauty of tradition.",
    ctaText: "Explore Collections",
    ctaLink: "/collections",
  },
  {
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/fs/b57530127434121.6141d5dd1d00c.jpg",
    eyebrow: "HERITAGE ARTISTRY",
    title: "Intricate Details & Enduring Grace.",
    subtitle: "Celebrating traditional craftsmanship and cultural legacy.",
    ctaText: "Discover Our Story",
    ctaLink: "/about",
  },
  {
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1600&auto=format&fit=crop",
    eyebrow: "BUILT ON TRUST",
    title: "Relationships That Stand Time.",
    subtitle: "Meaningful connections through thoughtful design and integrity.",
    ctaText: "Business Enquiry",
    ctaLink: "/business-enquiries",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[360px] sm:h-[460px] md:h-[540px] overflow-hidden shadow-2xl">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <img
            src={slide.image}
            className="w-full h-full object-cover scale-105 transition-transform duration-[7000ms] ease-out"
            alt={slide.title}
          />

          {/* Luxury Emerald & Gold Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/95 via-emerald-950/60 to-emerald-950/40 flex flex-col justify-center items-center text-center text-white px-6">
            <span className="text-gold-300 uppercase tracking-[0.35em] text-[10px] md:text-xs font-semibold mb-3 border-b border-gold-400/40 pb-1">
              {slide.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-normal tracking-wide max-w-3xl leading-tight">
              {slide.title}
            </h2>
            <p className="mt-4 text-xs sm:text-base md:text-lg text-gray-200 max-w-xl font-light leading-relaxed">
              {slide.subtitle}
            </p>

            <Link
              href={slide.ctaLink}
              className="mt-6 inline-block px-7 py-3 bg-gold-500 text-emerald-950 font-bold uppercase text-[11px] tracking-[0.2em] hover:bg-gold-400 transition-colors shadow-lg"
            >
              {slide.ctaText}
            </Link>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-8 h-1 transition-all ${
              i === current ? "bg-gold-400" : "bg-white/30 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}