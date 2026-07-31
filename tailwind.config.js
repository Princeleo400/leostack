/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // We do NOT use Tailwind's dark mode — CSS custom properties
  // on [data-theme] handle all theming via GlobalStyles.js
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      colors: {
        // Map Tailwind colour names to our CSS custom properties
        // so you can use e.g. text-blue alongside styled-components
        "leo-blue": "var(--blue)",
        "leo-bg": "var(--bg-primary)",
        "leo-card": "var(--bg-card)",
        "leo-text": "var(--text-primary)",
        "leo-muted": "var(--text-secondary)",
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "14px",
        xl: "20px",
        full: "999px",
      },
      transitionDuration: {
        fast: "150ms",
        base: "250ms",
        slow: "400ms",
      },
      maxWidth: {
        container: "1080px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
        "scale-in": "scaleIn 0.3s ease forwards",
        "pulse-dot": "pulse 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
