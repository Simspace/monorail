"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Search = exports.BBSearchInput = exports.BBSearchContainer = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Icon = require("../icon/Icon");

var _IconButton = require("../buttons/IconButton");

var _CommonStyles = require("../CommonStyles");

var _buttonTypes = require("../buttons/buttonTypes");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

//
// Styles
//
const BBSearchIconPos = 3;

const BBSearchContainer =
/*#__PURE__*/
_styledComponents.default.label.withConfig({
  displayName: "Search__BBSearchContainer",
  componentId: "zpwvd9-0"
})(["", ";", ";border-radius:100px;box-sizing:border-box;overflow:hidden;position:relative;height:24px;flex-shrink:0;", ";"], ({
  darkMode
}) => darkMode ? (0, _styledComponents.css)(["background:", ";border:1px solid ", ";&:hover{background:", ";}&:focus{background:", ";}"], (0, _CommonStyles.colors)(_CommonStyles.Colors.White, 0.2), (0, _CommonStyles.colors)(_CommonStyles.Colors.White, 0.2), (0, _CommonStyles.colors)(_CommonStyles.Colors.White, 0.22), (0, _CommonStyles.colors)(_CommonStyles.Colors.White, 0.24)) : (0, _styledComponents.css)(["border:1px solid ", ";&:hover{border-color:", ";}&:focus{border-color:", ";}"], (0, _CommonStyles.colors)(_CommonStyles.Colors.Black, 0.08), (0, _CommonStyles.colors)(_CommonStyles.Colors.BrandLightBlue, 0.5), (0, _CommonStyles.colors)(_CommonStyles.Colors.BrandLightBlue)), (0, _CommonStyles.flexFlow)('row'), ({
  cssOverrides
}) => cssOverrides);

exports.BBSearchContainer = BBSearchContainer;
const BBSearchIcon =
/*#__PURE__*/
(0, _styledComponents.default)(({
  darkMode,
  ...otherProps
}) => _react.default.createElement(_Icon.Icon, otherProps)).withConfig({
  displayName: "Search__BBSearchIcon",
  componentId: "zpwvd9-1"
})(["color:", ";left:8px;pointer-events:none;position:absolute;top:", "px;"], ({
  darkMode
}) => darkMode && (0, _CommonStyles.colors)(_CommonStyles.Colors.White), BBSearchIconPos);

const BBSearchInput =
/*#__PURE__*/
_styledComponents.default.input.withConfig({
  displayName: "Search__BBSearchInput",
  componentId: "zpwvd9-2"
})(["", ";", ";border:0;flex:1 1 100%;height:100%;outline:none;padding:0 22px 0 28px;border-radius:100px;box-sizing:border-box;", ";"], ({
  darkMode
}) => darkMode ? (0, _styledComponents.css)(["background:", ";border:0;color:", ";::placeholder{color:", ";}&:hover{background:", ";}&:focus{background:", ";}"], (0, _CommonStyles.colors)(_CommonStyles.Colors.White, 0.2), (0, _CommonStyles.colors)(_CommonStyles.Colors.White), (0, _CommonStyles.colors)(_CommonStyles.Colors.White), (0, _CommonStyles.colors)(_CommonStyles.Colors.White, 0.22), (0, _CommonStyles.colors)(_CommonStyles.Colors.White, 0.24)) : (0, _styledComponents.css)(["border:1px solid ", ";::placeholder{color:", ";font-style:italic;font-weight:300;}&:hover{border-color:", ";}&:focus{border-color:", ";}"], (0, _CommonStyles.colors)(_CommonStyles.Colors.Black, 0.08), (0, _CommonStyles.colors)(_CommonStyles.Colors.Black54), (0, _CommonStyles.colors)(_CommonStyles.Colors.BrandLightBlue, 0.5), (0, _CommonStyles.colors)(_CommonStyles.Colors.BrandLightBlue)), (0, _CommonStyles.typography)(500, _CommonStyles.FontSizes.Title5), _CommonStyles.buttonTransition);

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
      searchRef
    } = this.props;
    return _react.default.createElement(BBSearchContainer, {
      cssOverrides: cssOverrides,
      darkMode: darkMode
    }, _react.default.createElement(BBSearchIcon, {
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
      cssOverrides: (0, _styledComponents.css)(["", ";background:", ";border:0;", "{color:", ";}&:hover{background:", ";}&:active{background:", ";}position:absolute;top:", "px;right:", "px;"], (0, _CommonStyles.visible)(!!value), (0, _CommonStyles.colors)(_CommonStyles.Colors.Black24), _Icon.Icon, (0, _CommonStyles.colors)(_CommonStyles.Colors.White), (0, _CommonStyles.colors)(_CommonStyles.Colors.Black54), (0, _CommonStyles.colors)(_CommonStyles.Colors.Black24), BBSearchIconPos, BBSearchIconPos),
      size: _buttonTypes.ButtonSize.Dense,
      icon: "close",
      onClick: event => {
        event.preventDefault();
        onChange('');
      }
    }));
  }

}

exports.Search = Search;
Search.defaultProps = {
  darkMode: false,
  placeholder: 'Search'
};