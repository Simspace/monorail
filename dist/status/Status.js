"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Status = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _CommonStyles = require("../CommonStyles");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const Status = (0, _styledComponents.default)('div')`
  ${({
  css: cssOverrides,
  size = 16,
  inactive = false
}) => _styledComponents.css`
    background: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.BrandLightBlue)};
    background: ${(0, _CommonStyles.colors)(inactive ? _CommonStyles.Colors.Black54 : _CommonStyles.Colors.BrandLightBlue)};
    border-radius: ${size / 2}px;
    color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.White)};
    flex-shrink: 0;
    font-size: ${size - 5}px;
    font-weight: 700;
    height: ${size}px;
    min-width: ${size}px;
    padding: 0 ${size / 4}px;
    text-align: center;
    line-height: ${size}px;

    ${cssOverrides};
  `};
`;
exports.Status = Status;