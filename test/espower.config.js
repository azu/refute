// LICENSE : MIT
"use strict";
require('espower-loader')({

    // directory where match starts with
    cwd: process.cwd(),

    // glob pattern using minimatch module
    pattern: 'test/**/*.js',

    // options for espower module
    espowerOptions: {
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