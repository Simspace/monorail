"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.All = exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _storybook = require("../../../helpers/storybook");

var Icons = _interopRequireWildcard(require("../Icons"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _storybook.meta)(_storybook.NO_GENERATED_META, {
  title: 'monorail/core/Icons',
  parameters: {
    docsOnly: true // Only show Docs for this single-story item

  }
});
/**
 * This is the only story.
 * It is a bit ugly, but serves the purpose well of listing all Icons.
 */


exports.default = _default;

var _StyledDiv = /*#__PURE__*/(0, _styledComponents.default)("div").withConfig({
  displayName: "Iconsstories___StyledDiv",
  componentId: "sc-1ck3h0d-0"
})(["display:flex;flex-direction:column;gap:24px;font-size:48px;"]);

var _StyledDiv2 = /*#__PURE__*/(0, _styledComponents.default)("div").withConfig({
  displayName: "Iconsstories___StyledDiv2",
  componentId: "sc-1ck3h0d-1"
})(["display:flex;align-items:center;gap:36px;"]);

var _StyledCode = /*#__PURE__*/(0, _styledComponents.default)("code").withConfig({
  displayName: "Iconsstories___StyledCode",
  componentId: "sc-1ck3h0d-2"
})(["font-size:14px;"]);

const All = () => {
  return /*#__PURE__*/_react.default.createElement(_StyledDiv, null, Object.keys(Icons).sort().map((icon, index) => /*#__PURE__*/_react.default.createElement(_StyledDiv2, {
    key: index
  },
  /*#__PURE__*/
  // eslint-disable-next-line
  _react.default.createElement(Icons[icon], {}), /*#__PURE__*/_react.default.createElement(_StyledCode, null, icon))));
};

exports.All = All;