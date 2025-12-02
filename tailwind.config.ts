import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#020617",
        foreground: "#e5e7eb",
        accent: "#38bdf8"
      },
      boxShadow: {
        "accent-glow": "0 0 55px rgba(56, 189, 248, 0.8)",
        "red-glow": "0 0 20px rgba(239, 68, 68, 0.6)"
      },
      keyframes: {
        "slow-float": {
          "0%, 100%": { transform: "translateY(0px) scale(1)" },
          "50%": { transform: "translateY(-18px) scale(1.02)" }
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 0 rgba(56, 189, 248, 0.0)", opacity: "0.7" },
          "50%": { boxShadow: "0 0 90px rgba(56, 189, 248, 0.85)", opacity: "1" }
        },
        "grid-scan": {
          "0%": { transform: "translateX(-20%)" },
          "50%": { transform: "translateX(20%)" },
          "100%": { transform: "translateX(-20%)" }
        },
        "cell-fill": {
          "0%": { opacity: "0", transform: "scale(0.85)" },
          "50%": { opacity: "1", transform: "scale(1.08)" },
          "100%": { opacity: "1", transform: "scale(1)" }
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" }
        },
        "slide-left": {
          "0%": { opacity: "0", transform: "translateX(80px)" },
          "100%": { opacity: "1", transform: "translateX(0px)" }
        },
        "slide-right": {
          "0%": { opacity: "0", transform: "translateX(-80px)" },
          "100%": { opacity: "1", transform: "translateX(0px)" }
        },
        orbit: {
          "0%": { transform: "rotate(0deg) scale(1)" },
          "100%": { transform: "rotate(360deg) scale(1.03)" }
        },
        "bar-fill": {
          "0%": { width: "0%", opacity: "0.5" },
          "80%": { width: "105%", opacity: "1" },
          "100%": { width: "100%", opacity: "1" }
        },
        shimmer: {
          "0%": { transform: "translateX(-160%)" },
          "100%": { transform: "translateX(200%)" }
        },
        "pulse-scale": {
          "0%, 100%": { transform: "scale(0.94)", opacity: "0.7" },
          "50%": { transform: "scale(1.02)", opacity: "1" }
        },
        "line-grow": {
          "0%": { transform: "scaleY(0)", opacity: "0" },
          "40%": { transform: "scaleY(1.05)", opacity: "1" },
          "100%": { transform: "scaleY(1)", opacity: "1" }
        }
      },
      animation: {
        "slow-float": "slow-float 9s ease-in-out infinite",
        "pulse-glow": "pulse-glow 5s ease-in-out infinite",
        "grid-scan": "grid-scan 14s linear infinite",
        "cell-fill": "cell-fill 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-up": "fade-up 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-left": "slide-left 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-right": "slide-right 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        orbit: "orbit 18s linear infinite",
        "bar-fill": "bar-fill 1.1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        shimmer: "shimmer 0.9s linear infinite",
        "pulse-scale": "pulse-scale 2.1s ease-in-out infinite",
        "line-grow": "line-grow 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards"
      }
    }
  },
  plugins: []
};

export default config;


