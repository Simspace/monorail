"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageContent = exports.AppContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _CommonStyles = require("../CommonStyles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AppContainer =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "layout__AppContainer",
  componentId: "sc-1ygcav0-0"
})(["", ";flex:1;overflow:hidden;&.event-design,&.events:not(.execution),&.home{", ";}"], (0, _CommonStyles.flexFlow)(), _CommonStyles.gothamFontFamily);

exports.AppContainer = AppContainer;

const PageContent =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "layout__PageContent",
  componentId: "sc-1ygcav0-1"
})(["", ";flex:1;overflow:hidden;"], (0, _CommonStyles.flexFlow)());

exports.PageContent = PageContent;