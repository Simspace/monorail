"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HyperLink = void 0;

var _reactRouter = require("react-router");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _baseStyles = require("../helpers/baseStyles");

var _typography = require("../helpers/typography");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const HyperLink =
/*#__PURE__*/
(0, _styledComponents.default)(_reactRouter.Link)(({
  fontSize = _typography.FontSizes.Title5,
  fontWeight = 500,
  margin = ''
}) => (0, _styledComponents.css)(["", ";", " transition:color ease 25ms;text-decoration:underline;"], (0, _typography.typography)(fontWeight, fontSize, margin), (0, _baseStyles.baseHyperLinkStyles)()));
exports.HyperLink = HyperLink;