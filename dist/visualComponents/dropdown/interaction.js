"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createKeyboardInteraction = void 0;

var _downshift = _interopRequireDefault(require("downshift"));

var _Array = require("fp-ts/lib/Array");

var O = _interopRequireWildcard(require("fp-ts/lib/Option"));

var _pipeable = require("fp-ts/lib/pipeable");

var _helpers = require("./helpers");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createKeyboardInteraction = options => parser => {
  const {
    openOnInteraction = false
  } = options || {};

  const stateReducer = state => changes => {
    switch (changes.type) {
      case _downshift.default.stateChangeTypes.keyDownEnter:
        return { ...changes,
          inputValue: ''
        };

      case _downshift.default.stateChangeTypes.keyDownEscape:
      case _downshift.default.stateChangeTypes.blurInput:
        return {
          type: changes.type,
          inputValue: '',
          isOpen: false
        };

      case _downshift.default.stateChangeTypes.changeInput:
        return { ...changes,
          isOpen: changes.isOpen || state.isOpen || openOnInteraction,
          highlightedIndex: state.highlightedIndex
        };

      default:
        return changes;
    }
  }; // Keyboard event handling and interaction


  const cursorInteraction = (key, state) => {
    const {
      items,
      downshiftProps
    } = state;
    const {
      highlightedIndex,
      isOpen,
      setHighlightedIndex,
      selectItem,
      selectedItem
    } = downshiftProps;
    const activeItems = items.filter(parser.isActive);
    const initialIndex = (0, _pipeable.pipe)(O.fromNullable(highlightedIndex), O.chain(index => (0, _Array.lookup)(index, items)), O.alt(() => O.fromNullable(selectedItem)), O.fold(() => -1, item => activeItems.indexOf(item)));
    const indexValue = (0, _helpers.nextHighlightedIndex)(key, initialIndex, activeItems.length - 1);

    if (isOpen || openOnInteraction) {
      setHighlightedIndex(items.indexOf(activeItems[indexValue]), {
        isOpen: true
      });
    } else {
      selectItem(activeItems[indexValue], {
        inputValue: '',
        isOpen: false
      });
    }
  };

  const eventHandler = state => event => {
    const {
      items,
      downshiftProps
    } = state;
    const {
      isOpen,
      selectedItem,
      selectHighlightedItem,
      toggleMenu
    } = downshiftProps;

    switch (event.key) {
      case 'Enter':
        if (isOpen) {
          selectHighlightedItem({
            inputValue: ''
          });
        } else {
          toggleMenu({
            type: _downshift.default.stateChangeTypes.keyDownEnter,
            highlightedIndex: (0, _pipeable.pipe)(O.fromNullable(selectedItem), O.fold(() => -1, item => items.indexOf(item)))
          });
        }

        event.preventDownshiftDefault = true;
        event.preventDefault();
        break;

      case 'Home':
      case 'End':
      case 'PageDown':
      case 'PageUp':
      case 'ArrowUp':
      case 'ArrowDown':
        // Update Highlighted item
        cursorInteraction(event.key, state);
        event.preventDownshiftDefault = true;
        event.preventDefault();
        break;

      default:
        return;
    }
  };

  return {
    eventHandler,
    stateReducer
  };
};

exports.createKeyboardInteraction = createKeyboardInteraction;