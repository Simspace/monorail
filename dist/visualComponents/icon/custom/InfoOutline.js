"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InfoOutline = InfoOutline;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function InfoOutline(props) {
  return /*#__PURE__*/_react.default.createElement("svg", _extends({
    viewBox: "0 0 12 12",
    height: "16px",
    width: "16px",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), props.title && /*#__PURE__*/_react.default.createElement("title", null, props.title), /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1.55554 5.99999C1.55554 3.54665 3.54665 1.55554 5.99999 1.55554C8.45332 1.55554 10.4444 3.54665 10.4444 5.99999C10.4444 8.45332 8.45332 10.4444 5.99999 10.4444C3.54665 10.4444 1.55554 8.45332 1.55554 5.99999ZM6.44443 5.55554V8.22221H5.55554V5.55554H6.44443ZM5.99999 9.55554C4.03999 9.55554 2.44443 7.95999 2.44443 5.99999C2.44443 4.03999 4.03999 2.44443 5.99999 2.44443C7.95999 2.44443 9.55554 4.03999 9.55554 5.99999C9.55554 7.95999 7.95999 9.55554 5.99999 9.55554ZM6.44443 3.77776V4.66665H5.55554V3.77776H6.44443Z"
  }));
}