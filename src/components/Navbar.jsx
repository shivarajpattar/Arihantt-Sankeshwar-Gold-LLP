"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Collections", path: "/collections" },
    { name: "Our Achievements", path: "/achievements" },
    { name: "Global Presence", path: "/#global-presence" },
    { name: "Business Enquiries", path: "/business-enquiries" },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-emerald-950/95 border-emerald-800 shadow-lg py-2"
            : "bg-white/95 backdrop-blur-md border-b border-gray-200 py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-24">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center group cursor-pointer">
              <div className="flex flex-col items-start">
                <h1 className="font-serif text-xl md:text-2xl text-gold-gradient font-bold tracking-wide italic">
                  Arihant Sankeshwar
                </h1>
                <span className="text-[0.6rem] md:text-[0.7rem] text-gold-500 uppercase tracking-[0.3em] font-medium">
                  GOLD LLP
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-6 xl:space-x-8 items-center">
              {navLinks.map((link) => {
                const linkPath = link.path.split("#")[0] || "/";
                const isActive = pathname === linkPath;
                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    className={`relative transition-colors uppercase text-xs tracking-[0.16em] font-medium after:content-[''] after:absolute after:-bottom-2 after:left-0 after:h-[1px] after:bg-gold-500 after:transition-all hover:after:w-full ${
                      scrolled
                        ? isActive
                          ? "text-gold-300 after:w-full"
                          : "text-white after:w-0 hover:text-gold-200"
                        : isActive
                          ? "text-gold-600 after:w-full"
                          : "text-gray-800 after:w-0 hover:text-gold-600"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Right Side CTA */}
            <div className="flex items-center space-x-4 md:space-x-6">
              <Link
                href="/business-enquiries"
                className={`hidden sm:inline-block px-5 py-2.5 border transition-all duration-300 uppercase text-[11px] tracking-[0.2em] font-bold ${
                  scrolled
                    ? "border-gold-400/80 text-gold-300 hover:bg-gold-500 hover:text-emerald-950"
                    : "border-gold-500 text-gold-700 hover:bg-gold-500 hover:text-white"
                }`}
              >
                Business Enquiry
              </Link>

              {/* Mobile menu button */}
              <div className="lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className={`focus:outline-none transition-transform active:scale-95 ${
                    scrolled ? "text-white hover:text-gold-400" : "text-gray-800 hover:text-gold-600"
                  }`}
                  aria-label="Toggle navigation menu"
                >
                  {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <div
          className={`lg:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[500px]" : "max-h-0 border-transparent"
          }`}
        >
          <div className="px-4 pt-4 pb-6 space-y-1 text-center">
            {navLinks.map((link) => {
              const linkPath = link.path.split("#")[0] || "/";
              const isActive = pathname === linkPath;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`block py-3 uppercase text-xs tracking-widest border-b border-gray-100 ${
                    isActive ? "text-gold-600 font-semibold" : "text-gray-700 hover:text-gold-600"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/business-enquiries"
              className="block py-3 text-gold-700 font-bold uppercase text-xs tracking-widest mt-4 border border-gold-400 bg-gold-50/50"
            >
              Business Enquiry
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
