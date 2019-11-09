"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Status = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _exports = require("../../helpers/exports");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Status =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "Status",
  componentId: "sc-5mom8r-0"
})(({
  cssOverrides,
  size = 16,
  inactive = false
}) => (0, _styledComponents.css)(["background:", ";background:", ";border-radius:", "px;color:", ";flex-shrink:0;font-size:", "px;font-weight:700;height:", "px;min-width:", "px;padding:0 ", "px;text-align:center;line-height:", "px;display:inline-block;", ";"], (0, _exports.getColor)(_exports.Colors.BrandLightBlue), (0, _exports.getColor)(inactive ? _exports.Colors.Black54 : _exports.Colors.BrandLightBlue), size / 2, (0, _exports.getColor)(_exports.Colors.White), size - 5, size, size, size / 4, size, cssOverrides));

exports.Status = Status;