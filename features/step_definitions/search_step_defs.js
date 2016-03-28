var url = require(process.cwd() + '/helpers/url');

var definitions = function () {

  this.Given(/^I am on punchout$/, {timeout: 100 * 1000}, function (done) {

    var punchoutUrl = url.getPunchoutUrl(this.browser.params.BASEURL);

    this.browser.manage().deleteAllCookies(); //IMPORTANT CLEAR SESSION

    this.browser.get(punchoutUrl);
    this.browser.waitForAngular().then(function () {
      done();
    });
  });

  this.Given(/^I choose "([^"]*)" as a product$/, function (productName, done) {
    var selectedDepotSku = element(by.model('selectedDepotSku'));
    selectedDepotSku.sendKeys(productName);

    element(by.xpath('//a[@ng-href]')).click().then(function () {

      done();
    });
  });

};

module.exports = definitions;
