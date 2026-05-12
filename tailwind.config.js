/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#f6f8fb",
        ink: "#0f1720",
        mist: "#cfe0f7",
        pine: "#1b5a4b",
        pineDeep: "#0d2f27",
        slate: "#6f7a87",
        cloud: "#edf2f7",
        night: "#08100f",
        gold: "#d4b26a",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
        display: ["Cormorant Garamond", "serif"],
      },
      boxShadow: {
        glow: "0 25px 60px -20px rgba(12, 37, 31, 0.35)",
        glass: "0 20px 60px rgba(15, 23, 32, 0.12)",
      },
      backgroundImage: {
        mesh:
          "radial-gradient(circle at top left, rgba(159, 193, 255, 0.45), transparent 30%), radial-gradient(circle at top right, rgba(46, 125, 92, 0.24), transparent 26%), linear-gradient(135deg, rgba(255,255,255,0.92), rgba(232,238,244,0.72))",
        "mesh-dark":
          "radial-gradient(circle at top left, rgba(77, 132, 255, 0.18), transparent 26%), radial-gradient(circle at top right, rgba(65, 150, 117, 0.18), transparent 26%), linear-gradient(135deg, rgba(6,12,11,0.95), rgba(12,22,20,0.82))",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.6s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
