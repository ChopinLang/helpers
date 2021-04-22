/**
 * A function to determine if an object is a RegExp
 * @ignore
 */
function isRegExp(value) {
  return value instanceof RegExp;
}

module.exports = { isRegExp };
