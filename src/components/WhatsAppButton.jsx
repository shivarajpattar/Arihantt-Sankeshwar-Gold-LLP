"use client";

export default function WhatsAppButton() {
  const phoneNumber = "919902300236";
  const defaultMessage = encodeURIComponent(
    "Hello Arihant Sankeshwar Gold LLP, I would like to enquire about your jewellery collections."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <aside aria-label="WhatsApp Contact" className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip badge */}
      <span className="hidden sm:inline-block mr-3 px-3.5 py-1.5 bg-emerald-950/90 text-gold-300 text-xs font-medium tracking-wide rounded-full shadow-lg border border-gold-500/40 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 pointer-events-none whitespace-nowrap">
        Chat with us on WhatsApp
      </span>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp (+91 9902300236)"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_30px_rgba(37,211,102,0.6)] transform hover:scale-110 active:scale-95 transition-all duration-300"
      >
        {/* Soft pulse effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <i className="fab fa-whatsapp text-3xl relative z-10" />
      </a>
    </aside>
  );
}
