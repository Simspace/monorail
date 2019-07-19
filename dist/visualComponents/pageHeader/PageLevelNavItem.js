"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageLevelNavItem = void 0;

var _baseStyles = require("../../helpers/baseStyles");

var _flex = require("../../helpers/flex");

var _styledComponents = _interopRequireDefault(require("../../helpers/styled-components"));

var _theme = require("../../helpers/theme");

var _typography = require("../../helpers/typography");

var _BaseLink = require("../hyperLink/BaseLink");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PageLevelNavItem =
/*#__PURE__*/
(0, _styledComponents.default)(_BaseLink.BaseLink).withConfig({
  displayName: "PageLevelNavItem",
  componentId: "girswp-0"
})(["", ";", ";", ";color:", ";align-items:center;cursor:pointer;min-height:24px;padding:0 12px;user-select:none;&:hover,&:focus{text-decoration:none;}&:hover{background:", ";}&:active{background:", ";color:", ";}"], (0, _baseStyles.baseFocusStyles)(), (0, _flex.flexFlow)('row'), (0, _typography.typography)(700, _typography.FontSizes.Title4), (0, _theme.getThemeColor)(_theme.ThemeColors.ApplicationPrimary), (0, _theme.getThemeColor)(_theme.ThemeColors.ApplicationPrimary, 0.08), (0, _theme.getThemeColor)(_theme.ThemeColors.ApplicationPrimary, 0.16), (0, _theme.getThemeColor)(_theme.ThemeColors.ApplicationPrimary));
exports.PageLevelNavItem = PageLevelNavItem;