/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-color-1": "var(--color-1)",
        "custom-color-2": "var(--color-2)",
        "custom-color-3": "var(--color-3)",
        "custom-color-4": "var(--color-4)",
        "custom-color-lavender": "var(--color-5)",
      },
    },
  },
  plugins: [],
};
