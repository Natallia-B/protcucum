module.exports = function (grunt){
grunt.initConfig({
    // protractor_webdriver: {
    //     options: {
    //         path: 'node_modules/protractor/bin/',
    //         keepAlive: true
    //     },
    //     update: {
    //         options: {
    //             //role: 'hub',
    //             command: 'webdriver-manager update' // --role=hub, which will work if args are passed!
    //         }
    //     },
    //     start: {
    //         options: {
    //             //role: 'hub',
    //             command: 'webdriver-manager start' // --role=hub, which will work if args are passed!
    //         }
    //     }
    // },

    protractor: {
        options: {
            keepAlive: true, 
            noColor: false 
        },
        dev: {
            options: {
                configFile: './conf.js',
                args: {
                    seleniumAddress:'http://localhost:4444/wd/hub',
                    // baseUrl:'https://next.primary-intel.com/',
                    cucumberOpts: {
                        tags: ['~@ignore','<%= protractor.platformTag%>']
                    }
                }
            }
        }
    }})
    
  
    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.loadNpmTasks('grunt-protractor-webdriver');
    grunt.loadNpmTasks('grunt-protractor-cucumber-html-report');
    
    grunt.registerTask('e2e', 'Run e2e tests', function(target) {
        console.log*("aaa");
        // grunt.option('platform') ? 
        //     process.env.PLATFORM = grunt.option('platform') :
        //     process.env.PLATFORM = 'desktop';
        // platformTag = '@'+ process.env.PLATFORM;
        // grunt.log.writeflags(platformTag, 'Protractor');
        // grunt.config.set('protractor.platformTag', platformTag);
        target = target || 'dev';
        grunt.task.run([/*'protractor_webdriver:start',*/
            'protractor:'+target ,
            /*'protractor-cucumber-html-report:'+target*/]);
    });
};
