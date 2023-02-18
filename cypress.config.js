const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video: false,
  retries: 1,
  reporterOptions: {
    charts: true,
    reportPageTitle: 'report-custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    debug: false,
  },
  e2e: {

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

      switch(config.env.base_url) {
        case 'qa':
          return {baseUrl: "https://opensource-demo.orangehrmlive.com/"}
        case 'dev':
          return {baseUrl: "https://bing.com"}
        default:
          return {baseUrl: "https://the-internet.herokuapp.com"}
      };
    },

  },
});
