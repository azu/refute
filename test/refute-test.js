// LICENSE : MIT
"use strict";
var assert = require("power-assert");
var refute = require("../")(assert);
describe("refute-test", function () {
    it("refute", function () {
        refute(false);
    });
    it("refute.equal", function () {
        var str = "string";
        refute.equal(str, "!string");
    });
    it("refute.strictEqual", function () {
        refute.strictEqual("1", 1);
    });
    it("refute.deepEqual", function () {
        var obj = {
            a: 1
        };
        var expected = {
            b: 1
        };
        refute.deepEqual(obj, expected);
    });
    it("refute.throws", function () {
        refute.throws(function () {
            assert(true);
        });
    });
});