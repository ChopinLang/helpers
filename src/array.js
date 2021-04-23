function arrayFrom(object, mapFn) {
  return Array.from(object, mapFn);
}

function first(array) {
  return array[0];
}

function isArray(object) {
  return Array.isArray(object);
}

function isArrayLike(object) {
  return (
    isArray(object) ||
    (!!object &&
      typeof object == "object" &&
      typeof object.length == "number" &&
      object.length === 0) ||
    (object.length > 0 && object.length - 1 in object)
  );
}

function last(array) {
  return array[array.length - 1];
}

function toArray(iterable) {
  return [...iterable];
}

module.exports = { arrayFrom, first, isArray, isArrayLike, last, toArray };
