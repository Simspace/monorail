"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.highlightSearchValue = highlightSearchValue;
exports.GenericTagInput = GenericTagInput;
exports.TagInput = exports.getSuggestions = exports.eqNormalizedString = exports.normalize = exports.renderSuggestions = exports.shouldShowNewSuggestion = exports.renderSuggestibleInput = exports.renderSelectedOptions = exports.TagInputItem = exports.containerCss = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Array = require("fp-ts/lib/Array");

var _Eq = require("fp-ts/lib/Eq");

var _Option = require("fp-ts/lib/Option");

var _react = _interopRequireDefault(require("react"));

var _color = require("../../helpers/color");

var _ReadonlyArray = require("../../sharedHelpers/ReadonlyArray");

var _flex = require("../../helpers/flex");

var _exports = require("../../helpers/exports");

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _Icon = require("../icon/Icon");

var _Text = require("../typography/Text");

var _Divider = require("../divider/Divider");

var _FormMultiSelectInput = require("../../metaComponents/formMultiSelectInput/FormMultiSelectInput");

var _buttonTypes = require("../buttons/buttonTypes");

var _IconButton = require("../buttons/IconButton");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const focusedBorder =
/*#__PURE__*/
(0, _styledComponents.css)(["border:1px solid ", ";"], (0, _color.getColor)(_color.Colors.BrandLightBlue));
const containerCss =
/*#__PURE__*/
(0, _styledComponents.css)(["", ";border-radius:4px;border:1px solid ", ";width:256px;position:relative;background-color:", ";transition:150ms;:focus{", ";}:focus-within{", ";}"], (0, _flex.flexFlow)('column'), (0, _color.getColor)(_color.Colors.Gray12), (0, _color.getColor)(_color.Colors.White), focusedBorder, focusedBorder);
exports.containerCss = containerCss;

const SuggestibleInput =
/*#__PURE__*/
_styledComponents.default.input.withConfig({
  displayName: "TagInput__SuggestibleInput",
  componentId: "sc-1qql40e-0"
})(["order:1;border:0;padding:4px 6px;border-radius:4px;input{color:", ";}&:focus{outline:none;}::placeholder{color:", ";font-style:italic;}"], (0, _color.getColor)(_color.Colors.Gray89), (0, _color.getColor)(_color.Colors.Gray54));

const SelectedOptions =
/*#__PURE__*/
_styledComponents.default.ol.withConfig({
  displayName: "TagInput__SelectedOptions",
  componentId: "sc-1qql40e-1"
})(["order:2;", ";list-style:none;margin:0;padding:0;overflow-x:hidden;overflow-y:auto;"], (0, _flex.flexFlow)('row', 'wrap'));

const SelectedOption =
/*#__PURE__*/
_styledComponents.default.li.withConfig({
  displayName: "TagInput__SelectedOption",
  componentId: "sc-1qql40e-2"
})(["", ";justify-content:space-between;align-items:center;border-radius:4px;background-color:", ";color:", ";margin:0 4px 4px;padding-right:", ";max-width:calc(100% - 8px);width:", ";transition:150ms;:focus{", ";}", "{cursor:pointer;margin:0;border-radius:4px;height:24px;width:24px;padding:4px 0 0 4px;}:hover{", "{color:", ";}}"], (0, _flex.flexFlow)('row'), (0, _color.getColor)(_color.Colors.BrandLightBlue, 0.1), (0, _color.getColor)(_color.Colors.Gray89), props => props.fullWidth ? '6px' : '0', props => props.fullWidth ? '100%' : 'auto', focusedBorder, _Icon.Icon, _Icon.Icon, (0, _color.getColor)(_color.Colors.BrandLightBlue));

const SelectedOptionText =
/*#__PURE__*/
(0, _styledComponents.default)(_Text.Text).withConfig({
  displayName: "TagInput__SelectedOptionText",
  componentId: "sc-1qql40e-3"
})(["white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:4px 8px;"]);

const Suggestions =
/*#__PURE__*/
_styledComponents.default.aside.withConfig({
  displayName: "TagInput__Suggestions",
  componentId: "sc-1qql40e-4"
})(["transform:", ";background-color:", ";box-shadow:0 3px 5px -1px ", ",0 6px 10px 0 ", ",0 1px 18px 0 ", ";left:4px;list-style:none;margin:0;max-height:256px;max-width:248px;overflow-x:hidden;overflow-y:auto;padding:0 0 4px 0;pointer-events:", ";position:absolute;right:4px;top:", ";visibility:", ";z-index:1;"], props => props.position === 'top' ? 'translateY(-100%)' : 'none', (0, _color.getColor)(_color.Colors.White), (0, _color.getColor)(_color.Colors.Black, 0.2), (0, _color.getColor)(_color.Colors.Black, 0.14), (0, _color.getColor)(_color.Colors.Gray12), props => props.isOpen ? 'auto' : 'none', props => props.position === 'top' ? 'auto' : '100%', props => props.isOpen ? 'visible' : 'hidden');

