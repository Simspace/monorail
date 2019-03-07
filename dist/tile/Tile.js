"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tile = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _CommonStyles = require("../CommonStyles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Tile =
/*#__PURE__*/
(0, _styledComponents.default)('div').withConfig({
  displayName: "Tile",
  componentId: "tepisb-0"
})(["", ";", ";background:", ";border:1px solid ", ";box-sizing:border-box;flex-shrink:0;justify-content:space-between;", ";"], ({
  direction = 'column'
}) => (0, _CommonStyles.flexFlow)(direction), (0, _CommonStyles.borderRadius)(_CommonStyles.BorderRadius.Medium), (0, _CommonStyles.colors)(_CommonStyles.Colors.White), (0, _CommonStyles.colors)(_CommonStyles.Colors.Grey96), ({
  cssOverrides
}) => cssOverrides);
exports.Tile = Tile;