"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CornerStatus = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _exports = require("../../../exports");

var _Status = require("../../core/Status/Status");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _StyledStatus = /*#__PURE__*/(0, _styledComponents.default)(_Status.Status).withConfig({
  displayName: "CornerStatus___StyledStatus",
  componentId: "sc-16x7qci-0"
})(["position:absolute;transform:translate(50%,-50%) scale(0.75);top:0;right:0;background-color:", ";"], ({
  theme
}) => theme.v2.ErrorGraphic);

/**
 * Status used within a **square** button to align with the top-right.
 *
 * Can be improved to work with circle button by adding a prop that insets it by top/right 4px. Not currently necessary.
 **/
const CornerStatus = props => /*#__PURE__*/_react.default.createElement(_StyledStatus, props);

exports.CornerStatus = CornerStatus;