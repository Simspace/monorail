"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tab = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _exports = require("../../helpers/exports");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Tab =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "Tab",
  componentId: "sc-10t8xs9-0"
})(({
  cssOverrides
}) => (0, _styledComponents.css)(["", ";", ";", ";align-items:center;color:", ";cursor:pointer;min-height:24px;padding:0 8px;text-transform:uppercase;user-select:none;&:hover,&:focus{text-decoration:none;}&:hover{background:", ";}&:active{background:", ";}", ";"], (0, _exports.baseFocusStyles)(), (0, _exports.flexFlow)('row'), (0, _exports.typographyFont)(700, _exports.FontSizes.Title5), (0, _exports.getColor)(_exports.Colors.BrandLightBlue), (0, _exports.getColor)(_exports.Colors.BrandLightBlue, 0.08), (0, _exports.getColor)(_exports.Colors.BrandLightBlue, 0.16), cssOverrides));

exports.Tab = Tab;