var _StyledDiv =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "TagInput___StyledDiv",
  componentId: "sc-1qql40e-5"
})(["", ";justify-content:space-between;padding:4px 8px;margin:4px 0;background:", ";color:", ";", ";"], p => p._css, p => p._css2, p => p._css3, p => p._css4);

var _StyledIconButton =
/*#__PURE__*/
(0, _styledComponents.default)(_IconButton.IconButton).withConfig({
  displayName: "TagInput___StyledIconButton",
  componentId: "sc-1qql40e-6"
})(["margin-left:8px;"]);

const TagInputItem = props => _react.default.createElement(_StyledDiv, {
  _css: (0, _flex.flexFlow)('row'),
  _css2: (0, _color.getColor)(_color.Colors.BrandLightBlue, 0.12),
  _css3: (0, _color.getColor)(_color.Colors.Gray89),
  _css4: (0, _exports.borderRadius)(_exports.BorderRadius.Small)
}, props.item, _react.default.createElement(_StyledIconButton, {
  size: _buttonTypes.ButtonSize.Dense,
  display: _buttonTypes.ButtonDisplay.Chromeless,
  icon: "close",
  onClick: props.handleClick
}));

exports.TagInputItem = TagInputItem;

const SuggestionList =
/*#__PURE__*/
_styledComponents.default.ol.withConfig({
  displayName: "TagInput__SuggestionList",
  componentId: "sc-1qql40e-7"
})(["list-style:none;margin:0;padding:0;"]);

const Suggestion =
/*#__PURE__*/
_styledComponents.default.li.withConfig({
  displayName: "TagInput__Suggestion",
  componentId: "sc-1qql40e-8"
})(["cursor:pointer;padding:4px 16px;:hover{background-color:", ";}", ""], (0, _color.getColor)(_color.Colors.SelectionSecondaryOnHover, 0.54), props => props.isHighlighted ? (0, _styledComponents.css)(["background-color:", ";"], (0, _color.getColor)(_color.Colors.SelectionSecondaryOnHover, 0.54)) : ``);

var _StyledLi =
/*#__PURE__*/
_styledComponents.default.li.withConfig({
  displayName: "TagInput___StyledLi",
  componentId: "sc-1qql40e-9"
})(["width:100%;"]);

const selectedOptionComponent = (removeOption, tag) => {
  switch (tag) {
    case 'text':
      {
        return value => _react.default.createElement(_StyledLi, {
          key: value
        }, _react.default.createElement(_Text.Text, {
          fontWeight: _exports.FontWeights.Book,
          fontSize: _exports.FontSizes.Title5
        }, value));
      }

    case 'fullWidth':
      {
        return value => _react.default.createElement(SelectedOption, {
          key: value,
          fullWidth: true
        }, _react.default.createElement(SelectedOptionText, {
          fontWeight: _exports.FontWeights.Book,
          fontSize: _exports.FontSizes.Title5
        }, value), _react.default.createElement(_Icon.Icon, {
          onClick: () => removeOption(value),
          icon: "clear"
        }));
      }

    default:
      {
        return value => _react.default.createElement(SelectedOption, {
          key: value
        }, _react.default.createElement(SelectedOptionText, {
          fontWeight: _exports.FontWeights.Book,
          fontSize: _exports.FontSizes.Title5
        }, value), _react.default.createElement(_Icon.Icon, {
          onClick: () => removeOption(value),
          cssOverrides: `margin: 4px;`,
          icon: "clear"
        }));
      }
  }
};

const renderSelectedOptions = tag => (selectedOptions, removeOption) => _react.default.createElement(SelectedOptions, null, (0, _ReadonlyArray.unsafeCoerceToArray)(selectedOptions).map(selectedOptionComponent(removeOption, tag)));

exports.renderSelectedOptions = renderSelectedOptions;

const renderSuggestibleInput = placeholder => props => _react.default.createElement(SuggestibleInput, _extends({}, props, {
  placeholder: placeholder
}));

exports.renderSuggestibleInput = renderSuggestibleInput;

const shouldShowNewSuggestion = (searchValue, suggestions, selectedOptions) => {
  const regExpChar = /[\\^$.*+?()[\]{}|]/g; // from lodash escapeRegExp function

  const searchValueRegex = new RegExp(`^${searchValue.replace(regExpChar, '\\$&')}$`, 'ig');
  const hasPerfectMatch = suggestions.findIndex(s => searchValueRegex.test(s)) > -1;
  const hasBeenSelected = suggestions.some(s => (0, _Array.elem)(_Eq.eqString)(s, (0, _ReadonlyArray.unsafeCoerceToArray)(selectedOptions)));
  return searchValue.length > 0 && !hasPerfectMatch && !hasBeenSelected;
};

exports.shouldShowNewSuggestion = shouldShowNewSuggestion;

var _StyledText =
/*#__PURE__*/
(0, _styledComponents.default)(_Text.Text).withConfig({
  displayName: "TagInput___StyledText",
  componentId: "sc-1qql40e-10"
})(["display:block;color:", ";"], p => p._css5);

