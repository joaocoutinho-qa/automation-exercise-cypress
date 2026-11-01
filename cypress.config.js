const { defineConfig } = require('cypress');
require('dotenv').config();

const baseUrl = process.env.AUTOMATION_EXERCISE_URL;

module.exports = defineConfig({
  allowCypressEnv: false,
  e2e: {
    ...(baseUrl ? { baseUrl } : {}),
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
  },
  env: {
    testUserEmail: process.env.TEST_USER_EMAIL || '',
    testUserPassword: process.env.TEST_USER_PASSWORD || '',
  },
});