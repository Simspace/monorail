"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Search = exports.BBSearchInput = exports.BBSearchContainer = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Icon = require("../icon/Icon");

var _IconButton = require("../buttons/IconButton");

var _exports = require("../helpers/exports");

var _buttonTypes = require("../buttons/buttonTypes");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// TODO(unsafe-any): Fix unsafe anys
// tslint:disable no-unsafe-any
//
// Styles
//
const BBSearchIconPos = 3;

const BBSearchContainer =
/*#__PURE__*/
_styledComponents.default.label.withConfig({
  displayName: "Search__BBSearchContainer",
  componentId: "zpwvd9-0"
})(({
  darkMode,
  cssOverrides
}) => (0, _styledComponents.css)(["", ";", ";border-radius:100px;box-sizing:border-box;overflow:hidden;position:relative;height:24px;flex-shrink:0;", ";"], darkMode ? (0, _styledComponents.css)(["background:", ";border:1px solid ", ";&:hover{background:", ";}&:focus{background:", ";}"], (0, _exports.getColor)(_exports.Colors.White, 0.2), (0, _exports.getColor)(_exports.Colors.White, 0.2), (0, _exports.getColor)(_exports.Colors.White, 0.22), (0, _exports.getColor)(_exports.Colors.White, 0.24)) : (0, _styledComponents.css)(["border:1px solid ", ";&:hover{border-color:", ";}&:focus{border-color:", ";}"], (0, _exports.getColor)(_exports.Colors.Black, 0.08), (0, _exports.getColor)(_exports.Colors.BrandLightBlue, 0.5), (0, _exports.getColor)(_exports.Colors.BrandLightBlue)), (0, _exports.flexFlow)('row'), cssOverrides));

exports.BBSearchContainer = BBSearchContainer;
const BBSearchIcon =
/*#__PURE__*/
(0, _styledComponents.default)(({
  darkMode,
  ...otherProps
}) => _react.default.createElement(_Icon.Icon, otherProps))(({
  darkMode
}) => (0, _styledComponents.css)(["color:", ";left:8px;pointer-events:none;position:absolute;top:", "px;"], darkMode && (0, _exports.getColor)(_exports.Colors.White), BBSearchIconPos));

const BBSearchInput =
/*#__PURE__*/
_styledComponents.default.input.withConfig({
  displayName: "Search__BBSearchInput",
  componentId: "zpwvd9-1"
})(({
  darkMode
}) => (0, _styledComponents.css)(["", ";", ";border:0;flex:1 1 100%;height:100%;outline:none;padding:0 22px 0 28px;border-radius:100px;box-sizing:border-box;", ";"], darkMode ? (0, _styledComponents.css)(["background:", ";border:0;color:", ";::placeholder{color:", ";}&:hover{background:", ";}&:focus{background:", ";}"], (0, _exports.getColor)(_exports.Colors.White, 0.2), (0, _exports.getColor)(_exports.Colors.White), (0, _exports.getColor)(_exports.Colors.White), (0, _exports.getColor)(_exports.Colors.White, 0.22), (0, _exports.getColor)(_exports.Colors.White, 0.24)) : (0, _styledComponents.css)(["border:1px solid ", ";::placeholder{color:", ";font-style:italic;font-weight:300;}&:hover{border-color:", ";}&:focus{border-color:", ";}"], (0, _exports.getColor)(_exports.Colors.Black, 0.08), (0, _exports.getColor)(_exports.Colors.Black54), (0, _exports.getColor)(_exports.Colors.BrandLightBlue, 0.5), (0, _exports.getColor)(_exports.Colors.BrandLightBlue)), (0, _exports.typography)(500, _exports.FontSizes.Title5), _exports.buttonTransition)); //
// Types
//


exports.BBSearchInput = BBSearchInput;

//
// Component
//
class Search extends _react.Component {
  render() {
    const {
      cssOverrides,
      darkMode,
      onChange,
      placeholder = 'Search',
      value,
      onClick,
      searchRef,
      ...otherProps
    } = this.props;
    return _react.default.createElement(BBSearchContainer, _extends({
      cssOverrides: cssOverrides,
      darkMode: darkMode
    }, otherProps), _react.default.createElement(BBSearchIcon, {
      icon: "search_icon",
      darkMode: darkMode
    }), _react.default.createElement(BBSearchInput, {
      className: "new-input",
      darkMode: darkMode,
      onChange: event => {
        onChange(event.currentTarget.value, event);
      },
      placeholder: placeholder,
      type: "text",
      value: value,
      onClick: onClick,
      ref: searchRef
    }), _react.default.createElement(_IconButton.IconButton, {
      darkMode: true,
      cssOverrides: (0, _styledComponents.css)(["", ";background:", ";border:0;", "{color:", ";}&:hover{background:", ";&:before{background:transparent;}}&:active{background:", ";}position:absolute;top:", "px;right:", "px;"], (0, _exports.visible)(!!value), (0, _exports.getColor)(_exports.Colors.Black24), _Icon.Icon, (0, _exports.getColor)(_exports.Colors.White), (0, _exports.getColor)(_exports.Colors.Black54), (0, _exports.getColor)(_exports.Colors.Black24), BBSearchIconPos, BBSearchIconPos),
      size: _buttonTypes.ButtonSize.Dense,
      icon: "close",
      onClick: event => {
        event.preventDefault();
        onChange('');
      }
    }));
  }

} // tslint:enable


exports.Search = Search;
Search.defaultProps = {
  darkMode: false,
  placeholder: 'Search'
};