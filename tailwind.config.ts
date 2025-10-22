/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      fontFamily: { // <-- AÑADE ESTE BLOQUE
        sans: ['var(--font-sans)'],
        display: ['var(--font-display)'],
      },

      colors: {
        
        'test-color': '#00FF00',
        // AQUÍ ESTÁ LA MAGIA: DEFINIMOS LOS COLORES DIRECTAMENTE
        border: "hsl(214.3 31.8% 91.4%)",
        input: "hsl(214.3 31.8% 91.4%)",
        ring: "hsl(346.8 77.2% 49.8%)",
        background: "hsl(214.3 31.8% 91.4%)",
        foreground: "hsl(222.2 84% 4.9%)",
        primary: {
          DEFAULT: "hsl(346.8 77.2% 49.8%)",
          foreground: "hsl(355.7 100% 97.3%)",
        },
        secondary: {
          DEFAULT: "hsl(170 70% 55%)",
          foreground: "hsl(0 0% 98%)",
        },
        destructive: {
          DEFAULT: "hsl(0 84.2% 60.2%)",
          foreground: "hsl(0 0% 98%)",
        },
        muted: {
          DEFAULT: "hsl(187 97% 40%)",
          foreground: "hsl(215.4 16.3% 46.9%)",
        },
        accent: {
          DEFAULT: "hsl(210 40% 96.1%)",
          foreground: "hsl(222.2 47.4% 11.2%)",
        },
        popover: {
          DEFAULT: "hsl(0 0% 100%)",
          foreground: "hsl(222.2 84% 4.9%)",
        },
        card: {
          DEFAULT: "hsl(0 0% 100%)",
          foreground: "hsl(222.2 84% 4.9%)",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
      // ... (el resto del archivo, como keyframes y animation, puede quedar igual si lo tenías)
    },
  },
  plugins: [require("tailwindcss-animate")],
}