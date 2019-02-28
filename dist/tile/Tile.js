"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tile = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _CommonStyles = require("../CommonStyles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Tile = (0, _styledComponents.default)('div')`
  ${({
  direction = 'column'
}) => (0, _CommonStyles.flexFlow)(direction)};
  ${(0, _CommonStyles.borderRadius)(_CommonStyles.BorderRadius.Medium)};

  background: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.White)};
  border: 1px solid ${(0, _CommonStyles.colors)(_CommonStyles.Colors.Grey96)};
  box-sizing: border-box;
  flex-shrink: 0;
  justify-content: space-between;

  ${({
  css: cssOverride
}) => cssOverride};
`;
exports.Tile = Tile;