"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FramedLink = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _categoryTransforms = require("../../helpers/categoryTransforms");

var _styledComponents2 = require("../../helpers/styled-components");

var _typography = require("../../helpers/typography");

var _HyperLink = require("./HyperLink");

var _FramedIcon = require("../icon/FramedIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _StyledHyperLink =
/*#__PURE__*/
(0, _styledComponents.default)(_HyperLink.HyperLink).withConfig({
  displayName: "FramedLink___StyledHyperLink",
  componentId: "sc-34huc4-0"
})(["", ";padding:3px 0;width:100%;"], _typography.ellipsis);

var _StyledFramedIcon =
/*#__PURE__*/
(0, _styledComponents.default)(_FramedIcon.FramedIcon).withConfig({
  displayName: "FramedLink___StyledFramedIcon",
  componentId: "sc-34huc4-1"
})(["margin:0 8px -1px 2px;transform:translateY(-1px);vertical-align:middle;"]);

const FramedLink = ({
  categoryId,
  children,
  isArchived,
  onClick,
  to
}) => _react.default.createElement(_StyledHyperLink, {
  to: to,
  onClick: onClick
}, _react.default.createElement(_StyledFramedIcon, {
  icon: (0, _categoryTransforms.categoryIcon)(categoryId),
  frameColor: (0, _categoryTransforms.categoryColor)(categoryId),
  isArchived: isArchived
}), children);

exports.FramedLink = FramedLink;