"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PackageVariant = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const PackageVariant = props => /*#__PURE__*/_react.default.createElement("svg", _extends({
  width: "24",
  height: "24",
  fill: "none",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/_react.default.createElement("path", {
  d: "M2 10.96a.985.985 0 01-.37-1.37L3.13 7c.11-.2.28-.34.47-.42l7.83-4.4c.16-.12.36-.18.57-.18.21 0 .41.06.57.18l7.9 4.44c.19.1.35.26.44.46l1.45 2.52c.28.48.11 1.09-.36 1.36l-1 .58v4.96c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 013 16.5v-5.54c-.3.17-.68.18-1 0zm10-6.81v6.7l5.96-3.35L12 4.15zM5 15.91l6 3.38v-6.71L5 9.21v6.7zm14 0v-3.22l-5 2.9c-.33.18-.7.17-1 .01v3.69l6-3.38zm-5.15-2.55l6.28-3.63-.58-1.01-6.28 3.63.58 1.01z"
}));

exports.PackageVariant = PackageVariant;