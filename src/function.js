const { _arity, _curry1, _curry2, _curryN } = require("./internal/_function");

/**
 * See {@link https://github.com/ramda/ramda/blob/master/source/curry.js}
 * @ignore
 */
const curry = _curry1(function curry(fn) {
  return curryN(fn.length, fn);
});

/**
 * See {@link https://github.com/ramda/ramda/blob/master/source/curryN.js}
 * @ignore
 */
const curryN = _curry2(function curryN(length, fn) {
  if (length === 1) {
    return _curry1(fn);
  }
  return _arity(length, _curryN(length, [], fn));
});

/**
 * See {@link https://github.com/adobe/ferrum/blob/master/src/functional.js}
 * @ignore
 */
const curriedApply = curry("apply", (args, fn) => fn(...args));

/**
 * See {@link https://github.com/adobe/ferrum/blob/master/src/functional.js}
 * @ignore
 */
const pipe = (val, ...fns) => fns.reduce((v, fn) => fn(v), val);

const pipeFns = (...fns) => (val) => pipe(val, ...fns);

/**
 * See {@link https://github.com/adobe/ferrum/blob/master/src/functional.js}
 * @ignore
 */
function withFunctionName(name, fn) {
  Object.defineProperty(fn, "name", { value: name });
  return fn;
}

module.exports = {
  curry,
  curryN,
  curriedApply,
  pipe,
  pipeFns,
  withFunctionName,
};
