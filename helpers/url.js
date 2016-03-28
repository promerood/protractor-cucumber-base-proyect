var _ = require('lodash');


var server = 'https://localhost:8181';

var definitios = {
  getPunchoutUrl: getPunchoutUrl,
  filesPath: "files/"
};

function getPunchoutUrl(baseurl) {
  return (_.isUndefined(baseurl) ? server : baseurl) + "/configurator";
}

module.exports = definitios;
