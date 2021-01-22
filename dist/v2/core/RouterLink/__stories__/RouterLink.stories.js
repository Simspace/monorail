"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnstyledLink = exports.RouterLink = exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _storybook = require("../../../../helpers/storybook");

var _RouterLinkMeta = _interopRequireDefault(require("./RouterLink.meta.json"));

var _RouterLink = require("../RouterLink");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _StyledDiv = /*#__PURE__*/(0, _styledComponents.default)("div").withConfig({
  displayName: "RouterLinkstories___StyledDiv",
  componentId: "sc-11n796o-0"
})(["margin-bottom:16px;"]);

const WarningText = () => /*#__PURE__*/_react.default.createElement(_StyledDiv, null, /*#__PURE__*/_react.default.createElement("em", null, "Warning: Router links may not behave correctly within Storybook since React Router is missing."));

var _default = (0, _storybook.meta)(_RouterLinkMeta.default, {
  title: 'monorail/core/RouterLink'
});

exports.default = _default;
const Template = (0, _storybook.story)(args => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(WarningText, null), /*#__PURE__*/_react.default.createElement(_RouterLink.Link, _extends({
  to: "/nowhere"
}, args), "Hello I am a link"))); //#region Hero story in Docs

const RouterLink = (0, _storybook.story)(Template); //#endregion

exports.RouterLink = RouterLink;
const UnstyledLink = (0, _storybook.story)(() => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(WarningText, null), /*#__PURE__*/_react.default.createElement(_RouterLink.LinkUnstyled, {
  to: "/nowhere"
}, "I am an unstyled link")));
exports.UnstyledLink = UnstyledLink;