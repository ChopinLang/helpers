function arrayFrom(object, mapFn) {
  return Array.from(object, mapFn);
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

module.exports = { arrayFrom, isArray, isArrayLike };
