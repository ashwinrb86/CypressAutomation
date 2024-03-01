const { defineConfig } = require("cypress");

// const { addCucumberPreprocessorPlugin, } = require("@badeball/cypress-cucumber-preprocessor");
// const { preprocessor, } = require("@badeball/cypress-cucumber-preprocessor/browserify");

const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  // await addCucumberPreprocessorPlugin(on, config); 
  // on("file:preprocessor", preprocessor(config));

  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  projectId: 'kfmbh8',

  
  env: {
  url:"https://rahulshettyacademy.com" 
  // url:"https://google.com" 

  },
  defaultCommandTimeout: 6000,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    setupNodeEvents,
    specPattern: 'cypress/integration/examples/BDD/*.feature'
  },
});
