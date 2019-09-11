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

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const RadioGroupWrapper =
/*#__PURE__*/
_styledComponents.default.fieldset.withConfig({
  displayName: "RadioGroup__RadioGroupWrapper",
  componentId: "hjdmb5-0"
})(["", ";margin:0;padding:0;border:0;"], (0, _exports.flexFlow)('column'));

const InfoText =
/*#__PURE__*/
_styledComponents.default.p.withConfig({
  displayName: "RadioGroup__InfoText",
  componentId: "hjdmb5-1"
})(["", ";margin-left:32px;"], (0, _exports.typography)(300, _exports.FontSizes.Title5));

const defaultOptions = {
  label: '',
  key: '',
  info: '',
  disabled: false,
  'data-test-id': ''
};

var _StyledLabel =
/*#__PURE__*/
(0, _styledComponents.default)(_Label.Label).withConfig({
  displayName: "RadioGroup___StyledLabel",
  componentId: "hjdmb5-2"
})(["margin-bottom:8px;"]);

const RadioGroup = ({
  label,
  options,
  onSelect,
  value,
  required,
  ...otherProps
}) => {
  return _react.default.createElement(RadioGroupWrapper, otherProps, _react.default.createElement(_StyledLabel, {
    label: label,
    required: required
  }), options.map((o = defaultOptions, k) => _react.default.createElement("div", {
    key: k + o.label
  }, _react.default.createElement(_Choice.Choice, {
    type: "radio",
    name: label,
    "data-test-id": o['data-test-id'],
    checked: o.key === value,
    value: o.key,
    onChange: e => {
      onSelect(o.key, e);
    },
    required: required,
    readOnly: false,
    disabled: o.disabled
  }, o.label), _react.default.createElement(InfoText, null, o.key === value && !(0, _typeGuards.isEmptyString)(o.info)))));
};

exports.RadioGroup = RadioGroup;
RadioGroup.defaultProps = {
  label: '',
  required: false
};