const renderSuggestions = position => (suggestions, info) => {
  const {
    isFocused,
    searchValue,
    isHighlighted,
    getSuggestionProps,
    selectedOptions
  } = info;
  const hasHighlightedSuggestion = suggestions.some(s => isHighlighted(s));
  const showNewSuggestion = shouldShowNewSuggestion(searchValue, suggestions, selectedOptions);
  return _react.default.createElement(Suggestions, {
    isOpen: isFocused && searchValue.length > 0,
    position: position
  }, _react.default.createElement(_StyledText, {
    fontWeight: _exports.FontWeights.Medium,
    fontSize: _exports.FontSizes.Title5,
    margin: "12px 16px 4px 16px",
    _css5: (0, _color.getColor)(_color.Colors.Gray38)
  }, suggestions.length > 0 ? 'Suggestions' : 'No Matches'), _react.default.createElement(SuggestionList, null, suggestions.map((s, i) => _react.default.createElement(Suggestion, _extends({}, getSuggestionProps({
    item: s
  }), {
    key: `${s}-${i}`,
    isHighlighted: hasHighlightedSuggestion && isHighlighted(s)
  }), searchValue.length > 0 ? highlightSearchValue(s, searchValue) : s)), showNewSuggestion && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("li", {
    key: "divider"
  }, _react.default.createElement(_Divider.Divider, null)), _react.default.createElement(Suggestion, _extends({}, getSuggestionProps({
    item: searchValue
  }), {
    key: 'generic-search-value',
    isHighlighted: !hasHighlightedSuggestion
  }), _react.default.createElement("strong", null, searchValue), " (New Value)"))));
};

exports.renderSuggestions = renderSuggestions;

function highlightSearchValue(labelName, searchValue) {
  return findHighlightedSearchValues(labelName, normalize(searchValue)).map(({
    highlighted,
    value
  }, i) => highlighted ? _react.default.createElement("strong", {
    key: `${value}-${i}`
  }, value) : value);
}
/**
 * Finds what parts of a given string matches the given search value.
 */


function findHighlightedSearchValues(value, searchValue) {
  if (eqNormalizedString.equals(value, searchValue)) {
    return [{
      highlighted: true,
      value
    }];
  }

  const regExpChar = /[\\^$.*+?()[\]{}|]/g; // from lodash escapeRegExp function

  const regex = new RegExp(`${searchValue.replace(regExpChar, '\\$&')}`, 'ig');
  const startParts = [];
  const indexedParts = Array.from(value.matchAll(regex)).reduce((acc, match) => {
    const startIndex = match.index;
    const before = value.slice(acc.index, startIndex);
    const endIndex = startIndex + match[0].length;
    const matchedText = value.slice(startIndex, endIndex);
    return {
      index: endIndex,
      parts: [...acc.parts, {
        highlighted: false,
        value: before || ''
      }, {
        highlighted: true,
        value: matchedText
      }]
    };
  }, {
    index: 0,
    parts: startParts
  });
  const after = value.slice(indexedParts.index);
  return after ? [...indexedParts.parts, {
    highlighted: false,
    value: after
  }] : indexedParts.parts;
}

const normalize = str => str.trim().toLocaleLowerCase();

exports.normalize = normalize;
const eqNormalizedString = (0, _Eq.contramap)(normalize)(_Eq.eqString);
exports.eqNormalizedString = eqNormalizedString;

const getSuggestions = selectedLabels => (searchValue, labels) => labels.filter(l => includesSearchValue(l, searchValue) && !(0, _Array.elem)(eqNormalizedString)(l, (0, _ReadonlyArray.unsafeCoerceToArray)(selectedLabels)));

exports.getSuggestions = getSuggestions;

const includesSearchValue = (value, searchValue) => normalize(value).includes(normalize(searchValue));

function GenericTagInput({
  placeholder,
  cssOverrides = '',
  selectedOptions,
  options,
  eq,
  ...otherProps
}) {
  return _react.default.createElement(_FormMultiSelectInput.FormMultiSelectInput, _extends({
    containerCss: containerCss.concat(cssOverrides),
    defaultHighlightedIndex: 0,
    renderInput: renderSuggestibleInput(placeholder),
    eq: eq,
    selectedOptions: selectedOptions,
    options: options
  }, otherProps));
}

const TagInput = ({
  tag,
  selectedOptions,
  eq = eqNormalizedString,
  showSuggestions = true,
  position = 'bottom',
  searchValueToItem = _Option.some,
  ...otherProps
}) => _react.default.createElement(GenericTagInput, _extends({
  eq: eq,
  renderSelectedOptions: renderSelectedOptions(tag),
  getSuggestedValues: getSuggestions(selectedOptions),
  renderSuggestions: showSuggestions ? renderSuggestions(position) : () => null,
  selectedOptions: selectedOptions,
  validateItem: (0, _Option.fromPredicate)(_typeGuards.isNonEmptyString),
  searchValueToItem: searchValueToItem
}, otherProps));

exports.TagInput = TagInput;