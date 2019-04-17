"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultipleTextField = exports.BBTextFieldLabel = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _typeGuards = require("../sharedHelpers/typeGuards");

var _TextField = require("./TextField");

var _exports = require("../helpers/exports");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// TODO - duplicate from text field container
const MultipleTextFieldContainer =
/*#__PURE__*/
_styledComponents.default.label.withConfig({
  displayName: "MultipleTextField__MultipleTextFieldContainer",
  componentId: "vlh0z2-0"
})(({
  cssOverrides
}) => (0, _styledComponents.css)(["", ";float:none;width:100%;position:relative;", ";"], (0, _exports.flexFlow)(), cssOverrides)); // TODO - consolidate label into a common component


const BBTextFieldLabel =
/*#__PURE__*/
_styledComponents.default.p.withConfig({
  displayName: "MultipleTextField__BBTextFieldLabel",
  componentId: "vlh0z2-1"
})(["", ";margin:4px 0;"], (0, _exports.typography)(500, _exports.FontSizes.Title5));

exports.BBTextFieldLabel = BBTextFieldLabel;

const TextFieldsWrapper =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "MultipleTextField__TextFieldsWrapper",
  componentId: "vlh0z2-2"
})(["display:flex;align-items:center;"]);

class MultipleTextField extends _react.Component {
  render() {
    const {
      label,
      textFields,
      cssOverrides,
      onChange,
      children
    } = this.props;
    return _react.default.createElement(MultipleTextFieldContainer, {
      cssOverrides: cssOverrides
    }, !(0, _typeGuards.isNil)(label) && _react.default.createElement(BBTextFieldLabel, null, label), _react.default.createElement(TextFieldsWrapper, null, textFields.map((t, k) => _react.default.createElement(_TextField.TextField, _extends({
      key: k
    }, t, {
      onChange: e => onChange(t.key, t.type === 'number' ? Number(e.target.value) : e.target.value),
      cssOverrides: {
        paddingLeft: k === 0 ? '0px' : '4px',
        paddingRight: k === textFields.length - 1 ? '0px' : '4px',
        ...(t.cssOverrides || {})
      }
    }))), children && children));
  }

}

exports.MultipleTextField = MultipleTextField;