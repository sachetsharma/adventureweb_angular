module.exports = function(config){
    config.set({
    basePath : '../',

    files : [
      'app/bower_components/angular/angular.js',
        'app/bower_components/angular-route/angular-route.js',
        'app/bower_components/angular-route/angular-ui-router.js',
        'app/bower_components/angular/angular-*.js',
      'test/lib/angular/angular-mocks.js',
        'app/js/app.js',
        'app/js/controllers/controllers.js',
        'app/js/controllers/appController.js',
        'app/js/controllers/entityController.js',
        'app/js/services/services.js',
        'app/js/services/entityService.js',
        'test/unit/controllersSpec.js'
    ],

    exclude : [
      'app/bower_components/angular/angular-loader.js',
      'app/bower_components/angular/*.min.js',
      'test/lib/angular/angular-scenario.js'
    ],

    autoWatch : true,

    reporters : ['progress'],

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

})}
