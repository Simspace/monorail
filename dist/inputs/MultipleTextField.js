"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultipleTextField = exports.BBTextFieldLabel = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _primitiveGuards = require("../CoreUtils/primitive-guards");

var _TextField = require("./TextField");

var _CommonStyles = require("../CommonStyles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// TODO - duplicate from text field container
const MultipleTextFieldContainer = (0, _styledComponents.default)('label')`
  ${(0, _CommonStyles.flexFlow)()};

  float: none;
  width: 100%;
  position: relative; /* position: relative; so that the icons can be absolutely positioned. */

  ${({
  cssOverrides
}) => cssOverrides};
`; // TODO - consolidate label into a common component

const BBTextFieldLabel = (0, _styledComponents.default)('p')`
  ${(0, _CommonStyles.typography)(500, _CommonStyles.FontSizes.Title5)};
  margin: 4px 0;
`;
exports.BBTextFieldLabel = BBTextFieldLabel;
const TextFieldsWrapper = _styledComponents.default.div`
  display: flex;
  align-items: center;
`;

class MultipleTextField extends _react.Component {
  render() {
    const {
      label,
      textFields,
      css: cssOverrides,
      onChange,
      children
    } = this.props;
    return _react.default.createElement(MultipleTextFieldContainer, {
      cssOverrides: cssOverrides
    }, !(0, _primitiveGuards.isNil)(label) && _react.default.createElement(BBTextFieldLabel, null, label), _react.default.createElement(TextFieldsWrapper, null, textFields.map((t, k) => _react.default.createElement(_TextField.TextField, _extends({
      key: k
    }, t, {
      onChange: e => onChange(t.key, t.type === 'number' ? Number(e.target.value) : e.target.value),
      css: {
        paddingLeft: k === 0 ? '0px' : '4px',
        paddingRight: k === textFields.length - 1 ? '0px' : '4px',
        ...(t.css || {})
      }
    }))), children && children));
  }

}

exports.MultipleTextField = MultipleTextField;