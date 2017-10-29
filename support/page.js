'use strict';

let Page = function(){};

Page.prototype.root = element(by.css('body'));

Page.prototype.goToPage = function(){
    return Promise.resolve()
        .then(() => {
            return browser.get(this.url)
        })

}