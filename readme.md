# find-used-lodash
> Use Esprima to find and detect used Lodash packages

[![NPM Version](http://img.shields.io/npm/v/find-used-lodash.svg?style=flat)](https://npmjs.org/package/find-used-lodash)
[![NPM Downloads](http://img.shields.io/npm/dm/find-used-lodash.svg?style=flat)](https://npmjs.org/package/find-used-lodash)
[![Dependencies](http://img.shields.io/gemnasium/pgilad/find-used-lodash.svg?style=flat)](https://gemnasium.com/pgilad/find-used-lodash)
[![Build Status](http://img.shields.io/travis/pgilad/find-used-lodash.svg?style=flat)](https://travis-ci.org/pgilad/find-used-lodash)

Useful for preparing an array to pass to a build task in order to build only used packages.

* Please see [Lodash](http://lodash.com/) for usable packages.
* Checkout [Lodash custom build tool](http://lodash.com/custom-builds) for possible uses.

**Important notice** Chained Lodash packages are currently not detected.

## Install

```
npm install --save-dev find-used-lodash
```

## Example

### General Usage

```js
var findUsedLodash = require('find-used-lodash');

console.log(findUsedLodash('_.each(["a", "b"], doSomething)');
//=> ['each']
```

### Use in a build task (grunt,gulp)...

```js
var findUsedLodash = require('find-used-lodash');

var fileContents = fs.readFileSync('targetFile.js', 'utf8'); //or get it from file stream
var results = findUsedLodash(fileContents);

var commaResults = results.join(',');

//then execute lodash command line with **lodash include=commaResults**
```

## Options

```js
@param {String} jsFileContents - the js file contents as a string
@return {String[]} array of used Lodash packages.
```

## License
Copyright (©) 2014 Gilad Peleg. Licensed under the MIT license.
