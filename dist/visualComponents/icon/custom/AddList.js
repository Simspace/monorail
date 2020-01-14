"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddList = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const AddList = props => _react.default.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  viewBox: "0 0 24 24"
}, props), _react.default.createElement("path", {
  fill: "#000",
  fillOpacity: "0.54",
  fillRule: "evenodd",
  d: "M12 17.748A8 8 0 1117.748 12H15v3h-3v2.748zM5.917 6.75h5.5v.917h-5.5V6.75zm0 1.833h5.5V9.5h-5.5v-.917zm0 2.75h3.666v-.916H5.917v.916zm9.625-1.375l-.688-.687-2.516 2.52-1.38-1.374-.687.687 2.067 2.063 3.204-3.209z",
  clipRule: "evenodd"
}), _react.default.createElement("path", {
  fill: "#000",
  fillOpacity: "0.54",
  d: "M19 19h3v-2h-3v-3h-2v3h-3v2h3v3h2v-3z"
}));

exports.AddList = AddList;