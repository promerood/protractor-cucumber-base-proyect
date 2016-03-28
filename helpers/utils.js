var fs = require('fs');

// abstract writing screen shot to a file
function writeScreenShot(data, filename) {
  var stream = fs.createWriteStream("screenshot_error/"+ filename);
  stream.write(new Buffer(data, 'base64'));
  stream.end();
}

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
