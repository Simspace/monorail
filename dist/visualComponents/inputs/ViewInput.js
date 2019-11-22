"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewInput = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _exports = require("../../helpers/exports");

var _styledComponents2 = require("../../helpers/styled-components");

var _Label = require("./Label");

var _Text = require("../typography/Text");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _StyledText =
/*#__PURE__*/
(0, _styledComponents.default)(_Text.Text).withConfig({
  displayName: "ViewInput___StyledText",
  componentId: "sc-4gv7n3-0"
})(["font-style:italic;"]);

const ViewInput = ({
  label,
  value
}) => {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Label.Label, {
    label: label
  }), value ? _react.default.createElement(_Text.Text, {
    fontWeight: 400,
    fontSize: _exports.FontSizes.Title5,
    color: _exports.Colors.Black89,
    margin: "4px 0"
  }, value) : _react.default.createElement(_StyledText, {
    fontWeight: 200,
    fontSize: _exports.FontSizes.Title5,
    color: _exports.Colors.Black54,
    margin: "4px 0"
  }, "None"));
};

exports.ViewInput = ViewInput;