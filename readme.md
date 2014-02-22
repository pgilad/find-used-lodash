# find-used-lodash
> Use esprima to find and detect used Lodash packages

[![NPM Version](http://img.shields.io/npm/v/grunt-dev-update.svg)](https://npmjs.org/package/grunt-dev-update)
[![Build Status](https://secure.travis-ci.org/pgilad/find-used-lodash.png?branch=master)](http://travis-ci.org/pgilad/find-used-lodash)
[![Gittip](http://img.shields.io/gittip/pgilad.svg)](https://www.gittip.com/pgilad/)

Useful for preparing an array to pass to a build task in order to build only used pacakges.

* Please see [Lodash](http://lodash.com/) for usable packages.
* Checkout [Lodash custom build tool](http://lodash.com/custom-builds) for possible uses.

**Important notice** Chained lodash packages are currently not detected.

## Install

```
npm install --save-dev find-used-lodash
```

## Example

```js
var findUsedLodash = require('find-used-lodash');

console.log(findUsedLodash('_.each(["a", "b"], doSomething)');
//=> ['each']
```

#### findUsedLodash

```js
@param {String} jsFileContents - the js file contents as a string
@return {String[]} array of used Lodash packages.
```

## License
Copyright (c) 2014 Gilad Peleg. Licensed under the MIT license.