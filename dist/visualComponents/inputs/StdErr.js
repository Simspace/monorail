"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StdErr = void 0;

var _react = _interopRequireDefault(require("react"));

var _exports = require("../../helpers/exports");

var _styledComponents = _interopRequireDefault(require("../../helpers/styled-components"));

var _Text = require("../typography/Text");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const StdErrContainer = _styledComponents.default.div`
  ${(0, _exports.flexFlow)('row')};

  height: 24px;
`;

const StdErr = ({
  err,
  msg,
  fontSize,
  ...domProps
}) => {
  return _react.default.createElement(StdErrContainer, null, _react.default.createElement(_Text.Text, _extends({}, domProps, {
    fontWeight: 500,
    fontSize: fontSize ? fontSize : _exports.FontSizes.Micro,
    color: _exports.Colors.Red,
    margin: "8px 0"
  }), err && msg));
};

exports.StdErr = StdErr;