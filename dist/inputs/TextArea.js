"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextArea = void 0;

var _primitiveGuards = require("../CoreUtils/primitive-guards");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _CommonStyles = require("../CommonStyles");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
* Styles
*/
const BBTextAreaContainer = (0, _styledComponents.default)('label')`
  ${(0, _CommonStyles.flexFlow)()};

  max-width: 256px;
  width: 100%;
  position: relative; /* position: relative; so that the icons can be absolutely positioned. */

  ${({
  css: cssOverrides
}) => cssOverrides};
`;
const BBTextAreaLabel = (0, _styledComponents.default)('p')`
  ${(0, _CommonStyles.typography)(500, _CommonStyles.FontSizes.Title5)};
  margin: 4px 0;
`;
const BBTextAreaInput = (0, _styledComponents.default)('textarea')`
  ${(0, _CommonStyles.typography)(400, _CommonStyles.FontSizes.Title5)};
  ${(0, _CommonStyles.borderRadius)()};

  border: 1px solid ${(0, _CommonStyles.colors)(_CommonStyles.Colors.Black, 0.12)};
  box-sizing: border-box;
  color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.Black89)};
  outline: none;
  padding: 4px 6px 4px 6px;
  resize: none;
  width: 100%;

  ${_CommonStyles.buttonTransition};

  ::placeholder {
    color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.Black54)};
    font-style: italic;
  }

  &:hover {
    border: 1px solid ${(0, _CommonStyles.colors)(_CommonStyles.Colors.Black, 0.3)};
  }

  &:focus,
  &:active {
    border: 1px solid ${(0, _CommonStyles.colors)(_CommonStyles.Colors.BrandLightBlue)};
  }

  ${({
  chromeless
}) => chromeless && _styledComponents.css`
      border: 1px solid transparent;
    `};

  ${({
  compact
}) => compact && _styledComponents.css`
      overflow: hidden;
    `};
`;
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

        if (!(0, _primitiveGuards.isNil)(current)) {
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
      css: cssOverrides,
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
      css: cssOverrides
    }, !(0, _primitiveGuards.isNil)(label) && _react.default.createElement(BBTextAreaLabel, null, label), _react.default.createElement(BBTextAreaInput, _extends({
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