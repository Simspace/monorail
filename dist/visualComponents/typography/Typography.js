"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SectionTitle = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _exports = require("../../helpers/exports");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const SectionTitle =
/*#__PURE__*/
_styledComponents.default.h1.withConfig({
  displayName: "Typography__SectionTitle",
  componentId: "sc-1yltw8i-0"
})(({
  margin = '16px',
  cssOverrides
}) => (0, _styledComponents.css)(["", ";", ";"], (0, _exports.typography)(500, _exports.FontSizes.Title3, margin), cssOverrides));

exports.SectionTitle = SectionTitle;