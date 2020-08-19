"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShieldKey = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const ShieldKey = props => _react.default.createElement("svg", _extends({
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), _react.default.createElement("path", {
  d: "M12 7.84445C12.2652 7.84445 12.5196 7.94745 12.7071 8.13083C12.8946 8.31419 13 8.5629 13 8.82222C13 9.08154 12.8946 9.33024 12.7071 9.51362C12.5196 9.69698 12.2652 9.8 12 9.8C11.7348 9.8 11.4804 9.69698 11.2929 9.51362C11.1054 9.33024 11 9.08154 11 8.82222C11 8.5629 11.1054 8.31419 11.2929 8.13083C11.4804 7.94745 11.7348 7.84445 12 7.84445ZM21 10.7778C21 16.2045 17.16 21.2792 12 22.5112C6.84 21.2792 3 16.2045 3 10.7778V4.91112L12 1L21 4.91112V10.7778ZM12 5.88888C11.2044 5.88888 10.4413 6.19794 9.87869 6.74804C9.31607 7.29815 9 8.04425 9 8.82222C9 10.1031 9.83 11.1885 11 11.5893V17.6222H13V15.6667H15V13.7111H13V11.5893C14.17 11.1885 15 10.1031 15 8.82222C15 8.04425 14.6839 7.29815 14.1213 6.74804C13.5587 6.19794 12.7956 5.88888 12 5.88888Z"
}));

exports.ShieldKey = ShieldKey;