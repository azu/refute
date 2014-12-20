# refute

refute is "assert.not*" assertion library.

It's inspired by [busterjs/referee](https://github.com/busterjs/referee "busterjs/referee").

## Installation

```
npm install --save-dev refute
```

## Usage

`refute` inherit from [assert](http://nodejs.org/api/assert.html "Assert")(Node's Assert).

```
var assert = require("assert");
var refute = require("refute")(assert);
```

### API

```js
refute(false);
// inherit from assert
refute.equal = assert.notEqual.bind(assert);
refute.strictEqual = assert.notStrictEqual.bind(assert);
refute.deepEqual = assert.notDeepEqual.bind(assert);
refute.throws = assert.doesNotThrow.bind(assert);
```

### Example

```js
var assert = require("assert");
var refute = require("refute")(assert);
describe("refute-test", function () {
    it("refute", function () {
        refute(false);// not true is pass
    });
    it("refute.equal", function () {
        refute.equal("string", "non-string");// pass
    });
    it("refute.deepEqual", function () {
        var obj = {
            a: 1
        };
        var expected = {
            b: 1
        };
        refute.deepEqual(obj, expected);// pass
    });
    it("refute.throws", function () {
        refute.throws(function(){
            assert(true);
        });
    });
});
```


### Integrated with [power-assert](https://github.com/twada/power-assert "power-assert")

You can use `refute` with [power-assert](https://github.com/twada/power-assert "power-assert").

Simply a change.

```diff
- var assert = require("assert");
+ var assert = require("power-assert");
```

Automatically, change espower's [options.patterns](https://github.com/twada/espower#optionspatterns "options.patterns").

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT