"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileTree = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line no-restricted-imports
const FileTree = props => /*#__PURE__*/_react.default.createElement(_core.SvgIcon, props, /*#__PURE__*/_react.default.createElement("path", {
  d: "M3,3H9V7H3V3M15,10H21V14H15V10M15,17H21V21H15V17M13,13H7V18H13V20H7L5,20V9H7V11H13V13Z"
}));

exports.FileTree = FileTree;