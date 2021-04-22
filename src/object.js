function callInternalToString(object) {
  return Object.prototype.toString.call(object);
}

// Will work with an anonymous function expression bound to a variable
// Will NOT work with, e.g. let o = new function() {}; - so DON'T DO THAT
function classToString(object) {
  return object.constructor.name;
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

function hasOwn(object, property) {
  return !!object && Object.prototype.hasOwnProperty.call(object, property);
}

function ownPropertyNames(object) {
  return Object.getOwnPropertyNames(object);
}

function setProperty(target, name, value, enumerable, writable) {
  Object.defineProperty(target, name, {
    value,
    enumerable: !!enumerable,
    configurable: true,
    writable: !!writable,
  });
}

module.exports = {
  callInternalToString,
  classToString,
  forAllProperties,
  forEachProperty,
  getClass,
  getOwn,
  hasOwn,
  ownPropertyNames,
  setProperty,
};
