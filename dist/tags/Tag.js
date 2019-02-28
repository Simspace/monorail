"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tag = exports.CCTag = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Icon = require("../../icon/Icon");

var _CommonStyles = require("../../CommonStyles");

var _primitiveGuards = require("../../CoreUtils/primitive-guards");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const tagHeight = 24;
const circleWidth = tagHeight - 4;
const circleRadius = circleWidth / 2;
const iconSize = tagHeight / 2;
const CCTag = (0, _styledComponents.default)('div')`
  ${({
  label
}) => (0, _primitiveGuards.isNil)(label) && _styledComponents.css`
      width: ${tagHeight}px;
    `};

  ${(0, _CommonStyles.flexFlow)('row')};
  align-items: center;
  background: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.Black, 0.07)};
  border-radius: ${tagHeight / 2}px;
  height: ${tagHeight}px;
  position: relative; /* ::before circle is pos: abs to this element. */
  text-transform: uppercase;
  user-select: none;

  &::before {
    background: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.White)};
    border-radius: ${circleRadius}px;
    bottom: 2px;
    content: '';
    left: 2px;
    position: absolute;
    top: 2px;
    width: ${circleWidth}px;
  }

  ${({
  css: cssOverrides
}) => cssOverrides};
`;
exports.CCTag = CCTag;
const StyledIconLeft = (0, _styledComponents.default)(_Icon.Icon)`
  color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.BrandLightBlue)};
  margin: 0 ${iconSize / 2}px;
  position: relative; /* give z-index so ::before bg is behind icon */
`;
const Title = (0, _styledComponents.default)('h1')`
  ${(0, _CommonStyles.typography)(700, _CommonStyles.FontSizes.Content)};
  color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.Black89)};
  margin: 0 10px 0 2px;
`;

class Tag extends _react.Component {
  render() {
    const {
      icon,
      label,
      css: cssOverrides
    } = this.props;
    return _react.default.createElement(CCTag, {
      label: label,
      css: cssOverrides
    }, _react.default.createElement(StyledIconLeft, {
      icon: icon,
      size: iconSize
    }), label && _react.default.createElement(Title, null, label));
  }

}

exports.Tag = Tag;