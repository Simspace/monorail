"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteModal = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _color = require("../../helpers/color");

var _styledComponents2 = require("../../helpers/styled-components");

var _typography = require("../../helpers/typography");

var _Button = require("../buttons/Button");

var _buttonTypes = require("../buttons/buttonTypes");

var _MediumModal = require("./MediumModal");

var _Modals = require("./Modals");

var _Text = require("../typography/Text");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const deleteModalStyles =
/*#__PURE__*/
(0, _styledComponents2.css)(["", "{background:", ";}"], _Modals.BBModalHeaderContainer, (0, _color.getColor)(_color.Colors.Red));

const DeleteModal = props => {
  const {
    closingAnimationCompleted,
    isOpen,
    itemName,
    onClick,
    onSubmit,
    position,
    togglePopOver,
    titleText,
    subtitleText
  } = props;
  return _react.default.createElement(_StyledMediumModal, {
    onClick: onClick,
    closingAnimationCompleted: closingAnimationCompleted,
    position: position,
    togglePopOver: togglePopOver,
    title: "Warning",
    isOpen: isOpen,
    iconLeft: "error"
  }, _react.default.createElement(_StyledBBModalContent, null, _react.default.createElement(_Text.Text, {
    fontSize: _typography.FontSizes.Title4,
    fontWeight: 700,
    margin: "0 0 8px"
  }, titleText !== undefined ? titleText : _react.default.createElement(_react.default.Fragment, null, "Are you sure you want to delete ", _react.default.createElement("i", null, itemName), "?")), _react.default.createElement(_Text.Text, {
    fontSize: _typography.FontSizes.Title5,
    fontWeight: 400,
    margin: "8px 0 0 "
  }, titleText !== undefined ? subtitleText : _react.default.createElement(_react.default.Fragment, null, "Deleting is permanent action that can not be recovered."))), _react.default.createElement(_Modals.BBModalFooter, null, _react.default.createElement(_StyledButton, {
    onClick: onClick,
    display: _buttonTypes.ButtonDisplay.Chromeless
  }, "No"), _react.default.createElement(_Button.Button, {
    onClick: () => {
      onSubmit();
      togglePopOver();
    }
  }, "Yes")));
};

exports.DeleteModal = DeleteModal;

var _StyledMediumModal = (0, _styledComponents.default)(_MediumModal.MediumModal)`${deleteModalStyles}`;

var _StyledBBModalContent = (0, _styledComponents.default)(_Modals.BBModalContent)`padding: 24px;`;

var _StyledButton = (0, _styledComponents.default)(_Button.Button)`margin-right: 8px;`;