const { defineConfig } = require("cypress");
module.exports = defineConfig({
  projectId: "94u47f",  // npx cypress run --record --key 93a078f4-acd0-4c83-ad2e-82f4ffddecde
  requestTimeout: 2000,
  defaultCommandTimeout: 5000,
//   retries: 2,
  viewportWidth: 1440,
  viewportHeight: 900,
  video:false,

  e2e: {
    baseUrl : "https://fakerestapi.azurewebsites.net/api/v1/",

    setupNodeEvents() {
      // implement node event listeners here
      watchForFileChanges = true,
      defaultCommandTimeout = 3000,
      pluginsFile = false,
      chromeWebSecurity = false
    },
  },
});

