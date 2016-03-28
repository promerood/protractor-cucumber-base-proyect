var url = require(process.cwd() + '/helpers/url');

var definitions = function () {

  this.Given(/^I am on url google$/, {timeout: 100 * 1000}, function (done) {

    var uri = url.getURI(this.browser.params.BASEURL);

    this.browser.manage().deleteAllCookies(); //IMPORTANT CLEAR SESSION
    browser.ignoreSynchronization = true;
    this.browser.get(uri);
    done();
  });

  this.Then(/^Should search "([^"]*)"$/, function (wordSearch, done) {

    browser.driver.findElement(by.name('q')).sendKeys(wordSearch);
    browser.driver.findElement(by.name('btnG')).click()


    // done(); uncomment when pass test

  });

};

module.exports = definitions;
