"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleListItem = exports.ListItem = exports.ListItemGraphic = exports.StyledListItemIcon = exports.ListItemSecondaryText = exports.ListItemPrimaryText = exports.ListItemText = exports.ListContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireWildcard(require("react"));

var _exports = require("../../helpers/exports");

var _styledComponents2 = _interopRequireWildcard(require("../../helpers/styled-components"));

var _theme = require("../../helpers/theme");

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _Icon = require("../icon/Icon");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
 *
 * List Container
 *
 */

/*
 * Styles
 */
const BBListContainer = _styledComponents2.default.div(({
  cssOverrides
}) => (0, _styledComponents2.css)`
    ${(0, _exports.flexFlow)()};

    overflow-y: auto;
    padding: 8px 0;

    ${cssOverrides};
  `);
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
}) => /*#__PURE__*/_react.default.createElement(BBListContainer, _extends({
  cssOverrides: cssOverrides
}, domProps), _react.Children.count(children) > 0 ? children : /*#__PURE__*/_react.default.createElement(_StyledListItem, {
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
const ListItemText = _styledComponents2.default.div(({
  cssOverrides
}) => (0, _styledComponents2.css)`
    /* This is row wrap instead of column nowrap because IE11 doesn't give the item height when it is a column. */
    ${(0, _exports.flexFlow)('row', 'wrap')}

    overflow: hidden;
    width: 100%;

    ${cssOverrides};
  `);

exports.ListItemText = ListItemText;

const ListItemPrimaryText = _styledComponents2.default.span(({
  cssOverrides
}) => (0, _styledComponents2.css)`
    ${(0, _exports.typography)(500, _exports.FontSizes.Title5, 'auto 6px')};
    ${_exports.ellipsis};

    color: inherit;
    flex: 1 1 100%;

    ${cssOverrides};
  `);

exports.ListItemPrimaryText = ListItemPrimaryText;

const ListItemSecondaryText = _styledComponents2.default.span(({
  cssOverrides
}) => (0, _styledComponents2.css)`
    ${(0, _exports.typography)(500, _exports.FontSizes.Micro, 'auto 6px')};
    ${_exports.ellipsis};

    color: ${(0, _theme.getThemeColor)(_theme.ThemeColors.Text600)};
    flex: 1 1 100%;

    ${cssOverrides};
  `);

exports.ListItemSecondaryText = ListItemSecondaryText;
const StyledListItemIcon = (0, _styledComponents2.default)(_Icon.Icon).withConfig({
  shouldForwardProp: prop => prop !== 'dense'
})( // We pick out the `color` prop so that we're specifically _not_ overriding it
// in the case where it is set (it will get passed into `<Icon .../>` above,
// which will set the right CSS).
//
// Previously this wasn't working because `color: inherit` was overriding it,
// but I was to scared to delete that line entirely. [MM 2020-07-14]
({
  $dense,
  cssOverrides,
  color
}) => (0, _styledComponents2.css)`
    && {
      ${(0, _exports.flexFlow)('row')}
      ${(0, _typeGuards.isNil)(color) ? 'color: inherit;' : ''}

      align-items: center;
      justify-content: center;
      margin: auto ${$dense ? 4 : 6}px;

      ${_exports.buttonTransition};

      ${cssOverrides};
    }
  `);
exports.StyledListItemIcon = StyledListItemIcon;

const ListItemGraphic = props => {
  return /*#__PURE__*/_react.default.createElement(StyledListItemIcon, props);
};

exports.ListItemGraphic = ListItemGraphic;

const ListItem = _styledComponents2.default.div(({
  cssOverrides,
  $dense,
  disabled,
  onClick,
  size = _exports.Sizes.DP24,
  isLink = false
}) => (0, _styledComponents2.css)`
    ${!(0, _typeGuards.isNil)(onClick) || isLink ? (0, _styledComponents2.css)`
          ${(0, _exports.baseFocusStyles)()};
          ${(0, _exports.baseChromelessStyles)()}
          ${_exports.buttonTransition};

          color: ${(0, _theme.getThemeColor)(isLink ? _theme.ThemeColors.ActionPrimary : _theme.ThemeColors.Text900)};
          cursor: pointer;
          text-transform: none; /* IE 11 */
          user-select: none;

          /* stylelint-disable selector-type-no-unknown */
          &.is-active,
          &:active,
          &:active ${StyledListItemIcon}, &.is-active ${StyledListItemIcon} {
            color: ${(0, _theme.getThemeColor)(isLink ? _theme.ThemeColors.ActionPrimary : _theme.ThemeColors.Text900)};
          }
          /* stylelint-enable selector-type-no-unknown */
        ` : (0, _styledComponents2.css)`
          color: ${(0, _theme.getThemeColor)(_theme.ThemeColors.Text900)};
          background: transparent;
        `};

    ${disabled && (0, _styledComponents2.css)`
        opacity: 0.54;
        pointer-events: none;
      `};

    ${(0, _exports.flexFlow)('row')};

    align-items: center;
    box-sizing: border-box;
    flex-shrink: 0;
    min-height: ${size}px;
    padding: 0 ${$dense ? 4 : 10}px;
    position: relative;
    text-transform: initial;

    &:hover,
    &:focus,
    &:active {
      text-decoration: none;
    }

    ${cssOverrides};
  `);

exports.ListItem = ListItem;

var _StyledListItem = /*#__PURE__*/(0, _styledComponents.default)(ListItem).withConfig({
  displayName: "List___StyledListItem",
  componentId: "sc-112eapi-0"
})(["color:", ";"], p => p._css);

const SimpleListItem = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    leftIcon = '',
    // TODO: fix this - we should not use `''` as an icon
    rightIcon = '',
    // TODO: fix this - we should not use `''` as an icon
    primaryText = '',
    secondaryText = '',
    children,
    disabled = false,
    dense = false,
    meta = '',
    size = _exports.Sizes.DP24,
    onClick,
    isLink = false,
    passedAs,
    cssOverrides,
    leftIconColor,
    rightIconColor,
    ...domProps
  } = props;
  return /*#__PURE__*/_react.default.createElement(ListItem, _extends({
    cssOverrides: cssOverrides,
    dense: dense,
    size: size,
    onClick: onClick,
    isLink: isLink,
    as: passedAs,
    disabled: disabled,
    ref: ref
  }, domProps), (0, _typeGuards.isNonEmptyString)(leftIcon) && /*#__PURE__*/_react.default.createElement(ListItemGraphic, {
    icon: leftIcon,
    $dense: dense,
    color: leftIconColor
  }), (0, _typeGuards.isNil)(meta) ? /*#__PURE__*/_react.default.createElement(ListItemPrimaryText, {
    cssOverrides: cssOverrides
  }, primaryText) : /*#__PURE__*/_react.default.createElement(ListItemText, null, /*#__PURE__*/_react.default.createElement(ListItemPrimaryText, null, primaryText), (0, _typeGuards.isEmptyString)(secondaryText) ? null : /*#__PURE__*/_react.default.createElement(ListItemSecondaryText, null, secondaryText), meta), (0, _typeGuards.isNonEmptyString)(rightIcon) && /*#__PURE__*/_react.default.createElement(ListItemGraphic, {
    icon: rightIcon,
    $dense: dense,
    color: rightIconColor
  }), children);
});
exports.SimpleListItem = SimpleListItem;