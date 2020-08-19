"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArrowButtons = void 0;

var _react = _interopRequireDefault(require("react"));

var _exports = require("../../helpers/exports");

var _styledComponents = _interopRequireWildcard(require("../../helpers/styled-components"));

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _buttonTypes = require("../buttons/buttonTypes");

var _IconButton = require("../buttons/IconButton");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Styles
 */
//  TODO: remove this container and position on the arrow buttons themselves
const ArrowButtonsContainer = _styledComponents.default.div`
  ${(0, _exports.flexFlow)('row')};
  ${(0, _exports.zIndex)(_exports.ZIndexNodeName.ArrowButtons)};

  height: 100%;
  pointer-events: none;
`;
const RatioContainer = _styledComponents.default.p`
  ${(0, _exports.typographyFont)(400, _exports.FontSizes.Title5)};

  color: ${(0, _exports.getColor)(_exports.Colors.Black62a)};
  margin: auto 4px;
`;
/*
 * Types
 */

/*
 * Components
 */
const ArrowButtons = props => {
  const {
    current,
    next,
    previous,
    total,
    slideIndicatorType,
    cssArrowOverrides,
    arrowColor = _exports.Colors.Black,
    size,
    loop = false,
    ...otherProps
  } = props;
  return _react.default.createElement(ArrowButtonsContainer, otherProps, _react.default.createElement(_IconButton.IconButton, {
    icon: "chevron_left",
    disabled: (0, _typeGuards.isUndefined)(previous) || current === 0 && !loop,
    onClick: previous,
    display: _buttonTypes.ButtonDisplay.Chromeless,
    size: size,
    cssOverrides: slideIndicatorType === 'dot' ? (0, _styledComponents.css)`
                margin: auto auto auto 16px;
                pointer-events: all;
                ${cssArrowOverrides};
              ` : (0, _styledComponents.css)`
                margin: auto auto auto 0;
                pointer-events: all;
                ${cssArrowOverrides};
              `
  }), slideIndicatorType !== 'dot' && _react.default.createElement(RatioContainer, null, `${current + 1} / ${total + 1}`), _react.default.createElement(_IconButton.IconButton, {
    icon: "chevron_right",
    disabled: !loop && ((0, _typeGuards.isUndefined)(next) || current === total),
    onClick: next,
    display: _buttonTypes.ButtonDisplay.Chromeless,
    size: size,
    cssOverrides: slideIndicatorType === 'dot' ? (0, _styledComponents.css)`
                margin: auto 16px auto auto;
                pointer-events: all;
                ${cssArrowOverrides};
              ` : (0, _styledComponents.css)`
                margin: auto 0 auto auto;
                pointer-events: all;
                ${cssArrowOverrides};
              `
  }));
};

exports.ArrowButtons = ArrowButtons;