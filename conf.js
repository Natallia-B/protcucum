
exports.config = {

  

  // seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['features/first.feature'],
  Capabilities: {
    browserName: 'chrome', 

    // browserName: 'firefox',
    // browsername: 'safari'
  },
  allScriptsTimeout: 120000,

  onPrepare: function(){
    console.log('!!!!!!!!!!!!!!!!!!');
    // browser.ignoreSynchronization = false;
    // browser.driver.manage().window().maximize();
    browser.driver.manage().window().setSize(1100, 800);
    let chai = require('chai');
    chai.use(require('chai-smoothie'));
    
    chaiAsPromised = require('chai-as-promised');
    chai.use(chaiAsPromised);
    expect = chai.expect;
    function browserClearing() {
      return Promise.resolve()
        .then(() => browser.executeScript('window.sessionStorage.clear();'))
        .then(() => browser.executeScript('window.localStorage.clear();'))
        .then(() => browser.manage().deleteAllCookies());
    }
    },
    // framework: 'custom',
    // frameworkPath: require.resolve('protractor-cucumber-framework'), 
    // cucumberOpts: {
    //   // format:  'pretty',
    //   require: [
    //     'support/support/world.js',
    //     'step_definitions/*.js'
    //   ]
    // },
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts : {
        require : [
          'support/support/world.js',
          'step_definitions/*.js'
        ],
        // format : 'rerun:test/e2e/reports/@rerun.txt'
        // formats : ['pretty','rerun:@rerun.txt']
    },
};