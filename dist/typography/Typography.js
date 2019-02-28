"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SectionTitle = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _CommonStyles = require("../CommonStyles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SectionTitle = (0, _styledComponents.default)('h1')`
  ${({
  margin = '16px'
}) => (0, _CommonStyles.typography)(500, _CommonStyles.FontSizes.Title3, margin)};

  ${({
  css: cssOverride
}) => cssOverride};
`;
exports.SectionTitle = SectionTitle;