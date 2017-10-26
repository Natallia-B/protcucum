let webdriver = require('selenium-webdriver');
let {defineSupportCode} = require('cucumber');
let chai = require('chai');
chai.use(require('chai-smoothie'));

// let chaiAsPromised = require("chai-as-promised");
// chai.use(chaiAsPromised);
let expect = chai.expect;

let loginButton = element(by.xpath('.//*[@id="signin-form_id"]/button'));

defineSupportCode(function({setDefaultTimeout, Given, When, Then}) {
  setDefaultTimeout(1200000);

  browser.driver.manage().window().setSize(1100, 800);
  Given('I navigate to Research Sample', function() {
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
  
   .then(function () {
     return browser.getTitle()
    }) 
   .then(function (title) {
     expect(title).to.equal('Dashboard | TruVoice')
    }) 
  
   .then(()=>{
     return element(by.id('menu-trigger')).click();
    })
   .then(function () {
    return element(by.xpath('.//*[@id="sidebar"]/div[1]/ul/li[2]/a')).click();
    }) 
   .then(function () {
    return element(by.xpath('.//*[@id="sidebar"]/div[1]/ul/li[2]/ul/li[1]/a')).click();
    }) 
  // .then(()=>{
  //   return browser.wait(()=>{
  //       return browser.getTitle()
  //       .then((title)=>{
  //         return title === 'Sample | TruVoice';
  //       })
  //   },10000)
  // })
  

   })
   Given('I am on the Sample page', function() {

    return Promise.resolve()
    .then(function () {
      return browser.wait(protractor.ExpectedConditions.titleIs('Sample | TruVoice'), 6000);
    
    })

   })
   When('I Select CIP', function() {
    
    return Promise.resolve()
    .then(function () {
      return element(by.xpath('.//*[@id="header"]/ul/li[3]/a/div[1]')).click();
    })
    .then(function () {
       return element(by.xpath('//*[@id="nav-search"]')).clear().sendKeys('Rackspace :: Hosting :: Win Loss')
       
    })
    .then (()=>{
    
       return element(by.xpath('.//a[contains(text(),":: Hosting :: Win Loss")]')).click()
    })
   

  })
  When('I navigate to Edit opportunity', function() {
    return Promise.resolve()
    .then(function () {
      return element(by.xpath('.//*[@id="research-sample-header"]/ul/li[2]/a')).click();
    })
    .then(function () {
      return browser.wait(protractor.ExpectedConditions.titleIs('Add Opportunity | TruVoice'), 5000);
    })
  })
  When('I add company', function() {
    return Promise.resolve()
    .then(function () {
      return element(by.id('company-input')).sendKeys('AIS');
    })
  })
  When('I add opportunity', function() {
    return Promise.resolve()
    .then(function () {
      return element(by.css('#opp-value-group > div > input')).clear().sendKeys('AIS');
    })
  })

  When('I select product', function() {
    return Promise.resolve()
    .then(function () {
      return element(by.xpath('.//*[@id="add-opportunity-form"]/div[1]/div[1]/div/div[2]/form/div[4]/div/div/div/div')).click();
    })
    
    .then(() =>{
      return element(by.xpath('.//li[contains(text(),"Hosting")]')).isDisplayed();
    })
    .then(function (is) {
      console.log(is+' !!!!!!!!')
      return element(by.xpath('.//li[contains(text(),"Hosting")]')).click();
    })
    
  })

  When('I select outcome', function() {
    return Promise.resolve()
    .then(function () {
      return element(by.xpath('.//span[contains(text(),"Outcome")]')).click();
    })
    .then(function (is) {
      console.log(is+' !!!!!!!!')
      return element(by.xpath('.//li[contains(text(),"No Decision")]')).click();
    })
  
    .then(function () {
      return  browser.sleep(50000);
    })
  })
  
  // When('I navigate to Add contact', function() {
  //   return Promise.resolve()
  //   .then(function () {
  //     return element(by.xpath('.//*[@id="add-opportunity-form"]/div[1]/div[2]/div/div[1]/button/i')).click();
  //   })
  //   .then(function () {
  //     el = element(by.id('add-contact'));
   
  //     return browser.wait(protractor.ExpectedConditions.presenceOf($(el)), 5000);
  //   })
    
  // })


  });
  