"use client";

import { useState } from "react";

export default function BusinessEnquiryForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    phoneNumber: "",
    emailAddress: "",
    enquiryType: "Collection Enquiry",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // "idle" | "submitting" | "success" | "error"
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      // Basic validation
      if (!formData.fullName || !formData.emailAddress || !formData.phoneNumber || !formData.message) {
        throw new Error("Please complete all required fields.");
      }

      // Simulate network submission with realistic delay
      await new Promise((resolve) => setTimeout(resolve, 800));

      setStatus("success");
      setFormData({
        fullName: "",
        companyName: "",
        phoneNumber: "",
        emailAddress: "",
        enquiryType: "Collection Enquiry",
        message: "",
      });
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err.message ||
          "We couldn't submit your enquiry. Please try again or contact our team directly."
      );
    }
  };

  return (
    <div className="bg-white border border-gray-200/80 shadow-xl p-8 sm:p-12 relative">
      <div className="mb-8">
        <h3 className="font-serif text-2xl sm:text-3xl text-emerald-950 mb-2">
          How Can We Help You?
        </h3>
        <p className="text-gray-600 text-sm font-light">
          Share a few details about your enquiry, and our team can follow up with you.
        </p>
      </div>

      {status === "success" ? (
        <div className="p-8 bg-emerald-50 border border-emerald-800/30 text-center rounded-none my-6">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-950 text-gold-400 flex items-center justify-center text-2xl">
            <i className="fas fa-check" />
          </div>
          <h4 className="font-serif text-2xl text-emerald-950 mb-2">
            Thank you for contacting Arihant Sankeshwar Gold LLP.
          </h4>
          <p className="text-gray-700 text-sm font-light mb-6">
            Your enquiry has been received. Our team will review your details and reach out shortly.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="inline-block bg-emerald-950 text-gold-300 px-6 py-2.5 uppercase text-xs tracking-[0.2em] font-bold hover:bg-emerald-900 transition-colors"
          >
            Submit Another Enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {status === "error" && (
            <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-800 text-sm">
              <p className="font-medium">
                {errorMessage ||
                  "We couldn't submit your enquiry. Please try again or contact our team directly."}
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-[0.15em] text-gray-700 font-bold mb-2">
                Full Name <span className="text-gold-600">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full bg-[#FAF8F5] border border-gray-200 p-3.5 text-sm text-gray-800 focus:outline-none focus:border-gold-500 focus:bg-white transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-[0.15em] text-gray-700 font-bold mb-2">
                Company / Business Name
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Enter company or firm name"
                className="w-full bg-[#FAF8F5] border border-gray-200 p-3.5 text-sm text-gray-800 focus:outline-none focus:border-gold-500 focus:bg-white transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-[0.15em] text-gray-700 font-bold mb-2">
                Phone Number <span className="text-gold-600">*</span>
              </label>
              <input
                type="tel"
                name="phoneNumber"
                required
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="e.g. 080-4208 6068 / Mobile"
                className="w-full bg-[#FAF8F5] border border-gray-200 p-3.5 text-sm text-gray-800 focus:outline-none focus:border-gold-500 focus:bg-white transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-[0.15em] text-gray-700 font-bold mb-2">
                Email Address <span className="text-gold-600">*</span>
              </label>
              <input
                type="email"
                name="emailAddress"
                required
                value={formData.emailAddress}
                onChange={handleChange}
                placeholder="name@company.com"
                className="w-full bg-[#FAF8F5] border border-gray-200 p-3.5 text-sm text-gray-800 focus:outline-none focus:border-gold-500 focus:bg-white transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-[0.15em] text-gray-700 font-bold mb-2">
              Enquiry Type <span className="text-gold-600">*</span>
            </label>
            <select
              name="enquiryType"
              value={formData.enquiryType}
              onChange={handleChange}
              className="w-full bg-[#FAF8F5] border border-gray-200 p-3.5 text-sm text-gray-800 focus:outline-none focus:border-gold-500 focus:bg-white transition-colors"
            >
              <option value="Collection Enquiry">Collection Enquiry</option>
              <option value="Business Partnership">Business Partnership</option>
              <option value="Retail / Trade Enquiry">Retail / Trade Enquiry</option>
              <option value="General Enquiry">General Enquiry</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-[0.15em] text-gray-700 font-bold mb-2">
              Message <span className="text-gold-600">*</span>
            </label>
            <textarea
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your requirements or enquiry..."
              className="w-full bg-[#FAF8F5] border border-gray-200 p-3.5 text-sm text-gray-800 focus:outline-none focus:border-gold-500 focus:bg-white transition-colors"
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full sm:w-auto bg-emerald-950 hover:bg-emerald-900 text-gold-300 hover:text-white px-10 py-4 uppercase text-xs tracking-[0.2em] font-bold transition-colors disabled:opacity-50"
            >
              {status === "submitting" ? "Submitting..." : "Submit Enquiry"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
