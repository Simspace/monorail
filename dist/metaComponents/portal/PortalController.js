"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PortalController = void 0;

var _react = _interopRequireDefault(require("react"));

var _portal = _interopRequireDefault(require("@reach/portal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders its children inside a Portal, based on the isRendered prop
 */
const PortalController = ({
  children,
  isRendered
}) => {
  return isRendered ? /*#__PURE__*/_react.default.createElement(_portal.default, null, children) : null;
};

exports.PortalController = PortalController;