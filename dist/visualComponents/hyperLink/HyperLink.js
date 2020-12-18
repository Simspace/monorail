"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HyperLink = void 0;

var _reactRouter = require("react-router");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _baseStyles = require("../../helpers/baseStyles");

var _typography = require("../../helpers/typography");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const HyperLink = /*#__PURE__*/(0, _styledComponents.default)(_reactRouter.Link).withConfig({
  displayName: "HyperLink",
  componentId: "sc-1q4nc2y-0"
})(({
  fontSize = _typography.FontSizes.Title5,
  fontWeight = 500,
  margin = ''
}) => (0, _styledComponents.css)(["", ";", ";transition:color ease 25ms;text-decoration:underline;cursor:pointer;"], (0, _typography.typography)(fontWeight, fontSize, margin), (0, _baseStyles.baseHyperLinkStyles)()));
exports.HyperLink = HyperLink;