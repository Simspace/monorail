"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonLink = ButtonLink;
exports.Button = exports.StyledButton = exports.displayCss = exports.SIZE = exports.DISPLAY = void 0;

var _react = _interopRequireDefault(require("react"));

var MUI = _interopRequireWildcard(require("@material-ui/core"));

var _styledComponents = _interopRequireWildcard(require("../../../helpers/styled-components"));

var _RouterLink = require("../RouterLink/RouterLink");

var _helpers = require("../../shared/helpers");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const DISPLAY = {
  Primary: 'primary',
  Outline: 'outline',
  Chromeless: 'chromeless',
  ChromelessContrast: 'chromelessContrast'
};
exports.DISPLAY = DISPLAY;
const SIZE = {
  Dense: 'dense',
  Compact: 'compact',
  Default: 'default',
  Large: 'large'
};
exports.SIZE = SIZE;
//#region CSS
const displayCss = {
  [DISPLAY.Primary]: (0, _styledComponents.css)`
    background-color: ${({
    theme
  }) => theme.v2.ActionPrimary};

    &.Mui-focusVisible {
      box-shadow: ${({
    theme
  }) => `inset 0 0 0 1px ${theme.v2.Accent3}, 0 0 0 3px ${theme.v2.ActionDollop}`};
    }
    &:hover {
      background-color: ${({
    theme
  }) => theme.v2.Accent4};
    }
    &:active {
      background-color: ${({
    theme
  }) => theme.v2.Accent3};
    }
    &[disabled] {
      background-color: ${({
    theme
  }) => theme.v2.ActionDollop};
    }
  `,
  [DISPLAY.Outline]: (0, _styledComponents.css)`
    color: ${({
    theme
  }) => theme.v2.ActionPrimary};
    box-shadow: ${({
    theme
  }) => `inset 0 0 0 1px ${theme.v2.ActionGraphic}`};

    &.Mui-focusVisible {
      box-shadow: ${({
    theme
  }) => `inset 0 0 0 1px ${theme.v2.Accent3}, 0 0 0 3px ${theme.v2.ActionDollop}`};
    }
    &:hover {
      color: ${({
    theme
  }) => theme.v2.Accent4};
      background-color: ${({
    theme
  }) => theme.v2.ActionSmidgen};
      box-shadow: ${({
    theme
  }) => `inset 0 0 0 1px ${theme.v2.ActionPrimary}`};

      &.Mui-focusVisible {
        box-shadow: ${({
    theme
  }) => `inset 0 0 0 1px ${theme.v2.Accent4}, 0 0 0 3px ${theme.v2.ActionDollop}`};
      }
    }
    &:active {
      color: ${({
    theme
  }) => theme.v2.Accent3};
      background-color: ${({
    theme
  }) => theme.v2.ActionPinch};
      box-shadow: ${({
    theme
  }) => `inset 0 0 0 1px ${theme.v2.Accent4}`};
    }
    &[disabled] {
      box-shadow: ${({
    theme
  }) => `inset 0 0 0 1px ${theme.v2.ActionDollop}`};
      color: ${({
    theme
  }) => theme.v2.ActionDollop};
    }
  `,
  [DISPLAY.Chromeless]: (0, _styledComponents.css)`
    color: ${({
    theme
  }) => theme.v2.ActionPrimary};

    &.Mui-focusVisible {
      box-shadow: ${({
    theme
  }) => `inset 0 0 0 1px ${theme.v2.Accent3}, 0 0 0 3px ${theme.v2.ActionDollop}`};
    }
    &:hover {
      color: ${({
    theme
  }) => theme.v2.Accent4};
      background-color: ${({
    theme
  }) => theme.v2.ActionSmidgen};
    }
    &:active {
      color: ${({
    theme
  }) => theme.v2.Accent3};
      background-color: ${({
    theme
  }) => theme.v2.ActionPinch};
    }
    &[disabled] {
      color: ${({
    theme
  }) => theme.v2.ActionDollop};
    }
  `,
  [DISPLAY.ChromelessContrast]: (0, _styledComponents.css)`
    color: ${({
    theme
  }) => theme.v2.FoundationPlate};

    &.Mui-focusVisible {
      box-shadow: ${({
    theme
  }) => `0 0 0 3px ${theme.v2.ActionDollop}`};
    }
    &:hover {
      background-color: ${({
    theme
  }) => theme.v2.Accent2};
    }
    &:active {
      background-color: ${({
    theme
  }) => theme.v2.Accent3};
    }
    &[disabled] {
      color: ${({
    theme
  }) => theme.v2.FoundationText4};
    }
  `
};
exports.displayCss = displayCss;
const sizeCss = {
  [SIZE.Dense]: (0, _styledComponents.css)`
    height: 16px;
    padding: 0 7px;
  `,
  [SIZE.Compact]: (0, _styledComponents.css)`
    height: 24px;
    padding: 0 7px;
  `,
  [SIZE.Default]: (0, _styledComponents.css)`
    height: 24px;
    padding: 0 11px;
  `,
  [SIZE.Large]: (0, _styledComponents.css)`
    height: 32px;
    padding: 0 15px;
  `
}; //#endregion CSS

const StyledButton = (0, _styledComponents.default)( // eslint-disable-next-line @typescript-eslint/no-use-before-define
MUI.Button // as-cast necessary in order to allow for additional Monorail pass-through props
).withConfig((0, _helpers.propBlockerConfig)(['display', 'size'])) // Provide defaults
.attrs(props => {
  var _props$display, _props$size;

  return {
    display: (_props$display = props.display) !== null && _props$display !== void 0 ? _props$display : 'primary',
    size: (_props$size = props.size) !== null && _props$size !== void 0 ? _props$size : 'default'
  };
})`
  ${({
  display
}) => displayCss[display]}
  ${({
  size
}) => sizeCss[size]}
`;
/**
 * Composition of Button + Link with appropriate visual defaults
 */

exports.StyledButton = StyledButton;

function ButtonLink(props) {
  const bannedPropsDefaults = {
    component: _RouterLink.BaseRRLinkWithPropDenylist
  };
  return /*#__PURE__*/_react.default.createElement(Button, _extends({
    role: "link" // override button default role
    ,
    display: "chromeless"
  }, bannedPropsDefaults, props));
}

;
ButtonLink.muiName = MUI.Button.muiName; // eslint-disable-line

/**
 * A button is a thing that is clicked.
 *
 * - [Button | Material-UI](https://material-ui.com/components/buttons/#button)
 * - [Button | Monorail Figma](https://www.figma.com/file/dKL9YeHgWyxmRHuIjs38f3O9/Monorail-Components?node-id=16730%3A198)
 */

const Button = /*#__PURE__*/_react.default.forwardRef((props, ref) => {
  return /*#__PURE__*/_react.default.createElement(StyledButton, _extends({
    ref: ref
  }, props));
});

exports.Button = Button;
Button.muiName = MUI.Button.muiName; // eslint-disable-line