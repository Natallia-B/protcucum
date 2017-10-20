
exports.config = {
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'), 
    
      cucumberOpts: {
        // format:  'pretty',
        require: 'browser_steps.js'
      },
  
    
  
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['*.feature'],
    multiCapabilities: [/*{
      browserName: 'firefox'
    }, */{
      browserName: 'chrome',
      // allScriptsTimeout: 120000
    }]
  }
  
