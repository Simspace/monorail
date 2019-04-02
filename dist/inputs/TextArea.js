"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextArea = void 0;

var _typeGuards = require("../sharedHelpers/typeGuards");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _CommonStyles = require("../CommonStyles");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
* Styles
*/
const BBTextAreaContainer =
/*#__PURE__*/
_styledComponents.default.label.withConfig({
  displayName: "TextArea__BBTextAreaContainer",
  componentId: "zv28js-0"
})(({
  cssOverrides
}) => (0, _styledComponents.css)(["", ";max-width:256px;width:100%;position:relative;", ";"], (0, _CommonStyles.flexFlow)(), cssOverrides));

const BBTextAreaLabel =
/*#__PURE__*/
_styledComponents.default.p.withConfig({
  displayName: "TextArea__BBTextAreaLabel",
  componentId: "zv28js-1"
})(["", ";margin:4px 0;"], (0, _CommonStyles.typography)(500, _CommonStyles.FontSizes.Title5));

const BBTextAreaInput =
/*#__PURE__*/
_styledComponents.default.textarea.withConfig({
  displayName: "TextArea__BBTextAreaInput",
  componentId: "zv28js-2"
})(({
  chromeless,
  compact
}) => (0, _styledComponents.css)(["", ";", ";border:1px solid ", ";box-sizing:border-box;color:", ";outline:none;padding:4px 6px 4px 6px;resize:none;width:100%;", ";::placeholder{color:", ";font-style:italic;}&:hover{border:1px solid ", ";}&:focus,&:active{border:1px solid ", ";}", ";", ";"], (0, _CommonStyles.typography)(400, _CommonStyles.FontSizes.Title5), (0, _CommonStyles.borderRadius)(), (0, _CommonStyles.colors)(_CommonStyles.Colors.Black, 0.12), (0, _CommonStyles.colors)(_CommonStyles.Colors.Black89), _CommonStyles.buttonTransition, (0, _CommonStyles.colors)(_CommonStyles.Colors.Black54), (0, _CommonStyles.colors)(_CommonStyles.Colors.Black, 0.3), (0, _CommonStyles.colors)(_CommonStyles.Colors.BrandLightBlue), chromeless && (0, _styledComponents.css)(["border:1px solid transparent;"]), compact && (0, _styledComponents.css)(["overflow:hidden;"])));
/*
* Types
*/


/*
* Component
*/
class TextArea extends _react.Component {
  constructor(...args) {
    super(...args);
    this.textArea = _react.default.createRef();

    this.setCompactHeight = () => {
      const {
        compact
      } = this.props;

      if (compact) {
        const current = this.textArea.current;

        if (!(0, _typeGuards.isNil)(current)) {
          window.requestAnimationFrame(() => {
            current.style.height = 'auto';
            current.style.height = current.scrollHeight + 'px';
          });
        }
      }
    };

    this.onChange = e => {
      const {
        onChange
      } = this.props;
      this.setCompactHeight();
      onChange && onChange(e);
    };
  }

  componentDidUpdate() {
    this.setCompactHeight();
  }

  componentDidMount() {
    this.setCompactHeight();
  }

  render() {
    const {
      chromeless,
      compact,
      cssOverrides,
      disabled,
      label,
      onChange,
      placeholder,
      readOnly,
      required,
      value,
      ...otherProps
    } = this.props;
    return _react.default.createElement(BBTextAreaContainer, {
      cssOverrides: cssOverrides
    }, !(0, _typeGuards.isNil)(label) && _react.default.createElement(BBTextAreaLabel, null, label), _react.default.createElement(BBTextAreaInput, _extends({
      chromeless: chromeless,
      className: "new-textarea",
      compact: compact,
      disabled: disabled,
      ref: this.textArea,
      onChange: this.onChange,
      placeholder: placeholder,
      readOnly: readOnly,
      required: required,
      rows: compact ? 1 : 3,
      value: value
    }, otherProps)));
  }

}

exports.TextArea = TextArea;