Float
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Validates if a value is a float.


## Installation

``` bash
$ npm install validate.io-float
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

To use the module,

``` javascript
var isFloat = require( 'validate.io-float' );

console.log( isFloat( 5.256 ) );
// Returns true

console.log( isFloat( 5 ) );
// Returns false
```


## Notes

* 	This method first validates that a `value` is a `number` prior to validating if the `value` is a `float`.

* 	In JavaScript, every numeric value is stored as a `float`. Here, we make a distinction based on whether the value has digits located after a decimal point. Hence, the distinction is semantic and not indicative of the underlying representation. 


## Examples

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ open reports/coverage/lcov-report/index.html
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/validate.io-float.svg
[npm-url]: https://npmjs.org/package/validate.io-float

[travis-image]: http://img.shields.io/travis/validate-io/float/master.svg
[travis-url]: https://travis-ci.org/validate-io/float

[coveralls-image]: https://img.shields.io/coveralls/validate-io/float/master.svg
[coveralls-url]: https://coveralls.io/r/validate-io/float?branch=master

[dependencies-image]: http://img.shields.io/david/validate-io/float.svg
[dependencies-url]: https://david-dm.org/validate-io/float

[dev-dependencies-image]: http://img.shields.io/david/dev/validate-io/float.svg
[dev-dependencies-url]: https://david-dm.org/dev/validate-io/float

[github-issues-image]: http://img.shields.io/github/issues/validate-io/float.svg
[github-issues-url]: https://github.com/validate-io/float/issues