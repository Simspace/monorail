"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleListItem = exports.ListItem = exports.ListItemGraphic = exports.ListItemSecondaryText = exports.ListItemPrimaryText = exports.ListItemText = exports.ListContainer = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _CommonStyles = require("../../CommonStyles");

var _Icon = require("../../icon/Icon");

var _primitiveGuards = require("../../CoreUtils/primitive-guards");

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
const BBListContainer = (0, _styledComponents.default)('div')`
  ${(0, _CommonStyles.flexFlow)()};

  overflow-y: auto;
  padding: 8px 0;

  ${({
  css: cssOverrides
}) => cssOverrides};
`;
/*
* Types
*/

/*
* Component
*/
const ListContainer = ({
  children,
  css: cssOverrides,
  emptyText = "I'm empty :("
}) => _react.default.createElement(BBListContainer, {
  css: cssOverrides
}, _react.Children.count(children) > 0 ? children : _react.default.createElement(ListItem, {
  css: _styledComponents.css`
          color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.Black54)};
        `
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
const ListItemText = (0, _styledComponents.default)('div')`
  /* This is row wrap instead of column nowrap because IE11 doesn't give the item height when it is a column. */
  ${(0, _CommonStyles.flexFlow)('row', 'wrap')};

  overflow: hidden;
  width: 100%;

  ${({
  css: cssOverrides
}) => cssOverrides};
`;
exports.ListItemText = ListItemText;
const ListItemPrimaryText = (0, _styledComponents.default)('span')`
  ${({
  css: cssOverrides
}) => _styledComponents.css`
    ${(0, _CommonStyles.typography)(500, _CommonStyles.FontSizes.Title5, 'auto 6px')};
    ${_CommonStyles.ellipsis};

    color: currentColor;
    flex: 1 1 100%;

    ${cssOverrides};
  `};
`;
exports.ListItemPrimaryText = ListItemPrimaryText;
const ListItemSecondaryText = (0, _styledComponents.default)('span')`
  ${(0, _CommonStyles.typography)(500, _CommonStyles.FontSizes.Content, 'auto 6px')};
  ${_CommonStyles.ellipsis};

  color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.Black62)};
  flex: 1 1 100%;

  ${({
  css: cssOverrides
}) => cssOverrides};
`;
exports.ListItemSecondaryText = ListItemSecondaryText;
const ListItemGraphic = (0, _styledComponents.default)(({
  dense,
  ...otherProps
}) => _react.default.createElement(_Icon.Icon, otherProps))`
  ${({
  dense
}) => _styledComponents.css`
    margin: auto ${dense ? 4 : 6}px;
  `};

  ${_CommonStyles.buttonTransition};

  ${({
  css: cssOverrides
}) => cssOverrides};
`;
exports.ListItemGraphic = ListItemGraphic;
const ListItem = (0, _styledComponents.default)(({
  css: cssOverrides,
  children,
  activeClassName,
  ...otherProps
}) => _react.default.createElement("div", otherProps, children))`
  ${({
  as,
  css: cssOverrides,
  dense,
  disabled,
  onClick,
  size = _CommonStyles.Sizes.DP24
}) => _styledComponents.css`
    ${!(0, _primitiveGuards.isNil)(onClick) || !(0, _primitiveGuards.isNil)(as) ? _styledComponents.css`
          background: transparent;
          color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.BrandDarkBlue)};
          cursor: pointer;
          text-transform: none; /* IE 11 */
          user-select: none;

          ${_CommonStyles.buttonTransition};

          &:hover,
          &.is-active {
            background: hsla(225, 6%, 13%, 0.06);
          }

          &:active {
            background: #e0eafd;
            opacity: 1;
          }

          /* stylelint-disable selector-type-no-unknown */
          &.is-active,
          &:active,
          &:active ${ListItemGraphic}, &.is-active ${ListItemGraphic} {
            color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.BrandLightBlue)};
          }
          /* stylelint-enable selector-type-no-unknown */

          ${(0, _CommonStyles.baseFocusStyles)()};
        ` : _styledComponents.css`
          color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.Black89)};
          background: transparent;
        `};
    ${disabled && _styledComponents.css`
        opacity: 0.54;
        pointer-events: none;
      `};

    ${(0, _CommonStyles.flexFlow)('row')};

    align-items: center;
    box-sizing: border-box;
    color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.Black89)};
    flex-shrink: 0;
    min-height: ${size}px;
    padding: 0 ${dense ? 4 : 10}px;
    position: relative;
    text-transform: initial;

    &:hover,
    &:focus,
    &:active {
      text-decoration: none;
    }

    ${cssOverrides};
  `};
`;
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
}, otherProps), !(0, _primitiveGuards.isNil)(leftIcon) && _react.default.createElement(ListItemGraphic, {
  icon: leftIcon,
  dense: dense
}), (0, _primitiveGuards.isNil)(secondaryText) || (0, _primitiveGuards.isNil)(meta) ? _react.default.createElement(ListItemPrimaryText, null, primaryText) : _react.default.createElement(ListItemText, null, _react.default.createElement(ListItemPrimaryText, null, primaryText), (0, _primitiveGuards.isNil)(secondaryText) ? null : _react.default.createElement(ListItemSecondaryText, null, secondaryText), meta), !(0, _primitiveGuards.isNil)(rightIcon) && _react.default.createElement(ListItemGraphic, {
  icon: rightIcon,
  dense: dense
}), children);

exports.SimpleListItem = SimpleListItem;