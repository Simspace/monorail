"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewInput = exports.Orientation = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _exports = require("../../helpers/exports");

var _styledComponents2 = _interopRequireWildcard(require("../../helpers/styled-components"));

var _Label = require("./Label");

var _Text = require("../typography/Text");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

let Orientation;
exports.Orientation = Orientation;

(function (Orientation) {
  Orientation["Row"] = "row";
  Orientation["Column"] = "column";
})(Orientation || (exports.Orientation = Orientation = {}));

const Container = _styledComponents2.default.div(({
  orientation
}) => (0, _styledComponents2.css)`
    ${(0, _exports.flexFlow)(orientation)};
  `);

var _StyledLabel =
/*#__PURE__*/
(0, _styledComponents.default)(_Label.Label).withConfig({
  displayName: "ViewInput___StyledLabel",
  componentId: "sc-4gv7n3-0"
})(["", ""], p => p._css);

var _StyledText =
/*#__PURE__*/
(0, _styledComponents.default)(_Text.Text).withConfig({
  displayName: "ViewInput___StyledText",
  componentId: "sc-4gv7n3-1"
})(["font-style:italic;"]);

const ViewInput = ({
  label,
  value,
  placeholder,
  orientation = Orientation.Column,
  disabled,
  ...domProps
}) => {
  return _react.default.createElement(Container, _extends({
    orientation: orientation
  }, domProps), _react.default.createElement(_StyledLabel, {
    label: label,
    _css: disabled && `color: ${(0, _exports.getColor)(_exports.Colors.Black54)};`
  }), value ? _react.default.createElement(_Text.Text, {
    fontWeight: 400,
    fontSize: _exports.FontSizes.Title5,
    color: disabled ? _exports.Colors.Black54 : _exports.Colors.Black89,
    margin: orientation === Orientation.Column ? '4px 0' : '0 0 0 4px'
  }, value) : _react.default.createElement(_StyledText, {
    fontWeight: 200,
    fontSize: _exports.FontSizes.Title5,
    color: _exports.Colors.Black54,
    margin: orientation === Orientation.Column ? '4px 0' : '0 0 0 4px'
  }, placeholder || 'None'));
};

exports.ViewInput = ViewInput;