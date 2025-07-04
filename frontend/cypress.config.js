const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://auth2-0.vercel.app", // 👈 tu URL en Vercel
    setupNodeEvents(on, config) {
      // puedes dejar esto vacío o añadir listeners si los necesitas
    },
  },
});
