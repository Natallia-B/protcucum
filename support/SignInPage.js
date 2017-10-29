// 'use strict';

let inheritance = require('./inheritance');
    
let Page = require('./page');

let SignInPage = function(){

    // var self = this;
};
inheritance.inherits(Page, SignInPage);
SignInPage.prototype.url = 'https://next.primary-intel.com/';

module.exports = SignInPage;