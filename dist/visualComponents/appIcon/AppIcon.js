"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppIcon = void 0;

var _react = _interopRequireDefault(require("react"));

var _exports = require("../../helpers/exports");

var _styledComponents = _interopRequireDefault(require("../../helpers/styled-components"));

var _Icon = require("../icon/Icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: unsafe icon usage
const AppIcon = (0, _styledComponents.default)(({
  appName,
  ...otherProps
}) => /*#__PURE__*/_react.default.createElement("div", otherProps, /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
  icon: `${appName}-app`
})))`
  ${(0, _exports.flexFlow)('row')};
  ${(0, _exports.borderRadius)()};

  box-sizing: border-box;
  height: 16px;
  width: 16px;

  ${_Icon.Icon} {
    height: 100%;
    margin: auto;
    width: 100%;
  }
`;
exports.AppIcon = AppIcon;