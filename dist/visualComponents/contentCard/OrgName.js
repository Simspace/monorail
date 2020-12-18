"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrgName = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _exports = require("../../helpers/exports");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const OrgName = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "OrgName",
  componentId: "iidg0g-0"
})(["", " ", ";color:", ";"], _exports.ellipsis, (0, _exports.typography)(500, _exports.FontSizes.Title5, '0 0 8px 0'), (0, _exports.getColor)(_exports.Colors.Gray89));

exports.OrgName = OrgName;