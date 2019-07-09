"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogoBox = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _exports = require("../../helpers/exports");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const LogoBox =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "LogoBox",
  componentId: "sc-1d73phu-0"
})(({
  alignLeft,
  alignRight,
  cssOverrides
}) => (0, _styledComponents.css)(["", ";", ";", ";background:", ";height:32px;justify-content:center;max-width:144px;padding:4px 8px;position:relative;", " ", " ", ";"], (0, _exports.borderRadius)(), (0, _exports.flexFlow)('column'), (0, _exports.getElevationShadow)(_exports.ElevationRange.Elevation0), (0, _exports.getColor)(_exports.Colors.White), alignLeft && (0, _styledComponents.css)(["position:absolute;left:8px;top:8px;"]), alignRight && (0, _styledComponents.css)(["position:absolute;right:8px;top:8px;"]), cssOverrides));

exports.LogoBox = LogoBox;