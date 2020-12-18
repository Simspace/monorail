"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChevronStep = exports.Step = exports.ChevronStepper = void 0;

var _react = _interopRequireDefault(require("react"));

var _exports = require("../../helpers/exports");

var _styledComponents = _interopRequireWildcard(require("../../helpers/styled-components"));

var _Icon = require("../icon/Icon");

var _Text = require("../typography/Text");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ChevronStepper = _styledComponents.default.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  overflow-x: auto;
  padding-top: 0;
  padding-right: 0;
  padding-bottom: 0;
  padding-left: 0;
  white-space: nowrap;
  width: 100%;
`;
exports.ChevronStepper = ChevronStepper;

const Step = _styledComponents.default.li(({
  isActive
}) => (0, _styledComponents.css)`
    background-color: ${isActive ? (0, _exports.getColor)(_exports.Colors.AccentBlue400) : (0, _exports.getColor)(_exports.Colors.Grey94)};
    clip-path: polygon(
      calc(100% - 8px) 0,
      100% 50%,
      calc(100% - 8px) 100%,
      0% 100%,
      calc(0% + 8px) 50%,
      0% 0%
    );
    display: flex;
    align-items: center;
    flex: 1 1 0;
    justify-content: center;
    min-width: 128px;
    padding: 5px 24px;
    width: 0;

    &:first-child {
      border-radius: 4px 0 0 4px;
      clip-path: polygon(
        calc(100% - 8px) 0,
        100% 50%,
        calc(100% - 8px) 100%,
        0% 100%,
        0 0,
        0 0
      );
      padding-left: 16px;
    }

    &:last-child {
      border-radius: 0 4px 4px 0;
      clip-path: polygon(
        100% 0,
        100% 100%,
        0% 100%,
        0% 100%,
        calc(0% + 8px) 50%,
        0 0
      );
      padding-right: 16px;
    }

    span {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    i,
    svg {
      margin-right: 5px;
      color: ${isActive ? (0, _exports.getColor)(_exports.Colors.White) : (0, _exports.getColor)(_exports.Colors.Gray89)};
    }
  `);

exports.Step = Step;

const ChevronStep = ({
  title,
  isActive = false,
  icon
}) => {
  return /*#__PURE__*/_react.default.createElement(Step, {
    isActive: isActive
  }, icon && /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    icon: icon
  }), /*#__PURE__*/_react.default.createElement(_Text.Text, {
    fontSize: _exports.FontSizes.Title5,
    fontWeight: isActive ? _exports.FontWeights.Bold : _exports.FontWeights.Book,
    color: isActive ? _exports.Colors.White : _exports.Colors.Gray89,
    title: title,
    "aria-label": title
  }, title));
};

exports.ChevronStep = ChevronStep;