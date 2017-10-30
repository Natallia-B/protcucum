// 'use strict';

let SignInPage = require('./SignInPage');
    // DashboardPage = require('./DashboardPage'),
    // SamplePage = require('./SamplePage'),
    // AddSamplePage = require('./rAddSamplePage');

let PageFactory = function(world){
    
    let _this = this;

    _this.currentPage = null;
    // _this.getPage2 = function(){
    //     console.log('!!!!!!!!');
    // };

    _this.getPage = function(page){
        let pages = {
            'signin': SignInPage
            // 'dashboard': DashboardPage,
            // 'sample': SamplePage,
            // 'addsample': AddSamplePage
          
        };
        if(!pages[page]){
            throw new Error('Wrong page name: '+pages[page]);
        }
        _this.currentPage = new pages[page](world);
        // _this.currentPage = new SignInPage;
        // console.log(_this.currentPage)
        return _this.currentPage;
        
    };
};
let myCurrentPage = {
    getInstance: function () {
        if ( !myCurrentPage.instance )
        myCurrentPage.instance = new PageFactory();
        return myCurrentPage.instance
    }

}

module.exports = PageFactory;
module.exports = myCurrentPage;