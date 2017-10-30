// 'use strict';

let inheritance = require('./inheritance');
    
let Page = require('./page');

let SignInPage = function(){
//    let  _this = this;
  
};
inheritance.inherits(Page, SignInPage);
SignInPage.prototype.url = 'https://next.primary-intel.com/';
SignInPage.prototype.title = 'TruVoiceTest';


module.exports = SignInPage;