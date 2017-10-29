require('chromedriver')
let webdriver = require('selenium-webdriver');
let {defineSupportCode} = require('cucumber');


function CustomWorld() {
  this.driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
    global.By = webdriver.By;
    global.until = webdriver.until;
    this.driver.manage().window().maximize();
    // this.driver.manage().window().setSize(1100, 800);
}

defineSupportCode(function({setWorldConstructor}) {
  setWorldConstructor(CustomWorld)
})