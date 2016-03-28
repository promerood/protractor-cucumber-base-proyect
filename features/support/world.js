var url = require('../../helpers/url');

/**
 * All attributes/methods defines in this.X will be available in step definitions as this.X
 * e.g.: this.browser
 * @constructor
 */
function World() {
  //attributes
  this.browser = browser;
  this.p = protractor;
}

module.exports = function () {
  this.World = World;

};
