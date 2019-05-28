"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ThemeProvider = exports.keyframes = exports.createGlobalStyle = exports.css = void 0;

var styledComponents = _interopRequireWildcard(require("styled-components"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents;
exports.ThemeProvider = ThemeProvider;
exports.keyframes = keyframes;
exports.createGlobalStyle = createGlobalStyle;
exports.css = css;
// tslint:disable-next-line:no-default-export
var _default = styled;
exports.default = _default;