"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LiveActionPlanFooter = LiveActionPlanFooter;
exports.LiveAction = LiveAction;
exports.NetworkName = NetworkName;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _function = require("fp-ts/lib/function");

var _fpTsImports = require("../../sharedHelpers/fp-ts-imports");

var _exports = require("../../helpers/exports");

var _Icon = require("../icon/Icon");

var _Text = require("../typography/Text");

var _Footer = require("./Footer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function LiveActionPlanFooter(props) {
  const {
    network
  } = props;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (0, _function.pipe)(network, _fpTsImports.O.fold(() => /*#__PURE__*/_react.default.createElement(LiveAction, null), name => /*#__PURE__*/_react.default.createElement(_Footer.FooterList, null, /*#__PURE__*/_react.default.createElement(_Footer.FooterListItem, null, /*#__PURE__*/_react.default.createElement(NetworkName, {
    name: name
  })), /*#__PURE__*/_react.default.createElement(_Footer.FooterListItem, null, /*#__PURE__*/_react.default.createElement(LiveAction, null))))));
}

function LiveAction() {
  return /*#__PURE__*/_react.default.createElement(_Text.Text, {
    fontSize: _exports.FontSizes.Title5,
    fontWeight: _exports.FontWeights.Bold,
    color: _exports.Colors.Gray54
  }, "Live Action");
}

var _StyledDiv = /*#__PURE__*/(0, _styledComponents.default)("div").withConfig({
  displayName: "LiveActionPlanFooter___StyledDiv",
  componentId: "sc-1ea3rpp-0"
})(["align-items:center;display:flex;"]);

var _StyledIcon = /*#__PURE__*/(0, _styledComponents.default)(_Icon.Icon).withConfig({
  displayName: "LiveActionPlanFooter___StyledIcon",
  componentId: "sc-1ea3rpp-1"
})(["margin-right:8px;"]);

var _StyledText = /*#__PURE__*/(0, _styledComponents.default)(_Text.Text).withConfig({
  displayName: "LiveActionPlanFooter___StyledText",
  componentId: "sc-1ea3rpp-2"
})(["", ";width:104px;"], _exports.ellipsis);

function NetworkName(props) {
  return /*#__PURE__*/_react.default.createElement(_StyledDiv, null, /*#__PURE__*/_react.default.createElement(_StyledIcon, {
    icon: 'device_hub',
    color: _exports.Colors.Gray54
  }), /*#__PURE__*/_react.default.createElement(_StyledText, {
    title: props.name,
    fontSize: _exports.FontSizes.Title5,
    fontWeight: _exports.FontWeights.Bold,
    color: _exports.Colors.Gray54,
    margin: "0"
  }, props.name));
}