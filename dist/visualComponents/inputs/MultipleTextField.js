"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultipleTextField = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _exports = require("../../helpers/exports");

var _Label = require("./Label");

var _TextField = require("./TextField");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// TODO - duplicate from text field container
const MultipleTextFieldContainer =
/*#__PURE__*/
_styledComponents.default.label.withConfig({
  displayName: "MultipleTextField__MultipleTextFieldContainer",
  componentId: "sc-1l9mgs0-0"
})(({
  cssOverrides
}) => (0, _styledComponents.css)(["", ";float:none;width:100%;position:relative;", ""], (0, _exports.flexFlow)(), cssOverrides));

const TextFieldsWrapper =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "MultipleTextField__TextFieldsWrapper",
  componentId: "sc-1l9mgs0-1"
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
    }, _react.default.createElement(_Label.Label, {
      label: label
    }), _react.default.createElement(TextFieldsWrapper, null, textFields.map((t, k) => _react.default.createElement(_TextField.TextField, _extends({}, t, {
      onChange: e => onChange(t.key, t.htmlType === 'number' ? Number(e.target.value) : e.target.value),
      cssOverrides: {
        paddingLeft: k === 0 ? '0px' : '4px',
        paddingRight: k === textFields.length - 1 ? '0px' : '4px',
        ...(t.cssOverrides || {}) // TODO - hacky

      }
    }))), children && children));
  }

}

exports.MultipleTextField = MultipleTextField;