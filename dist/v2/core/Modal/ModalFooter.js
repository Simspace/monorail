"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalFooter = void 0;

var _exports = require("../../../helpers/exports");

var _styledComponents = _interopRequireDefault(require("../../../helpers/styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ModalFooter = _styledComponents.default.div`
  ${(0, _exports.flexFlow)('row')};
  ${(0, _exports.getElevationShadow)(_exports.ElevationRange.Elevation6)};

  align-items: center;
  background: ${({
  theme
}) => theme.v2.FoundationPlate};
  height: 48px;
  justify-content: flex-end;
  margin: auto 0 0;
  padding: 0 16px;
  flex-shrink: 0;
`;
exports.ModalFooter = ModalFooter;