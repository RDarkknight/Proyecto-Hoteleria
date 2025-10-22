/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // Usamos el paquete correcto aquí
    autoprefixer: {},
  },
};

export default config;