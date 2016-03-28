exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // set to "custom" instead of cucumber.
  framework: 'custom',
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  multiCapabilities: [/*{maxInstances: 4}, {browserName: 'firefox'},*/ {
    browserName: 'chrome', 'chromeOptions': {
      'args': ['incognito', 'disable-extensions', 'start-maximized']
    }
  }],
  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['./features/*.feature', './features/*/*.feature'],

  // Options to be passed to Cucumber.
  cucumberOpts: {
    require: [
      'features/support/*.js',
      'features/step_definitions/*_step_defs.js',
      'features/step_definitions/*/*_step_defs.js',
      'helpers/*.js'
    ],
    // How to format features (default: progress)
    format: 'pretty'
  },
  resultJsonOutputFile: 'cucumber-report.json'

};
