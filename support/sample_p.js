let SamplePage = function () {
    // this.navigate = function(){
    //     return Promise.resolve()
    //     .then(function () {
          return browser.get('https://next.primary-intel.com/research/sample/add');
        // })
        
    }
//   }
  
   SamplePage.prototype = Object.create({}, {
      CompanyField: { get: function () { return element(by.id('company-input')); }},
      OportunityField: { get: function () { return element(by.css('#opp-value-group > div > input')); }},
      ProductBox: { get: function () { return element(by.xpath('.//*[@id="add-opportunity-form"]/div[1]/div[1]/div/div[2]/form/div[4]/div/div/div/div')); }},
      ProductName: { get: function () { return element(by.xpath('.//li[contains(text(),"Hosting")]')); }},
      OutcomeBox: { get: function () { return element(by.xpath('.//span[contains(text(),"Outcome")]')); }},
      OutcomeName: { get: function () { return element(by.xpath('.//li[contains(text(),"No Decision")]')); }},
      
      typeCompany: { value: function (comp) { return this.CompanyField.sendKeys(comp); }},
      typeOpportunity: { value: function (opp) { return this.OpportunityField.sendKeys(opp); }},
      addProduct: { value: function (prod) {
      this.ProductBox.click();
      this.ProductName.click();
    }}
  });
  
  module.exports = SamplePage;