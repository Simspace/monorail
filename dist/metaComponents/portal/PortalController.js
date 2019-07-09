"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PortalController = void 0;

var _react = _interopRequireDefault(require("react"));

var _Portal = require("./Portal");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PortalController = ({
  document,
  children,
  isRendered
}) => {
  return isRendered ? _react.default.createElement(_Portal.Portal, {
    document: document
  }, children) : null;
};

exports.PortalController = PortalController;