"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toast = exports.ToastSize = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _exports = require("../../helpers/exports");

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _buttonTypes = require("../buttons/buttonTypes");

var _IconButton = require("../buttons/IconButton");

var _Cards = require("../cards/Cards");

var _Icon = require("../icon/Icon");

var _types = require("./types");

var _Text = require("../typography/Text");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let ToastSize;
/*
 * Styles
 */

exports.ToastSize = ToastSize;

(function (ToastSize) {
  ToastSize["Small"] = "small";
  ToastSize["Large"] = "large";
})(ToastSize || (exports.ToastSize = ToastSize = {}));

const ToastContainer =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "Toast__ToastContainer",
  componentId: "u4b6mj-0"
})(({
  color
}) => (0, _styledComponents.css)(["", ";background:", ";border:1px solid ", ";max-width:50vw;min-width:280px;position:relative;right:0;width:360px;"], (0, _exports.flexFlow)('row'), (0, _exports.getColor)(_exports.Colors.White), color));

const ToastDetails =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "Toast__ToastDetails",
  componentId: "u4b6mj-1"
})(["flex:1;justify-content:center;padding:8px 16px;", ";"], (0, _exports.flexFlow)('column'));

const ToastClose =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "Toast__ToastClose",
  componentId: "u4b6mj-2"
})(["align-items:center;flex:0;padding:0 16px;", ";"], (0, _exports.flexFlow)('row'));

const ToastTileContainer =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "Toast__ToastTileContainer",
  componentId: "u4b6mj-3"
})(({
  color,
  size
}) => (0, _styledComponents.css)(["min-height:", "px;width:", "px;align-items:center;background:", ";justify-content:center;", ";"], size === ToastSize.Small ? 36 : 64, size === ToastSize.Small ? 40 : 64, color, (0, _exports.flexFlow)('row')));
/*
 * Toast Tile
 */


const ToastTile = ({
  level,
  size,
  icon
}) => _react.default.createElement(ToastTileContainer, {
  color: _types.AlertColors[level],
  size: size
}, _react.default.createElement(_StyledIcon, {
  size: size === ToastSize.Small ? 16 : 24,
  icon: (0, _typeGuards.isEmptyString)(icon) ? _types.AlertIcons[level] : icon,
  _css: (0, _exports.getColor)(_exports.Colors.White)
}));

ToastTile.defaultProps = {
  level: _types.AlertLevel.Info,
  size: ToastSize.Large,
  icon: ''
  /*
   * Toast Component
   */

  /*
   * Props
   */

};

/*
 * Component
 */
const Toast = ({
  dismissible,
  level,
  message,
  title,
  icon,
  size,
  ...otherProps
}) => _react.default.createElement(_StyledBBCardBackground, {
  hover: dismissible,
  elevation: _exports.ElevationRange.Elevation8
}, _react.default.createElement(ToastContainer, {
  color: _types.AlertColors[level]
}, _react.default.createElement(ToastTile, {
  icon: icon,
  size: size,
  level: level
}), _react.default.createElement(ToastDetails, null, !(0, _typeGuards.isEmptyString)(title) && _react.default.createElement(_Text.Text, {
  fontSize: _exports.FontSizes.Title4,
  fontWeight: 700,
  margin: '6px 0'
}, title), _react.default.createElement(_Text.Text, {
  fontSize: (0, _typeGuards.isEmptyString)(title) ? _exports.FontSizes.Title4 : _exports.FontSizes.Title5,
  fontWeight: 400
}, message)), dismissible && _react.default.createElement(ToastClose, null, _react.default.createElement(_IconButton.IconButton, {
  icon: 'close',
  display: _buttonTypes.ButtonDisplay.Secondary
}))));
/*
 * Default Props
 */


exports.Toast = Toast;
Toast.defaultProps = {
  dismissible: false,
  icon: '',
  level: _types.AlertLevel.Info,
  size: ToastSize.Large,
  title: ''
};

var _StyledIcon = (0, _styledComponents.default)(_Icon.Icon)`color:${p => p._css};`;

var _StyledBBCardBackground = (0, _styledComponents.default)(_Cards.BBCardBackground)`border-radius:0;`;