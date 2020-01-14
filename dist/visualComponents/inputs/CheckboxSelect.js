"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxSelect = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _exports = require("../../helpers/exports");

var _Choice = require("./Choice");

var _Label = require("./Label");

var _Select = require("./Select");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const checkboxSelectStyles =
/*#__PURE__*/
(0, _styledComponents.css)(["width:400px;", "{", ";align-items:center;justify-content:space-between;}i{top:12px;}"], _Choice.ChoiceFakeLabel, (0, _exports.flexFlow)('row'));

var _StyledChoice =
/*#__PURE__*/
(0, _styledComponents.default)(_Choice.Choice).withConfig({
  displayName: "CheckboxSelect___StyledChoice",
  componentId: "sc-1v86zp0-0"
})(["", ""], checkboxSelectStyles);

var _StyledLabel =
/*#__PURE__*/
(0, _styledComponents.default)(_Label.Label).withConfig({
  displayName: "CheckboxSelect___StyledLabel",
  componentId: "sc-1v86zp0-1"
})(["margin:0"]);

var _StyledSelect =
/*#__PURE__*/
(0, _styledComponents.default)(_Select.Select).withConfig({
  displayName: "CheckboxSelect___StyledSelect",
  componentId: "sc-1v86zp0-2"
})(["pointer-events:", ";width:256px;"], p => p._css);

const CheckboxSelect = props => {
  const {
    value,
    label,
    options,
    onChange,
    cssOverrides,
    ...domProps
  } = props;
  return _react.default.createElement(_StyledChoice, _extends({}, domProps, {
    type: "checkbox",
    checked: value ? value.enabled : false,
    onChange: () => {
      onChange({
        enabled: value ? !value.enabled : false,
        value: value ? value.value : ''
      });
    },
    cssOverrides: cssOverrides
  }), _react.default.createElement(_StyledLabel, {
    label: label
  }), _react.default.createElement(_StyledSelect, {
    options: options,
    disabled: !value.enabled,
    onChange: e => {
      if (e.target.value !== undefined) {
        onChange({
          enabled: value ? value.enabled : false,
          value: e.target.value
        });
      }
    },
    value: value ? value.value : '',
    _css: !value.enabled ? 'none' : 'auto'
  }));
};

exports.CheckboxSelect = CheckboxSelect;