"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FooterListItem = exports.FooterList = exports.Footer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _exports = require("../../helpers/exports");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Footer = /*#__PURE__*/_styledComponents.default.footer.withConfig({
  displayName: "Footer",
  componentId: "sc-7hz6f1-0"
})(["", " align-items:center;height:16px;padding:0 16px 8px;"], (0, _exports.flexFlow)('row'));

exports.Footer = Footer;

const FooterList = /*#__PURE__*/_styledComponents.default.ul.withConfig({
  displayName: "Footer__FooterList",
  componentId: "sc-7hz6f1-1"
})(["align-items:center;display:flex;margin:0;padding:0;"]); // fake bullet so we can have more control over its color and position, fixed
// line-height so that side-by-side elements are vertically aligned correctly


exports.FooterList = FooterList;

const FooterListItem = /*#__PURE__*/_styledComponents.default.li.withConfig({
  displayName: "Footer__FooterListItem",
  componentId: "sc-7hz6f1-2"
})(["line-height:16px;list-style-type:none;margin-left:8px;padding-left:12px;position:relative;&::before{background-color:", ";border-radius:50%;content:'';height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:4px;}&:first-child{margin-left:0;padding-left:0;}&:first-child::before{display:none;}"], (0, _exports.getColor)(_exports.Colors.Gray54));

exports.FooterListItem = FooterListItem;