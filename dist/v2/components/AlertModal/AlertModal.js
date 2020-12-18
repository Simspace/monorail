"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlertModal = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _utils = require("@react-aria/utils");

var _styledComponents2 = _interopRequireWildcard(require("../../../helpers/styled-components"));

var _typography = require("../../../helpers/typography");

var _typeGuards = require("../../../sharedHelpers/typeGuards");

var _Button = require("../../core/Button/Button");

var _Modal = require("../../core/Modal/Modal");

var _ModalConent = require("../../core/Modal/ModalConent");

var _ModalFooter = require("../../core/Modal/ModalFooter");

var _ModalHeader = require("../../core/Modal/ModalHeader");

var Icons = _interopRequireWildcard(require("../../icons/Icons"));

var _Text = require("../../../visualComponents/typography/Text");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
 * Alert Modal:
 *
 *   =============================================
 *   |   label                                   |
 *   =============================================
 *   |   title                                   |
 *   |                                           |
 *   |   description                             |
 *   |                                           |
 *   |   {children}                              |
 *   ---------------------------------------------
 *   |           secondaryAction   primaryAction |
 *   =============================================
 */
// Essentially an Enum
const ALERT_TYPE = {
  Error: 'error',
  Warning: 'warning',
  Success: 'success',
  Info: 'info'
}; // Union of "Enum" values

//#region CSS
const HeaderContainer = _styledComponents2.default.div`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 0 16px 0 24px;
  flex-shrink: 0;
  user-select: none;
  border-bottom: 1px solid;
  font-size: 20px; /* Affects Icon's size */
`;

var _StyledHeaderContainer = /*#__PURE__*/(0, _styledComponents.default)(HeaderContainer).withConfig({
  displayName: "AlertModal___StyledHeaderContainer",
  componentId: "sc-1ex511h-0"
})(["", ""], p => p._css);

const HeaderTitle = _styledComponents2.default.h1`
  ${(0, _typography.typographyFont)(_typography.FontWeights.Bold, _typography.FontSizes.Title3)}
  color: ${({
  theme
}) => theme.v2.FoundationText1};
  white-space: nowrap;
  margin-left: 24px;
`;
const headerContainerStylesForType = {
  [ALERT_TYPE.Error]: (0, _styledComponents2.css)`
    color: ${({
    theme
  }) => theme.v2.ErrorGraphic};
    border-color: ${({
    theme
  }) => theme.v2.ErrorGraphic};
  `,
  [ALERT_TYPE.Warning]: (0, _styledComponents2.css)`
    color: ${({
    theme
  }) => theme.v2.WarningGraphic};
    border-color: ${({
    theme
  }) => theme.v2.WarningGraphic};
  `,
  [ALERT_TYPE.Success]: (0, _styledComponents2.css)`
    color: ${({
    theme
  }) => theme.v2.SuccessGraphic};
    border-color: ${({
    theme
  }) => theme.v2.SuccessGraphic};
  `,
  [ALERT_TYPE.Info]: (0, _styledComponents2.css)`
    color: ${({
    theme
  }) => theme.v2.InfoGraphic};
    border-color: ${({
    theme
  }) => theme.v2.InfoGraphic};
  `
}; //#endregion

const alertIcon = {
  [ALERT_TYPE.Error]: Icons.Error,
  [ALERT_TYPE.Warning]: Icons.Warning,
  [ALERT_TYPE.Success]: Icons.CheckCircle,
  [ALERT_TYPE.Info]: Icons.Info
};
const headerLabel = {
  [ALERT_TYPE.Error]: 'Error',
  [ALERT_TYPE.Warning]: 'Warning',
  [ALERT_TYPE.Success]: 'Success',
  [ALERT_TYPE.Info]: 'Info'
}; // Returns label for string-based or object-based prop passed in

const getLabel = item => (0, _typeGuards.isString)(item) ? item : item.label;

var _StyledButton = /*#__PURE__*/(0, _styledComponents.default)(_Button.Button).withConfig({
  displayName: "AlertModal___StyledButton",
  componentId: "sc-1ex511h-1"
})(["margin-right:8px;"]);

/**
 * An alert modal informs the user about situations that require acknowledgement.
 *
 * - [Alerts | Monorail Figma](https://www.figma.com/file/dKL9YeHgWyxmRHuIjs38f3O9/Monorail-Components?node-id=17564%3A21)
 */
const AlertModal = props => {
  const {
    type = ALERT_TYPE.Info,
    open,
    onClose,
    label = headerLabel[type],
    title,
    description,
    children,
    primaryAction,
    secondaryAction,
    ModalProps
  } = props;
  const labelId = (0, _utils.useId)();
  const descriptionId = props.description ? `${labelId}-description` : undefined;
  const AlertIcon = alertIcon[type];
  return /*#__PURE__*/_react.default.createElement(_Modal.Modal, _extends({
    open: open,
    role: "alertdialog",
    "aria-labelledby": labelId,
    "aria-describedby": descriptionId,
    onClose: onClose
  }, ModalProps), /*#__PURE__*/_react.default.createElement(_StyledHeaderContainer, {
    _css: headerContainerStylesForType[type]
  }, /*#__PURE__*/_react.default.createElement(AlertIcon, {
    "aria-hidden": true
  }), /*#__PURE__*/_react.default.createElement(HeaderTitle, {
    id: labelId
  }, label), /*#__PURE__*/_react.default.createElement(_ModalHeader.CloseButton, {
    display: "chromeless",
    size: "large",
    onClose: onClose
  })), /*#__PURE__*/_react.default.createElement(_ModalConent.ModalContent, null, title && /*#__PURE__*/_react.default.createElement(_Text.Text, {
    fontSize: _typography.FontSizes.Title4,
    fontWeight: _typography.FontWeights.Bold,
    margin: "0 0 8px"
  }, title), description && /*#__PURE__*/_react.default.createElement(_Text.Text, {
    id: descriptionId,
    fontSize: _typography.FontSizes.Title5,
    fontWeight: _typography.FontWeights.Book,
    margin: "8px 0 0"
  }, description), children), /*#__PURE__*/_react.default.createElement(_ModalFooter.ModalFooter, null, secondaryAction && /*#__PURE__*/_react.default.createElement(_StyledButton, {
    // Focus the least-descructive action
    autoFocus: true,
    onClick: (0, _typeGuards.isObject)(secondaryAction) ? secondaryAction.onClick : onClose,
    display: "chromeless"
  }, getLabel(secondaryAction)), primaryAction && /*#__PURE__*/_react.default.createElement(_Button.Button // Focus action, if secondary doesn't exist
  , {
    autoFocus: (0, _typeGuards.isNil)(secondaryAction),
    disabled: (0, _typeGuards.isObject)(primaryAction) && primaryAction.disabled,
    onClick: (0, _typeGuards.isObject)(primaryAction) ? primaryAction.onClick : onClose
  }, getLabel(primaryAction))));
};

exports.AlertModal = AlertModal;