const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      container: {
        center: true,
        padding: '2rem',
        screens: {
          'sm': '100%',
          'md': '100%',
          'lg': '100%',
          'xl': '100%',
          '2xl': '100%',
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
