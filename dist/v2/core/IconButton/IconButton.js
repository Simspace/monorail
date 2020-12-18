"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconButton = IconButton;
exports.IconButtonLink = IconButtonLink;
exports.StyledIconButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouter = require("react-router");

var MUI = _interopRequireWildcard(require("@material-ui/core"));

var _styledComponents = _interopRequireWildcard(require("../../../helpers/styled-components"));

var _Button = require("../Button/Button");

var _helpers = require("../../shared/helpers");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DISPLAY = { ..._Button.DISPLAY,
  ChromelessAction: 'chromelessAction'
};
const SHAPE = {
  Square: 'square',
  Circle: 'circle'
};
// #region CSS
const displayCss = { ..._Button.displayCss,
  [DISPLAY.Chromeless]: (0, _styledComponents.css)`
    color: ${({
    theme
  }) => theme.v2.FoundationText4};

    &.Mui-focusVisible {
      box-shadow: ${({
    theme
  }) => `inset 0 0 0 1px ${theme.v2.Accent3}, 0 0 0 3px ${theme.v2.ActionDollop}`};
    }
    &:hover {
      color: ${({
    theme
  }) => theme.v2.FoundationText3};
      background-color: ${({
    theme
  }) => theme.v2.FoundationPinch};
    }
    &:active {
      color: ${({
    theme
  }) => theme.v2.FoundationText3};
      background-color: ${({
    theme
  }) => theme.v2.FoundationDash};
    }
    &[disabled] {
      color: ${({
    theme
  }) => theme.v2.FoundationDollop};
    }
  `,
  [DISPLAY.ChromelessAction]: (0, _styledComponents.css)`
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
  }) => theme.v2.InfoSmidgen};

      &.Mui-focusVisible {
        box-shadow: ${({
    theme
  }) => `inset 0 0 0 1px ${theme.v2.Accent3}, 0 0 0 3px ${theme.v2.ActionDollop}`};
      }
    }
    &:active {
      color: ${({
    theme
  }) => theme.v2.Accent3};
      background-color: ${({
    theme
  }) => theme.v2.InfoPinch};
    }
    &[disabled] {
      color: ${({
    theme
  }) => theme.v2.ActionDollop};
    }
  `
};
const shapeCss = {
  [SHAPE.Square]: (0, _styledComponents.css)`
    border-radius: 4px;
  `,
  [SHAPE.Circle]: (0, _styledComponents.css)`
    border-radius: 50%;
  `
};
const sizeCss = {
  [_Button.SIZE.Dense]: (0, _styledComponents.css)``,
  // TODO
  [_Button.SIZE.Compact]: (0, _styledComponents.css)``,
  // TODO
  [_Button.SIZE.Default]: (0, _styledComponents.css)`
    font-size: 16px;
    height: 24px;
    width: 24px;
  `,
  [_Button.SIZE.Large]: (0, _styledComponents.css)`
    font-size: 24px;
    height: 32px;
    width: 32px;
  `
}; // #endregion CSS

const StyledIconButton = (0, _styledComponents.default)(MUI.IconButton // as-cast necessary in order to allow for additional Monorail pass-through props
)
/**
 * Prevent passing Monorail props that are identically named as Material UI.
 *
 * In this situation, we have `size`, which
 * is our own Monorail prop that conflicts with Material's `size`. Since we specifically do not want devs using
 * Material visual props such as `size`, and passing our prop to the underlying Material component would cause
 * console errors, we configure styled-components not to do so.
 **/
.withConfig((0, _helpers.propBlockerConfig)(['display', 'shape', 'size'])) // Provide defaults
.attrs(props => {
  var _props$display, _props$shape, _props$size;

  return {
    display: (_props$display = props.display) !== null && _props$display !== void 0 ? _props$display : 'primary',
    shape: (_props$shape = props.shape) !== null && _props$shape !== void 0 ? _props$shape : 'circle',
    size: (_props$size = props.size) !== null && _props$size !== void 0 ? _props$size : 'default'
  };
})`
  ${({
  display
}) => displayCss[display]}
  ${({
  shape
}) => shapeCss[shape]}
  ${({
  size
}) => sizeCss[size]}
`;
exports.StyledIconButton = StyledIconButton;

/**
 * IconButton is a Button with an Icon!
 *
 * - [IconButton | Material-UI](https://material-ui.com/components/buttons/#icon-buttons)
 * - [IconButton | Monorail Figma](https://www.figma.com/file/dKL9YeHgWyxmRHuIjs38f3O9/Monorail-Components?node-id=16735%3A801)
 */
function IconButton(props) {
  return /*#__PURE__*/_react.default.createElement(StyledIconButton, props);
}

;
IconButton.muiName = MUI.IconButton.muiName; // eslint-disable-line

/**
 * IconButton with component overridden to react-router `Link` component
 */
function IconButtonLink(props) {
  const newProps = { ...props,
    component: _reactRouter.Link
  }; // type cast to not deal with polymorphic MUI+style-components madness

  return /*#__PURE__*/_react.default.createElement(IconButton, newProps);
}

;
IconButtonLink.muiName = MUI.IconButton.muiName; // eslint-disable-line