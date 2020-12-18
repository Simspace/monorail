"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Upload = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line no-restricted-imports
const Upload = props => /*#__PURE__*/_react.default.createElement(_core.SvgIcon, props, /*#__PURE__*/_react.default.createElement("path", {
  fillRule: "evenodd",
  d: "M15 10v6H9v-6H5l7-7 7 7h-4zm4 10v-2H5v2h14z",
  clipRule: "evenodd"
}));

exports.Upload = Upload;