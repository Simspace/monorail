"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioGroup = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _exports = require("../../helpers/exports");

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _Choice = require("./Choice");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const RadioGroupWrapper =
/*#__PURE__*/
_styledComponents.default.fieldset.withConfig({
  displayName: "RadioGroup__RadioGroupWrapper",
  componentId: "hjdmb5-0"
})(["margin:0;padding:0;border:0;"]);

const Label =
/*#__PURE__*/
_styledComponents.default.p.withConfig({
  displayName: "RadioGroup__Label",
  componentId: "hjdmb5-1"
})(["", ";margin-bottom:8px;height:16px;"], (0, _exports.typography)(500, _exports.FontSizes.Title5));

const InfoText =
/*#__PURE__*/
_styledComponents.default.p.withConfig({
  displayName: "RadioGroup__InfoText",
  componentId: "hjdmb5-2"
})(["", ";margin-left:32px;"], (0, _exports.typography)(300, _exports.FontSizes.Title5));

const defaultOptions = {
  label: '',
  key: '',
  info: ''
};

const RadioGroup = ({
  label,
  options,
  onSelect,
  value,
  required,
  ...otherProps
}) => {
  return _react.default.createElement(RadioGroupWrapper, otherProps, !(0, _typeGuards.isEmptyString)(label) && _react.default.createElement(Label, null, label, required && '*'), options.map((o = defaultOptions, k) => _react.default.createElement("div", {
    key: k + o.label
  }, _react.default.createElement(_Choice.Choice, {
    type: "radio",
    name: label,
    checked: o.key === value,
    value: o.key,
    onChange: e => onSelect(o.key, e),
    required: required,
    readOnly: false
  }, o.label), _react.default.createElement(InfoText, null, o.key === value && !(0, _typeGuards.isEmptyString)(o.info)))));
};

exports.RadioGroup = RadioGroup;
RadioGroup.defaultProps = {
  label: '',
  required: false
};