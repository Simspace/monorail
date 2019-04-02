"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Filter = void 0;

var _react = _interopRequireWildcard(require("react"));

var _typeGuards = require("../sharedHelpers/typeGuards");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Icon = require("../icon/Icon");

var _CommonStyles = require("../CommonStyles");

var _PopOver = require("../popOver/PopOver");

var _Menu = require("../menu/Menu");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const CCFilter =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "Filter__CCFilter",
  componentId: "sc-131i0x6-0"
})(({
  isOpen,
  isActive,
  cssOverrides
}) => (0, _styledComponents.css)(["", ";", ";", ";", ";align-items:center;cursor:pointer;height:24px;padding:0 4px 0 8px;user-select:none;flex-shrink:0;", ";"], isActive || isOpen ? (0, _CommonStyles.basePrimaryStyles)(_CommonStyles.Colors.BrandDarkBlue) : (0, _styledComponents.css)(["", ";color:", ";"], (0, _CommonStyles.baseSecondaryStyles)(_CommonStyles.Colors.BrandDarkBlue, isOpen), (0, _CommonStyles.colors)(_CommonStyles.Colors.Black74)), (0, _CommonStyles.borderRadius)(), _CommonStyles.buttonTransition, (0, _CommonStyles.flexFlow)('row'), cssOverrides));

const FilterText =
/*#__PURE__*/
_styledComponents.default.span.withConfig({
  displayName: "Filter__FilterText",
  componentId: "sc-131i0x6-1"
})(["", ";color:currentColor;text-transform:uppercase;white-space:nowrap;"], (0, _CommonStyles.typography)(700, _CommonStyles.FontSizes.Title5));

const FilterIcon =
/*#__PURE__*/
(0, _styledComponents.default)(_Icon.Icon).withConfig({
  displayName: "Filter__FilterIcon",
  componentId: "sc-131i0x6-2"
})(["color:currentColor;"]);

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
    return _react.default.createElement(_PopOver.PopOver, _extends({}, otherProps, {
      toggle: props => _react.default.createElement(CCFilter, _extends({}, props, {
        cssOverrides: cssOverrides,
        isActive: isActive
      }), _react.default.createElement(FilterText, null, title), _react.default.createElement(FilterIcon, {
        icon: "arrow_drop_down"
      })),
      popOver: props => !(0, _typeGuards.isNil)(content) && _react.default.createElement(_Menu.Menu, _extends({
        zIndex: zIndex
      }, props), content)
    }));
  }

}

exports.Filter = Filter;