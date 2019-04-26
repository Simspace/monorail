"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HyperLink = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _color = require("../helpers/color");

var _typography = require("../helpers/typography");

var _reactRouter = require("react-router");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const HyperLink =
/*#__PURE__*/
(0, _styledComponents.default)(_reactRouter.Link).attrs({
  className: 'new-link'
})(({
  fontSize = _typography.FontSizes.Title5,
  fontWeight = 500,
  margin = ''
}) => (0, _styledComponents.css)(["", ";color:", ";transition:color ease 25ms;&:hover{color:", ";}&:active{color:", ";}&:visited{color:", ";}"], (0, _typography.typography)(fontWeight, fontSize, margin), (0, _color.getColor)(_color.Colors.BrandLightBlue), (0, _color.getColor)(_color.Colors.BrandLightBlue, 0.8), (0, _color.getColor)(_color.Colors.BrandLightBlue, 0.7), (0, _color.getColor)(_color.Colors.BrandLightBlue)));
exports.HyperLink = HyperLink;