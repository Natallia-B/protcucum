var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Before,setDefaultTimeout}) {

  setDefaultTimeout(60000);

  // After(function() {
  //   return this.driver.quit();
  // });
});