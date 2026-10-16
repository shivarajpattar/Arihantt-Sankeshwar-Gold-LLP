/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F9F8F3",
        gold: {
          50: "#FDFAF0",
          100: "#FBF5E6",
          200: "#EAD18F",
          300: "#D4AF37",
          400: "#C5A028",
          500: "#B8860B",
          600: "#A07D3A",
          700: "#866429",
        },
        emerald: {
          800: "#1A4D45",
          900: "#064E3B",
          950: "#022C22",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
      },
      backgroundImage: {
        "hero-pattern": "url('https://images.unsplash.com/photo-1626784215021-2e39ccf971cd?q=80&w=2000')",
        "gold-gradient": "linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)",
      },
      animation: {
        "fade-in-up": "fade-in-up 1s ease-out forwards",
        "fade-in-delayed": "fade-in-up 1s ease-out 0.3s forwards",
        "float": "float 20s infinite alternate",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.1)" },
        }
      },
    },
  },
  plugins: [],
};
