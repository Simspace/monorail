"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useControlledDropdown = exports.useAsSelect = exports.useAsFilter = void 0;

var _downshift = _interopRequireDefault(require("downshift"));

var _Do = require("fp-ts-contrib/lib/Do");

var _Option = require("fp-ts/lib/Option");

var _react = require("react");

var _useDebounce = require("use-debounce");

var _util = require("util");

var _typeGuards = require("../../sharedHelpers/typeGuards");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useAsFilter = (collection, parser) => {
  /** Filtered Items on search **/
  const getItems = (0, _react.useCallback)(text => !(0, _typeGuards.isEmptyString)(text) ? collection.filter(parser.includes(text)) : collection, [collection, parser]);

  const stateReducer = () => changes => {
    switch (changes.type) {
      case _downshift.default.stateChangeTypes.controlledPropUpdatedSelectedItem:
        return { ...changes,
          inputValue: ''
        };

      case _downshift.default.stateChangeTypes.changeInput:
        return { ...changes,
          isOpen: true
        };

      default:
        return changes;
    }
  };
  /** Handle keyboard input for Filter dropdown */


  const onInputChange = (inputValue, {
    selectedItem,
    setHighlightedIndex
  }) => {
    const items = getItems(inputValue);
    const selectedIndex = (0, _Option.fromNullable)(selectedItem).map(item => items.indexOf(item)).filter(index => index >= 0).getOrElse(items.findIndex(parser.isActive));
    setHighlightedIndex(selectedIndex, {
      isOpen: true
    });
  };
  /** Handle input text change */


  const onStateChange = (options, downshiftProps) => {
    switch (options.type) {
      case _downshift.default.stateChangeTypes.changeInput:
        if (!(0, _util.isUndefined)(options.inputValue)) {
          onInputChange(options.inputValue || '', downshiftProps);
        }

        break;

      default:
        break;
    }
  };

  return {
    getItems,
    downshiftProps: {
      onStateChange
    },
    stateReducer
  };
};

exports.useAsFilter = useAsFilter;

const useAsSelect = (collection, parser) => {
  /** Input text value **/
  // Only used for Non Searchable
  const [inputText, setInputText] = (0, _react.useState)('');
  const [clearInputTextDebounced] = (0, _useDebounce.useDebouncedCallback)(() => setInputText(''), 750);

  const updateInputText = text => {
    clearInputTextDebounced();
    setInputText(text);
  };

  const getReducedStateForSelect = state => changes => {
    switch (changes.type) {
      case _downshift.default.stateChangeTypes.controlledPropUpdatedSelectedItem:
        return { ...changes,
          inputValue: state.inputValue
        };

      case _downshift.default.stateChangeTypes.changeInput:
        return { ...changes,
          isOpen: state.isOpen
        };

      default:
        return changes;
    }
  };

  const stateReducer = state => changes => {
    const reducedState = getReducedStateForSelect(state)(changes);

    if (reducedState.inputValue) {
      updateInputText(reducedState.inputValue);
    }

    return reducedState;
  };
  /** Handle keyboard input for Select dropdown */


  const getIndexByTextMatch = (text, items) => {
    const activeItems = items.filter(parser.isActive);
    const index = activeItems.findIndex(parser.includes(text));
    return index >= 0 && activeItems.length !== items.length ? items.indexOf(activeItems[index]) : index;
  };

  const onInputChange = (inputValue = '', downshiftProps) => {
    const {
      isOpen,
      setHighlightedIndex,
      selectItem
    } = downshiftProps;

    if (!(0, _typeGuards.isEmptyString)(inputValue)) {
      const index = getIndexByTextMatch(inputValue, collection);

      if (index >= 0) {
        if (isOpen) {
          setHighlightedIndex(index);
        } else {
          selectItem(collection[index], {
            inputValue
          });
        }
      }
    }
  };

  const onStateChange = (options, downshiftProps) => {
    switch (options.type) {
      case _downshift.default.stateChangeTypes.changeInput:
        if (!(0, _util.isUndefined)(options.inputValue)) {
          onInputChange(options.inputValue || '', downshiftProps);
        }

        break;

      default:
        break;
    }
  };

  return {
    getItems: () => collection,
    downshiftProps: {
      onStateChange,
      inputValue: inputText
    },
    stateReducer
  };
};

exports.useAsSelect = useAsSelect;

const useControlledDropdown = props => {
  const {
    value,
    collection,
    parser
  } = props;
  /** Selected Dropdown Item **/

  const [selectedItem, setSelectedItem] = (0, _react.useState)(_Option.none);

  const hasItemChanged = (prevItem, newItem) => prevItem.alt(newItem).fold(false, () => (0, _Do.Do)(_Option.option).bind('a', prevItem).bind('b', newItem).return(({
    a,
    b
  }) => !parser.compare(a)(b)).getOrElse(true));

  const updateSelectedItem = item => {
    if (hasItemChanged(selectedItem, item)) {
      setSelectedItem(item);
    }
  };

  const compare = (prevItem, item) => hasItemChanged((0, _Option.fromNullable)(prevItem), (0, _Option.fromNullable)(item));
  /* eslint-disable react-hooks/exhaustive-deps */


  (0, _react.useEffect)(() => {
    const newValue = (0, _Option.fromNullable)(value);
    /*
     * We need to check if the value or
     * the selectedItem are in the collection.
     */

    const updatedItem = selectedItem.chain(item => newValue.filter(parser.compare(item))).alt(newValue).mapNullable(item => collection.find(parser.compare(item)));
    updateSelectedItem(updatedItem);
  }, [value, collection]);
  /* eslint-enable react-hooks/exhaustive-deps */

  return [selectedItem, setSelectedItem, compare];
};

exports.useControlledDropdown = useControlledDropdown;