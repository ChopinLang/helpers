function callInternalToString(object) {
  return Object.prototype.toString.call(object);
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
  forAllProperties,
  forEachProperty,
  getOwn,
  hasOwn,
  ownPropertyNames,
  setProperty,
};