"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseAsDropdownItem = exports.nextHighlightedIndex = exports.getHighlightedItem = exports.isDropdownItem = void 0;

var _Array = require("fp-ts/lib/Array");

var _Option = require("fp-ts/lib/Option");

var _typeGuards = require("../../sharedHelpers/typeGuards");

// DropdownItemType Typeguard
const isDropdownItem = item => (0, _typeGuards.hasKey)(item, 'value') && (0, _typeGuards.hasKey)(item, 'label');

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

const getHighlightedItem = (items, {
  highlightedIndex
}) => (0, _Option.fromNullable)(highlightedIndex).filter(index => index >= 0).chain(index => (0, _Array.lookup)(index, items));

exports.getHighlightedItem = getHighlightedItem;

const nextHighlightedIndex = (key, initial, max) => {
  const index = getKeyboardMoveIndex(key, initial, max);
  return index < 0 ? 0 : index >= max ? max : index;
};

exports.nextHighlightedIndex = nextHighlightedIndex;

const parseAsDropdownItem = item => item && isDropdownItem(item) ? item : {
  value: String(item),
  label: String(item),
  disabled: false
};

exports.parseAsDropdownItem = parseAsDropdownItem;