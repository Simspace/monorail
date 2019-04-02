"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleListItem = exports.ListItem = exports.ListItemGraphic = exports.ListItemSecondaryText = exports.ListItemPrimaryText = exports.ListItemText = exports.ListContainer = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _CommonStyles = require("../CommonStyles");

var _Icon = require("../icon/Icon");

var _typeGuards = require("../sharedHelpers/typeGuards");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
_styledComponents.default.div.withConfig({
  displayName: "List__BBListContainer",
  componentId: "sc-10dx7oa-0"
})(({
  cssOverrides
}) => (0, _styledComponents.css)(["", ";overflow-y:auto;padding:8px 0;", ";"], (0, _CommonStyles.flexFlow)(), cssOverrides));
/*
* Types
*/


/*
* Component
*/
const ListContainer = ({
  children,
  cssOverrides,
  emptyText = "I'm empty :("
}) => _react.default.createElement(BBListContainer, {
  cssOverrides: cssOverrides
}, _react.Children.count(children) > 0 ? children : _react.default.createElement(ListItem, {
  cssOverrides: (0, _styledComponents.css)(["color:", ";"], (0, _CommonStyles.colors)(_CommonStyles.Colors.Black54))
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
_styledComponents.default.div.withConfig({
  displayName: "List__ListItemText",
  componentId: "sc-10dx7oa-1"
})(({
  cssOverrides
}) => (0, _styledComponents.css)(["", ";overflow:hidden;width:100%;", ";"], (0, _CommonStyles.flexFlow)('row', 'wrap'), cssOverrides));

exports.ListItemText = ListItemText;

const ListItemPrimaryText =
/*#__PURE__*/
_styledComponents.default.span.withConfig({
  displayName: "List__ListItemPrimaryText",
  componentId: "sc-10dx7oa-2"
})(({
  cssOverrides
}) => (0, _styledComponents.css)(["", ";", ";color:currentColor;flex:1 1 100%;", ";"], (0, _CommonStyles.typography)(500, _CommonStyles.FontSizes.Title5, 'auto 6px'), _CommonStyles.ellipsis, cssOverrides));

exports.ListItemPrimaryText = ListItemPrimaryText;

const ListItemSecondaryText =
/*#__PURE__*/
_styledComponents.default.span.withConfig({
  displayName: "List__ListItemSecondaryText",
  componentId: "sc-10dx7oa-3"
})(({
  cssOverrides
}) => (0, _styledComponents.css)(["", ";", ";color:", ";flex:1 1 100%;", ";"], (0, _CommonStyles.typography)(500, _CommonStyles.FontSizes.Content, 'auto 6px'), _CommonStyles.ellipsis, (0, _CommonStyles.colors)(_CommonStyles.Colors.Black62), cssOverrides));

exports.ListItemSecondaryText = ListItemSecondaryText;
const ListItemGraphic =
/*#__PURE__*/
(0, _styledComponents.default)(({
  dense,
  ...otherProps
}) => _react.default.createElement(_Icon.Icon, otherProps))(({
  dense,
  cssOverrides
}) => (0, _styledComponents.css)(["margin:auto ", "px;", ";", ";"], dense ? 4 : 6, _CommonStyles.buttonTransition, cssOverrides));
exports.ListItemGraphic = ListItemGraphic;
const ListItem =
/*#__PURE__*/
(0, _styledComponents.default)(({
  cssOverrides,
  children,
  activeClassName,
  ...otherProps
}) => _react.default.createElement("div", otherProps, children))(({
  as,
  cssOverrides,
  dense,
  disabled,
  onClick,
  size = _CommonStyles.Sizes.DP24
}) => (0, _styledComponents.css)(["", ";", ";", ";align-items:center;box-sizing:border-box;color:", ";flex-shrink:0;min-height:", "px;padding:0 ", "px;position:relative;text-transform:initial;&:hover,&:focus,&:active{text-decoration:none;}", ";"], !(0, _typeGuards.isNil)(onClick) || !(0, _typeGuards.isNil)(as) ? (0, _styledComponents.css)(["background:transparent;color:", ";cursor:pointer;text-transform:none;user-select:none;", ";&:hover,&.is-active{background:hsla(225,6%,13%,0.06);}&:active{background:#e0eafd;opacity:1;}&.is-active,&:active,&:active ", ",&.is-active ", "{color:", ";}", ";"], (0, _CommonStyles.colors)(_CommonStyles.Colors.BrandDarkBlue), _CommonStyles.buttonTransition, ListItemGraphic, ListItemGraphic, (0, _CommonStyles.colors)(_CommonStyles.Colors.BrandLightBlue), (0, _CommonStyles.baseFocusStyles)()) : (0, _styledComponents.css)(["color:", ";background:transparent;"], (0, _CommonStyles.colors)(_CommonStyles.Colors.Black89)), disabled && (0, _styledComponents.css)(["opacity:0.54;pointer-events:none;"]), (0, _CommonStyles.flexFlow)('row'), (0, _CommonStyles.colors)(_CommonStyles.Colors.Black89), size, dense ? 4 : 10, cssOverrides));
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
  ...otherProps
}) => _react.default.createElement(ListItem, _extends({
  dense: dense,
  size: size
}, otherProps), !(0, _typeGuards.isNil)(leftIcon) && _react.default.createElement(ListItemGraphic, {
  icon: leftIcon,
  dense: dense
}), (0, _typeGuards.isNil)(secondaryText) || (0, _typeGuards.isNil)(meta) ? _react.default.createElement(ListItemPrimaryText, null, primaryText) : _react.default.createElement(ListItemText, null, _react.default.createElement(ListItemPrimaryText, null, primaryText), (0, _typeGuards.isNil)(secondaryText) ? null : _react.default.createElement(ListItemSecondaryText, null, secondaryText), meta), !(0, _typeGuards.isNil)(rightIcon) && _react.default.createElement(ListItemGraphic, {
  icon: rightIcon,
  dense: dense
}), children);

exports.SimpleListItem = SimpleListItem;