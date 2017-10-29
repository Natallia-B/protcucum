'use strict';

let SignInPage = require('./SignInPage');
    // DashboardPage = require('./DashboardPage'),
    // SamplePage = require('./SamplePage'),
    // AddSamplePage = require('./rAddSamplePage');

let PageFactory = function(world){
    
    let slf = this;

    self.currentPage = null;

    self.getPage = function(page){
        let pages = {
            'signin': SignInPage,
            'dashboard': DashboardPage,
            'sample': SamplePage,
            'addsample': AddSamplePage
          
        };
        if(!pages[page]){
            throw new Error('Wrong page name: '+pages[page]);
        }
        self.currentPage = new pages[page](world);
        return self.currentPage();
    };
};

module.exports = PageFactory;