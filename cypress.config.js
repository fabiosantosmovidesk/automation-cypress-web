const { defineConfig } = require('cypress')

/**
 * @type {Cypress.PluginConfig}
 */
 const fs = require('fs-extra')
 const path = require('path')
 
function getConfigurationByFile(file) {
   const pathToConfigFile = path.resolve('.', 'cypress/config', `${file}.json`)
 
   return fs.readJson(pathToConfigFile)
}

module.exports = defineConfig({
  e2e: { 
    setupNodeEvents(on, config) {
        const file = config.env.configFile || 'uat'
      
        require('cypress-grep/src/plugin')(config)
        require('cypress-mochawesome-reporter/plugin')(on)
        return getConfigurationByFile(file)
    },

    "viewportWidth": 1366,
    "viewportHeight": 768,
    "defaultCommandTimeout": 30000,
    "chromeWebSecurity": false,
    "reporter": "cypress-multi-reporters",
    "reporterOptions": {
        "configFile": "reporter-config.json"
    }
  }
})