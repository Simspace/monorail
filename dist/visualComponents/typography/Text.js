"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _color = require("../../helpers/color");

var _typography = require("../../helpers/typography");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const Text =
/*#__PURE__*/
_styledComponents.default.span.withConfig({
  displayName: "Text",
  componentId: "ejbz23-0"
})(({
  fontSize,
  fontWeight,
  margin = '',
  color = _color.Colors.Black89
}) => (0, _styledComponents.css)(["", ";color:", ";"], (0, _typography.typography)(fontWeight, fontSize, margin), (0, _color.getColor)(color)));

exports.Text = Text;