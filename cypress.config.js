const { defineConfig } = require('cypress');
const {
  initPlugin,
} = require('@frsource/cypress-plugin-visual-regression-diff/dist/plugins');

module.exports = defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    setupNodeEvents(on, config) {
      initPlugin(on, config);
    },
  },
  viewportWidth: 1536,
  viewportHeight: 960,
});
