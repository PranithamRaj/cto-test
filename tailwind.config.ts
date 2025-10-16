import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#f2f9f5",
          100: "#e0f2ea",
          200: "#bce0d1",
          300: "#94cbb4",
          400: "#5fa484",
          500: "#207052",
          600: "#1c6449",
          700: "#17503b",
          800: "#10392a",
          900: "#0b281d"
        },
        cta: {
          DEFAULT: "#f97316",
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12"
        },
        sand: {
          50: "#fef8ee",
          100: "#fbe8cf",
          200: "#f6d0a1",
          300: "#f3b871",
          400: "#f2a24c",
          500: "#e8882c"
        },
        ink: {
          50: "#f2f4f3",
          100: "#e2e6e3",
          200: "#c9d0cc",
          300: "#a2aea8",
          400: "#74847b",
          500: "#4f5f57",
          600: "#38463f",
          700: "#28332d",
          800: "#1a211e",
          900: "#0f1513"
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
        display: ["var(--font-display)", ...defaultTheme.fontFamily.sans]
      },
      spacing: {
        "3.5": "0.875rem",
        "4.5": "1.125rem",
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem"
      },
      maxWidth: {
        prose: "68ch",
        container: "1200px"
      },
      boxShadow: {
        lift: "0 20px 45px -25px rgba(32, 112, 82, 0.45)"
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem"
      }
    }
  },
  plugins: []
};

export default config;
