import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1480px",
      },
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF9900",
          50: "#FFEBD9",
          100: "#FFD9B3",
          200: "#FFC58C",
          300: "#FFB266",
          400: "#FF9F3F",
          500: "#FF9900",
          600: "#CC7A00",
          700: "#995B00",
          800: "#663C00",
          900: "#331E00",
          bg: "#EEF3F9",
          text: "#141B24",
        },
        secondary: {
          DEFAULT: "#FFB700",
          50: "#FFF8E0",
          100: "#FFF0BF",
          200: "#FFDE80",
          300: "#FFCC40",
          400: "#FFB700",
          500: "#FFA000",
          600: "#CC8000",
          700: "#996000",
          800: "#664000",
          900: "#332000",
        },
        tertiary: {
          DEFAULT: "#00A8E1",
          50: "#E0F5FF",
          100: "#BFEBFF",
          200: "#80D4FF",
          300: "#40BEFF",
          400: "#00A8E1",
          500: "#0099CC",
          600: "#007A99",
          700: "#005B66",
          800: "#003D33",
          900: "#001E19",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
