"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberInputGroup = void 0;

var _Record = require("fp-ts/lib/Record");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _exports = require("../../helpers/exports");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NumberInputGroupWrapper =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "NumberInputGroup__NumberInputGroupWrapper",
  componentId: "sc-1n1jej1-0"
})([""]);

const Label =
/*#__PURE__*/
_styledComponents.default.p.withConfig({
  displayName: "NumberInputGroup__Label",
  componentId: "sc-1n1jej1-1"
})(["", ";margin-bottom:8px;height:16px;"], (0, _exports.typography)(500, _exports.FontSizes.Title5));

const Input =
/*#__PURE__*/
_styledComponents.default.input.withConfig({
  displayName: "NumberInputGroup__Input",
  componentId: "sc-1n1jej1-2"
})(["flex:0 0 50px;height:24px !important;&::-webkit-inner-spin-button,&::-webkit-outer-spin-button{opacity:1;}"]);

const InputItemWrapper =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "NumberInputGroup__InputItemWrapper",
  componentId: "sc-1n1jej1-3"
})(["display:flex;flex-direction:row;justify-content:space-between;align-items:center;margin:8px 0;padding:0 0 0 8px;"]);

const InputItemLabel =
/*#__PURE__*/
_styledComponents.default.p.withConfig({
  displayName: "NumberInputGroup__InputItemLabel",
  componentId: "sc-1n1jej1-4"
})(["", ";"], (0, _exports.typography)(500, _exports.FontSizes.Title5));

const NumberInputGroup = ({
  label,
  items,
  onSelect,
  value,
  required
}) => {
  return _react.default.createElement(NumberInputGroupWrapper, null, label && _react.default.createElement(Label, null, label, required && '*'), items.map((item, k) => {
    const val = (0, _Record.lookup)(item.key, value).getOrElse(0);
    return _react.default.createElement(InputItemWrapper, {
      key: k
    }, _react.default.createElement(InputItemLabel, null, item.label), _react.default.createElement(Input, {
      min: item.min,
      max: item.max,
      type: "number",
      name: label,
      key: k,
      value: val,
      onChange: v => onSelect(item.key, Number(v.target.value)),
      required: required
    }));
  }));
};

exports.NumberInputGroup = NumberInputGroup;