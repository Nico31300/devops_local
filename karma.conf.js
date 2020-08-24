module.exports = function (config) {
  
  var webdriverConfig = {
    hostname: 'selenium',
    port: 4444
  }
  
  config.set({
    frameworks: ['ui5'],
    //plugins: ['karma-qunit','karma-junit-reporter','karma-chrome-launcher', 'karma-webdriver-launcher','karma-ui5'],
    
    ui5: {
      url: "https://openui5.hana.ondemand.com"
    },
    /*
    files: [
      'webapp/test/unit/AllTests.js'
    ],*/
    
    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,
    
    customLaunchers: {
        'chromeSel': {
            base: 'WebDriver',
            config: webdriverConfig,
            browserName: 'chrome'
        }
    },
    
    hostname: 'karma',
    port: 9876,
    

    //reporters: ['junit'],
    
    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['chromeSel'],
    
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
    /*,
    junitReporter: {
        outputFile: 'test-results-karma.xml',
        suite: ''
    }*/
    
  })
}
