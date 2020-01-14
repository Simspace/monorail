"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Details = void 0;

var _react = _interopRequireDefault(require("react"));

var _exports = require("../../helpers/exports");

var _styledComponents = _interopRequireWildcard(require("../../helpers/styled-components"));

var _theme = require("../../helpers/theme");

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _Tag = require("../tags/Tag");

var _detailsTypes = require("./detailsTypes");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Property Styles
const propertySizeStyles = {
  [_detailsTypes.DetailsSize.Compact]: (0, _styledComponents.css)`
    ${(0, _exports.typography)(500, _exports.FontSizes.Micro)};

    color: ${(0, _theme.getThemeColor)(_theme.ThemeColors.Text500)};
    text-transform: uppercase;
  `,
  [_detailsTypes.DetailsSize.Default]: (0, _styledComponents.css)`
    ${(0, _exports.typography)(500, _exports.FontSizes.Micro)};

    color: ${(0, _theme.getThemeColor)(_theme.ThemeColors.Text700)};
  `,
  [_detailsTypes.DetailsSize.Large]: (0, _styledComponents.css)`
    ${(0, _exports.typography)(700, _exports.FontSizes.Micro)};

    color: ${(0, _theme.getThemeColor)(_theme.ThemeColors.Text700)};
  `
};

const DetailsProperty = _styledComponents.default.h2(({
  size
}) => (0, _styledComponents.css)`
    ${propertySizeStyles[size]};

    margin: 0;
  `); // Value Styles


const valueSizeStyles = {
  [_detailsTypes.DetailsSize.Compact]: (0, _styledComponents.css)`
    ${(0, _exports.typography)(600, _exports.FontSizes.Title5)};

    color: ${(0, _theme.getThemeColor)(_theme.ThemeColors.Text700)};
  `,
  [_detailsTypes.DetailsSize.Default]: (0, _styledComponents.css)`
    ${(0, _exports.typography)(200, _exports.FontSizes.Title3)};

    color: ${(0, _theme.getThemeColor)(_theme.ThemeColors.Text900)};
  `,
  [_detailsTypes.DetailsSize.Large]: (0, _styledComponents.css)`
    ${(0, _exports.typography)(200, _exports.FontSizes.Title1)};

    color: ${(0, _theme.getThemeColor)(_theme.ThemeColors.Text900)};
  `
};

const DetailsValue = _styledComponents.default.h1(({
  size
}) => (0, _styledComponents.css)`
    ${valueSizeStyles[size]};

    margin: 0;
  `);

const DetailsContainer = _styledComponents.default.div(({
  cssOverrides
}) => (0, _styledComponents.css)`
    ${(0, _exports.flexFlow)()};

    ${_Tag.TagContainer} {
      margin-top: 6px;
    }

    ${cssOverrides};
  `);

const Details = props => {
  const {
    children,
    cssOverrides,
    size = _detailsTypes.DetailsSize.Default,
    property,
    value
  } = props;
  return _react.default.createElement(DetailsContainer, {
    cssOverrides: cssOverrides
  }, _react.default.createElement(DetailsProperty, {
    size: size
  }, property), !(0, _typeGuards.isNil)(value) && _react.default.createElement(DetailsValue, {
    size: size
  }, value), children);
};

exports.Details = Details;