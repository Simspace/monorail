"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Profile = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Profile = props => /*#__PURE__*/_react.default.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  viewBox: "0 0 24 24"
}, props), /*#__PURE__*/_react.default.createElement("path", {
  d: "M4 2h16v20H4V2zm8 2.5c.968 0 1.75.782 1.75 1.75S12.968 8 12 8s-1.75-.782-1.75-1.75S11.032 4.5 12 4.5zm-3.5 6.405a4.2 4.2 0 007 0c-.018-1.16-2.34-1.797-3.5-1.797-1.167 0-3.482.636-3.5 1.797zM17 15v1.5H7V15h10zm-3 3H7v1.5h7V18z"
}));

exports.Profile = Profile;