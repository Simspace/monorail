"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Description = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _exports = require("../../helpers/exports");

var _Text = require("../typography/Text");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Description = /*#__PURE__*/(0, _styledComponents.default)(_Text.Text).attrs(() => ({
  fontSize: _exports.FontSizes.Title5,
  fontWeight: _exports.FontWeights.Book,
  color: _exports.Colors.Gray62
})).withConfig({
  displayName: "Description",
  componentId: "sc-181zws8-0"
})(["", " height:48px;margin-bottom:8px;text-align:left;"], _exports.ellipsis);
exports.Description = Description;