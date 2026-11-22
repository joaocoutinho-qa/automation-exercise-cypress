const { defineConfig } = require('cypress');
const { allureCypress } = require('allure-cypress/reporter');
require('dotenv').config();

const baseUrl = process.env.AUTOMATION_EXERCISE_URL || 'https://automationexercise.com';

module.exports = defineConfig({
  allowCypressEnv: false,
  e2e: {
    baseUrl,
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: 'allure-results',
      });
      return config;
    },
  },
});