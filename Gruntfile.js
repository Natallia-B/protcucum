module.exports = function(grunt) {
    
        var platform = grunt.option('platform'),
            testHost = grunt.option('host'),
            selenium = grunt.option('selenium'),
            moment = require('moment');
    
        require('load-grunt-tasks')(grunt);
    
        grunt.initConfig({
    
            protractor_webdriver: {
                options: {
                    path: 'node_modules/protractor/bin/',
                    keepAlive: true
                },
                update: {
                    options: {
                        //role: 'hub',
                        command: 'webdriver-manager update' // --role=hub, which will work if args are passed!
                    }
                },
                start: {
                    options: {
                        //role: 'hub',
                        command: 'webdriver-manager start' // --role=hub, which will work if args are passed!
                    }
                }
            },
    
            protractor: {
                options: {
                    keepAlive: true, // If false, the grunt process stops when the test fails.
                    noColor: false // If true, protractor will not use colors in its output.
                },
                dev: {
                    options: {
                        configFile: './conf.js',
                        args: {
                            seleniumAddress: selenium||process.env.SELENIUM_SERVER||'http://localhost:4444/wd/hub',
                            baseUrl: testHost||process.env.HOST||'https://next.primary-intel.com/',
                            // cucumberOpts: {
                            //     tags: ['~@ignore','<%= protractor.platformTag%>']
                            // }
                        }
                    }
                },
                // wip: {
                //     options: {
                //         configFile: 'test/e2e/protractor-conf.js',
                //         args: {
                //             seleniumAddress: selenium||process.env.SELENIUM_SERVER||'http://localhost:4444/wd/hub',
                //             baseUrl: testHost||process.env.HOST||'https://www.travelsupermarket.com/',
                //             cucumberOpts: {
                //                 tags: ['@wip','<%= protractor.platformTag%>']
                //             }
                //         }
                //     }
                // },
                // all: {
                //     options: {
                //         configFile: 'test/e2e/protractor-conf-multirun.js',
                //         args: {
                //             seleniumAddress: selenium||process.env.SELENIUM_SERVER||'http://localhost:4444/wd/hub',
                //             baseUrl: testHost||process.env.HOST||'https://www.travelsupermarket.com/',
                //             cucumberOpts: {
                //                 tags: ['~@ignore','@desktop','@mobile','@tabletL','@tabletP','@journey']
                //             }
                //         }
                //     }
                // },
            //     func: {
            //         options: {
            //             configFile: 'test/e2e/protractor-conf-multifunc.js',
            //             args: {
            //                 seleniumAddress: selenium||process.env.SELENIUM_SERVER||'http://localhost:4444/wd/hub',
            //                 baseUrl: testHost||process.env.HOST||'https://www.travelsupermarket.com/',
            //                 cucumberOpts: {
            //                     tags: ['~@ignore','~@journey','<%= protractor.platformTag%>']
            //                 }
            //             }
            //         }
            //     }
            },
    
            'protractor-cucumber-html-report': {
                options: {
                    dest: 'reports/gr',
                    output: 'report.html',
                    testJSONDirectory: 'reports/cucumber'
                },
                dev: {
                    reportTitle: 'Test report generated by dev run'
                },
                // wip: {
                //     reportTitle: 'Test report generated by wip run'
                // },
                // all: {
                //     reportTitle: 'Test report generated by all run'
                // },
                // func: {
                //     reportTitle: 'Test report generated by func run'
                // }
            },
    
        });
    
        grunt.loadNpmTasks('grunt-protractor-runner');
        grunt.loadNpmTasks('grunt-protractor-webdriver');
        grunt.loadNpmTasks('grunt-protractor-cucumber-html-report');
    
        grunt.registerTask('e2e', 'Run e2e tests', function(target) {
            process.env.NODE_TLS_REJECT_UNAUTHORIZED=0;
            process.env.START_TIME = moment().format('X');
            var platformTag = '';
    
            if (platform){
                process.env.PLATFORM=platform;
            }
            if(!process.env.PLATFORM){
                process.env.PLATFORM='desktop';
            }
            if (selenium){
                process.env.SELENIUM_SERVER=selenium;
            }
            if(!process.env.SELENIUM_SERVER){
                process.env.SELENIUM_SERVER='http://localhost:4444/wd/hub';
            }
            if (testHost){
                process.env.HOST=testHost;
            }
            if(!process.env.HOST){
                process.env.HOST='https://primary-intel.com/';
            }
    
            if(process.env.PLATFORM !== 'mobile' && process.env.PLATFORM !== 'desktop' && process.env.PLATFORM !== 'tabletP' && process.env.PLATFORM !== 'tabletL'){
                throw Error('Wrong type of platform: '+process.env.PLATFORM+'. Should be desktop, mobile, tabletP or tabletL.');
            }
    
            platformTag = '@'+ process.env.PLATFORM;
    
            grunt.log.writeflags(platformTag, 'Protractor');
            grunt.config.set('protractor.platformTag', platformTag);
    
            console.log(' \nTest ENVIRONMENT: ');
            console.log('    '+process.env.HOST);
            console.log(' \nUsing Selenium Grid: ');
            console.log('    '+process.env.SELENIUM_SERVER);
            if(target !== 'all'){
                console.log(' \nRun tests on platform: ');
                console.log('    '+process.env.PLATFORM);
            }
            console.log(' \nTest start time: ');
            console.log('    '+moment.unix(process.env.START_TIME).format('h:mm:ss a'));
            console.log('\n');
    
            target = target || 'dev';
    
            process.env.RUN_TYPE = target;
    
            if(process.env.SELENIUM_SERVER === 'http://localhost:4444/wd/hub'){
                grunt.task.run(['protractor_webdriver:start', 'protractor:'+target , 'protractor-cucumber-html-report:'+target]);
            }else{
                grunt.task.run(['protractor:'+target , 'protractor-cucumber-html-report:'+target]);
            }
        });
    
        grunt.registerTask('webdriver', 'webdriver items', function(target) {
            grunt.task.run(['protractor_webdriver:'+target]);
        });
    
    };