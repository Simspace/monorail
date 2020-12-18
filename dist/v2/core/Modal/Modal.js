"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = Modal;

var _react = _interopRequireDefault(require("react"));

var MUI = _interopRequireWildcard(require("@material-ui/core"));

var _styledComponents = _interopRequireWildcard(require("../../../helpers/styled-components"));

var _helpers = require("../../shared/helpers");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

//#region Modal Content Container
const ANIMATION_DURATION = 100;
const paperAnimation = {
  open: (0, _styledComponents.keyframes)`
    from {
      opacity: 0;
      transform: rotateX(15deg) translateY(16px) scale(.95)
    }

    to {
      opacity: 1;
      transform: none;
    }
    `,
  close: (0, _styledComponents.keyframes)`
    from {
      opacity: 1;
      transform: none;
    }

    to {
      opacity: 0;
      transform: rotateX(15deg) translateY(16px) scale(.95)
    }
  `
};
const StyledPaper = (0, _styledComponents.default)(MUI.Paper).withConfig((0, _helpers.propBlockerConfig)(['open', 'fullScreen']))`
  ${({
  open,
  fullScreen
}) => !fullScreen ? (0, _styledComponents.css)`
          animation: ${open ? paperAnimation.open : paperAnimation.close} linear
            ${ANIMATION_DURATION}ms forwards;
        ` : ''}
`; //#endregion Modal Content Container
//#region Modal

const StyledDialog = (0, _styledComponents.default)(MUI.Dialog)``;
/**
 * Modal dialog
 *
 * - [Dialog | Material-UI](https://material-ui.com/components/dialogs/#dialog)
 * - [Modals | Monorail Figma](https://www.figma.com/file/dKL9YeHgWyxmRHuIjs38f3O9/Monorail-Components?node-id=2133%3A64)
 */

function Modal({
  role = 'dialog',
  title,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledby,
  PaperProps,
  TransitionProps,
  ...props
}) {
  const bannedPropsDefaults = {
    maxWidth: false
  };
  return /*#__PURE__*/_react.default.createElement(StyledDialog, _extends({
    PaperComponent: StyledPaper
  }, bannedPropsDefaults, props, {
    PaperProps: { ...PaperProps,
      open: props.open,
      fullScreen: props.fullScreen,
      role,
      title,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledby,
      'aria-modal': true
    },
    TransitionProps: {
      role: null,
      ...TransitionProps
    }
  }));
}

;
Modal.muiName = MUI.Dialog.muiName; // eslint-disable-line
//#endregion Modal