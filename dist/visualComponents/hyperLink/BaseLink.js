"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseLink = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouter = require("react-router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// BaseLink does prop stripping for styled-components so that we don't have to strip props for every styled-component that uses a link.
const BaseLink = ({
  onlyActiveOnIndex,
  to,
  activeClassName,
  activeStyle,
  className,
  children,
  onClick
}) => _react.default.createElement(_reactRouter.Link, {
  onlyActiveOnIndex: onlyActiveOnIndex,
  to: to,
  activeClassName: activeClassName,
  activeStyle: activeStyle,
  className: className,
  onClick: onClick
}, children);

exports.BaseLink = BaseLink;