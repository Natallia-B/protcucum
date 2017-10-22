let webdriver = require('selenium-webdriver');
let {defineSupportCode} = require('cucumber');
let chai = require('chai');
chai.use(require('chai-smoothie'));

// let chaiAsPromised = require("chai-as-promised");
// chai.use(chaiAsPromised);
let expect = chai.expect;

let loginButton = element(by.xpath('.//*[@id="signin-form_id"]/button'));

defineSupportCode(function({setDefaultTimeout, Given, When, Then}) {
  setDefaultTimeout(60000);

  browser.driver.manage().window().setSize(1100, 800);
  Given('I am on the Sample page', function() {
    function browserClearing() {
      return Promise.resolve()
        .then(() => browser.executeScript('window.sessionStorage.clear();'))
        .then(() => browser.executeScript('window.localStorage.clear();'))
        .then(() => browser.manage().deleteAllCookies());
    }
    return Promise.resolve()
    .then(function () {
      return browser.get('http://next.primary-intel.com/');
    })
    .then(function () {
      return element(by.id('username_id')).sendKeys('rallen@primary-intel.com');
    })
    .then(function () {
      return element(by.id('password_id')).sendKeys('mega plex 17');
    }) 
    .then(function () {
      return loginButton.click();
    }) 
   .then(function () {
      return browser.wait(protractor.ExpectedConditions.titleIs('Dashboard | TruVoice'), 5000);
    })
  //  .then(function () {
  //     return expect(browser.getTitle()).to.eventually.eq('Dashboard | TruVoice');
 
  //   })
  .then(()=>{
    return element(by.id('menu-trigger')).click();
  })
  .then(function () {
    return element(by.xpath('.//*[@id="sidebar"]/div[1]/ul/li[2]/a')).click();
  }) 
  .then(function () {
    return element(by.xpath('.//*[@id="sidebar"]/div[1]/ul/li[2]/ul/li[1]/a')).click();
  }) 
  .then(()=>{
    return browser.wait(()=>{
        return browser.getTitle()
        .then((title)=>{
          return title === 'Sample | TruVoice';
        })
    },10000)
  })
  .then(function () {
    return browser.wait(protractor.ExpectedConditions.titleIs('Sample | TruVoice'), 5000);
  
  })

   })
  });


