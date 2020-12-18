"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bam = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line no-restricted-imports
const Bam = props => /*#__PURE__*/_react.default.createElement(_core.SvgIcon, props, /*#__PURE__*/_react.default.createElement("path", {
  fillRule: "evenodd",
  d: "M4 9V7h12v2H4zm0 4h16v-2H4v2zm0 4h12v-2H4v2z",
  clipRule: "evenodd"
}));

exports.Bam = Bam;