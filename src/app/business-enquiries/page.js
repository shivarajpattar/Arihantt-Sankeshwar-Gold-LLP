import Link from "next/link";
import BusinessEnquiryForm from "@/components/BusinessEnquiryForm";

export const metadata = {
  title: "Business Enquiries | Arihant Sankeshwar Gold LLP",
  description:
    "Contact Arihant Sankeshwar Gold LLP for jewellery collection enquiries, retail and trade discussions, and business partnerships.",
};

export default function BusinessEnquiries() {
  return (
    <div className="pt-24 bg-cream min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="py-20 md:py-28 bg-emerald-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-15" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-block border-b border-gold-400/50 pb-2 mb-6">
            <span className="text-gold-300 tracking-[0.35em] uppercase text-xs font-semibold">
              B2B & PARTNERSHIPS
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
            Let&apos;s Build <br />
            <span className="text-gold-gradient italic font-normal">
              Stronger Business Relationships.
            </span>
          </h1>
          <p className="text-gray-200 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
            Connect with Arihant Sankeshwar Gold LLP to discuss our jewellery offering and potential business opportunities.
          </p>
        </div>
      </section>

      {/* 2. INTRODUCTION & FORM */}
      <section className="py-24 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <span className="text-gold-600 uppercase tracking-[0.25em] text-xs font-bold mb-3 block">
              Collaborative Growth
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-emerald-950 mb-6 leading-tight">
              Every Strong Partnership <br />
              <span className="text-gold-600 italic font-normal">
                Begins with a Conversation.
              </span>
            </h2>
            <p className="text-gray-700 text-base sm:text-lg font-light leading-relaxed">
              We value opportunities to connect with jewellery retailers, trade buyers and industry partners. Whether you are exploring our collections or looking to discuss a potential collaboration, our team welcomes your enquiry.
            </p>
          </div>

          <div className="reveal">
            <BusinessEnquiryForm />
          </div>
        </div>
      </section>

      {/* 3. PARTNERSHIP CLOSING */}
      <section className="py-24 bg-emerald-950 text-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <span className="text-gold-400 uppercase tracking-[0.25em] text-xs font-semibold mb-3 block">
            Mutual Respect & Vision
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-6 leading-tight">
            Growing Through Trust. <br />
            <span className="text-gold-gradient italic font-normal">
              Moving Forward Together.
            </span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-10">
            We look forward to connecting with businesses that value professional relationships and long-term collaboration.
          </p>
          <div className="flex justify-center">
            <Link
              href="/collections"
              className="bg-gold-500 text-emerald-950 px-10 py-4 uppercase text-xs tracking-[0.2em] font-bold hover:bg-gold-400 transition-colors shadow-lg"
            >
              Explore Collections
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
