"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _exports = require("../../helpers/exports");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Title = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "Title",
  componentId: "sc-10527n5-0"
})(["", " ", ";color:", ";"], _exports.ellipsis, (0, _exports.typography)(700, _exports.FontSizes.Title4, '0 0 8px 0'), (0, _exports.getColor)(_exports.Colors.Gray89));

exports.Title = Title;