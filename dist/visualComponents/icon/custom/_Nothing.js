"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._Nothing = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: This is a fallback icon for cases where people use '' as an icon
// Ideally, we should delete this component when we can get rid of '' icon usage
const _Nothing = props => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);

exports._Nothing = _Nothing;