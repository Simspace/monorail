"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _CommonStyles = require("../CommonStyles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SelectGroupWrapper =
/*#__PURE__*/
(0, _styledComponents.default)('div').withConfig({
  displayName: "Select__SelectGroupWrapper",
  componentId: "sc-1lva6s2-0"
})(["margin:0;padding:0;border:0;", ";"], ({
  cssOverrides
}) => cssOverrides);

const SelectElementWrapper =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "Select__SelectElementWrapper",
  componentId: "sc-1lva6s2-1"
})(["background-color:white;width:100%;height:24px;border:1px solid #e5e5e5;padding:0 0 0 0;border-radius:3px;&:hover{cursor:pointer;}"]);

const SelectElement =
/*#__PURE__*/
_styledComponents.default.select.withConfig({
  displayName: "Select__SelectElement",
  componentId: "sc-1lva6s2-2"
})(["width:calc(100% - 8px);height:22px;background:transparent;border:none;outline:none;cursor:pointer;"]);

const Label =
/*#__PURE__*/
_styledComponents.default.p.withConfig({
  displayName: "Select__Label",
  componentId: "sc-1lva6s2-3"
})(["", ";margin-bottom:4px;height:16px;"], (0, _CommonStyles.typography)(500, _CommonStyles.FontSizes.Title5));

const Select = ({
  label,
  onSelect,
  onBlur,
  value,
  required,
  placeholder,
  options,
  cssOverrides,
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