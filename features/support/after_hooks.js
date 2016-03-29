var Utils = require(process.cwd() + '/helpers/utils');
var _ = require('lodash');


var myAfterHooks = function () {

  /**
   * Hook generico
   * 
   * Se ejecuta cdo finaliza el escenario en ejecución, en caso que falle hace una captura de pantalla
   */
  this.After(function (scenario, callback) {
    if (scenario.isFailed()) {

      browser.takeScreenshot().then(function (type) {
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