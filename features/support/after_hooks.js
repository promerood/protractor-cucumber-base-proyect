var Utils = require(process.cwd() + '/helpers/utils');
var _ = require('lodash');


var myAfterHooks = function () {


  this.After(function (scenario, callback) {
    if (scenario.isFailed()) {

      this.browser.takeScreenshot().then(function (type) {
        Utils.writeScreenShot(type, _.kebabCase(scenario.getName()) + '.png');
        callback();
      });
    }
    else {
      callback();
    }
  });

}

module.exports = myAfterHooks;