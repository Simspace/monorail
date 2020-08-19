"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MysteryMan = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const MysteryMan = props => _react.default.createElement("svg", _extends({
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), _react.default.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M11.4902 3H6.39215L4.64426 9.75H2.58824C2.26336 9.75 2 10.0018 2 10.3125C2 10.6232 2.26336 10.875 2.58824 10.875H4.35294H4.50591C4.43011 11.287 4.38152 11.7099 4.36231 12.1414C4.37186 12.1021 4.38834 12.0654 4.41001 12.0316C4.41001 12.0296 4.41108 12.0287 4.41209 12.0278C4.413 12.027 4.41387 12.0262 4.41387 12.0248L4.41852 12H19.6304C19.6075 11.6175 19.5616 11.2419 19.4941 10.875H19.6471H21.4118C21.7366 10.875 22 10.6232 22 10.3125C22 10.0018 21.7366 9.75 21.4118 9.75H19.3558L17.6079 3H11.4902ZM19.6341 12.068C19.6231 12.1268 19.612 12.1856 19.6009 12.2443C19.5833 13.7786 17.9784 15.0201 16.0109 15.0201C14.1801 15.0201 12.6693 13.9495 12.4504 12.5688H11.5034C11.2843 13.9495 9.77358 15.0201 7.94279 15.0201C6.06569 15.0201 4.51862 13.8903 4.36759 12.4534C4.3568 12.4181 4.35294 12.3799 4.3568 12.3417C4.35642 12.338 4.35608 12.3342 4.35578 12.3305C4.35389 12.4076 4.35294 12.4849 4.35294 12.5625C4.35294 17.2224 7.77665 21 12 21C16.2234 21 19.6471 17.2224 19.6471 12.5625C19.6471 12.3965 19.6427 12.2317 19.6341 12.068Z"
}));

exports.MysteryMan = MysteryMan;