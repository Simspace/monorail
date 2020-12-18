"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmptyState = exports.getMessageMaxWidth = exports.messageMargins = exports.titleMargins = exports.iconMargins = exports.messageSizes = exports.titleSizes = exports.iconSizes = exports.EmptyStateSizes = exports.TextContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _exports = require("../../helpers/exports");

var _styledComponents2 = _interopRequireDefault(require("../../helpers/styled-components"));

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _Button = require("../buttons/Button");

var _buttonTypes = require("../buttons/buttonTypes");

var _Icon = require("../icon/Icon");

var _Text = require("../typography/Text");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Container = _styledComponents2.default.div(({
  cssOverrides
}) => (0, _styledComponents.css)(["", " align-items:center;flex:1;justify-content:center;text-align:center;", ""], (0, _exports.flexFlow)('column'), cssOverrides));

const TextContainer = _styledComponents2.default.div`
  ${(0, _exports.flexFlow)('column')}
`;
exports.TextContainer = TextContainer;
let EmptyStateSizes;
exports.EmptyStateSizes = EmptyStateSizes;

(function (EmptyStateSizes) {
  EmptyStateSizes["Small"] = "small";
  EmptyStateSizes["Large"] = "large";
})(EmptyStateSizes || (exports.EmptyStateSizes = EmptyStateSizes = {}));

const iconSizes = {
  [EmptyStateSizes.Small]: 56,
  [EmptyStateSizes.Large]: 88
};
exports.iconSizes = iconSizes;
const titleSizes = {
  [EmptyStateSizes.Small]: _exports.FontSizes.Title4,
  [EmptyStateSizes.Large]: _exports.FontSizes.Title1
};
exports.titleSizes = titleSizes;
const messageSizes = {
  [EmptyStateSizes.Small]: _exports.FontSizes.Title5,
  [EmptyStateSizes.Large]: _exports.FontSizes.Title3
};
exports.messageSizes = messageSizes;
const iconMargins = {
  [EmptyStateSizes.Small]: '0 0 8px',
  [EmptyStateSizes.Large]: '0 0 12px'
};
exports.iconMargins = iconMargins;
const titleMargins = {
  [EmptyStateSizes.Small]: '0 0 8px 0',
  [EmptyStateSizes.Large]: '0 0 8px 0'
};
exports.titleMargins = titleMargins;
const messageMargins = {
  [EmptyStateSizes.Small]: '0 0 16px 0',
  [EmptyStateSizes.Large]: '0 0 16px 0'
};
exports.messageMargins = messageMargins;

const getMessageMaxWidth = size => {
  const messageMaxWidths = {
    [EmptyStateSizes.Small]: 272,
    [EmptyStateSizes.Large]: 400
  };
  return messageMaxWidths[size];
};

exports.getMessageMaxWidth = getMessageMaxWidth;

var _StyledIcon = /*#__PURE__*/(0, _styledComponents.default)(_Icon.Icon).withConfig({
  displayName: "EmptyState___StyledIcon",
  componentId: "sc-92oi23-0"
})(["margin:", ";"], p => p._css);

var _StyledText = /*#__PURE__*/(0, _styledComponents.default)(_Text.Text).withConfig({
  displayName: "EmptyState___StyledText",
  componentId: "sc-92oi23-1"
})(["max-width:", "px;"], p => p._css2);

const EmptyState = props => {
  const {
    icon = 'shrug',
    size = EmptyStateSizes.Small,
    title = '',
    message,
    button = {
      text: ''
    },
    ...otherProps
  } = props;
  const {
    text: buttonText,
    ...buttonProps
  } = button;
  return /*#__PURE__*/_react.default.createElement(Container, otherProps, /*#__PURE__*/_react.default.createElement(_StyledIcon, {
    size: iconSizes[size],
    icon: icon,
    color: _exports.Colors.Gray54,
    _css: iconMargins[size]
  }), /*#__PURE__*/_react.default.createElement(TextContainer, null, (0, _typeGuards.isNonEmptyString)(title) && /*#__PURE__*/_react.default.createElement(_Text.Text, {
    fontSize: titleSizes[size],
    fontWeight: _exports.FontWeights.Medium,
    color: _exports.Colors.Gray74,
    margin: titleMargins[size]
  }, title), /*#__PURE__*/_react.default.createElement(_StyledText, {
    fontSize: messageSizes[size],
    fontWeight: _exports.FontWeights.Book,
    color: _exports.Colors.Gray54,
    margin: messageMargins[size],
    _css2: getMessageMaxWidth(size)
  }, message)), (0, _typeGuards.isNonEmptyString)(buttonText) && /*#__PURE__*/_react.default.createElement(_Button.Button, _extends({
    display: _buttonTypes.ButtonDisplay.Secondary
  }, buttonProps), buttonText));
};

exports.EmptyState = EmptyState;