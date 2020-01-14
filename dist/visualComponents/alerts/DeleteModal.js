"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteModal = void 0;

var _react = _interopRequireDefault(require("react"));

var _exports = require("../../helpers/exports");

var _styledComponents = _interopRequireDefault(require("../../helpers/styled-components"));

var _AlertModal = require("./AlertModal");

var _alertType = require("./alertType");

var _Text = require("../typography/Text");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const DeletionText = _styledComponents.default.div`
  ${(0, _exports.flexFlow)('column')};
`;

const DeleteModal = props => {
  const {
    itemName,
    titleText,
    subtitleText,
    primaryButtonText,
    secondaryButtonText,
    ...domProps
  } = props;
  return _react.default.createElement(_AlertModal.AlertModal, _extends({}, domProps, {
    titleText: "This is a potentially destructive action.",
    alertType: _alertType.AlertType.Warning,
    primaryButtonText: "Delete",
    secondaryButtonText: "Cancel",
    subtitleText: _react.default.createElement(DeletionText, null, _react.default.createElement(_Text.Text, {
      fontSize: _exports.FontSizes.Title5,
      fontWeight: 400,
      margin: "8px 0"
    }, "You have chosen to delete the following:"), _react.default.createElement(_Text.Text, {
      fontSize: _exports.FontSizes.Title4,
      fontWeight: 500,
      margin: "8px 0"
    }, itemName), _react.default.createElement(_Text.Text, {
      fontSize: _exports.FontSizes.Title5,
      fontWeight: 400,
      margin: "8px 0"
    }, subtitleText || 'Deletion is permanent and cannot be recovered.'))
  }));
};

exports.DeleteModal = DeleteModal;