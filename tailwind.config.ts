import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0A3D91",
          "blue-dark": "#072a66",
          "blue-light": "#1557bf",
          "blue-50": "#f0f5ff",
          orange: "#FF6B00",
          "orange-hover": "#e05e00",
          "orange-50": "#fff7ed",
          "orange-100": "#ffedd5",
        },
      },
      fontFamily: {
        sans: ["var(--font-be-vietnam-pro)", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -5px rgba(10, 61, 145, 0.08)",
        "card-hover": "0 20px 35px -5px rgba(10, 61, 145, 0.16)",
        cta: "0 8px 24px -4px rgba(255, 107, 0, 0.4)",
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "20%, 60%": { transform: "rotate(-12deg)" },
          "40%, 80%": { transform: "rotate(12deg)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        shake: "shake 1.5s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        marquee: "marquee 35s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
