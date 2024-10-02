const { defineConfig } = require('cypress');

module.exports = defineConfig({
  retries: {
    runMode: 2, // Retries in CI
    openMode: 0, // No retries locally
  },
  e2e: {
    baseUrl: 'https://docs.cypress.io/',
  },
});
