'use strict';

let inheritance = require('./inheritance'),
    Page = require('./page');

let SignInPage = function(world){

    var self = this;
}
inheritance.inherits(Page, SignInPage);
SignInPage.prototype.url = 'https://next.primary-intel.com/';

module.exports = SignInPage;