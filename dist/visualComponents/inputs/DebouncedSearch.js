"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DebouncedSearch = void 0;

var _react = _interopRequireDefault(require("react"));

var _hooks = require("../../helpers/hooks");

var _Search = require("./Search");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const DebouncedSearch = props => {
  const {
    name,
    onChange,
    onBlur,
    placeholder,
    value,
    ...domProps
  } = props;
  const [localValue, updateLocalValue] = (0, _hooks.useInputDebounce)({
    initialValue: value,
    onChange
  });
  return _react.default.createElement(_Search.Search, _extends({
    name: name,
    onChange: updateLocalValue,
    onBlur: onBlur,
    placeholder: placeholder,
    value: localValue
  }, domProps));
};

exports.DebouncedSearch = DebouncedSearch;