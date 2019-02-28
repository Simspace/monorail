"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageContent = exports.AppContainer = exports.AppBody = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _CommonStyles = require("../CommonStyles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AppBody = (0, _styledComponents.default)('div')`
  ${(0, _CommonStyles.flexFlow)('row')};

  flex: 1;
  overflow: hidden;
`;
exports.AppBody = AppBody;
const AppContainer = (0, _styledComponents.default)('div')`
  ${(0, _CommonStyles.flexFlow)()};

  flex: 1;
  overflow: hidden;
`;
exports.AppContainer = AppContainer;
const PageContent = (0, _styledComponents.default)('div')`
  ${(0, _CommonStyles.flexFlow)()};

  flex: 1;
  overflow: hidden;
`;
exports.PageContent = PageContent;