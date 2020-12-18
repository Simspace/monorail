"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Status = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _exports = require("../../helpers/exports");

var _styledComponents2 = _interopRequireWildcard(require("../../helpers/styled-components"));

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _Icon = require("../icon/Icon");

var _Text = require("../typography/Text");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const statusFontSizeLookUp = {
  [_exports.FontSizes.Hyper1]: {
    padding: '6px 22px 8px',
    size: 56
  },
  [_exports.FontSizes.Hyper2]: {
    padding: '6px 20px 8px',
    size: 40
  },
  [_exports.FontSizes.Hyper3]: {
    padding: '6px 18px',
    size: 36
  },
  [_exports.FontSizes.Hyper4]: {
    padding: '2px 16px',
    size: 32
  },
  [_exports.FontSizes.Title1]: {
    padding: '2px 14px',
    size: 28
  },
  [_exports.FontSizes.Title2]: {
    padding: '2px 12px',
    size: 24
  },
  [_exports.FontSizes.Title3]: {
    padding: '2px 10px',
    size: 20
  },
  [_exports.FontSizes.Title4]: {
    padding: '2px 8px',
    size: 18
  },
  [_exports.FontSizes.Title5]: {
    padding: '2px 8px',
    size: 16
  },
  [_exports.FontSizes.Micro]: {
    padding: '2px 6px',
    size: 10
  }
};

const StatusWrapper = _styledComponents2.default.div(({
  hasBackground,
  inactive,
  padding,
  size,
  statusColor = _exports.Colors.BrandLightBlue
}) => (0, _styledComponents2.css)`
    align-items: center;
    display: inline-flex;
    flex-shrink: 0;
    height: ${size}px;
    justify-items: center;
    padding: ${hasBackground ? padding : '0'};

    ${hasBackground && `
    background: ${(0, _exports.getColor)(inactive ? _exports.Colors.Black54a : statusColor)};
    border-radius: ${size / 2 + 2}px;
    box-sizing: content-box;
    color: ${(0, _exports.getColor)(_exports.Colors.White)};
    `}

    ${_Icon.Icon} {
      ${hasBackground ? `color: currentColor;` : `color: ${(0, _exports.getColor)(_exports.Colors.White)};
        background: ${(0, _exports.getColor)(statusColor)};
        border-radius: 1000px;
        box-sizing: content-box;
        padding: 2px;`};
    }
  `);

const NumberStatusWrapper = _styledComponents2.default.div(({
  size = 16,
  inactive = false,
  statusColor = _exports.Colors.BrandLightBlue
}) => (0, _styledComponents2.css)`
    background: ${(0, _exports.getColor)(inactive ? _exports.Colors.Black54a : statusColor)};
    border-radius: ${size / 2}px;
    box-sizing: content-box;
    color: ${(0, _exports.getColor)(_exports.Colors.White)};
    flex-shrink: 0;
    font-size: ${size - 5}px;
    font-weight: 700;
    height: ${size}px;
    min-width: ${size}px;
    padding: 0 ${size / 4}px;
    text-align: center;
    line-height: ${size}px;
    display: inline-block;
  `);

var _StyledIcon = /*#__PURE__*/(0, _styledComponents.default)(_Icon.Icon).withConfig({
  displayName: "Status___StyledIcon",
  componentId: "sc-5mom8r-0"
})(["margin-right:8px;"]);

const Status = props => {
  const {
    children,
    fontSize = _exports.FontSizes.Title5,
    hasBackground = true,
    icon = '',
    inactive = false,
    statusColor,
    ...domProps
  } = props;
  const size = statusFontSizeLookUp[fontSize].size;
  const padding = statusFontSizeLookUp[fontSize].padding;
  return (0, _typeGuards.isNumber)(children) ? /*#__PURE__*/_react.default.createElement(NumberStatusWrapper, _extends({
    statusColor: statusColor,
    size: size,
    inactive: inactive
  }, domProps), children) : /*#__PURE__*/_react.default.createElement(StatusWrapper, _extends({
    hasBackground: hasBackground,
    inactive: inactive,
    padding: padding,
    statusColor: statusColor,
    size: size
  }, domProps), !(0, _typeGuards.isEmptyString)(icon) && /*#__PURE__*/_react.default.createElement(_StyledIcon, {
    icon: icon,
    size: size - 4
  }), /*#__PURE__*/_react.default.createElement(_Text.Text, {
    fontSize: fontSize,
    fontWeight: hasBackground ? _exports.FontWeights.Medium : _exports.FontWeights.Book,
    color: hasBackground ? _exports.Colors.White : undefined,
    margin: icon && size > 18 ? '0 0 2px' : '0'
  }, children));
};

exports.Status = Status;