"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormMultiSelectInput = FormMultiSelectInput;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _downshift = _interopRequireDefault(require("downshift"));

var O = _interopRequireWildcard(require("fp-ts/lib/Option"));

var _pipeable = require("fp-ts/lib/pipeable");

var _flex = require("../../helpers/flex");

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _inputTypes = require("../../visualComponents/inputs/inputTypes");

var _Label = require("../../visualComponents/inputs/Label");

var _FormMultiSelectInput = require("./FormMultiSelectInput.hooks");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const ENTER_KEY_VALUE = 'Enter';
const ESCAPE_KEY_VALUE = 'Escape';

const FlexColumn = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "FormMultiSelectInput__FlexColumn",
  componentId: "sc-1y71s6t-0"
})(["", ";margin-bottom:24px;width:100%;"], (0, _flex.flexFlow)('column'));
/**
 * Provides the functionality behind creating an input of some kind that will
 * filter a set of suggestions or can be used to create new values by pressing
 * the 'Enter' key. Multiple UIs have been mentioned by design, so this
 * defers UI concerns to render props to leave it open for extension.
 *
 * It has been attempted to try to satisfy the Open-Closed Principle - the "O" in SOLID -
 * to make it easy enough to build forms with multiple UI variants with the same
 * multi-select functionality.
 *
 * @example
 * <section css={containerCss}>
 * --------------------------
 * |  renderSelectedOptions |
 * --------------------------
 * |  renderInput           |
 * --------------------------
 * |  renderSuggestions     |
 * --------------------------
 * </section>
 */


var _StyledSection = /*#__PURE__*/(0, _styledComponents.default)("section").withConfig({
  displayName: "FormMultiSelectInput___StyledSection",
  componentId: "sc-1y71s6t-1"
})(["", ""], p => p._css);

function FormMultiSelectInput(props) {
  const {
    containerCss,
    defaultHighlightedIndex,
    disabled,
    display,
    label,
    renderInput,
    renderSelectedOptions,
    renderSuggestions,
    required = false,
    searchValueToItem,
    selectedOptions
  } = props;
  const {
    addItem,
    checkIsHighlighted,
    removeOption,
    searchValue,
    setSearchValue,
    suggestions
  } = (0, _FormMultiSelectInput.useFormMultiSelectInput)(props);
  return /*#__PURE__*/_react.default.createElement(_downshift.default, {
    inputValue: searchValue,
    onSelect: addItem,
    defaultHighlightedIndex: defaultHighlightedIndex
  }, ({
    getInputProps,
    getItemProps,
    getRootProps,
    highlightedIndex,
    isOpen,
    toggleMenu
  }) => {
    const defaultInputProps = {
      disabled,
      onFocus: () => toggleMenu({
        isOpen: true
      }),
      onBlur: ev => {
        toggleMenu({
          isOpen: false
        });
        setSearchValue('');
        ev.target.value = '';
      },
      onChange: ev => setSearchValue(ev.currentTarget.value),
      onKeyDown: ev => {
        const notSelectingHighlightedOption = highlightedIndex === null;
        const enterKeyWasPressed = ev.key === ENTER_KEY_VALUE;

        if (notSelectingHighlightedOption && enterKeyWasPressed) {
          // Don't trigger a form submit
          ev.preventDefault();
          (0, _pipeable.pipe)(ev.currentTarget.value, val => val.replace(/\s+/g, ' ').trim(), // remove excess whitespace
          O.fromPredicate(_typeGuards.isNonEmptyString), // confirm searchValue is non-empty
          O.chain(searchValueToItem), O.fold(() => {}, v => {
            addItem(v);
            ev.currentTarget.value = '';
          }));
        }
      },
      placeholder: 'Type any tag...'
    };
    const suggestionInfo = {
      getSuggestionProps: getItemProps,
      isHighlighted: option => checkIsHighlighted(option, highlightedIndex),
      isOpen: isOpen && suggestions.length > 0 && searchValue.length > 0,
      searchValue,
      isFocused: isOpen,
      selectedOptions
    };
    const sectionProps = getRootProps();
    return /*#__PURE__*/_react.default.createElement(FlexColumn, null, /*#__PURE__*/_react.default.createElement(_Label.Label, {
      label: label,
      required: required,
      display: display
    }), /*#__PURE__*/_react.default.createElement(_StyledSection, _extends({}, sectionProps, {
      _css: containerCss
    }), renderSelectedOptions(selectedOptions, removeOption), display === _inputTypes.DisplayType.Edit && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, renderInput(getInputProps(defaultInputProps)), renderSuggestions(suggestions, suggestionInfo))));
  });
}