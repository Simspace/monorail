"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberInputGroup = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _Option = require("fp-ts/lib/Option");

var _Record = require("fp-ts/lib/Record");

var _exports = require("../../helpers/exports");

var _styledComponents2 = require("../../helpers/styled-components");

var _Label = require("./Label");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NumberInputGroupWrapper = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "NumberInputGroup__NumberInputGroupWrapper",
  componentId: "sc-1n1jej1-0"
})([""]);

const Input = /*#__PURE__*/_styledComponents.default.input.withConfig({
  displayName: "NumberInputGroup__Input",
  componentId: "sc-1n1jej1-1"
})(["flex:0 0 50px;height:24px !important;&::-webkit-inner-spin-button,&::-webkit-outer-spin-button{opacity:1;}"]);

const InputItemWrapper = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "NumberInputGroup__InputItemWrapper",
  componentId: "sc-1n1jej1-2"
})(["display:flex;flex-direction:row;justify-content:space-between;align-items:center;margin:8px 0;padding:0 0 0 8px;"]);

const InputItemLabel = /*#__PURE__*/_styledComponents.default.p.withConfig({
  displayName: "NumberInputGroup__InputItemLabel",
  componentId: "sc-1n1jej1-3"
})(["", ";"], (0, _exports.typographyFont)(500, _exports.FontSizes.Title5));

var _StyledLabel = /*#__PURE__*/(0, _styledComponents.default)(_Label.Label).withConfig({
  displayName: "NumberInputGroup___StyledLabel",
  componentId: "sc-1n1jej1-4"
})(["margin-bottom:8px;"]);

const NumberInputGroup = props => {
  const {
    label,
    items,
    onSelect,
    value,
    required
  } = props;
  return /*#__PURE__*/_react.default.createElement(NumberInputGroupWrapper, null, /*#__PURE__*/_react.default.createElement(_StyledLabel, {
    label: label,
    required: required
  }), items.map((item, k) => {
    const val = (0, _Option.getOrElse)(() => 0)((0, _Record.lookup)(item.key, value));
    return /*#__PURE__*/_react.default.createElement(InputItemWrapper, {
      key: k
    }, /*#__PURE__*/_react.default.createElement(InputItemLabel, null, item.label), /*#__PURE__*/_react.default.createElement(Input, {
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