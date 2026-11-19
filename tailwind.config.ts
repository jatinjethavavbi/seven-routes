import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          orange: '#EE5F25',       // Seven Routes vibrant sunrise orange from logo
          orangeHover: '#D94E18',
          blue: '#2E3F62',         // Seven Routes corporate deep maritime navy blue from logo
          blueDark: '#1E2A44',
          title: '#0F172A',        // High-contrast clean dark slate
          body: '#475569',         // Muted clean slate body text
          smoke: '#F8FAFC',        // Soft section background
          warm: '#FFF9F3',         // Subtle container background
          border: '#E2E8F0',
          darkBg: '#1E2A44',       // Seven Routes corporate navy footer background
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        heading: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
