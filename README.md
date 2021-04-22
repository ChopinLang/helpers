# Nyx Helpers

A collection of useful helper functions used internally in the Nyx interpreter

## Installation

The package is not currently published to NPM, so you'll have to either clone the repo or download + unzip it into your dependencies directory.

## Usage

Include the object in your project:

```js
const helpers = require("helpers");

// You can also destructure your assignment to only get the functions you need
const { isArray, isNumber, handleNegativeIndex } = require("helpers");
```

### The functions

#### arrayFrom

`(object: any, [mapFn: (item: any, index: number, array: any[]) -> void, thisArg: any]) -> any[]`

Returns an array from any object that can be converted to an array (e.g. an array-like object). Optional `mapFn` transforms every element of the array, and optional `thisArg` sets the context for `mapFn`.

#### isArray

`(object: any) -> boolean`

Determine if an object is an array.

#### isArrayLike

`(object: any) -> boolean`

Determine if an object is array-like, e.g. has a length property and items stored in numeric indexes.

#### isBoolean

`(value: any) -> boolean`

Determine if a value is a boolean value.

#### isNil

`(value: any) -> boolean`

Determine if a value is `null` or `undefined`.

#### isNull

`(value: any) -> boolean`

Determine if a value is specifically null.

#### isUndefined

`(value: any) -> boolean`

Determine if a value is specifically undefined.

#### nilDefault

`(value: any, default: any) -> any`

If a value is null or undefined, specify a default value to return. Otherwise, return the value itself.

#### handleNegativeIndex

`(index: number, seq: string|array|object) -> number`

If second parameter is object, must be an array-like object or other iterable with numeric indexes.

Converts a negative index into its corresponding positive index relative to a sequence's length. Returns zero or positive index as-is.

#### isBigInt

`(value: any) -> boolean`

Determine if a value is a BigInteger.

#### isNumber

`(value: any) -> number`

Determine if a value is a number.

#### valueOf

`(value: any) -> number`

Convert a value into its numeric equivalent.

CAUTION: will return `NaN` if the value has no direct numeric equivalent. Will return `Infinity` or `-Infinity` if the value is too large or small to be represented by a JavaScript number.

#### callInternalToString

`(object: any) -> string

Calls `Object.prototype.toString` with `object` as the context.

#### classToString

`(object: any) -> string`

Gets the class or constructor name. Works with anonymous function expressions bound to variables, but the following return an empty string:

```js
let o = new function() {};
```

... so probably DON'T DO THAT.

#### forAllProperties

`(object: any, fn: (property: any[, key: string, object: any]) -> void|boolean) -> void`

Run `fn` callback on all own properties of any object. Breaks out of the loop if the callback returns false.

#### forEachProperty

`(object: any, fn: (property: any[, key: string, object: any]) -> void|boolean) -> void`

Run `fn` callback on the enumerable own properties of any object. Breaks out of the loop if the callback returns false.

#### getClass

`(object: any) -> function`

Get the constructor function or class used to create an object.

#### getOwn

`(object: any, property: string) -> any`

If an object has an own property, retrieve it. Otherwise returns `false`.

#### hasOwn

`(object: any, property: string) -> boolean`

Determine if an object has an own property.

#### ownPropertyNames

`(object: any) -> string[]`

Return an array of all an object's own string property names.

#### setProperty

`(target: object, name: string, value: any[, enumerable: boolean|undefined, writable: boolean|undefined]) -> void`

Sets a property and its attributes on a target object.

#### isRegExp

`(value: any) -> boolean`

Determine if a value is a RegExp.

#### coerceToString

`(value: any) -> string`

If a value is not a string, coerce it to its string representation.

#### isString

`(value: any) -> boolean`

Determine if a value is a string.

#### isSymbol

`(value: any) -> boolean`

Determine if a value is a Symbol.

#### isDefined

`(value: any) -> boolean`

Determine if a value is defined.
