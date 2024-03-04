import type { Config } from "tailwindcss";

/**
 * @description
 * color : 아래로 내려갈수록 진한색
 * screens: 대강잡음 아직 안정함
 */

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "800px",
      lg: "1200px",
    },
    extend: {
      colors: {
        neutral: {
          10: "#ffffff",
          80: "#E8E8E8",
          90: "#A8A8A8",
          500: "#FF5F05",
          600: "#333333",
          890: "#141414",
          900: "#000",
        },
      },
    },
  },
  plugins: [],
};
export default config;
