"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SectionHeader = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Icon = require("../icon/Icon");

var _AppIcon = require("../appIcon/AppIcon");

var _CommonStyles = require("../CommonStyles");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const CCSectionHeader =
/*#__PURE__*/
(0, _styledComponents.default)('div').withConfig({
  displayName: "SectionHeader__CCSectionHeader",
  componentId: "jqmo3c-0"
})(["", " align-items:center;flex-shrink:0;height:40px;padding:0 16px;", " color:", ";", ";"], (0, _CommonStyles.flexFlow)('row'), (0, _CommonStyles.typography)(700, _CommonStyles.FontSizes.Title5), (0, _CommonStyles.colors)(_CommonStyles.Colors.Black74), ({
  cssOverrides
}) => cssOverrides);
const Title =
/*#__PURE__*/
(0, _styledComponents.default)('h1').withConfig({
  displayName: "SectionHeader__Title",
  componentId: "jqmo3c-1"
})(["", " color:", ";flex:1;"], (0, _CommonStyles.typography)(700, _CommonStyles.FontSizes.Title5), (0, _CommonStyles.colors)(_CommonStyles.Colors.Black74));
const iconLeftStyle =
/*#__PURE__*/
(0, _styledComponents.css)(["margin-right:8px;"]);
const StyledIconLeft =
/*#__PURE__*/
(0, _styledComponents.default)(_Icon.Icon).withConfig({
  displayName: "SectionHeader__StyledIconLeft",
  componentId: "jqmo3c-2"
})(["", ";"], iconLeftStyle);
const iconRightStyle =
/*#__PURE__*/
(0, _styledComponents.css)(["margin-left:8px;"]);
const StyledIconRight =
/*#__PURE__*/
(0, _styledComponents.default)(_Icon.Icon).withConfig({
  displayName: "SectionHeader__StyledIconRight",
  componentId: "jqmo3c-3"
})(["", ";"], iconRightStyle);

function isAppName(iconName) {
  return Object.values(_CommonStyles.AppName).includes(iconName);
}

class SectionHeader extends _react.Component {
  render() {
    const {
      title,
      iconLeft,
      iconRight,
      cssOverrides,
      children
    } = this.props;
    return _react.default.createElement(CCSectionHeader, {
      cssOverrides: cssOverrides
    }, iconLeft && (isAppName(iconLeft) ? _react.default.createElement(_AppIcon.AppIcon, {
      appName: iconLeft,
      cssOverrides: iconLeftStyle
    }) : _react.default.createElement(StyledIconLeft, {
      icon: iconLeft
    })), _react.default.createElement(Title, null, title), iconRight && (isAppName(iconRight) ? _react.default.createElement(_AppIcon.AppIcon, {
      appName: iconRight,
      cssOverrides: iconRightStyle
    }) : _react.default.createElement(StyledIconRight, {
      icon: iconRight
    })), children);
  }

}

exports.SectionHeader = SectionHeader;