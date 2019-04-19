"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppIcon = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Icon = require("../icon/Icon");

var _exports = require("../helpers/exports");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AppIcon =
/*#__PURE__*/
(0, _styledComponents.default)(({
  appName,
  cssOverrides,
  ...otherProps
}) => _react.default.createElement("div", otherProps, _react.default.createElement(_Icon.Icon, {
  icon: appName
})))(({
  appName,
  cssOverrides
}) => (0, _styledComponents.css)(["", ";", ";background:", ";box-sizing:border-box;height:16px;width:16px;", "{fill:", ";height:100%;margin:auto;width:100%;}", ";"], (0, _exports.flexFlow)('row'), (0, _exports.borderRadius)(), (0, _exports.getColor)((0, _exports.convertAppNameToColor)(appName)), _Icon.Icon, (0, _exports.getColor)(_exports.Colors.White), cssOverrides));
exports.AppIcon = AppIcon;