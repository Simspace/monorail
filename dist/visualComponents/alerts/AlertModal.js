"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlertModal = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _color = require("../../helpers/color");

var _styledComponents2 = require("../../helpers/styled-components");

var _typography = require("../../helpers/typography");

var _alertType = require("./alertType");

var _Button = require("../buttons/Button");

var _buttonTypes = require("../buttons/buttonTypes");

var _MediumModal = require("../modals/MediumModal");

var _Modals = require("../modals/Modals");

var _Text = require("../typography/Text");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
 * Styles
 */
const alertModalStyles = {
  [_alertType.AlertType.Error]: (0, _styledComponents2.css)`
    ${_Modals.BBModalHeaderContainer} {
      background: ${(0, _color.getColor)(_color.Colors.Error)};
    }
  `,
  [_alertType.AlertType.Warning]: (0, _styledComponents2.css)`
    ${_Modals.BBModalHeaderContainer} {
      background: ${(0, _color.getColor)(_color.Colors.Warning)};
    }
  `,
  [_alertType.AlertType.Success]: (0, _styledComponents2.css)`
    ${_Modals.BBModalHeaderContainer} {
      background: ${(0, _color.getColor)(_color.Colors.Success)};
    }
  `,
  [_alertType.AlertType.Info]: (0, _styledComponents2.css)`
    ${_Modals.BBModalHeaderContainer} {
      background: ${(0, _color.getColor)(_color.Colors.Info)};
    }
  `
};
const alertIcon = {
  [_alertType.AlertType.Error]: 'error',
  [_alertType.AlertType.Warning]: 'warning',
  [_alertType.AlertType.Success]: 'check_circle',
  [_alertType.AlertType.Info]: 'info'
};
const headerTitle = {
  [_alertType.AlertType.Error]: 'Error',
  [_alertType.AlertType.Warning]: 'Warning',
  [_alertType.AlertType.Success]: 'Success',
  [_alertType.AlertType.Info]: 'Info'
};
/*
 * Props
 */

var _StyledMediumModal = /*#__PURE__*/(0, _styledComponents.default)(_MediumModal.MediumModal).withConfig({
  displayName: "AlertModal___StyledMediumModal",
  componentId: "sc-14c9sxu-0"
})(["", ""], p => p._css);

var _StyledBBModalContent = /*#__PURE__*/(0, _styledComponents.default)(_Modals.BBModalContent).withConfig({
  displayName: "AlertModal___StyledBBModalContent",
  componentId: "sc-14c9sxu-1"
})(["padding:", "px;"], p => p._css2);

var _StyledButton = /*#__PURE__*/(0, _styledComponents.default)(_Button.Button).withConfig({
  displayName: "AlertModal___StyledButton",
  componentId: "sc-14c9sxu-2"
})(["margin-right:8px;"]);

/*
 * Component
 */
const AlertModal = props => {
  const {
    alertType,
    children,
    closeOnSubmit = true,
    closingAnimationCompleted,
    disabled,
    pending = false,
    headerText,
    isOpen,
    onClick,
    onSubmit,
    padding,
    primaryButtonText,
    secondaryButtonText,
    subtitleText,
    titleText,
    togglePopOver,
    zIndex,
    ...domProps
  } = props;
  return /*#__PURE__*/_react.default.createElement(_StyledMediumModal, _extends({}, domProps, {
    onClick: onClick,
    closingAnimationCompleted: closingAnimationCompleted,
    togglePopOver: togglePopOver,
    title: headerText || headerTitle[alertType],
    isOpen: isOpen,
    iconLeft: alertIcon[alertType],
    zIndex: zIndex,
    _css: alertModalStyles[alertType]
  }), /*#__PURE__*/_react.default.createElement(_StyledBBModalContent, {
    _css2: padding || 24
  }, titleText && /*#__PURE__*/_react.default.createElement(_Text.Text, {
    fontSize: _typography.FontSizes.Title4,
    fontWeight: 700,
    margin: "0 0 8px"
  }, titleText), subtitleText && /*#__PURE__*/_react.default.createElement(_Text.Text, {
    fontSize: _typography.FontSizes.Title5,
    fontWeight: 400,
    margin: "8px 0 0"
  }, subtitleText), children), /*#__PURE__*/_react.default.createElement(_Modals.BBModalFooter, null, secondaryButtonText && /*#__PURE__*/_react.default.createElement(_StyledButton, {
    disabled: pending,
    onClick: onClick,
    display: _buttonTypes.ButtonDisplay.Chromeless
  }, secondaryButtonText), primaryButtonText && /*#__PURE__*/_react.default.createElement(_Button.Button, {
    disabled: disabled || pending,
    isLoading: pending,
    onClick: () => {
      onSubmit();

      if (closeOnSubmit) {
        togglePopOver();
      }
    }
  }, primaryButtonText)));
};

exports.AlertModal = AlertModal;