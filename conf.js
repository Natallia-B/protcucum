
exports.config = {
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'), 
    
      cucumberOpts: {
        // format:  'pretty',
        require: 'browser_steps.js'
      },
  
    
  
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['*.feature'],
    multiCapabilities: [{
      browserName: 'chrome', 
      // chromeOptions: {
      //   args: '--window-size=800,600'
      
  //  },
      // browserName: 'firefox',
      // browsername: 'safari'

      // allScriptsTimeout: 6000
    }]
  }
  
