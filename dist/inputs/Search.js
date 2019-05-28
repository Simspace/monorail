"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Search = exports.SearchInput = exports.SearchContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _buttonTypes = require("../buttons/buttonTypes");

var _IconButton = require("../buttons/IconButton");

var _exports = require("../helpers/exports");

var _styledComponents2 = _interopRequireWildcard(require("../helpers/styled-components"));

var _theme = require("../helpers/theme");

var _Icon = require("../icon/Icon");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// TODO(unsafe-any): Fix unsafe anys
// tslint:disable no-unsafe-any
//
// Styles
//
const searchIconPosition = 4;

const SearchContainer =
/*#__PURE__*/
_styledComponents2.default.label.withConfig({
  displayName: "Search__SearchContainer",
  componentId: "zpwvd9-0"
})(({
  cssOverrides,
  theme: {
    mode
  }
}) => (0, _styledComponents2.css)(["", ";", ";", ";box-sizing:border-box;overflow:hidden;position:relative;height:24px;flex-shrink:0;", ";"], mode === _theme.Mode.Dark ? (0, _styledComponents2.css)(["background:", ";&:hover{background:", ";}&:active{background:", ";}"], (0, _theme.getThemeColor)(_theme.ThemeColors.PrimaryColor, 0.2), (0, _theme.getThemeColor)(_theme.ThemeColors.PrimaryColor, 0.22), (0, _theme.getThemeColor)(_theme.ThemeColors.PrimaryColor, 0.24)) : (0, _styledComponents2.css)(["background:", ";"], (0, _theme.getThemeColor)(_theme.ThemeColors.SecondaryColor)), (0, _exports.borderRadius)(_exports.BorderRadius.Round), (0, _exports.flexFlow)('row'), cssOverrides));

exports.SearchContainer = SearchContainer;
const searchIconStyles =
/*#__PURE__*/
(0, _styledComponents2.css)(["color:", ";left:8px;pointer-events:none;position:absolute;top:", "px;"], ({
  theme: {
    mode
  }
}) => mode === _theme.Mode.Dark && (0, _exports.getColor)(_exports.Colors.White), searchIconPosition);

const SearchInput =
/*#__PURE__*/
_styledComponents2.default.input.withConfig({
  displayName: "Search__SearchInput",
  componentId: "zpwvd9-1"
})(({
  theme: {
    mode
  }
}) => (0, _styledComponents2.css)(["", ";", ";background:transparent;border-radius:inherit;border-style:solid;border-width:1px;box-sizing:border-box;color:", ";flex:1 1 100%;height:100%;outline:none;padding:0 22px 0 28px;::placeholder{color:", ";font-style:italic;font-weight:300;}", ";"], mode === _theme.Mode.Dark ? (0, _styledComponents2.css)(["border-color:transparent;&:hover{border-color:transparent;}&:focus{border-color:", ";}"], (0, _theme.getThemeColor)(_theme.ThemeColors.PrimaryColor)) : (0, _styledComponents2.css)(["border-color:", ";&:hover{border-color:", ";}&:focus{border-color:", ";}"], (0, _theme.getThemeColor)(_theme.ThemeColors.PrimaryColor, 0.08), (0, _theme.getThemeColor)(_theme.ThemeColors.ActionPrimary, 0.5), (0, _theme.getThemeColor)(_theme.ThemeColors.ActionPrimary)), (0, _exports.typography)(400, _exports.FontSizes.Title5), (0, _theme.getThemeColor)(_theme.ThemeColors.Text900), (0, _theme.getThemeColor)(_theme.ThemeColors.Text500), _exports.buttonTransition)); //
// Types
//


exports.SearchInput = SearchInput;

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
  cssOverrides: (0, _styledComponents2.css)(["", ";background:", ";border:0;position:absolute;right:", "px;top:", "px;", "{color:", ";}&:hover{background:", ";&:before{background:transparent;}}&:active{background:", ";}"], (0, _exports.visible)(!!value), (0, _exports.getColor)(_exports.Colors.Black24), searchIconPosition, searchIconPosition, _Icon.Icon, (0, _exports.getColor)(_exports.Colors.White), (0, _exports.getColor)(_exports.Colors.Black54), (0, _exports.getColor)(_exports.Colors.Black24)),
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

var _StyledIcon = (0, _styledComponents.default)(_Icon.Icon)`${searchIconStyles}`;