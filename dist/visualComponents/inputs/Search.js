"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Search = exports.SearchInput = exports.SearchContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _exports = require("../../helpers/exports");

var _styledComponents2 = _interopRequireWildcard(require("../../helpers/styled-components"));

var _theme = require("../../helpers/theme");

var _buttonTypes = require("../buttons/buttonTypes");

var _IconButton = require("../buttons/IconButton");

var _Icon = require("../icon/Icon");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// TODO(unsafe-any): Fix unsafe anys
// tslint:disable no-unsafe-any
//
// Styles
//
const searchIconPosition = 4;

const SearchContainer = _styledComponents2.default.label(({
  cssOverrides,
  theme: {
    mode
  }
}) => _styledComponents2.css`
    ${mode === _theme.Mode.Dark ? _styledComponents2.css`
          background: ${(0, _theme.getThemeColor)(_theme.ThemeColors.PrimaryColor, 0.2)};

          &:hover {
            background: ${(0, _theme.getThemeColor)(_theme.ThemeColors.PrimaryColor, 0.22)};
          }

          &:active {
            background: ${(0, _theme.getThemeColor)(_theme.ThemeColors.PrimaryColor, 0.24)};
          }
        ` : _styledComponents2.css`
          background: ${(0, _theme.getThemeColor)(_theme.ThemeColors.SecondaryColor)};
        `};

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
const searchIconStyles = _styledComponents2.css`
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

const SearchInput = _styledComponents2.default.input(({
  theme: {
    mode
  }
}) => _styledComponents2.css`
    ${mode === _theme.Mode.Dark ? _styledComponents2.css`
          border-color: transparent;

          &:hover {
            border-color: transparent;
          }

          &:focus {
            border-color: ${(0, _theme.getThemeColor)(_theme.ThemeColors.PrimaryColor)};
          }
        ` : _styledComponents2.css`
          border-color: ${(0, _theme.getThemeColor)(_theme.ThemeColors.PrimaryColor, 0.08)};

          &:hover {
            border-color: ${(0, _theme.getThemeColor)(_theme.ThemeColors.ActionPrimary, 0.5)};
          }

          &:focus {
            border-color: ${(0, _theme.getThemeColor)(_theme.ThemeColors.ActionPrimary)};
          }
        `};

    ${(0, _exports.typography)(400, _exports.FontSizes.Title5)};

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

var _StyledIcon =
/*#__PURE__*/
(0, _styledComponents.default)(_Icon.Icon).withConfig({
  displayName: "Search___StyledIcon",
  componentId: "sc-1510t74-0"
})(["", ""], searchIconStyles);

//
// Component
//
const Search = ({
  cssOverrides,
  onChange,
  name,
  placeholder,
  value,
  onClick,
  searchRef,
  ...domProps
}) => _react.default.createElement(SearchContainer, _extends({
  cssOverrides: cssOverrides
}, domProps), _react.default.createElement(_StyledIcon, {
  icon: "search_icon"
}), _react.default.createElement(SearchInput, {
  className: "new-input",
  onChange: event => {
    onChange(event.currentTarget.value, event);
  },
  placeholder: placeholder,
  type: "text",
  value: value,
  onClick: onClick,
  ref: searchRef,
  name: name
}), _react.default.createElement(_IconButton.IconButton, {
  cssOverrides: _styledComponents2.css`
        ${(0, _exports.visible)(!!value)};

        background: ${(0, _exports.getColor)(_exports.Colors.Black24)};
        border: 0;
        position: absolute;
        right: ${searchIconPosition}px;
        top: ${searchIconPosition}px;

        ${_Icon.Icon} {
          color: ${(0, _exports.getColor)(_exports.Colors.White)};
        }

        &:hover {
          background: ${(0, _exports.getColor)(_exports.Colors.Black54)};

          &:before {
            background: transparent;
          }
        }

        &:active {
          background: ${(0, _exports.getColor)(_exports.Colors.Black24)};
        }
      `,
  size: _buttonTypes.ButtonSize.Dense,
  icon: "close",
  onClick: event => {
    event.preventDefault();
    onChange('');
  }
}));

exports.Search = Search;
Search.defaultProps = {
  placeholder: 'Search' // tslint:enable

};