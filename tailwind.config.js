/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        primaryForeground: "var(--primary-foreground)",
        primaryHover: "var(--primary-hover)",
        secondary: "var(--secondary)",
        secondaryForeground: "var(--secondary-foreground)",
        secondaryHover: "var(--secondary-hover)",
        accent: "var(--accent)",
        accentForeground: "var(--accent-foreground)",
        accentHover: "var(--accent-hover)",
        mutedForeground: "var(--muted-foreground)",
      },
    },
  },
  plugins: [],
};
