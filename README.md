# Base e2e testing

*Cucumber*, the [popular Behaviour-Driven Development tool](https://cucumber.io), brought to your JavaScript stack.

[Cucumber.js](https://cucumber.io/docs/reference/javascript) is a Cucumber implementation written in pure JavaScript.

[Protractor](http://angular.github.io/protractor/#/) is an end-to-end test framework for AngularJS applications.

[Protractor Docs](https://github.com/angular/protractor/tree/master/docs)

## Prerequesites

* [NPM](https://www.npmjs.com)

## Usage

### Install

Go to {yourProyectPath}/protractor-cucumber/

Install with:

``` shell
$ npm install -g protractor cucumber webdriver-manager
```


``` shell
$ npm install
```

Run:

First run: 
``` shell
$ npm run webdriver
```

and then, in a different console, run all features:
``` shell
$ npm run protractor
```


and then, run witch param baseurl, server remote
default: https://www.google.com
``` shell
$ protractor conf.js --params.BASEURL=https://loquequieras.com
or
$ node_modules/.bin/protractor conf.js --params.BASEURL=https://loquequieras.com
```

and run individual test
``` shell
$ protractor --specs=features/search-google.feature conf.js
or 
$ node_modules/.bin/protractor --specs=features/search-google.feature conf.js

```


### Examples

A few example apps are available for you to browse:

* [Rails app serving features in the browser](https://github.com/jbpros/cucumber-js-example)
* [Express.js app running features in the cli](https://github.com/olivoil/NodeBDD)

## Contribute

See [CONTRIBUTING](https://github.com/cucumber/cucumber-js/blob/master/CONTRIBUTING.md).

## Help & support

* Twitter: [@cucumber_js](https://twitter.com/cucumber_js/)
* IRC: [#cucumber](http://webchat.freenode.net?channels=cucumber&uio=d4) on Freenode
* Google Groups: [cukes](https://groups.google.com/group/cukes)
* Website: [cucumber.io](https://cucumber.io)