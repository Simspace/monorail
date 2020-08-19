"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InProgress = exports.PulseAnimation = void 0;

var _styledComponents = _interopRequireWildcard(require("../../../helpers/styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const PulseAnimation = (scale = 0.5, radius = 0.5) => (0, _styledComponents.css)`
  &:before {
    animation: pulse 2s infinite;
    border-radius: 50%;
    box-shadow: 0 0 0 0 currentColor;
    content: '';
    display: block;
    margin: ${(1 - scale) / 2}em;
    height: ${scale}em;
    position: absolute;
    width: ${scale}em;

    @keyframes pulse {
      0% {
        transform: scale(0.1);
        box-shadow: 0 0 0 0 currentColor;
        opacity: 0.7;
      }

      70% {
        transform: scale(1);
        box-shadow: 0 0 0 ${radius}em currentColor;
        opacity: 0.1;
      }

      100% {
        transform: scale(0.9);
        box-shadow: 0 0 0 0 currentColor;
        opacity: 0;
      }
    }
  }
`;

exports.PulseAnimation = PulseAnimation;

const InProgress = _styledComponents.default.div(({
  size = 16,
  cssOverrides
}) => {
  return (0, _styledComponents.css)`
      font-size: ${size}px;
      position: relative;

      &:after {
        background: currentColor;
        border-radius: 50%;
        content: '';
        display: block;
        height: 1em;
        width: 1em;
        transform: scale(0.6);
      }

      ${PulseAnimation()}

      ${cssOverrides}
    `;
});

exports.InProgress = InProgress;