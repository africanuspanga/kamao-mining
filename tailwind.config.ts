import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "kamao-earth": "#0b1822",
        "kamao-cobalt": "#215ea6",
        "kamao-copper": "#c6743c",
        "kamao-sand": "#e8ded0",
        "kamao-mist": "#f4f6f5",
        "kamao-graphite": "#27313a",
        "kamao-white": "#ffffff",
      },
      fontFamily: {
        heading: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        "hero-lg": ["5.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "hero": ["4.5rem", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "page": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "section": ["2.75rem", { lineHeight: "1.12", letterSpacing: "-0.01em" }],
        "card": ["1.5rem", { lineHeight: "1.3" }],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.7s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
