"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleListItem = exports.ListItem = exports.ListItemGraphic = exports.ListItemSecondaryText = exports.ListItemPrimaryText = exports.ListItemText = exports.ListContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireWildcard(require("react"));

var _exports = require("../../helpers/exports");

var _styledComponents2 = _interopRequireWildcard(require("../../helpers/styled-components"));

var _theme = require("../../helpers/theme");

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _Icon = require("../icon/Icon");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// TODO(unsafe-any): Fix unsafe anys
// tslint:disable no-unsafe-any

/*
 *
 * List Container
 *
 */

/*
 * Styles
 */
const BBListContainer =
/*#__PURE__*/
_styledComponents2.default.div.withConfig({
  displayName: "List__BBListContainer",
  componentId: "sc-112eapi-0"
})(({
  cssOverrides
}) => (0, _styledComponents2.css)(["", ";overflow-y:auto;padding:8px 0;", ";"], (0, _exports.flexFlow)(), cssOverrides));
/*
 * Types
 */


/*
 * Component
 */
const ListContainer = ({
  children,
  cssOverrides,
  emptyText = "I'm empty :(",
  ...domProps
}) => _react.default.createElement(BBListContainer, _extends({
  cssOverrides: cssOverrides
}, domProps), _react.Children.count(children) > 0 ? children : _react.default.createElement(_StyledListItem, {
  _css: (0, _theme.getThemeColor)(_theme.ThemeColors.Text500)
}, emptyText));
/*
 *
 * List Item
 *
 */

/*
 * Types
 */


exports.ListContainer = ListContainer;

/*
 * Styles
 */
const ListItemText =
/*#__PURE__*/
_styledComponents2.default.div.withConfig({
  displayName: "List__ListItemText",
  componentId: "sc-112eapi-1"
})(({
  cssOverrides
}) => (0, _styledComponents2.css)(["", ";overflow:hidden;width:100%;", ";"], (0, _exports.flexFlow)('row', 'wrap'), cssOverrides));

exports.ListItemText = ListItemText;

const ListItemPrimaryText =
/*#__PURE__*/
_styledComponents2.default.span.withConfig({
  displayName: "List__ListItemPrimaryText",
  componentId: "sc-112eapi-2"
})(({
  cssOverrides
}) => (0, _styledComponents2.css)(["", ";", ";color:inherit;flex:1 1 100%;", ";"], (0, _exports.typography)(500, _exports.FontSizes.Title5, 'auto 6px'), _exports.ellipsis, cssOverrides));

exports.ListItemPrimaryText = ListItemPrimaryText;

const ListItemSecondaryText =
/*#__PURE__*/
_styledComponents2.default.span.withConfig({
  displayName: "List__ListItemSecondaryText",
  componentId: "sc-112eapi-3"
})(({
  cssOverrides
}) => (0, _styledComponents2.css)(["", ";", ";color:", ";flex:1 1 100%;", ";"], (0, _exports.typography)(500, _exports.FontSizes.Content, 'auto 6px'), _exports.ellipsis, (0, _theme.getThemeColor)(_theme.ThemeColors.Text600), cssOverrides));

exports.ListItemSecondaryText = ListItemSecondaryText;
const ListItemGraphic =
/*#__PURE__*/
(0, _styledComponents2.default)(({
  dense,
  ...domProps
}) => _react.default.createElement(_Icon.Icon, domProps))(({
  dense,
  cssOverrides
}) => (0, _styledComponents2.css)(["&&{margin:auto ", "px;color:inherit;", ";", ";}"], dense ? 4 : 6, _exports.buttonTransition, cssOverrides));
exports.ListItemGraphic = ListItemGraphic;

const ListItem =
/*#__PURE__*/
_styledComponents2.default.div.withConfig({
  displayName: "List__ListItem",
  componentId: "sc-112eapi-4"
})(({
  cssOverrides,
  dense,
  disabled,
  onClick,
  size = _exports.Sizes.DP24,
  isLink = false
}) => (0, _styledComponents2.css)(["", ";", ";", ";align-items:center;box-sizing:border-box;flex-shrink:0;min-height:", "px;padding:0 ", "px;position:relative;text-transform:initial;&:hover,&:focus,&:active{text-decoration:none;}", ";"], !(0, _typeGuards.isNil)(onClick) || isLink ? (0, _styledComponents2.css)(["", ";", " ", ";color:", ";cursor:pointer;text-transform:none;user-select:none;&.is-active,&:active,&:active ", ",&.is-active ", "{color:", ";}"], (0, _exports.baseFocusStyles)(), (0, _exports.baseChromelessStyles)(), _exports.buttonTransition, (0, _theme.getThemeColor)(isLink ? _theme.ThemeColors.ActionPrimary : _theme.ThemeColors.Text900), ListItemGraphic, ListItemGraphic, (0, _theme.getThemeColor)(isLink ? _theme.ThemeColors.ActionPrimary : _theme.ThemeColors.Text900)) : (0, _styledComponents2.css)(["color:", ";background:transparent;"], (0, _theme.getThemeColor)(_theme.ThemeColors.Text900)), disabled && (0, _styledComponents2.css)(["opacity:0.54;pointer-events:none;"]), (0, _exports.flexFlow)('row'), size, dense ? 4 : 10, cssOverrides));

exports.ListItem = ListItem;
ListItem.defaultProps = {
  activeClassName: 'is-active'
};

const SimpleListItem = ({
  leftIcon,
  rightIcon,
  primaryText,
  secondaryText,
  children,
  dense,
  meta,
  size,
  onClick,
  isLink,
  passedAs,
  ...domProps
}) => _react.default.createElement(ListItem, _extends({
  dense: dense,
  size: size,
  onClick: onClick,
  isLink: isLink,
  as: passedAs
}, domProps), !(0, _typeGuards.isEmptyString)(leftIcon) && _react.default.createElement(ListItemGraphic, {
  icon: leftIcon,
  dense: dense
}), (0, _typeGuards.isEmptyString)(secondaryText) || (0, _typeGuards.isNil)(meta) ? _react.default.createElement(ListItemPrimaryText, null, primaryText) : _react.default.createElement(ListItemText, null, _react.default.createElement(ListItemPrimaryText, null, primaryText), (0, _typeGuards.isEmptyString)(secondaryText) ? null : _react.default.createElement(ListItemSecondaryText, null, secondaryText), meta), !(0, _typeGuards.isEmptyString)(rightIcon) && _react.default.createElement(ListItemGraphic, {
  icon: rightIcon,
  dense: dense
}), children); // tslint:enable


exports.SimpleListItem = SimpleListItem;
SimpleListItem.defaultProps = {
  dense: false,
  disabled: false,
  leftIcon: '',
  primaryText: '',
  rightIcon: '',
  secondaryText: '',
  size: _exports.Sizes.DP24,
  meta: '',
  isLink: false
};

var _StyledListItem = (0, _styledComponents.default)(ListItem)`color:${p => p._css};`;