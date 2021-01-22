"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TicketCorrelation = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const TicketCorrelation = props => {
  return /*#__PURE__*/_react.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    d: "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-10 8H3V9h8v2zm2 0h8V9h-8v2zm-2 4H3v-2h8v2zm2 0h8v-2h-8v2zm-2 4H3v-2h8v2zm2 0h8v-2h-8v2zM11 7H3V5h8v2zm2 0h8V5h-8v2z",
    clipRule: "evenodd"
  }));
};

exports.TicketCorrelation = TicketCorrelation;