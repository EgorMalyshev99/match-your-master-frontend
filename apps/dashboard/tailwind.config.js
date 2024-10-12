import autoprefixer from "autoprefixer";

const config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          400: "#15803d",
          500: "#166534",
        },
        secondary: {
          400: "#fef3c7",
          500: "#fde68a",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [autoprefixer()],
};

export default config;
