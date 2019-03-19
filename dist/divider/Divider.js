"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Divider = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _CommonStyles = require("../CommonStyles");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/*
* Styles
*/
const Divider =
/*#__PURE__*/
(0, _styledComponents.default)('div').withConfig({
  displayName: "Divider",
  componentId: "sc-1pggcc1-0"
})(["", ";background:", ";"], ({
  isVertical = false
}) => isVertical ? (0, _styledComponents.css)(["width:1px height:100%;"]) : (0, _styledComponents.css)(["width:100%;height:1px;"]), (0, _CommonStyles.colors)(_CommonStyles.Colors.Grey94));
exports.Divider = Divider;
Divider.defaultProps = {
  isVertical: false
  /*
  * Types
  */

};