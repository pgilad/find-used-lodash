/*!
    find-used-lodash
    Use esprima to find and detect used lodash packages
    https://github.com/pgilad/find-used-lodash
    by Gilad Peleg
    MIT License
*/
(function () {
    'use strict';

    var esprima = require('esprima');
    var estraverse = require('estraverse');

    function findUsedLodash(jsContents) {
        var ast;

        if (!jsContents) {
            return [];
        }

        try {
            ast = esprima.parse(jsContents, {
                tolerant: true
            });
        } catch (e) {
            console.error('Error parsing contents', e);
            return [];
        }

        var usedFuncs = {};

        estraverse.traverse(ast, {
            enter: function (node) {
                if (node.type === 'MemberExpression' && node.object.type === 'Identifier' && node.object.name === '_') {
                    usedFuncs[node.property.name] = true;
                }
            }
        });

        var keys = Object.keys(usedFuncs);
        return keys;
    }

    if (typeof define === 'function' && define.amd) {
        define([], findUsedLodash);
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = findUsedLodash;
    } else {
        window.findUsedLodash = findUsedLodash;
    }
})();
