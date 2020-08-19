"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useFormMultiSelectInput = useFormMultiSelectInput;

var _react = require("react");

var _function = require("fp-ts/lib/function");

var _Array = require("fp-ts/lib/Array");

var _pipeable = require("fp-ts/lib/pipeable");

var _Option = require("fp-ts/lib/Option");

var _ReadonlyArray = require("../../sharedHelpers/ReadonlyArray");

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _inputTypes = require("../../visualComponents/inputs/inputTypes");

function useFormMultiSelectInput(props) {
  const {
    display,
    eq,
    getSuggestedValues,
    onChange,
    options,
    selectedOptions,
    validateItem = (0, _Option.fromPredicate)(_typeGuards.isNotNil),
    modifySetSearchValue = _function.identity
  } = props;
  const [searchValue, setSearchValue_] = (0, _react.useState)('');
  const setSearchValue = (0, _react.useCallback)((0, _function.flow)(modifySetSearchValue, setSearchValue_), [modifySetSearchValue]);
  const checkIsASuggestion = (0, _react.useMemo)(() => as => a => (0, _Array.elem)(eq)(a)(as), [eq]);
  const suggestions = (0, _react.useMemo)(() => // Don't bother running the search in view mode
  display === _inputTypes.DisplayType.View ? [] : (0, _pipeable.pipe)(getSuggestedValues(searchValue, options), _ReadonlyArray.unsafeCoerceToArray, (0, _Array.filter)((0, _pipeable.pipe)(selectedOptions, _ReadonlyArray.unsafeCoerceToArray, checkIsASuggestion, _function.not))), [display, getSuggestedValues, checkIsASuggestion, options, searchValue, selectedOptions]);
  const removeOption = (0, _react.useCallback)(value => onChange(selectedOptions.filter(a => !eq.equals(value, a))), [eq, onChange, selectedOptions]);
  const addItem = (0, _react.useCallback)(item => {
    (0, _pipeable.pipe)(item, validateItem, (0, _Option.fold)(() => {}, item_ => onChange((0, _Array.uniq)(eq)([item_, ...selectedOptions]))));
    setSearchValue('');
  }, [validateItem, setSearchValue, onChange, eq, selectedOptions]);
  const checkIsHighlighted = (0, _react.useCallback)((item, highlightedIndex) => {
    if (highlightedIndex === null) {
      return false;
    }

    return (0, _Option.elem)(eq)(item, (0, _Array.lookup)(highlightedIndex, suggestions));
  }, [eq, suggestions]);
  return {
    searchValue,
    setSearchValue,
    suggestions,
    removeOption,
    addItem,
    checkIsHighlighted
  };
}