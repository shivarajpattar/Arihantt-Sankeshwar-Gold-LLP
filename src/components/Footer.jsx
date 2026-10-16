import Link from "next/link";

export default function Footer() {
  const year = 2026;

  return (
    <footer id="contact" className="bg-emerald-950 text-white pt-24 pb-12 border-t border-gold-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl md:text-3xl text-gold-gradient mb-2 italic">
              Arihant Sankeshwar
            </h3>
            <p className="text-[0.7rem] text-gold-500 uppercase tracking-[0.25em] mb-4">
              GOLD LLP
            </p>
            <p className="text-gold-200 text-sm font-medium mb-3 italic">
              Gold that carries a story.
            </p>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed font-light">
              Discover timeless design, celebrate tradition and build meaningful business relationships.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="w-9 h-9 rounded-full border border-gold-500/40 flex items-center justify-center text-gray-300 hover:text-gold-400 hover:border-gold-400 transition-colors">
                <i className="fab fa-facebook-f text-sm"></i>
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-gold-500/40 flex items-center justify-center text-gray-300 hover:text-gold-400 hover:border-gold-400 transition-colors">
                <i className="fab fa-instagram text-sm"></i>
              </a>
              <a href="https://wa.me/919902300236" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-gold-500/40 flex items-center justify-center text-gray-300 hover:text-gold-400 hover:border-gold-400 transition-colors" title="WhatsApp: +91 9902300236">
                <i className="fab fa-whatsapp text-sm"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-gold-200 border-b border-gold-500/20 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-3.5 text-sm text-gray-300 font-light">
              <li>
                <Link href="/" className="hover:text-gold-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/collections" className="hover:text-gold-400 transition-colors">Collections</Link>
              </li>
              <li>
                <Link href="/achievements" className="hover:text-gold-400 transition-colors">Our Achievements</Link>
              </li>
              <li>
                <Link href="/#global-presence" className="hover:text-gold-400 transition-colors">Global Presence</Link>
              </li>
              <li>
                <Link href="/business-enquiries" className="hover:text-gold-400 transition-colors">Business Enquiries</Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-gold-400 transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-gold-200 border-b border-gold-500/20 pb-2">
              Contact
            </h4>
            <ul className="space-y-5 text-sm text-gray-300 font-light">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1.5 mr-3 text-gold-400 flex-shrink-0"></i>
                <span className="leading-relaxed">
                  #109, 1st Floor, Shop No. 101,<br />
                  PANCHHRATNAA, Nagarathpet,<br />
                  Bengaluru – 560 002, Karnataka, India.
                </span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-gold-400 flex-shrink-0"></i>
                <a href="mailto:arihanttsankeshwargoldllp@gmail.com" className="hover:text-gold-400 transition-colors break-all">
                  arihanttsankeshwargoldllp@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt mt-1 mr-3 text-gold-400 flex-shrink-0"></i>
                <div className="space-y-1">
                  <a href="tel:08042086068" className="hover:text-gold-400 block transition-colors">080-4208 6068</a>
                  <a href="tel:08041695664" className="hover:text-gold-400 block transition-colors">080-4169 5664</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Connect / Enquiry CTA card */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-gold-200 border-b border-gold-500/20 pb-2">
              Let&apos;s Connect
            </h4>
            <div className="bg-emerald-900/60 border border-gold-500/30 p-6 rounded-lg text-center">
              <p className="text-xs text-gray-300 mb-4 leading-relaxed">
                Looking to explore our collections or discuss a business partnership?
              </p>
              <Link
                href="/business-enquiries"
                className="block w-full bg-gold-500 text-emerald-950 font-bold py-3 uppercase text-[11px] tracking-[0.2em] hover:bg-gold-400 transition-colors mb-3 text-center"
              >
                Business Enquiry
              </Link>
              <Link
                href="/collections"
                className="block w-full border border-gold-400/50 text-gold-300 font-medium py-2.5 uppercase text-[10px] tracking-[0.2em] hover:bg-white/5 transition-colors text-center"
              >
                Explore Collections
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 tracking-wider font-light">
          <p className="mb-4 md:mb-0 text-center md:text-left">
            &copy; {year} Arihant Sankeshwar Gold LLP. All rights reserved.
          </p>
          <div className="space-x-6 text-center">
            <Link href="/privacy-policy" className="hover:text-gold-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/business-enquiries" className="hover:text-gold-400 transition-colors">
              Business Enquiries
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
