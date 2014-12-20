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
        assert.customize({
            assertion: {
                patterns: [
                    "assert(value, [message])",
                    "refute(value, [message])",
                    "assert.ok(value, [message])",
                    "assert.equal(actual, expected, [message])",
                    "refute.equal(actual, expected, [message])",
                    "assert.notEqual(actual, expected, [message])",
                    "assert.strictEqual(actual, expected, [message])",
                    "refute.strictEqual(actual, expected, [message])",
                    "assert.notStrictEqual(actual, expected, [message])",
                    "assert.deepEqual(actual, expected, [message])",
                    "refute.deepEqual(actual, expected, [message])",
                    "assert.notDeepEqual(actual, expected, [message])"
                ]
            }
        });
    }
    // inherit from assert
    refute.equal = assert.notEqual.bind(assert);
    refute.strictEqual = assert.notStrictEqual.bind(assert);
    refute.deepEqual = assert.notDeepEqual.bind(assert);
    refute.throws = assert.doesNotThrow.bind(assert);

    return refute;
}
module.exports = factory;