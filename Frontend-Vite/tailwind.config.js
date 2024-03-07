/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-bg": "var(--color-bg)",
        "color-container": "var(--color-container)",
        "color-secondary": "var(--color-secondary)",
        "color-lavender": "var(--color-lavender)",
        "color-cyan": "var(--color-cyan)",
      },
    },
  },
  plugins: [],
};
