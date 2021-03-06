"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDropdownTypeParser = createDropdownTypeParser;
exports.createCustomParser = void 0;

var _strings = require("../../sharedHelpers/strings");

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _helpers = require("./helpers");

function createDropdownTypeParser(props) {
  const {
    value = item => (0, _helpers.isDropdownItem)(item) ? item.value : String(item),
    label = item => (0, _helpers.isDropdownItem)(item) ? item.label || '' : String(item)
  } = props || {};

  const itemValue = item => (0, _typeGuards.isString)(item) || (0, _typeGuards.isNumber)(item) ? item : value(item);

  const includes = target => source => (0, _strings.includesNoncase)(target)(label(source));

  const compare = target => source => itemValue(source) === itemValue(target);

  const isActive = item => !item.disabled;

  return {
    value: itemValue,
    label,
    isActive,
    // Match by String
    includes,
    // Compare item
    compare
  };
}

const createCustomParser = options => {
  const {
    value,
    label,
    ...override
  } = options;
  const parser = createDropdownTypeParser({
    value,
    label
  });
  return () => ({ ...parser,
    ...override
  });
};

exports.createCustomParser = createCustomParser;