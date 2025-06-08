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
        primary: "#0A0F1C",
        secondary: "#1A1F2E",
        accent: {
          purple: "#8B5CF6",
          blue: "#3B82F6",
          pink: "#EC4899",
          teal: "#14B8A6",
        },
        text: {
          primary: "#F3F4F6",
          secondary: "#9CA3AF",
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #0A0F1C 0%, #1A1F2E 100%)',
        'gradient-accent': 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)',
        'gradient-glow': 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(139, 92, 246, 0.2)',
        'glow-strong': '0 0 30px rgba(139, 92, 246, 0.3)',
      },
      fontFamily: {
        spaceGrotesk: ['var(--font-space-grotesk)', 'sans-serif'],
        openSans: ['var(--font-open-sans)', 'sans-serif'],
        textMeOne: ['var(--font-text-me-one)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;