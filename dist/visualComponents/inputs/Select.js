"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _exports = require("../../helpers/exports");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SelectGroupWrapper =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "Select__SelectGroupWrapper",
  componentId: "sc-13rwoh4-0"
})(({
  cssOverrides
}) => (0, _styledComponents.css)(["margin:0;padding:0;border:0;", ";"], cssOverrides));

const SelectElementWrapper =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "Select__SelectElementWrapper",
  componentId: "sc-13rwoh4-1"
})(["background-color:white;width:100%;height:24px;border:1px solid #e5e5e5;padding:0 0 0 0;border-radius:3px;&:hover{cursor:pointer;}"]);

const SelectElement =
/*#__PURE__*/
_styledComponents.default.select.withConfig({
  displayName: "Select__SelectElement",
  componentId: "sc-13rwoh4-2"
})(["width:calc(100% - 8px);height:22px;background:transparent;border:none;outline:none;cursor:pointer;&:disabled{opacity:0.6;}"]);

const Label =
/*#__PURE__*/
_styledComponents.default.p.withConfig({
  displayName: "Select__Label",
  componentId: "sc-13rwoh4-3"
})(["", ";margin-bottom:4px;height:16px;"], (0, _exports.typography)(500, _exports.FontSizes.Title5));

const Select = ({
  cssOverrides,
  disabled,
  label,
  name,
  onBlur,
  onChange,
  onSelect,
  options,
  placeholder,
  required,
  value
}) => {
  return _react.default.createElement(SelectGroupWrapper, {
    cssOverrides: cssOverrides
  }, label && _react.default.createElement(Label, null, label, required && '*'), _react.default.createElement(SelectElementWrapper, null, _react.default.createElement(SelectElement, {
    disabled: disabled,
    name: name,
    value: value,
    onBlur: onBlur,
    onChange: e => {
      onChange && onChange(e);
      onSelect && onSelect(e.target.value);
    }
  }, placeholder ? // NOTE: native <select> elements do not have a placeholder prop
  _react.default.createElement("option", {
    value: "placeholder",
    disabled: true,
    hidden: true
  }, placeholder) : _react.default.createElement("option", {
    value: "placeholder",
    disabled: true,
    hidden: true
  }, "Select"), options.map((o, key) => _react.default.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label)))));
};

exports.Select = Select;