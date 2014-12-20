// LICENSE : MIT
"use strict";
/**
 * pass assert, return refute module.
 * @param {object} assert
 */
function factory(assert) {
    function refute(value, message) {
        assert(!value, message)
    }

    // inherit from power-assert
    if (typeof assert.customize === "function") {
        refute._capt = assert._capt;
        refute._expr = assert._expr;
    }
    // inherit from assert
    refute.equal = assert.notEqual.bind(assert);
    refute.strictEqual = assert.notStrictEqual.bind(assert);
    refute.deepEqual = assert.notDeepEqual.bind(assert);
    refute.throws = assert.doesNotThrow.bind(assert);

    return refute;
}
module.exports = factory;