"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BBCardGrid = exports.BBCardHeader = exports.BBCardBackground = void 0;

var _react = _interopRequireWildcard(require("react"));

var _AppIcon = require("../../appIcon/AppIcon");

var _Icon = require("../../icon/Icon");

var _CommonStyles = require("../../CommonStyles");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const BBCardContent = (0, _styledComponents.default)('div')`
  ${(0, _CommonStyles.flexFlow)()};

  border-radius: inherit;
  height: 100%;
  overflow: hidden;
  width: 100%;
  position: relative; /* Needs pos:rel; so that it doesn't get placed under the shadow pseudo elements. */

  ${({
  css: cssOverrides
}) => cssOverrides};
`; // building-blocks/cards/background

const BBCardBackground = (0, _styledComponents.default)((0, _react.forwardRef)(({
  children,
  css: cssOverrides,
  hover,
  elevation,
  cssCardContent,
  ...otherProps
}, ref) => _react.default.createElement("div", _extends({
  ref: ref
}, otherProps), _react.default.createElement(BBCardContent, {
  css: cssCardContent
}, children))))`
  ${({
  hover
}) => hover && _styledComponents.css`
      cursor: pointer;

      &:hover {
        &::after {
          transition: box-shadow ease 125ms;
          ${(0, _CommonStyles.getElevation)(_CommonStyles.ElevationRange.Elevation10)};
        }
      }
    `};

  ${(0, _CommonStyles.flexFlow)()};
  ${(0, _CommonStyles.borderRadius)(_CommonStyles.BorderRadius.Large)};

  background: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.White)};
  position: relative; /* pos:re; because the shadow pseudo element is pos:abs; */
  z-index: 0; /* mythical z-index: 0. The shadow pseudo element needs a negative z-index, but then it disappears. Have to reset the z-index to the zero value so that it appears above the background of the page but under the background of the card. */

  ${({
  css: cssOverrides
}) => cssOverrides};

  &::before {
    border-radius: inherit;
    background: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.White)};
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 0;
  }

  &::after {
    ${(0, _CommonStyles.borderRadius)(_CommonStyles.BorderRadius.Medium)};

    ${({
  elevation = _CommonStyles.ElevationRange.Elevation6
}) => (0, _CommonStyles.getElevation)(elevation)};

    background: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.White)};
    bottom: 2px;
    content: '';
    left: 2px;
    position: absolute;
    right: 2px;
    top: 2px;
    z-index: -5;
  }
`;
exports.BBCardBackground = BBCardBackground;
const BBCardHeaderContainer = (0, _styledComponents.default)('div')`
  ${(0, _CommonStyles.flexFlow)('row')};
  align-items: center;
  flex-shrink: 0;
  height: 32px;
  padding: 0 16px;
  position: relative; /* BBCardBottomBorder is pos:abs relative to this. */

  ${({
  css: cssOverrides
}) => cssOverrides};
`;
const BBCardHeaderTitle = (0, _styledComponents.default)('h1')`
  ${(0, _CommonStyles.typography)(700, _CommonStyles.FontSizes.Title5)};
  margin: 0;
`;
const StyledAppIconLeft = (0, _styledComponents.default)(_AppIcon.AppIcon)`
  margin-right: 16px;
`;
const StyledIconLeft = (0, _styledComponents.default)(_Icon.Icon)`
  margin-right: 16px;
`;
const StyledIconRight = (0, _styledComponents.default)(_Icon.Icon)`
  margin-left: 16px;
`;
const BBCardBottomBorder = (0, _styledComponents.default)('div')`
  ${({
  accentColor
}) => _styledComponents.css`
    background: linear-gradient(
      to right,
      ${(0, _CommonStyles.colors)(_CommonStyles.Colors.White, 0)} 0,
      ${accentColor} 16px,
      ${accentColor} calc(100% - 16px),
      ${(0, _CommonStyles.colors)(_CommonStyles.Colors.White, 0)} 100%
    );
  `};

  bottom: 0;
  height: 1px;
  left: 0;
  position: absolute;
  right: 0;
`;

// building-blocks/cards/header
const BBCardHeader = ({
  accentColor = (0, _CommonStyles.colors)(_CommonStyles.Colors.BrandLightBlue),
  appIcon,
  children,
  css: cssOverrides,
  iconLeft,
  iconRight,
  noBorder,
  title
}) => _react.default.createElement(BBCardHeaderContainer, {
  css: cssOverrides
}, appIcon && _react.default.createElement(StyledAppIconLeft, {
  appName: appIcon
}), iconLeft && _react.default.createElement(StyledIconLeft, {
  icon: iconLeft
}), _react.default.createElement(BBCardHeaderTitle, null, title), iconRight && _react.default.createElement(StyledIconRight, {
  icon: iconRight
}), children, !noBorder && _react.default.createElement(BBCardBottomBorder, {
  accentColor: accentColor
})); // building-blocks/cards/card-grid


exports.BBCardHeader = BBCardHeader;
const BBCardGrid = (0, _styledComponents.default)('div')`
  display: grid;
  flex-grow: 1;
  grid-auto-rows: max-content;
  grid-template-columns: repeat(
    auto-fill,
    ${({
  cardWidth = 272
}) => cardWidth}px
  );
  justify-content: center;
  padding: 20px 32px 14px;

  /* IE11 doesn't work with grid that auto places content. Here starts the hacks to get it working with flex. */
  display: -ms-flexbox; /* stylelint-disable-line */
  flex-flow: row wrap;
  align-content: flex-start;

  ${({
  css: cssOverrides
}) => cssOverrides};
`;
exports.BBCardGrid = BBCardGrid;