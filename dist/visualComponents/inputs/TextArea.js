"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextArea = exports.TextAreaInput = exports.TextAreaContainer = void 0;

var _exports = require("../../helpers/exports");

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _inputTypes = require("./inputTypes");

var _Label = require("./Label");

var _StdErr = require("./StdErr");

var _ViewInput = require("./ViewInput");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
 * Styles
 */
const TextAreaContainer =
/*#__PURE__*/
_styledComponents.default.label.withConfig({
  displayName: "TextArea__TextAreaContainer",
  componentId: "sc-1vltn06-0"
})(({
  cssOverrides,
  display
}) => (0, _styledComponents.css)(["", ";max-width:256px;width:100%;position:relative;", " ", ""], (0, _exports.flexFlow)(), display !== _inputTypes.DisplayType.Edit && `margin-bottom: 24px;`, cssOverrides));

exports.TextAreaContainer = TextAreaContainer;

const TextAreaInput =
/*#__PURE__*/
_styledComponents.default.textarea.withConfig({
  displayName: "TextArea__TextAreaInput",
  componentId: "sc-1vltn06-1"
})(({
  chromeless,
  compact,
  height,
  err
}) => (0, _styledComponents.css)(["", ";", ";border:1px solid ", ";box-sizing:border-box;color:", ";height:", "px;outline:none;padding:4px 6px 4px 6px;resize:none;width:100%;", ";::placeholder{color:", ";font-style:italic;}&:hover{border:1px solid ", ";}&:focus,&:active{border:1px solid ", ";}", ";", ";:-moz-ui-invalid{box-shadow:none;}", ";"], (0, _exports.typographyFont)(400, _exports.FontSizes.Title5), (0, _exports.borderRadius)(), (0, _exports.getColor)(_exports.Colors.Black, 0.12), (0, _exports.getColor)(_exports.Colors.Black89a), height ? height : '64', _exports.buttonTransition, (0, _exports.getColor)(_exports.Colors.Black54a), (0, _exports.getColor)(_exports.Colors.Black, 0.3), (0, _exports.getColor)(_exports.Colors.BrandLightBlue), chromeless && (0, _styledComponents.css)(["border:1px solid transparent;"]), compact && (0, _styledComponents.css)(["overflow:hidden;"]), err && _exports.baseErrorBorderStyles));
/*
 * Types
 */


exports.TextAreaInput = TextAreaInput;

/*
 * Component
 */
const TextArea = props => {
  const {
    chromeless,
    compact,
    cssOverrides,
    disabled,
    display = _inputTypes.DisplayType.Edit,
    height,
    label,
    onChange,
    onKeyDown,
    placeholder,
    readOnly,
    required,
    htmlValidation = true,
    value,
    onBlur,
    name,
    className,
    err,
    msg,
    hideStdErr = false,
    textareaRef,
    ...otherProps
  } = props;
  const internalRef = (0, _react.useRef)(null);
  const textArea = textareaRef !== null && textareaRef !== void 0 ? textareaRef : internalRef;

  const setCompactHeight = () => {
    if (compact && textArea) {
      const current = textArea.current;

      if (!(0, _typeGuards.isNil)(current)) {
        window.requestAnimationFrame(() => {
          current.style.height = 'auto';
          current.style.height = current.scrollHeight + 'px';
        });
      }
    }
  };

  (0, _react.useLayoutEffect)(() => {
    setCompactHeight();
  });

  const onCompactChange = e => {
    setCompactHeight();
    onChange && onChange(e);
  };

  return _react.default.createElement(TextAreaContainer, {
    cssOverrides: cssOverrides,
    className: className,
    display: display
  }, display === _inputTypes.DisplayType.Edit ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Label.Label, {
    label: label,
    required: required,
    err: err,
    display: display
  }), _react.default.createElement(TextAreaInput, _extends({
    chromeless: chromeless,
    className: "new-textarea",
    compact: compact,
    disabled: disabled,
    height: height,
    ref: textArea,
    onChange: onCompactChange,
    onKeyDown: onKeyDown,
    placeholder: placeholder,
    readOnly: readOnly,
    required: htmlValidation && required,
    rows: compact ? 1 : 3,
    value: value,
    onBlur: onBlur,
    name: name,
    err: err
  }, otherProps)), !hideStdErr && _react.default.createElement(_StdErr.StdErr, {
    err: err,
    msg: msg
  })) : _react.default.createElement(_ViewInput.ViewInput, {
    label: label,
    value: value
  }));
};

exports.TextArea = TextArea;