"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = Select;

var _react = _interopRequireDefault(require("react"));

var MUI = _interopRequireWildcard(require("@material-ui/core"));

var _color = require("../../../helpers/color");

var _styledComponents = _interopRequireDefault(require("../../../helpers/styled-components"));

var Icons = _interopRequireWildcard(require("../../icons/Icons"));

var _helpers = require("../../shared/helpers");

var _Text = require("../../../visualComponents/typography/Text");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Position = {
  Above: 'above',
  Below: 'below'
};
const anchorOrigin = {
  [Position.Above]: {
    vertical: 'top',
    horizontal: 'left'
  },
  [Position.Below]: {
    vertical: 'bottom',
    horizontal: 'left'
  }
};
const transformOrigin = {
  [Position.Above]: {
    vertical: 'bottom',
    horizontal: 'left'
  },
  [Position.Below]: {
    vertical: 'top',
    horizontal: 'left'
  }
};
const menuMargin = {
  [Position.Above]: -4,
  [Position.Below]: 4
};
const StyledSelect = (0, _styledComponents.default)(MUI.Select).withConfig((0, _helpers.propBlockerConfig)(['aria-label', 'aria-labelledby', 'popoverPosition']))`
  min-height: 24px;
  font-size: 12px;

  /* Disable default variant's underline */
  &:before,
  &:after {
    display: none;
  }

  .MuiInputBase-input {
    padding: 4px 32px 4px 8px;
  }

  /* More of an :active state */
  &.Mui-focused .MuiSelect-select {
    box-shadow: ${({
  theme
}) => `inset 0 0 0 1px ${theme.v2.ActionPrimary}`};
  }

  .MuiSelect-select {
    border-radius: 4px;
    background: ${({
  theme
}) => theme.v2.FoundationPlate};
    box-shadow: ${({
  theme
}) => `inset 0 0 0 1px ${theme.v2.FoundationGraphic}`};

    /* The actual Focus state */
    :focus {
      box-shadow: ${({
  theme
}) => `inset 0 0 0 1px ${theme.v2.Accent3}, 0 0 0 3px ${theme.v2.ActionDollop}`};
    }

    :hover:not(.Mui-disabled) {
      background: ${({
  theme
}) => theme.v2.ActionSmidgen};
    }
  }
`;
const DownArrow = (0, _styledComponents.default)(Icons.ArrowDropDown)`
  color: ${({
  theme
}) => theme.v2.FoundationGraphic};
  right: 10px;
  position: absolute;
  pointer-events: none;
`;
/**
 * Select components are used for collecting user provided information from a list of options.
 *
 * - [Select | Material-UI](https://material-ui.com/components/selects/)
 * - [Select | Monorail Figma](https://www.figma.com/file/dKL9YeHgWyxmRHuIjs38f3O9/Monorail-Components?node-id=21759%3A20652)
 *
 * Note: This component is a BETA because
 *
 * - It doesn't auto-detect `position`
 * - Object values require a bit of work
 */

function Select(props) {
  const {
    popoverPosition
  } = props;
  const {
    MenuProps,
    ...restProps
  } = props;
  return /*#__PURE__*/_react.default.createElement(StyledSelect, _extends({
    renderValue: value => /*#__PURE__*/_react.default.createElement(_Text.Text, {
      color: _color.Colors.Gray89
    }, value),
    IconComponent: () => /*#__PURE__*/_react.default.createElement(DownArrow, {
      fontSize: "inherit"
    }),
    MenuProps: {
      // Don't push Popover away from client window's edge
      marginThreshold: 0,
      // Don't position Popover for selected item directly over input
      getContentAnchorEl: undefined,
      anchorOrigin: anchorOrigin[popoverPosition],
      transformOrigin: transformOrigin[popoverPosition],
      MenuListProps: {
        'aria-label': props['aria-label'],
        'aria-labelledby': props['aria-labelledby']
      },
      PaperProps: {
        elevation: 6,
        style: {
          marginTop: menuMargin[popoverPosition]
        }
      },
      ...MenuProps
    }
  }, restProps));
}

;
Select.muiName = MUI.Select.muiName; // eslint-disable-line