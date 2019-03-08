"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioGroup = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _CommonStyles = require("../CommonStyles");

var _Choice = require("./Choice");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const RadioGroupWrapper =
/*#__PURE__*/
_styledComponents.default.fieldset.withConfig({
  displayName: "RadioGroup__RadioGroupWrapper",
  componentId: "sc-1dxzruk-0"
})(["margin:0;padding:0;border:0;"]);

const Label =
/*#__PURE__*/
_styledComponents.default.p.withConfig({
  displayName: "RadioGroup__Label",
  componentId: "sc-1dxzruk-1"
})(["", ";margin-bottom:8px;height:16px;"], (0, _CommonStyles.typography)(500, _CommonStyles.FontSizes.Title5));

const RadioGroup = ({
  label,
  options,
  onSelect,
  value,
  required
}) => {
  return _react.default.createElement(RadioGroupWrapper, null, label && _react.default.createElement(Label, null, label, required && '*'), options.map((o, k) => _react.default.createElement(_Choice.Choice, {
    type: "radio",
    name: label,
    checked: o.key === value,
    key: k,
    value: o.key,
    onChange: e => onSelect(o.key, e),
    required: required,
    readOnly: false,
    cssOverrides: {
      margin: '8px 0'
    }
  }, o.label)));
};

exports.RadioGroup = RadioGroup;