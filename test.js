'use strict';
var expect = require('expect.js');
var findUsedLodash = require('./index');

it('should detect used packages', function () {
    expect(findUsedLodash('_.each(["A", "B"], function(i){});')).to.eql(['each']);
    expect(findUsedLodash('_.map(["A", "B"], function(i){});')).to.eql(['map']);
    expect(findUsedLodash('_.each(["A", "B"], _.map)')).to.eql(['each', 'map']);
    expect(findUsedLodash('_.contains(["A", "B"], "A")')).to.eql(['contains']);
});
