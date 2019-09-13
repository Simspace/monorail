"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContentBody = void 0;

var _react = _interopRequireDefault(require("react"));

var _flex = require("../../helpers/flex");

var _size = require("../../helpers/size");

var _styledComponents = _interopRequireDefault(require("../../helpers/styled-components"));

var _ScrollAnimation = require("../../visualComponents/layout/ScrollAnimation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ContentBodyContainer = _styledComponents.default.div`
  ${(0, _size.pageSizePadding)({
  paddingTop: 24,
  paddingBottom: 24
})};

  ${(0, _flex.flexFlow)('column')};
`;

const ContentBody = ({
  children,
  ...domProps
}) => {
  return _react.default.createElement(_ScrollAnimation.ScrollAnimation, null, _react.default.createElement(ContentBodyContainer, domProps, children));
};

exports.ContentBody = ContentBody;