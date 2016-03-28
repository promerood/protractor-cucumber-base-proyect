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
protractor conf.js --params.BASEURL=https://loquequieras.com
```

and run individual test
``` shell
protractor --specs=features/search-google.feature conf.js

```



### Features
Define in conf.js: *specs*

Features are written with the [Gherkin syntax](https://github.com/cucumber/cucumber/wiki/Gherkin)
They needs to be in features folder and file names needs to end with .feature

``` gherkin
# features/my_feature.feature

Feature: Example feature
  As a user of Cucumber.js
  I want to have documentation on Cucumber
  So that I can concentrate on building awesome applications

  Scenario: Reading documentation
    Given I am on the Cucumber.js GitHub repository
    When I go to the README file
    Then I should see "Usage" as the page title
```

### Support files
Define in conf.js: *cucumberOpts.require*

Support files let you setup the environment in which steps will be run, and define step definitions.
They are on features/support folder.-

```

#### Formatters
Define in conf.js: *cucumberOpts.format*

Use `--format <TYPE[:PATH]>` to specify the format of the output.
If PATH is not supplied, the formatter prints to stdout.
If PATH is supplied, it prints to the given file.
If multiple formats are specified with the same output, only the last is used.

Built-in formatters
* json - prints the feature as JSON
* pretty - prints the feature as is (default)
* progress - prints one character per scenario
* rerun - prints the paths of the failing scenarios ([example](/features/rerun_formatter.feature))
  * suggested use: add the rerun formatter to your default profile and the output file to your `.gitignore`
* summary - prints a summary only, after all scenarios were executed

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