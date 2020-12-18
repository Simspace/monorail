"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Target = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Target = props => {
  return /*#__PURE__*/_react.default.createElement("i", props, /*#__PURE__*/_react.default.createElement("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13 3.06C17.17 3.52 20.48 6.83 20.94 11H23V13H20.94C20.48 17.17 17.17 20.48 13 20.94V23H11V20.94C6.83 20.48 3.52 17.17 3.06 13H1V11H3.06C3.52 6.83 6.83 3.52 11 3.06V1H13V3.06ZM5 12C5 15.87 8.13 19 12 19C15.87 19 19 15.87 19 12C19 8.13 15.87 5 12 5C8.13 5 5 8.13 5 12Z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
  })));
};

exports.Target = Target;