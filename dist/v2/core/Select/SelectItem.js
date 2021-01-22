"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectItem = exports.StyledMenuItem = void 0;

var _react = _interopRequireDefault(require("react"));

var MUI = _interopRequireWildcard(require("@material-ui/core"));

var _styledComponents = _interopRequireDefault(require("../../../helpers/styled-components"));

var _exports = require("../../../helpers/exports");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const StyledMenuItem = (0, _styledComponents.default)(MUI.MenuItem)`
  ${(0, _exports.typographyFont)(_exports.FontWeights.Medium, _exports.FontSizes.Title5)};

  &.Mui-focusVisible {
    box-shadow: ${({
  theme
}) => `inset 0 0 0 1px ${theme.v2.ActionPrimary}`};
    background-color: unset; /* override MuiListItem.Mui-focusVisibile default */
  }

  &:hover {
    background: ${({
  theme
}) => theme.v2.ActionSmidgen};
  }

  &.Mui-selected {
    background: ${({
  theme
}) => theme.v2.ActionSmidgen};

    &:hover {
      background: ${({
  theme
}) => theme.v2.ActionPinch};
    }

    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-left: 4px solid ${({
  theme
}) => theme.v2.Accent4};
    }
  }
`;
/**
 * Item (row) used in a `Select`
 *
 * - [Select | Monorail Figma](https://www.figma.com/file/dKL9YeHgWyxmRHuIjs38f3O9/Monorail-Components?node-id=21759%3A20652)
 */

exports.StyledMenuItem = StyledMenuItem;

const SelectItem = /*#__PURE__*/_react.default.forwardRef((props, ref) => {
  return /*#__PURE__*/_react.default.createElement(StyledMenuItem, _extends({
    ref: ref
  }, props));
});

exports.SelectItem = SelectItem;
SelectItem.muiName = MUI.MenuItem.muiName; // eslint-disable-line