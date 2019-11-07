"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nextHighlightedIndex = exports.isDropdownItem = void 0;

var _typeGuards = require("../../sharedHelpers/typeGuards");

// DropdownItemType Typeguard
const isDropdownItem = item => (0, _typeGuards.isObject)(item) && (0, _typeGuards.hasKey)(item, 'value') && (0, _typeGuards.hasKey)(item, 'label');

exports.isDropdownItem = isDropdownItem;

const getKeyboardMoveDelta = key => {
  switch (key) {
    case 'ArrowLeft':
    case 'PageUp':
      return -10;

    case 'ArrowRight':
    case 'PageDown':
      return 10;

    case 'ArrowUp':
      return -1;

    case 'ArrowDown':
      return 1;

    default:
      return 0;
  }
};

const getKeyboardMoveIndex = (key, initial, max) => {
  switch (key) {
    case 'Home':
      return 0;

    case 'End':
      return max;

    default:
      return initial + getKeyboardMoveDelta(key);
  }
};

const nextHighlightedIndex = (key, initial, max) => {
  const index = getKeyboardMoveIndex(key, initial, max);
  return index < 0 ? 0 : index >= max ? max : index;
};

exports.nextHighlightedIndex = nextHighlightedIndex;