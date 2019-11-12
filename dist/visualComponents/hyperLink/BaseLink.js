"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseLink = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _reactRouter = require("react-router");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Redefining PropTypes to include the new object based refs since React Router 3 is old.
_reactRouter.Link.propTypes = { ..._reactRouter.Link.propTypes,
  innerRef: _propTypes.default.func
};
const BaseLink = (0, _react.forwardRef)(({
  onlyActiveOnIndex,
  to,
  activeClassName,
  activeStyle,
  className,
  children,
  onClick
}, ref) => _react.default.createElement(_reactRouter.Link, {
  onlyActiveOnIndex: onlyActiveOnIndex,
  to: to,
  activeClassName: activeClassName,
  activeStyle: activeStyle,
  className: className,
  onClick: onClick,
  innerRef: ref
}, children));
exports.BaseLink = BaseLink;