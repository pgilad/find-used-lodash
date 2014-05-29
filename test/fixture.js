exports.module = function() {

    /* example usage of lodash taken from http://kitcambridge.be/blog/say-hello-to-lo-dash/ */
    /* _.map shouldn't be detected */

    var element = document.createElement('span');
    element.appendChild(document.createTextNode('Hiya!'));

    // Clone DOM nodes, with deep cloning enabled. `_.clone(..., true)` is
    // equivalent to `_.cloneDeep`.
    _.clone(element, true, function(value) {
        if (_.isElement(value)) {
            return value.cloneNode(true);
        }
    });
    // => <span>Hiya!</span>

    var food = {
        'fruits': ['apple'],
        'vegetables': ['beet']
    };
    var otherFood = {
        'fruits': ['banana'],
        'vegetables': ['carrot']
    };

    // Concatenate arrays, instead of overwriting the indices.
    _.merge(food, otherFood, function(left, right) {
        return _.isArray(left) ? left.concat(right) : undefined;
    });
};
