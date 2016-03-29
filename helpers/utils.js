var fs = require('fs');
const DIR_SCREENSHOT_ERROR = "screenshot_error/";

/**
 * Función generica que hace captura (screeenshot) y las almacena en el directorio
 * screenshot_error
 * @param data
 * @param filename
 */
function writeScreenShot(data, filename) {
  var stream = fs.createWriteStream(DIR_SCREENSHOT_ERROR + filename);
  stream.write(new Buffer(data, 'base64'));
  stream.end();
}


/**
 * Hace click a un elemento esperando que este en el DOM, por default hace 5 click.
 * La cant de click se puede especificar por medio de maxTestParam
 *
 * @param element
 * @param maxTestParam
 * @returns {*}
 */
function clickWhenClickable(element, maxTestParam) {
  var maxTest = maxTestParam || 5;
  var tests = 1;
  return browser.wait(function () {
    return element.click().then(
      function () {
        return true;
      },
      function () {
        console.log('not clickable: ' + tests + "/" + maxTest);
        tests++;
        return tests > maxTest;
      });
  });
}


module.exports = {
  writeScreenShot: writeScreenShot,
  clickWhenClickable: clickWhenClickable
};
