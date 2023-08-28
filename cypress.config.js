const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const dotenv = require('dotenv');

module.exports = defineConfig({

  e2e: {
    async setupNodeEvents(on, config) {
      const envFile = `.env.${config.env.NODE_ENV || 'local'}`;
      dotenv.config({ path: envFile });

      config.env = {
        ...config.env,
        ...process.env
      };
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);
      console.log(`Running in environment: ${config.env.NODE_ENV}`);
      console.log(`Running with tags: ${config.env.tags}`);
      return config;
    },
    specPattern: "cypress/e2e/features/**/*.feature",
  },
  env: {
    NODE_ENV: process.env.NODE_ENV,
    URL_HOST: process.env.API_URL,
  },
  screenshotOnRunFailure: true,
  videosFolder: "cypress/videos",
  viewportHeight: 960,
  viewportWidth: 1536,
  video: true,
  videoUploadOnPasses: true,
  retries: {
    runMode: 0,
    openMode: 0,
  },
  // numTestsKeptInMemory: 0, //comentar esta linea para debug
  defaultCommandTimeout: 10000,
  defaultpageLoadTimeout: 100000,
  experimentalMemoryManagement: true, //comentar esta linea para debug
  downloadsFolder: "cypress/downloads",
  trashAssetsBeforeRuns: true,
  experimentalModifyObstructiveThirdPartyCode: true,
  chromeWebSecurity: false,
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    video: true,
    inlineAssets: true,
    reporterEnabled: "cypress-mochawesome-reporter",
    cypressMochawesomeReporterReporterOptions: {
      charts: true,
      inlineAssets: true,
      reportPageTitle: "Report"
    }
  },
  videoUploadOnPasses: false
});