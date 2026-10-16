"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Houses() {
  useEffect(() => {
    // Intersection Observer for Scroll Reveals
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, observerOptions);

    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
  }, []);

  return (
    <div className="pt-24 bg-[#F9F7F2] min-h-screen">
      <section id="houses" className="py-32 bg-[#F9F7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 reveal relative">
            <span className="text-emerald-900/10 text-7xl md:text-9xl font-serif absolute left-1/2 transform -translate-x-1/2 -translate-y-12 md:-translate-y-16 pointer-events-none">LOCATIONS</span>
            <h2 className="font-serif text-4xl text-emerald-950 mb-6 relative z-10">Our Jewellery Houses</h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-light">Four iconic locations across Bengaluru, each dedicated to a unique aspect of jewellery craftsmanship.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* House 1 */}
            <div className="bg-white p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-shadow group border-t-2 border-transparent hover:border-gold-500 reveal">
              <div className="flex justify-between items-start mb-6">
                <h3 className="font-serif text-3xl text-emerald-950 group-hover:text-gold-600 transition-colors">Arihant Jewellers</h3>
                <span className="bg-emerald-50 text-emerald-900 text-[0.65rem] px-2 py-1 uppercase tracking-widest font-bold">Heritage</span>
              </div>
              <p className="text-gray-500 text-xs mb-6 font-semibold uppercase tracking-widest flex items-center">
                <i className="fas fa-map-pin text-gold-500 mr-2"></i> Ranganatha Mansion, Bengaluru
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 font-light">Renowned for intricate gold craftsmanship and unmatched purity in 80% & 84% melting, Arihant Jewellers stands as a pioneer in heritage jewellery.</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=PANCHHRATNAA+Nagarathpet+Bengaluru+560002"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-emerald-950 hover:text-gold-600 text-xs font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform"
              >
                Get Directions <i className="fas fa-arrow-right ml-2 text-gold-500"></i>
              </a>
            </div>

            {/* House 2 */}
            <div className="bg-white p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-shadow group border-t-2 border-transparent hover:border-gold-500 reveal" style={{transitionDelay: '100ms'}}>
              <div className="flex justify-between items-start mb-6">
                <h3 className="font-serif text-3xl text-emerald-950 group-hover:text-gold-600 transition-colors">Sankeshwar Gold</h3>
                <span className="bg-emerald-50 text-emerald-900 text-[0.65rem] px-2 py-1 uppercase tracking-widest font-bold">18KT Tradition</span>
              </div>
              <p className="text-gray-500 text-xs mb-6 font-semibold uppercase tracking-widest flex items-center">
                <i className="fas fa-map-pin text-gold-500 mr-2"></i> Ranganatha Mansion, Bengaluru
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 font-light">A house of tradition and timeless beauty, offering 18kt jewellery inspired by India&apos;s cultural legacy.</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=PANCHHRATNAA+Nagarathpet+Bengaluru+560002"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-emerald-950 hover:text-gold-600 text-xs font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform"
              >
                Get Directions <i className="fas fa-arrow-right ml-2 text-gold-500"></i>
              </a>
            </div>

            {/* House 3 */}
            <div className="bg-white p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-shadow group border-t-2 border-transparent hover:border-gold-500 reveal">
              <div className="flex justify-between items-start mb-6">
                <h3 className="font-serif text-3xl text-emerald-950 group-hover:text-gold-600 transition-colors">Arihant Jewel Craft</h3>
                <span className="bg-emerald-50 text-emerald-900 text-[0.65rem] px-2 py-1 uppercase tracking-widest font-bold">Vintage</span>
              </div>
              <p className="text-gray-500 text-xs mb-6 font-semibold uppercase tracking-widest flex items-center">
                <i className="fas fa-map-pin text-gold-500 mr-2"></i> Sankhla Tower, Bengaluru
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 font-light">Where modern elegance meets traditional charm. Known for 22kt vintage temple jewellery and bespoke creations.</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=PANCHHRATNAA+Nagarathpet+Bengaluru+560002"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-emerald-950 hover:text-gold-600 text-xs font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform"
              >
                Get Directions <i className="fas fa-arrow-right ml-2 text-gold-500"></i>
              </a>
            </div>

            {/* House 4 */}
            <div className="bg-white p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-shadow group border-t-2 border-transparent hover:border-gold-500 reveal" style={{transitionDelay: '100ms'}}>
              <div className="flex justify-between items-start mb-6">
                <h3 className="font-serif text-3xl text-emerald-950 group-hover:text-gold-600 transition-colors">Arihant Sankeshwar LLP</h3>
                <span className="bg-emerald-50 text-emerald-900 text-[0.65rem] px-2 py-1 uppercase tracking-widest font-bold">Contemporary</span>
              </div>
              <p className="text-gray-500 text-xs mb-6 font-semibold uppercase tracking-widest flex items-center">
                <i className="fas fa-map-pin text-gold-500 mr-2"></i> Nagarthpet, Bengaluru
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 font-light">Our newest venture offering 18kt & 22kt contemporary jewellery, crafted with precision and innovation.</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=PANCHHRATNAA+Nagarathpet+Bengaluru+560002"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-emerald-950 hover:text-gold-600 text-xs font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform"
              >
                Get Directions <i className="fas fa-arrow-right ml-2 text-gold-500"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
