"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SectionHeader = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Icon = require("../../icon/Icon");

var _AppIcon = require("../../appIcon/AppIcon");

var _CommonStyles = require("../../CommonStyles");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const CCSectionHeader = (0, _styledComponents.default)('div')`
  ${(0, _CommonStyles.flexFlow)('row')} align-items: center;
  flex-shrink: 0;
  height: 40px;
  padding: 0 16px;
   ${(0, _CommonStyles.typography)(700, _CommonStyles.FontSizes.Title5)}
  color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.Black74)};

  ${({
  css: cssOverrides
}) => cssOverrides};
`;
const Title = (0, _styledComponents.default)('h1')`
  ${(0, _CommonStyles.typography)(700, _CommonStyles.FontSizes.Title5)}
  color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.Black74)};
  flex: 1;
`;
const iconLeftStyle = _styledComponents.css`
  margin-right: 8px;
`;
const StyledIconLeft = (0, _styledComponents.default)(_Icon.Icon)`
  ${iconLeftStyle};
`;
const iconRightStyle = _styledComponents.css`
  margin-left: 8px;
`;
const StyledIconRight = (0, _styledComponents.default)(_Icon.Icon)`
  ${iconRightStyle};
`;

function isAppName(iconName) {
  return Object.values(_CommonStyles.AppName).includes(iconName);
}

class SectionHeader extends _react.Component {
  render() {
    const {
      title,
      iconLeft,
      iconRight,
      css: cssOverrides,
      children
    } = this.props;
    return _react.default.createElement(CCSectionHeader, {
      css: cssOverrides
    }, iconLeft && (isAppName(iconLeft) ? _react.default.createElement(_AppIcon.AppIcon, {
      appName: iconLeft,
      css: iconLeftStyle
    }) : _react.default.createElement(StyledIconLeft, {
      icon: iconLeft
    })), _react.default.createElement(Title, null, title), iconRight && (isAppName(iconRight) ? _react.default.createElement(_AppIcon.AppIcon, {
      appName: iconRight,
      css: iconRightStyle
    }) : _react.default.createElement(StyledIconRight, {
      icon: iconRight
    })), children);
  }

}

exports.SectionHeader = SectionHeader;