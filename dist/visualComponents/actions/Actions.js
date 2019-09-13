"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionsContainer = void 0;

var _flex = require("../../helpers/flex");

var _styledComponents = _interopRequireDefault(require("../../helpers/styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ActionsContainer = _styledComponents.default.div`
  ${(0, _flex.flexFlow)('row')};

  margin: auto 0 auto auto;
`;
exports.ActionsContainer = ActionsContainer;