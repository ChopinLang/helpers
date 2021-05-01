# Chopin Helpers

A collection of useful helper functions used internally in the Chopin compiler.

## Installation

```sh
npm install @chopinlang/helpers
```
## Usage

Include the object in your project:

```js
const helpers = require("helpers");

// You can also destructure your assignment to only get the functions you need
const { isArray, isNumber, handleNegativeIndex } = require("helpers");
```

## Functions

### Array

#### arrayFrom

`(object: any, [mapFn: (item: any, index: number, array: any[]) -> void, thisArg: any]) -> any[]`

Returns an array from any object that can be converted to an array (e.g. an array-like object). Optional `mapFn` transforms every element of the array, and optional `thisArg` sets the context for `mapFn`.

#### first

`(array: any[]) -> any`

Returns the first item of an array.

#### isArray

`(object: any) -> boolean`

Determine if an object is an array.

#### isArrayLike

`(object: any) -> boolean`

Determine if an object is array-like, e.g. has a length property and items stored in numeric indexes.

#### last

`(array: any[]) -> any`

Returns the last item of an array.

#### toArray

`(iterable: object[Symbol.iterator]) -> any[]`

Converts an iterable object (array-like object) to an array.

### Boolean

#### isBoolean

`(value: any) -> boolean`

Determine if a value is a boolean value.

### Function

#### curry

`(fn) -> fn`

Auto-curry a function.

#### curryN

`(length: number, fn) -> fn`

Curry a function with specified arity of `length`.

#### curriedApply

`(args: any[], fn) -> fn`

Transform a function that takes multiple arguments into one that takes an array.

#### pipe

`(val: any, fns: function[]) -> any`

Pipe a value through a series of functions

#### pipeFns

`(fns: ...function[]) -> function`

Compose a series of functions from left-to-right.

#### withFunctionName

`(name: string, fn) -> function`

Add a `name` property to a function.

### Null and Undefined

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

### Numeric

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

### Object

#### assign

`(objects: object[]) -> object`

Shallowly copies properties of each successive object to the first object in the order they are passed into the function. Mutates the first object.

#### callInternalToString

`(object: any) -> string

Calls `Object.prototype.toString` with `object` as the context.

#### classToString

`(object: any) -> string`

Gets the class or constructor name. Works with anonymous function expressions bound to variables, but the following returns an empty string:

```js
let o = new (function () {})();
```

... so probably DON'T DO THAT.

#### clone

`(object: any) -> any`

Make a clone of an object. If the object has a `clone` method, it uses that. Otherwise, it recursively copies an object's own properties. Note that `__proto__` is _not_ an own property.

#### deepStrictEqual

`(a: any, b: any) -> boolean`

Recursively checks all properties of both objects for strict equality (`===`).

#### extend

`(a: object, b: object) -> object`

Copies `b`'s properties shallowly onto `a`. Mutates `a`.

#### extendWithAll

`(to: object, froms: object[]) -> object`

Copies each property on every object in `froms` onto `to`. Goes from left-to-right, e.g. in case of conflicts a later argument's property will overwrite one from an earlier object. Mutates `to`.

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

#### getProto

`(object: any) -> any`

Get the prototype of an object.

#### hasOwn

`(object: any, property: string) -> boolean`

Determine if an object has an own property.

#### hasProperty

`(object: any, property: string) -> boolean`

Determine if an object has a property anywhere in its prototype chain.

#### isObject

`(value: any) -> boolean`

Determine if a value is an instance of Object. Also detects objects with `null` prototypes.

#### isObjectType

`(value: any) -> boolean`

Determine if `value typeof "object"` is true.

#### mapObject

`(object: object, fn: (any) -> any) -> object`

Returns a new object with the same keys as the source object and a callback function applied to each of the source object's properties.

#### objectIs

`(a: any, b: any) -> boolean`

Checks if a and b are the exact same object. If primitive values and not `NaN`, checks for strict equality. Also correctly checks if `NaN` equals `NaN`.

#### ownPropertyNames

`(object: any) -> string[]`

Return an array of all an object's own string property names.

#### setAccessor

`(target: object, key: string[, { getter: () -> any, setter: (...args: any) -> any }]) -> void`

Sets a getter and setter (either or both optional) on `target[key]`.

#### setProperty

`(target: object, name: string, value: any[, enumerable: boolean|undefined, writable: boolean|undefined]) -> void`

Sets a property and its attributes on a target object.

### RegExp

#### isRegExp

`(value: any) -> boolean`

Determine if a value is a RegExp.

### String

#### coerceToString

`(value: any) -> string`

If a value is not a string, coerce it to its string representation.

#### isString

`(value: any) -> boolean`

Determine if a value is a string.

#### trim

`(string: string) -> string`

Trims whitespace from both sides of a string.

### Symbol

#### isSymbol

`(value: any) -> boolean`

Determine if a value is a Symbol.

### Other Values

#### isDefined

`(value: any) -> boolean`

Determine if a value is defined.

## Constants

### \_\_

Use as a placeholder for `curry` and `curryN`.
