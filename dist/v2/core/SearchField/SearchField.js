"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchField = SearchField;
exports.SearchFieldClearable = SearchFieldClearable;
exports.useClearableSearchField = exports.StyledOutlinedInput = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var MUI = _interopRequireWildcard(require("@material-ui/core"));

var _styledComponents2 = _interopRequireWildcard(require("../../../helpers/styled-components"));

var _typeGuards = require("../../../sharedHelpers/typeGuards");

var _IconButton = require("../IconButton/IconButton");

var Icons = _interopRequireWildcard(require("../../icons/Icons"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// #region CSS
const searchFieldBaseCss = (0, _styledComponents2.css)`
  border-radius: 1000px;
`;
const searchFieldClearCss = (0, _styledComponents2.css)`
  height: unset;
  width: unset;
  color: ${({
  theme
}) => theme.v2.FoundationDollop};

  &:focus,
  &:hover {
    background-color: unset;
    box-shadow: unset;
    color: ${({
  theme
}) => theme.v2.FoundationPinch};
  }

  &:active {
    color: ${({
  theme
}) => theme.v2.FoundationDash};
  }
`; // #endregion CSS

var _StyledMUIInputAdornment = /*#__PURE__*/(0, _styledComponents.default)(MUI.InputAdornment).withConfig({
  displayName: "SearchField___StyledMUIInputAdornment",
  componentId: "wp2l6u-0"
})(["", ""], p => p._css);

var _StyledIconButton = /*#__PURE__*/(0, _styledComponents.default)(_IconButton.IconButton).withConfig({
  displayName: "SearchField___StyledIconButton",
  componentId: "wp2l6u-1"
})(["", ""], searchFieldClearCss);

const SearchFieldEndAdornment = props => /*#__PURE__*/_react.default.createElement(_StyledMUIInputAdornment, {
  position: "end" // Adornment must be hidden but still flow the UI in order to maintain width
  ,
  _css: props.shouldHide ? (0, _styledComponents2.css)`
            visibility: hidden;
            opacity: 0;
            transition: visibility 0s ${MUI.duration.shorter}ms,
              opacity ${MUI.duration.shorter}ms ${MUI.easing.easeOut};
          ` : (0, _styledComponents2.css)`
            visibility: visible;
            opacity: 1;
            transition: opacity ${MUI.duration.shorter}ms ${MUI.easing.easeOut};
          `
}, /*#__PURE__*/_react.default.createElement(_StyledIconButton, {
  display: "chromeless",
  onClick: props.onClick,
  "aria-label": "clear search"
}, /*#__PURE__*/_react.default.createElement(Icons.Cancel, {
  titleAccess: "clear search"
})));

const StyledOutlinedInput = (0, _styledComponents2.default)(MUI.OutlinedInput // as-cast necessary in order to allow for additional Monorail pass-through props
)`
  ${searchFieldBaseCss}
`;
exports.StyledOutlinedInput = StyledOutlinedInput;

const useClearableSearchField = props => {
  var _props$inputRef;

  // Hook into potential existing ref in order to focus on input after clicking 'clear'
  const _localInputRef = _react.default.useRef(null);

  const inputRef = (_props$inputRef = props.inputRef) !== null && _props$inputRef !== void 0 ? _props$inputRef : _localInputRef; // Turn optionally uncontrolled component to be controlled

  const [searchValue, setSearchValue] = MUI.useControlled({
    controlled: props.value,
    default: '',
    name: 'SearchField'
  });
  const shouldHideClearAdornment = (0, _typeGuards.isEmptyString)(searchValue);
  return {
    searchFieldProps: {
      inputRef,
      value: searchValue,
      onChange: e => {
        var _props$onChange;

        setSearchValue(e.currentTarget.value);
        (_props$onChange = props.onChange) === null || _props$onChange === void 0 ? void 0 : _props$onChange.call(props, e);
      },
      endAdornment: /*#__PURE__*/_react.default.createElement(SearchFieldEndAdornment, {
        shouldHide: shouldHideClearAdornment,
        onClick: () => {
          var _props$onClear, _inputRef$current;

          setSearchValue(''); // Only functions for uncontrolled

          (_props$onClear = props.onClear) === null || _props$onClear === void 0 ? void 0 : _props$onClear.call(props);

          if (inputRef.current) {
            inputRef.current.value = '';
            inputRef.current.dispatchEvent(new Event('input', {
              bubbles: true
            }));
          }

          (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus();
        }
      })
    }
  };
};

exports.useClearableSearchField = useClearableSearchField;

/**
 * Basic input styled as a search field
 */
function SearchField(props) {
  return /*#__PURE__*/_react.default.createElement(StyledOutlinedInput, _extends({
    placeholder: "Search",
    type: "text",
    startAdornment: /*#__PURE__*/_react.default.createElement(MUI.InputAdornment, {
      position: "start"
    }, /*#__PURE__*/_react.default.createElement(Icons.Search, null))
  }, props));
}

;
SearchField.muiName = MUI.OutlinedInput.muiName; // eslint-disable-line

/**
 * `SearchField` composed with `useClearableSearch`
 *
 * TODO: If we don't like separate `SearchField` and `SearchFieldClearable`, we can change it to
 * `<SearchField clearable={true} />` and create a `SearchFieldBase`.
 */

function SearchFieldClearable(props) {
  const {
    onClear,
    onChange,
    inputRef,
    value,
    ...restProps
  } = props;
  const {
    searchFieldProps
  } = useClearableSearchField({
    onClear,
    onChange,
    inputRef,
    value
  });
  return /*#__PURE__*/_react.default.createElement(SearchField, _extends({}, restProps, searchFieldProps));
}

;
SearchFieldClearable.muiName = SearchField.muiName; // eslint-disable-line