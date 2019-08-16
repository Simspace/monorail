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

const AppIcon =
/*#__PURE__*/
(0, _styledComponents.default)(({
  appName,
  ...otherProps
}) => _react.default.createElement("div", otherProps, _react.default.createElement(_Icon.Icon, {
  icon: `${appName}-app`
}))).withConfig({
  displayName: "AppIcon",
  componentId: "sc-1n5r4ql-0"
})(["", ";", ";box-sizing:border-box;height:16px;width:16px;", "{fill:", ";height:100%;margin:auto;width:100%;}"], (0, _exports.flexFlow)('row'), (0, _exports.borderRadius)(), _Icon.Icon, (0, _exports.getColor)(_exports.Colors.White));
exports.AppIcon = AppIcon;