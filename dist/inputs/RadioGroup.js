"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioGroup = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _CommonStyles = require("../../CommonStyles");

var _Choice = require("./Choice");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const RadioGroupWrapper = _styledComponents.default.fieldset`
  margin: 0;
  padding: 0;
  border: 0;
`;
const Label = _styledComponents.default.p`
  ${(0, _CommonStyles.typography)(500, _CommonStyles.FontSizes.Title5)};
  margin-bottom: 8px;
  height: 16px;
`;

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
    css: {
      margin: '8px 0'
    }
  }, o.label)));
};

exports.RadioGroup = RadioGroup;