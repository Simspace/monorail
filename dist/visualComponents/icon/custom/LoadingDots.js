"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingDots = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("../../../helpers/styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const StyledLoadingDots = _styledComponents.default.svg(({
  cssOverrides
}) => (0, _styledComponents.css)`
    .loadingFadeInline {
      animation: loadingFadeInline 1.1s infinite;
    }

    .typing-dots {
      animation-delay: 0.1;
    }
    .typing-dots:nth-child(2) {
      animation-delay: 0.2s;
    }
    .typing-dots:nth-child(3) {
      animation-delay: 0.3s;
    }

    @keyframes loadingFadeInline {
      0% {
        opacity: 0.2;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0.2;
      }
    }

    ${cssOverrides}
  `);

const LoadingDots = props => /*#__PURE__*/_react.default.createElement(StyledLoadingDots, _extends({
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none"
}, props), /*#__PURE__*/_react.default.createElement("circle", {
  className: "typing-dots loadingFadeInline",
  cx: "6",
  cy: "12",
  r: "2"
}), /*#__PURE__*/_react.default.createElement("circle", {
  className: "typing-dots loadingFadeInline",
  cx: "12",
  cy: "12",
  r: "2"
}), /*#__PURE__*/_react.default.createElement("circle", {
  className: "typing-dots loadingFadeInline",
  cx: "18",
  cy: "12",
  r: "2"
}));

exports.LoadingDots = LoadingDots;