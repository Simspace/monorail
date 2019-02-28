"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogoBox = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _CommonStyles = require("../../CommonStyles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const LogoBox = (0, _styledComponents.default)('div')`
  ${(0, _CommonStyles.getElevation)(_CommonStyles.ElevationRange.Elevation0)};
  ${(0, _CommonStyles.borderRadius)()};

  background: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.White)};
  display: inline-block;
  height: 32px;
  max-width: 200px;
  padding: 4px 8px;
  position: relative;

  ${({
  alignLeft
}) => alignLeft && `position: absolute; left: 8px; top:8px;`}
  ${({
  alignRight
}) => alignRight && `position: absolute; right: 8px; top:8px;`}

  ${({
  css: cssOverrides
}) => cssOverrides};
`;
exports.LogoBox = LogoBox;