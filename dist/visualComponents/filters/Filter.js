"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Filter = exports.FilterIcon = exports.FilterText = exports.CCFilter = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _exports = require("../../helpers/exports");

var _theme = require("../../helpers/theme");

var _PopOver = require("../../metaComponents/popOver/PopOver");

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _Icon = require("../icon/Icon");

var _Menu = require("../menu/Menu");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const CCFilter =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "Filter__CCFilter",
  componentId: "sc-1z03fcy-0"
})(({
  isActive,
  cssOverrides
}) => (0, _styledComponents.css)(["", ";", ";", ";", ";align-items:center;cursor:pointer;height:24px;padding:0 4px 0 8px;user-select:none;flex-shrink:0;", ";"], isActive ? (0, _exports.basePrimaryStyles)(_theme.ThemeColors.BrandSecondary) : (0, _styledComponents.css)(["", ";color:", ";"], (0, _exports.baseSecondaryStyles)(_theme.ThemeColors.BrandSecondary), (0, _exports.getColor)(_exports.Colors.Black74)), (0, _exports.borderRadius)(), _exports.buttonTransition, (0, _exports.flexFlow)('row'), cssOverrides));

exports.CCFilter = CCFilter;

const FilterText =
/*#__PURE__*/
_styledComponents.default.span.withConfig({
  displayName: "Filter__FilterText",
  componentId: "sc-1z03fcy-1"
})(["", ";color:currentColor;text-transform:uppercase;white-space:nowrap;"], (0, _exports.typography)(700, _exports.FontSizes.Title5));

exports.FilterText = FilterText;
const FilterIcon =
/*#__PURE__*/
(0, _styledComponents.default)(_Icon.Icon).withConfig({
  displayName: "Filter__FilterIcon",
  componentId: "sc-1z03fcy-2"
})(["color:currentColor;"]);
exports.FilterIcon = FilterIcon;

class Filter extends _react.Component {
  render() {
    const {
      cssOverrides,
      title,
      content,
      isActive,
      zIndex,
      ...otherProps
    } = this.props;
    return _react.default.createElement(_PopOver.PopOver, {
      toggle: props => _react.default.createElement(CCFilter, _extends({}, props, otherProps, {
        cssOverrides: cssOverrides,
        isActive: isActive || props.isActive
      }), _react.default.createElement(FilterText, null, title), _react.default.createElement(FilterIcon, {
        icon: "arrow_drop_down"
      })),
      popOver: props => !(0, _typeGuards.isNil)(content) && _react.default.createElement(_Menu.Menu, _extends({
        zIndex: zIndex
      }, props), content)
    });
  }

}

exports.Filter = Filter;