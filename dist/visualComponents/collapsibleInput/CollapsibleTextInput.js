"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CollapsibleTextInput = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _exports = require("../../helpers/exports");

var _Button = require("../buttons/Button");

var _buttonTypes = require("../buttons/buttonTypes");

var _IconButton = require("../buttons/IconButton");

var _TextField = require("../inputs/TextField");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const CollapsibleTitle = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "CollapsibleTextInput__CollapsibleTitle",
  componentId: "sc-1jdywlh-0"
})(["color:", ";", ";justify-content:center;height:24px;", ";"], (0, _exports.getColor)(_exports.Colors.Gray89), (0, _exports.flexFlow)(), (0, _exports.typography)(_exports.FontWeights.Book, _exports.FontSizes.Title5, '0'));

const CollapsibleTitleWrapper = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "CollapsibleTextInput__CollapsibleTitleWrapper",
  componentId: "sc-1jdywlh-1"
})(({
  isOpen
}) => (0, _styledComponents.css)(["padding:8px 8px 8px 16px;", " justify-content:space-between;background-color:", ";"], (0, _exports.flexFlow)('row'), isOpen ? (0, _exports.getColor)(_exports.Colors.Gray06) : 'inherit'));

const CollapsibleContentWrapper = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "CollapsibleTextInput__CollapsibleContentWrapper",
  componentId: "sc-1jdywlh-2"
})(["", " padding:8px 16px;justify-content:space-between;background-color:", ";", ";width:100%;z-index:9;position:absolute;box-sizing:border-box;cursor:pointer;"], (0, _exports.flexFlow)('row', 'wrap'), (0, _exports.getColor)(_exports.Colors.Grey98), (0, _exports.getElevationShadow)(_exports.ElevationRange.Elevation1));

var _StyledCollapsibleContentWrapper = /*#__PURE__*/(0, _styledComponents.default)(CollapsibleContentWrapper).withConfig({
  displayName: "CollapsibleTextInput___StyledCollapsibleContentWrapper",
  componentId: "sc-1jdywlh-3"
})(p => ({
  display: p._css
}));

const CollapsibleDiv = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "CollapsibleTextInput__CollapsibleDiv",
  componentId: "sc-1jdywlh-4"
})(({
  cssOverrides
}) => (0, _styledComponents.css)(["box-sizing:border-box;width:100%;background-color:", ";", ";position:relative;", ";"], (0, _exports.getColor)(_exports.Colors.Grey98), (0, _exports.getElevationShadow)(_exports.ElevationRange.Elevation1), cssOverrides));

var _StyledStyledInput = /*#__PURE__*/(0, _styledComponents.default)(_TextField.StyledInput).withConfig({
  displayName: "CollapsibleTextInput___StyledStyledInput",
  componentId: "sc-1jdywlh-5"
})({
  flexGrow: 1,
  marginRight: '4px'
});

const CollapsibleTextInput = props => {
  const [contentOpen, toggleContentOpen] = _react.default.useState(false);

  const [text, setText] = _react.default.useState('');

  const [showErr, setShowErr] = _react.default.useState(false);

  const {
    onSubmit,
    closeOnSubmit,
    buttonText,
    titleText,
    allowEmpty,
    cssOverrides,
    ...inputProps
  } = props;

  const updateText = evt => {
    setShowErr(false);
    setText(evt.target.value);
  };

  const handleSubmit = () => {
    if (text.length > 0 || allowEmpty) {
      onSubmit(text);
      setText('');
      closeOnSubmit && toggleContentOpen(false);
    } else {
      setShowErr(true);
    }
  };

  return /*#__PURE__*/_react.default.createElement(CollapsibleDiv, {
    cssOverrides: cssOverrides
  }, /*#__PURE__*/_react.default.createElement(CollapsibleTitleWrapper, {
    isOpen: contentOpen,
    onClick: () => toggleContentOpen(!contentOpen)
  }, /*#__PURE__*/_react.default.createElement(CollapsibleTitle, null, titleText), /*#__PURE__*/_react.default.createElement(_IconButton.IconButton, {
    size: _buttonTypes.ButtonSize.Dense,
    display: _buttonTypes.ButtonDisplay.Chromeless,
    icon: contentOpen ? 'chevron_double_up' : 'chevron_double_down'
  })), /*#__PURE__*/_react.default.createElement(_StyledCollapsibleContentWrapper, {
    _css: contentOpen ? 'flex' : 'none'
  }, /*#__PURE__*/_react.default.createElement(_StyledStyledInput, _extends({
    err: showErr,
    maxLength: 100,
    value: text,
    onChange: updateText,
    onKeyDown: evt => {
      if (evt.keyCode === 13) {
        handleSubmit();
      }
    }
  }, inputProps || {})), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    display: _buttonTypes.ButtonDisplay.Secondary,
    onClick: handleSubmit,
    disabled: props.disabled
  }, buttonText)));
};

exports.CollapsibleTextInput = CollapsibleTextInput;