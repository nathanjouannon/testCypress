const { defineConfig } = require("cypress");
const { downloadFile } = require("cypress-downloadfile/lib/addPlugin");

module.exports = defineConfig({
  env: {
    MAILSLURP_API_KEY:
      "1cfd678b7d5ecb9ec3de37f32f7c4c4c727c6a59974b4db5b46ce1304a342cfd",
  },
  e2e: {
    setupNodeEvents(on, config) {
      on("task", { downloadFile });
    },
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/results",
    overwrite: false,
    html: false,
    json: true,
  },
});
