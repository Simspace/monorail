"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseLink = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _reactRouter = require("react-router");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Redefining PropTypes to include the new object based refs since React Router 3 is old.
_reactRouter.Link.propTypes = { ..._reactRouter.Link.propTypes,
  innerRef: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.shape({
    current: _propTypes.default.instanceOf(Element)
  })])
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