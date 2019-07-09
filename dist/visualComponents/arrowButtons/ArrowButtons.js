"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArrowButtons = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _exports = require("../../helpers/exports");

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _buttonTypes = require("../buttons/buttonTypes");

var _IconButton = require("../buttons/IconButton");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Styles
 */
//  TODO: remove this container and position on the arrow buttons themselves
const ArrowButtonsContainer =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "ArrowButtons__ArrowButtonsContainer",
  componentId: "gidllw-0"
})(["", ";height:100%;z-index:5;pointer-events:none;"], (0, _exports.flexFlow)('row'));

const RatioContainer =
/*#__PURE__*/
_styledComponents.default.p.withConfig({
  displayName: "ArrowButtons__RatioContainer",
  componentId: "gidllw-1"
})(["", ";color:", ";margin:auto 4px;"], (0, _exports.typography)(400, _exports.FontSizes.Title5), (0, _exports.getColor)(_exports.Colors.Black62));
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
    ...otherProps
  } = props;
  return _react.default.createElement(ArrowButtonsContainer, otherProps, _react.default.createElement(_IconButton.IconButton, {
    icon: "chevron_left",
    disabled: (0, _typeGuards.isUndefined)(previous) || current === 0,
    onClick: previous,
    display: _buttonTypes.ButtonDisplay.Chromeless,
    size: size,
    cssOverrides: slideIndicatorType === 'dot' ? (0, _styledComponents.css)(["margin:auto auto auto 16px;pointer-events:all;", ";"], cssArrowOverrides) : (0, _styledComponents.css)(["margin:auto auto auto 0;pointer-events:all;", ";"], cssArrowOverrides)
  }), slideIndicatorType !== 'dot' && _react.default.createElement(RatioContainer, null, `${current + 1} / ${total + 1}`), _react.default.createElement(_IconButton.IconButton, {
    icon: "chevron_right",
    disabled: (0, _typeGuards.isUndefined)(next) || current === total,
    onClick: next,
    display: _buttonTypes.ButtonDisplay.Chromeless,
    size: size,
    cssOverrides: slideIndicatorType === 'dot' ? (0, _styledComponents.css)(["margin:auto 16px auto auto;pointer-events:all;", ";"], cssArrowOverrides) : (0, _styledComponents.css)(["margin:auto 0 auto auto;pointer-events:all;", ";"], cssArrowOverrides)
  }));
};

exports.ArrowButtons = ArrowButtons;