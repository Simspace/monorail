"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberInputGroup = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _CommonStyles = require("../../CommonStyles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NumberInputGroupWrapper = _styledComponents.default.div``;
const Label = _styledComponents.default.p`
  ${(0, _CommonStyles.typography)(500, _CommonStyles.FontSizes.Title5)};
  margin-bottom: 8px;
  height: 16px;
`;
const Input = _styledComponents.default.input`
  flex: 0 0 50px;
  height: 24px !important;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    opacity: 1;
  }
`;
const InputItemWrapper = _styledComponents.default.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0;
  padding: 0 0 0 8px;
`;
const InputItemLabel = _styledComponents.default.p`
  ${(0, _CommonStyles.typography)(500, _CommonStyles.FontSizes.Title5)};
`;

const NumberInputGroup = ({
  label,
  items,
  onSelect,
  value,
  required
}) => {
  return _react.default.createElement(NumberInputGroupWrapper, null, label && _react.default.createElement(Label, null, label, required && '*'), items.map((item, k) => _react.default.createElement(InputItemWrapper, {
    key: k
  }, _react.default.createElement(InputItemLabel, null, item.label), _react.default.createElement(Input, {
    min: item.min,
    max: item.max,
    type: "number",
    name: label,
    key: k,
    value: value[item.key],
    onChange: v => onSelect(item.key, Number(v.target.value)),
    required: required
  }))));
};

exports.NumberInputGroup = NumberInputGroup;