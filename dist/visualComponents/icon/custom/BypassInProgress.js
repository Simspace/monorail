"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BypassInProgress = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents2 = _interopRequireWildcard(require("../../../helpers/styled-components"));

var _InProgress = require("./InProgress");

var _BypassEmpty = require("./BypassEmpty");

var _zIndex = require("../../../helpers/zIndex");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const IconContainer = _styledComponents2.default.div(({
  size = 16,
  cssOverrides
}) => (0, _styledComponents2.css)`
    font-size: ${size}px;
    display: inline-flex;
    position: relative;
    ${(0, _zIndex.zIndex)(_zIndex.ZIndexNodeName.FramedIconBackground)}

    ${(0, _InProgress.PulseAnimation)()}

    ${cssOverrides}
  `);

var _StyledBypassEmpty =
/*#__PURE__*/
(0, _styledComponents.default)(_BypassEmpty.BypassEmpty).withConfig({
  displayName: "BypassInProgress___StyledBypassEmpty",
  componentId: "wkmqp2-0"
})(["display:inline-block;height:1em;width:1em;"]);

const BypassInProgress = (0, _styledComponents2.default)(({
  size = 16,
  icon,
  ...otherProps
}) => {
  return _react.default.createElement(IconContainer, {
    size: size
  }, _react.default.createElement(_StyledBypassEmpty, _extends({
    size: size
  }, otherProps)));
})``;
exports.BypassInProgress = BypassInProgress;