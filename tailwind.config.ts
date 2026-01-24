import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        slideUp: 'slideUp 0.6s ease-out',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'bright-yellow': '#ffff7e',
        'dark-gray': '#151515',
        'light-gray': '#000000',
        'light-yellow': '#fff9cb',
        'midnight-blue': '#111118',
        'sunset-orange': '#ffd687',
        'sunset-pink': '#d21a95',
        'sunset-purple': '#601969',

      },
      fontFamily: {
        inter: ["Inter", "sans-serif"], // className="font-inter"
      },
      keyframes: {
        slideUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)' 
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)' 
          },
        },
      },
      spacing: {
        '150': '37.5rem',
        '156': '39rem',
        '340': '85rem',
        '360': '90rem'
      }
    },
  },
  plugins: [],
};
export default config;
