"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FramedLink = exports.LinkContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _reactRouter = require("react-router");

var _categoryTransforms = require("../../helpers/categoryTransforms");

var _exports = require("../../helpers/exports");

var _styledComponents2 = _interopRequireWildcard(require("../../helpers/styled-components"));

var _typography = require("../../helpers/typography");

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _FramedIcon = require("../icon/FramedIcon");

var _Text = require("../typography/Text");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const LinkContainer = (0, _styledComponents2.default)(_reactRouter.Link)`
  ${(0, _exports.baseHyperLinkStyles)()};

  cursor: pointer;
  transition: color ease 25ms;
`;
exports.LinkContainer = LinkContainer;

var _StyledLinkContainer = /*#__PURE__*/(0, _styledComponents.default)(LinkContainer).withConfig({
  displayName: "FramedLink___StyledLinkContainer",
  componentId: "sc-34huc4-0"
})(["", " align-items:center;min-width:0;width:100%;"], p => p._css);

var _StyledFramedIcon = /*#__PURE__*/(0, _styledComponents.default)(_FramedIcon.FramedIcon).withConfig({
  displayName: "FramedLink___StyledFramedIcon",
  componentId: "sc-34huc4-1"
})(["margin-right:8px;"]);

var _StyledText = /*#__PURE__*/(0, _styledComponents.default)(_Text.Text).withConfig({
  displayName: "FramedLink___StyledText",
  componentId: "sc-34huc4-2"
})(["", ";color:inherit;text-decoration:underline;"], _typography.ellipsis);

const FramedLink = ({
  categoryId,
  children,
  isArchived,
  onClick,
  to,
  title
}) => /*#__PURE__*/_react.default.createElement(_StyledLinkContainer, {
  to: to,
  title: title,
  onClick: onClick,
  _css: (0, _exports.flexFlow)('row')
}, /*#__PURE__*/_react.default.createElement(_StyledFramedIcon, {
  icon: (0, _categoryTransforms.categoryIcon)(categoryId),
  frameColor: (0, _categoryTransforms.categoryColor)(categoryId),
  isArchived: isArchived
}), /*#__PURE__*/_react.default.createElement(_StyledText, {
  title: (0, _typeGuards.isNonEmptyString)(children) ? children : undefined
}, children));

exports.FramedLink = FramedLink;