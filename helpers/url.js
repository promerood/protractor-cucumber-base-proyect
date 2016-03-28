var _ = require('lodash');


var server = 'https://www.google.com';

var definitios = {
  getURI: getURI,
  filesPath: "files/"
};

function getURI(baseurl) {
  return (_.isUndefined(baseurl) ? server : baseurl) ;
}

module.exports = definitios;
