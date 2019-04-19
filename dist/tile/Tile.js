"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tile = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _exports = require("../helpers/exports");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const Tile =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "Tile",
  componentId: "tepisb-0"
})(({
  direction = 'column',
  cssOverrides
}) => (0, _styledComponents.css)(["", ";", ";background:", ";border:1px solid ", ";box-sizing:border-box;flex-shrink:0;justify-content:space-between;", ";"], (0, _exports.flexFlow)(direction), (0, _exports.borderRadius)(_exports.BorderRadius.Medium), (0, _exports.getColor)(_exports.Colors.White), (0, _exports.getColor)(_exports.Colors.Grey96), cssOverrides));

exports.Tile = Tile;