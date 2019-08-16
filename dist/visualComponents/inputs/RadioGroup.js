"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioGroup = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _exports = require("../../helpers/exports");

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _Label = require("./Label");

var _Choice = require("./Choice");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const RadioGroupWrapper =
/*#__PURE__*/
_styledComponents.default.fieldset.withConfig({
  displayName: "RadioGroup__RadioGroupWrapper",
  componentId: "hjdmb5-0"
})(["margin:0;padding:0;border:0;"]);

const InfoText =
/*#__PURE__*/
_styledComponents.default.p.withConfig({
  displayName: "RadioGroup__InfoText",
  componentId: "hjdmb5-1"
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
  return _react.default.createElement(RadioGroupWrapper, otherProps, !(0, _typeGuards.isEmptyString)(label) && _react.default.createElement(_StyledLabel, {
    label: label,
    required: required
  }), options.map((o = defaultOptions, k) => _react.default.createElement("div", {
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

var _StyledLabel = (0, _styledComponents.default)(_Label.Label)`margin-bottom:8px;height:16px;`;