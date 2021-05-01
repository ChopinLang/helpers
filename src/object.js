const { isArray } = require("./array.js");
const { isBoolean } = require("./boolean.js");
const { isBigInt, isNumber } = require("./number.js");
const { isNil } = require("./nil.js");
const { isString } = require("./string.js");

function assign(...objects) {
  return Object.assign(...objects);
}

function callInternalToString(object) {
  return Object.prototype.toString.call(object);
}

// Will work with an anonymous function expression bound to a variable
// Will NOT work with, e.g. let o = new function() {}; - so DON'T DO THAT
function classToString(object) {
  return object.constructor.name;
}

function clone(object) {
  // Immutable primitive types, builtin Object wrappers or null/undefined
  if (
    isBigInt(object) ||
    isBoolean(object) ||
    isNil(object) ||
    isNumber(object) ||
    isString(object)
  ) {
    return object;
  }
  // If object has its own clone method, use that
  if (typeof object.clone == "function") {
    return object.clone();
  }

  // An Array
  if (isArray(object)) {
    return object.map((item) => clone(item));
  }

  // A Date
  if (object instanceof Date) {
    return new Date(object.valueOf());
  }

  // Cannot clone RegExp
  // TODO: clone RegExp
  if (object instanceof RegExp) {
    throw new TypeError(`Cannot clone RegExp ${object}`);
  }

  return mapObject(object, clone);
}

// TODO: Handle maps and sets
function deepStrictEqual(a, b) {
  // Array equality
  if (isArray(a)) {
    if (!isArray(b)) {
      return false;
    }

    if (a.length !== b.length) {
      return false;
    }

    for (let i = 0; i < a.length; i++) {
      if (!deepStrictEqual(a[i], b[i])) {
        return false;
      }
    }
  } else if (isObject(a)) {
    if (isArray(b) || !isObject(b)) {
      return false;
    }

    for (let key in a) {
      if (!(key in b) || !deepStrictEqual(a[key], b[key])) {
        return false;
      }
    }

    for (let key in b) {
      // Already checked all properties of a, so if it's
      // in both b and a at this point, it's equal
      if (!(key in a)) {
        return false;
      }
    }
  } else if (a instanceof RegExp || a instanceof Date) {
    return a.toString() == b.toString();
  } else {
    return a === b;
  }

  return true;
}

function extend(a, b) {
  for (let key in b) {
    if (hasOwn(b, key)) {
      a[key] = b[key];
    }
  }
  return a;
}

function forAllProperties(object, fn) {
  for (let key of Object.getOwnPropertyNames(object)) {
    if (fn.call(object, obj[key], key, object) === false) {
      break;
    }
  }
}

function forEachProperty(object, fn) {
  for (let key in object) {
    if (!hasOwn(object, key)) {
      continue;
    }
    if (fn.call(object, obj[key], key, object) === false) {
      break;
    }
  }
}

function getClass(object) {
  return object.constructor;
}

function getOwn(object, property) {
  return hasOwn(object, property) && object[property];
}

function getProto(object) {
  return Object.getPrototypeOf(object);
}

function hasOwn(object, property) {
  return !!object && Object.prototype.hasOwnProperty.call(object, property);
}

function isObject(value) {
  if (isNil(value)) {
    return false;
  }

  return value instanceof Object || isNil(getProto(value));
}

function isObjectType(obj, type) {
  return !!obj && (type || typeof obj) === "object";
}

function mapObject(object, fn) {
  const proto = getProto(object);
  let mapped = proto ? Object.create(proto) : Object.create(null);

  for (let key in object) {
    if (hasOwn(object, key)) {
      mapped[key] = fn(object[key]);
    }
  }
  return mapped;
}

function objectIs(a, b) {
  return Object.is(a, b);
}

function ownPropertyNames(object) {
  return Object.getOwnPropertyNames(object);
}

function setAccessor(target, key, { getter, setter } = {}) {
  Object.defineProperty(target, key, {
    get: getter,
    set: setter,
  });
}

function setProperty(
  target,
  name,
  value,
  { enumerable = true, writable = true } = {}
) {
  Object.defineProperty(target, name, {
    value,
    enumerable: !!enumerable,
    configurable: true,
    writable: !!writable,
  });
}

module.exports = {
  assign,
  callInternalToString,
  classToString,
  clone,
  deepStrictEqual,
  extend,
  forAllProperties,
  forEachProperty,
  getClass,
  getOwn,
  getProto,
  hasOwn,
  isObject,
  isObjectType,
  mapObject,
  objectIs,
  ownPropertyNames,
  setAccessor,
  setProperty,
};
