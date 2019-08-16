"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Divider = void 0;

var _exports = require("../../helpers/exports");

var _styledComponents = _interopRequireWildcard(require("../../helpers/styled-components"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/*
 * Styles
 */
const Divider =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "Divider",
  componentId: "sy7j6p-0"
})(({
  isVertical = false
}) => (0, _styledComponents.css)(["", ";background:", ";"], isVertical ? (0, _styledComponents.css)(["width:1px;height:100%;"]) : (0, _styledComponents.css)(["width:100%;height:1px;"]), (0, _exports.getColor)(_exports.Colors.Grey94)));

exports.Divider = Divider;