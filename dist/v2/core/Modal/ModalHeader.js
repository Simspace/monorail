"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalHeader = exports.CloseButton = exports.ModalHeaderTitle = exports.ModalHeaderContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _exports = require("../../../helpers/exports");

var _styledComponents2 = _interopRequireWildcard(require("../../../helpers/styled-components"));

var _typeGuards = require("../../../sharedHelpers/typeGuards");

var _IconButton = require("../IconButton/IconButton");

var _modalTypes = require("./modalTypes");

var Icons = _interopRequireWildcard(require("../../icons/Icons"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// #region CSS
const ModalHeaderContainer = _styledComponents2.default.div(({
  size,
  theme
}) => (0, _styledComponents2.css)`
    ${(0, _exports.flexFlow)('row')};
    ${(0, _exports.getElevationShadow)(_exports.ElevationRange.Elevation2)};

    align-items: center;
    height: ${size === _modalTypes.MODAL_SIZE.Mini || size === _modalTypes.MODAL_SIZE.Small ? 48 : 56}px;
    padding: 0 16px;
    width: 100%;
    overflow: hidden;
    background: ${theme.v2.Accent1};
    flex-shrink: 0;
    user-select: none;
    box-sizing: border-box;
    color: ${theme.v2.FoundationPlate};
  `); // TODO: [kp 2020-10] use the Header component that Dan is working on instead?

/**
 * WCAG note: This heading uses an `h1`.
 * Since it is displayed in a modal, it does not affect other headings on the page.
 */


exports.ModalHeaderContainer = ModalHeaderContainer;

const ModalHeaderTitle = _styledComponents2.default.h1.attrs(_ => ({
  'data-test-id': 'modal-header-title'
}))(({
  size
}) => (0, _styledComponents2.css)`
    ${size === _modalTypes.MODAL_SIZE.Mini || size === _modalTypes.MODAL_SIZE.Small ? (0, _exports.typographyFont)(700, _exports.FontSizes.Title4) : (0, _exports.typographyFont)(700, _exports.FontSizes.Title3)};
    white-space: nowrap;
    margin: 0;
  `); // #endregion CSS


exports.ModalHeaderTitle = ModalHeaderTitle;

var _StyledModalHeaderTitle = /*#__PURE__*/(0, _styledComponents.default)(ModalHeaderTitle).withConfig({
  displayName: "ModalHeader___StyledModalHeaderTitle",
  componentId: "vgooyq-0"
})(["", " ", ""], p => p._css, p => p._css2);

const CLOSE_BUTTON_TEXT = 'Close';

var _StyledIconButton = /*#__PURE__*/(0, _styledComponents.default)(_IconButton.IconButton).withConfig({
  displayName: "ModalHeader___StyledIconButton",
  componentId: "vgooyq-1"
})(["margin-left:auto;"]);

const CloseButton = ({
  display = 'chromelessContrast',
  size = 'default',
  onClose
}) => /*#__PURE__*/_react.default.createElement(_StyledIconButton, {
  shape: "square",
  display: display,
  size: size,
  onClick: onClose,
  "aria-label": CLOSE_BUTTON_TEXT
}, /*#__PURE__*/_react.default.createElement(Icons.Close, {
  titleAccess: CLOSE_BUTTON_TEXT
}));
/**
 * Top banner of the modal dialog
 */


exports.CloseButton = CloseButton;

const ModalHeader = props => {
  const {
    closeButton,
    size = _modalTypes.MODAL_SIZE.Medium,
    title,
    startAdornment,
    endAdornment,
    onClose,
    TitleProps,
    ...rest
  } = props;
  return /*#__PURE__*/_react.default.createElement(ModalHeaderContainer, _extends({
    size: size
  }, rest), startAdornment, /*#__PURE__*/_react.default.createElement(_StyledModalHeaderTitle, _extends({
    size: size
  }, TitleProps, {
    _css: (0, _typeGuards.isNotNil)(startAdornment) && `margin-left: 16px`,
    _css2: (0, _typeGuards.isNotNil)(endAdornment) && `margin-right: 16px`
  }), title), endAdornment, (0, _typeGuards.isNotNil)(closeButton) ? closeButton : /*#__PURE__*/_react.default.createElement(CloseButton, {
    onClose: onClose
  }));
};

exports.ModalHeader = ModalHeader;