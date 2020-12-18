"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconFrame = IconFrame;

var _react = _interopRequireDefault(require("react"));

var _exports = require("../../../helpers/exports");

var _styledComponents = _interopRequireDefault(require("../../../helpers/styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// #region CSS
const Div = _styledComponents.default.div``;
const IconFrameStyled = (0, _styledComponents.default)(Div).attrs(props => {
  var _props$frameSize;

  return {
    frameSize: (_props$frameSize = props.frameSize) !== null && _props$frameSize !== void 0 ? _props$frameSize : 32
  };
})`
  ${(0, _exports.borderRadius)(_exports.BorderRadius.Small)};
  ${(0, _exports.flexFlow)('row')}

  align-items: center;
  background-color: ${({
  theme
}) => theme.v2.FoundationDash};
  flex-shrink: 0;
  justify-content: center;
  height: ${({
  frameSize
}) => frameSize}px;
  width: ${({
  frameSize
}) => frameSize}px;
  font-size: ${({
  frameSize
}) => frameSize - 4}px;
`; // #endregion CSS

/**
 * Visual square wrapper for Icon. Defaults to 32px
 *
 * Deprecates v1/FramedIcon
 */
function IconFrame(props) {
  return /*#__PURE__*/_react.default.createElement(IconFrameStyled, props);
}