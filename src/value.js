const { isBoolean } = require("./boolean");
const { isNil } = require("./nil");
const { isNumber, isBigInt } = require("./number");
const { isString } = require("./string");
const { isSymbol } = require("./symbol");

function isDefined(parameter) {
  return parameter !== undefined;
}

function isPrimitive(value, type) {
  type = type || typeof value;

  return (
    isNil(value) ||
    isString(value) ||
    isBigInt(value) ||
    isNumber(value) ||
    isBoolean(value) ||
    isSymbol(value)
  );
}

module.exports = { isDefined, isPrimitive };
