module.exports = function (config) {
  
  config.set({
    frameworks: ['ui5'],
    
    ui5: {
      url: "https://sapui5.hana.ondemand.com"
    },
        
    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,
    
    customLaunchers: {
        'chromeSel': {
            base: 'WebDriver',
            config: { hostname: 'selenium', port: 4444 },
            browserName: 'chrome'
        }
    },
    
    hostname: 'karma',
    port: 9876,
    
    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['chromeSel'],
    
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
        
    /*,
    reporters: ['junit'],
    junitReporter: {
        outputFile: 'test-results-karma.xml',
        suite: ''
    }*/
    
  })
}
