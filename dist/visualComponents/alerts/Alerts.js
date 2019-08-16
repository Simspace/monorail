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

/*
 * Styles
 */
const alertModalStyles = {
  [_alertType.AlertType.Error]: (0, _styledComponents2.css)(["", "{background:", ";}"], _Modals.BBModalHeaderContainer, (0, _color.getColor)(_color.Colors.Error)),
  [_alertType.AlertType.Warning]: (0, _styledComponents2.css)(["", "{background:", ";}"], _Modals.BBModalHeaderContainer, (0, _color.getColor)(_color.Colors.Warning)),
  [_alertType.AlertType.Success]: (0, _styledComponents2.css)(["", "{background:", ";}"], _Modals.BBModalHeaderContainer, (0, _color.getColor)(_color.Colors.Success)),
  [_alertType.AlertType.Info]: (0, _styledComponents2.css)(["", "{background:", ";}"], _Modals.BBModalHeaderContainer, (0, _color.getColor)(_color.Colors.Info))
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
  /*
   * Props
   */

};

/*
 * Component
 */
const AlertModal = props => {
  const {
    closingAnimationCompleted,
    isOpen,
    onClick,
    onSubmit,
    position,
    togglePopOver,
    alertType,
    titleText,
    subtitleText,
    primaryButtonText,
    secondaryButtonText
  } = props;
  return _react.default.createElement(_StyledMediumModal, {
    onClick: onClick,
    closingAnimationCompleted: closingAnimationCompleted,
    position: position,
    togglePopOver: togglePopOver,
    title: headerTitle[alertType],
    isOpen: isOpen,
    iconLeft: alertIcon[alertType],
    _css: alertModalStyles[alertType]
  }, _react.default.createElement(_StyledBBModalContent, null, _react.default.createElement(_Text.Text, {
    fontSize: _typography.FontSizes.Title4,
    fontWeight: 700,
    margin: "0 0 8px"
  }, titleText), _react.default.createElement(_Text.Text, {
    fontSize: _typography.FontSizes.Title5,
    fontWeight: 400,
    margin: "8px 0 0 "
  }, subtitleText)), _react.default.createElement(_Modals.BBModalFooter, null, secondaryButtonText && _react.default.createElement(_StyledButton, {
    onClick: onClick,
    display: _buttonTypes.ButtonDisplay.Chromeless
  }, secondaryButtonText), primaryButtonText && _react.default.createElement(_Button.Button, {
    onClick: () => {
      onSubmit();
      togglePopOver();
    }
  }, primaryButtonText)));
};

exports.AlertModal = AlertModal;

var _StyledMediumModal = (0, _styledComponents.default)(_MediumModal.MediumModal)`${p => p._css}`;

var _StyledBBModalContent = (0, _styledComponents.default)(_Modals.BBModalContent)`padding: 24px;`;

var _StyledButton = (0, _styledComponents.default)(_Button.Button)`margin-right: 8px;`;