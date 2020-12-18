"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContentBody = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _flex = require("../../helpers/flex");

var _size = require("../../helpers/size");

var _styledComponents2 = _interopRequireDefault(require("../../helpers/styled-components"));

var _ScrollAnimation = require("../../visualComponents/layout/ScrollAnimation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ContentBodyContainer = _styledComponents2.default.div`
  ${(0, _size.pageSizePadding)({
  paddingTop: 24,
  paddingBottom: 24
})};

  ${(0, _flex.flexFlow)('column')};
`;

var _StyledScrollAnimation = /*#__PURE__*/(0, _styledComponents.default)(_ScrollAnimation.ScrollAnimation).withConfig({
  displayName: "ContentBody___StyledScrollAnimation",
  componentId: "sc-5sb3pw-0"
})(["", ""], p => p._css);

const ContentBody = ({
  children,
  scrollCSS,
  ...domProps
}) => {
  return /*#__PURE__*/_react.default.createElement(_StyledScrollAnimation, {
    _css: scrollCSS
  }, /*#__PURE__*/_react.default.createElement(ContentBodyContainer, domProps, children));
};

exports.ContentBody = ContentBody;