'use strict';
var expect = require('expect.js');
var fs = require('fs');
var findUsedLodash = require('./index');

describe('verify packages are found correctly', function () {
    it('should detect used packages', function () {
        expect(findUsedLodash('_.each(["A", "B"], function(i){});')).to.eql(['each']);
        expect(findUsedLodash('_.map(["A", "B"], function(i){});')).to.eql(['map']);
        expect(findUsedLodash('_.each(["A", "B"], _.map)')).to.eql(['each', 'map']);
        expect(findUsedLodash('_.contains(["A", "B"], "A")')).to.eql(['contains']);
    });

    it('read a fixture javascript file and interpret it', function () {
        var contents = fs.readFileSync('test/fixture.js', 'utf8');
        var results = findUsedLodash(contents);

        expect(results).to.contain('clone');
        expect(results).to.contain('isElement');
        expect(results).to.contain('merge');
        expect(results).to.contain('isArray');
        expect(results).to.not.contain('cloneDeep');
        expect(results).to.not.contain('map');
    });
});
