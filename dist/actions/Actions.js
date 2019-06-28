"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionsContainer = void 0;

var _flex = require("../helpers/flex");

var _styledComponents = _interopRequireDefault(require("../helpers/styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ActionsContainer =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "Actions__ActionsContainer",
  componentId: "nt0cbk-0"
})(["", ";margin:auto 0 auto auto;"], (0, _flex.flexFlow)('row'));

exports.ActionsContainer = ActionsContainer;