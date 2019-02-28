"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _CommonStyles = require("../CommonStyles");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SelectGroupWrapper = (0, _styledComponents.default)('div')`
  margin: 0;
  padding: 0;
  border: 0;

  ${({
  cssOverrides
}) => cssOverrides};
`;
const SelectElementWrapper = _styledComponents.default.div`
  background-color: white;
  width: 100%;
  height: 24px;
  border: 1px solid #e5e5e5;
  padding: 0 0 0 0;
  border-radius: 3px;

  &:hover {
    cursor: pointer;
  }
`;
const SelectElement = _styledComponents.default.select`
  width: calc(100% - 8px);
  height: 22px;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;
const Label = _styledComponents.default.p`
  ${(0, _CommonStyles.typography)(500, _CommonStyles.FontSizes.Title5)};
  margin-bottom: 4px;
  height: 16px;
`;

const Select = ({
  label,
  onSelect,
  onBlur,
  value,
  required,
  placeholder,
  options,
  css: cssOverrides,
  name,
  onChange
}) => {
  return _react.default.createElement(SelectGroupWrapper, {
    cssOverrides: cssOverrides
  }, label && _react.default.createElement(Label, null, label, required && '*'), _react.default.createElement(SelectElementWrapper, null, _react.default.createElement(SelectElement, {
    name: name,
    placeholder: placeholder || 'Select',
    value: value,
    onBlur: onBlur,
    onChange: e => {
      onChange && onChange(e);
      onSelect && onSelect(e.target.value);
    }
  }, options.map((o, key) => _react.default.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label)))));
};

exports.Select = Select;