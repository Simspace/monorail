"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Search = exports.SearchInput = exports.SearchContainer = void 0;

var _react = _interopRequireDefault(require("react"));

var _exports = require("../../helpers/exports");

var _styledComponents = _interopRequireWildcard(require("../../helpers/styled-components"));

var _theme = require("../../helpers/theme");

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _buttonTypes = require("../buttons/buttonTypes");

var _IconButton = require("../buttons/IconButton");

var _Icon = require("../icon/Icon");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// TODO(unsafe-any): Fix unsafe anys
// tslint:disable no-unsafe-any
//
// Styles
//
const searchIconPosition = 4;

const SearchContainer = _styledComponents.default.label(({
  cssOverrides,
  width,
  theme: {
    mode
  }
}) => (0, _styledComponents.css)`
    ${mode === _theme.Mode.Dark ? (0, _styledComponents.css)`
          background: ${(0, _theme.getThemeColor)(_theme.ThemeColors.PrimaryColor, 0.2)};

          &:hover {
            background: ${(0, _theme.getThemeColor)(_theme.ThemeColors.PrimaryColor, 0.22)};
          }

          &:active {
            background: ${(0, _theme.getThemeColor)(_theme.ThemeColors.PrimaryColor, 0.24)};
          }
        ` : (0, _styledComponents.css)`
          background: ${(0, _theme.getThemeColor)(_theme.ThemeColors.SecondaryColor)};
        `};

    ${(0, _typeGuards.isNotNil)(width) && (0, _styledComponents.css)`
        width: ${width}px;
      `}

    ${(0, _exports.borderRadius)(_exports.BorderRadius.Round)};
    ${(0, _exports.flexFlow)('row')};

    box-sizing: border-box;
    overflow: hidden; /* So the child element (BBSearchInput) doesn't cut into BBSearchContainer's border */
    position: relative; /* position: relative; so that BBSearchIcon can be positioned absolute to this. */
    height: 24px;
    flex-shrink: 0;

    ${cssOverrides};
  `);

exports.SearchContainer = SearchContainer;
const searchIconStyles = (0, _styledComponents.css)`
  color: ${({
  theme: {
    mode
  }
}) => mode === _theme.Mode.Dark && (0, _exports.getColor)(_exports.Colors.White)};
  left: 8px;
  pointer-events: none;
  position: absolute;
  top: ${searchIconPosition}px;
`;

const SearchInput = _styledComponents.default.input(({
  width,
  theme: {
    mode
  }
}) => (0, _styledComponents.css)`
    ${mode === _theme.Mode.Dark ? (0, _styledComponents.css)`
          border-color: transparent;

          &:hover {
            border-color: transparent;
          }

          &:focus {
            border-color: ${(0, _theme.getThemeColor)(_theme.ThemeColors.PrimaryColor)};
          }
        ` : (0, _styledComponents.css)`
          border-color: ${(0, _theme.getThemeColor)(_theme.ThemeColors.PrimaryColor, 0.08)};

          &:hover {
            border-color: ${(0, _theme.getThemeColor)(_theme.ThemeColors.ActionPrimary, 0.5)};
          }

          &:focus {
            border-color: ${(0, _theme.getThemeColor)(_theme.ThemeColors.ActionPrimary)};
          }
        `};

    ${(0, _typeGuards.isNotNil)(width) && (0, _styledComponents.css)`
        width: ${width}px;
      `}

    ${(0, _exports.typographyFont)(400, _exports.FontSizes.Title5)};

    background: transparent;
    border-radius: inherit;
    border-style: solid;
    border-width: 1px;
    box-sizing: border-box;
    color: ${(0, _theme.getThemeColor)(_theme.ThemeColors.Text900)};
    flex: 1 1 100%;
    height: 100%;
    outline: none;
    padding: 0 22px 0 28px;

    /* Override search styling coming from bootstrap.scss */
    &[type='search'] {
      box-sizing: border-box;
    }

    ::placeholder {
      color: ${(0, _theme.getThemeColor)(_theme.ThemeColors.Text500)};
      font-style: italic;
      font-weight: 300;
    }

    ${_exports.buttonTransition};
  `); //
// Types
//


exports.SearchInput = SearchInput;

//
// Component
//
const Search = props => {
  const {
    cssOverrides,
    onChange,
    name,
    placeholder = 'Search',
    value,
    width,
    onClick,
    onBlur,
    searchRef,
    ...domProps
  } = props;
  return /*#__PURE__*/_react.default.createElement(SearchContainer, _extends({
    cssOverrides: cssOverrides,
    width: width
  }, domProps), /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    icon: "search",
    cssOverrides: searchIconStyles
  }), /*#__PURE__*/_react.default.createElement(SearchInput, {
    className: "new-input",
    onChange: event => {
      onChange(event.currentTarget.value, event);
    },
    placeholder: placeholder,
    value: value,
    width: width,
    onClick: onClick,
    onBlur: onBlur,
    ref: searchRef,
    name: name,
    type: "search"
  }), /*#__PURE__*/_react.default.createElement(_IconButton.IconButton, {
    cssOverrides: (0, _styledComponents.css)`
          ${(0, _exports.visible)(!!value)};

          background: ${(0, _exports.getColor)(_exports.Colors.Black24a)};
          border: 0;
          position: absolute;
          right: ${searchIconPosition}px;
          top: ${searchIconPosition}px;

          ${_Icon.Icon} {
            color: ${(0, _exports.getColor)(_exports.Colors.White)};
          }

          &:hover {
            background: ${(0, _exports.getColor)(_exports.Colors.Black54a)};

            &:before {
              background: transparent;
            }
          }

          &:active {
            background: ${(0, _exports.getColor)(_exports.Colors.Black24a)};
          }
        `,
    size: _buttonTypes.ButtonSize.Dense,
    icon: "close",
    onClick: event => {
      event.preventDefault();
      onChange('');
    }
  }));
}; // tslint:enable


exports.Search = Search;