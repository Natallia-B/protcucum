let webdriver = require('selenium-webdriver');
let {defineSupportCode} = require('cucumber');

let loginButton = element(by.xpath('.//*[@id="signin-form_id"]/button'));

defineSupportCode(function({setDefaultTimeout, Given, When, Then}) {
  setDefaultTimeout(60000);
  Given('I am on the signing in page', function() {
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
  //  .then(function () {
  //     return expect(browser.getTitle()).toEqual('Dashboard | TruVoice');
  //   })
  });

});
