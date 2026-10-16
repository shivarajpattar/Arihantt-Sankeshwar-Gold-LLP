import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Arihant Sankeshwar Gold LLP",
  description:
    "Privacy Policy for Arihant Sankeshwar Gold LLP. Learn how we handle your personal information responsibly.",
};

export default function PrivacyPolicy() {
  return (
    <div className="pt-24 bg-cream min-h-screen">
      {/* Hero Header */}
      <section className="py-20 bg-emerald-950 text-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold-300 uppercase tracking-[0.3em] text-xs font-semibold mb-3 block">
            LEGAL & COMPLIANCE
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-300 text-sm font-light">
            Arihant Sankeshwar Gold LLP
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200 p-8 sm:p-14 shadow-sm space-y-8 text-gray-700 leading-relaxed font-light text-base">
            <div>
              <h2 className="font-serif text-2xl text-emerald-950 mb-4 font-bold">
                Our Commitment to Your Privacy
              </h2>
              <p>
                Arihant Sankeshwar Gold LLP respects your privacy and aims to handle personal information responsibly.
              </p>
            </div>

            <div className="border-t border-gray-100 pt-6">
              <h3 className="font-serif text-xl text-emerald-950 mb-3 font-semibold">
                Information We Collect
              </h3>
              <p>
                When you contact us through our website, we may collect information such as your name, company name, telephone number, email address and enquiry details.
              </p>
            </div>

            <div className="border-t border-gray-100 pt-6">
              <h3 className="font-serif text-xl text-emerald-950 mb-3 font-semibold">
                How We Use Your Information
              </h3>
              <p>
                We use this information to respond to enquiries, communicate with you regarding your request and manage relevant business interactions.
              </p>
            </div>

            <div className="border-t border-gray-100 pt-6">
              <h3 className="font-serif text-xl text-emerald-950 mb-3 font-semibold">
                Information Protection & Access
              </h3>
              <p>
                We do not ask visitors to submit unnecessary personal information through our contact forms. Access to submitted information should be limited to authorised personnel and service providers who need it to support the website or respond to enquiries.
              </p>
            </div>

            <div className="border-t border-gray-100 pt-6">
              <h3 className="font-serif text-xl text-emerald-950 mb-3 font-semibold">
                Third-Party Processing
              </h3>
              <p>
                Information may be processed by third-party services used to operate the website, where applicable. Such processing should be managed in accordance with the relevant service terms and applicable law.
              </p>
            </div>

            <div className="border-t border-gray-100 pt-6 bg-[#F9F7F2] p-6 -mx-2">
              <h3 className="font-serif text-xl text-emerald-950 mb-3 font-semibold">
                Contacting Us Regarding Privacy
              </h3>
              <p className="mb-4">
                If you have a question about the personal information you have submitted, please contact us at:
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <strong className="text-emerald-950 font-semibold">Email:</strong>{" "}
                  <a
                    href="mailto:arihanttsankeshwargoldllp@gmail.com"
                    className="text-gold-700 hover:text-gold-900 underline"
                  >
                    arihanttsankeshwargoldllp@gmail.com
                  </a>
                </li>
                <li>
                  <strong className="text-emerald-950 font-semibold">Company:</strong> Arihant Sankeshwar Gold LLP
                </li>
                <li>
                  <strong className="text-emerald-950 font-semibold">Address:</strong> #109, 1st Floor, Shop No. 101, PANCHHRATNAA, Nagarathpet, Bengaluru – 560 002, Karnataka, India.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center text-xs uppercase tracking-[0.2em] font-bold text-emerald-950 hover:text-gold-600 transition-colors"
            >
              <i className="fas fa-arrow-left mr-2" /> Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
