var url = require(process.cwd() + '/helpers/url');

var definitions = function () {

  this.Given(/^I am on url google$/, {timeout: 100 * 1000}, function (done) {

    var uri = url.getURI(this.browser.params.BASEURL);

    browser.manage().deleteAllCookies(); //Importante por cada ejecución y que se abre un nuevo browser limpia cache
    browser.ignoreSynchronization = true;
    browser.get(uri);
    done();
  });

  this.Then(/^Should search "([^"]*)"$/, function (wordSearch, done) {

    browser.driver.findElement(by.name('q')).sendKeys(wordSearch); // busca el elemento y se pone el valor pasado
    browser.driver.findElement(by.name('btnG')).click() // hace click en el icono search


    // done(); uncomment when pass test

  });

};

module.exports = definitions;
