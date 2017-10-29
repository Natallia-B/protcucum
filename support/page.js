// 'use strict';

let Page = function(){
};

Page.prototype._root = element(by.css('body'));
Page.prototype.data = {};
Page.prototype.url = '';

Page.prototype.goToPage = function(){
    return Promise.resolve()
        .then(() => {
            return browser.get(this.url)
        })

}


module.exports = Page;