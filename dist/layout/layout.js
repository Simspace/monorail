"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageContent = exports.AppContainer = exports.AppBody = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _CommonStyles = require("../CommonStyles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AppBody =
/*#__PURE__*/
(0, _styledComponents.default)('div').withConfig({
  displayName: "layout__AppBody",
  componentId: "sc-1ygcav0-0"
})(["", ";flex:1;overflow:hidden;"], (0, _CommonStyles.flexFlow)('row'));
exports.AppBody = AppBody;
const AppContainer =
/*#__PURE__*/
(0, _styledComponents.default)('div').withConfig({
  displayName: "layout__AppContainer",
  componentId: "sc-1ygcav0-1"
})(["", ";flex:1;overflow:hidden;"], (0, _CommonStyles.flexFlow)());
exports.AppContainer = AppContainer;
const PageContent =
/*#__PURE__*/
(0, _styledComponents.default)('div').withConfig({
  displayName: "layout__PageContent",
  componentId: "sc-1ygcav0-2"
})(["", ";flex:1;overflow:hidden;"], (0, _CommonStyles.flexFlow)());
exports.PageContent = PageContent;