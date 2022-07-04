const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080, 
  viewportWidth: 1920,
  e2e: {
    baseUrl: 'https://money.gocompare.com/vehiclefinance#/car-details',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    excludeSpecPattern: ['**/1-getting-started/*','**/2-advanced-examples/*']
  }
});
