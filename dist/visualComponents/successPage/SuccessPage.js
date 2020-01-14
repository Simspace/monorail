"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SuccessPage = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _exports = require("../../helpers/exports");

var _Icon = require("../icon/Icon");

var _Confetti = require("./Confetti");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Styles
 */
const Container =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "SuccessPage__Container",
  componentId: "sc-8zlqyu-0"
})(["", ";align-items:center;height:100%;justify-content:center;width:100%;"], (0, _exports.flexFlow)('column'));

const StyledIcon =
/*#__PURE__*/
(0, _styledComponents.default)(_Icon.Icon).withConfig({
  displayName: "SuccessPage__StyledIcon",
  componentId: "sc-8zlqyu-1"
})(["color:", ";"], (0, _exports.getColor)(_exports.Colors.BrandDarkBlue));

const Title =
/*#__PURE__*/
_styledComponents.default.h1.withConfig({
  displayName: "SuccessPage__Title",
  componentId: "sc-8zlqyu-2"
})(["", ";color:", ";margin:24px 0 24px 0;"], (0, _exports.typography)(700, _exports.FontSizes.Hyper2), (0, _exports.getColor)(_exports.Colors.Black89));

const SubTitle =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "SuccessPage__SubTitle",
  componentId: "sc-8zlqyu-3"
})(["", ";color:", ";max-width:448px;text-align:center;width:100%;"], (0, _exports.typography)(400, _exports.FontSizes.Title3), (0, _exports.getColor)(_exports.Colors.Black89));
/*
 * Types
 */


/*
 * Components
 */
const SuccessPage = props => {
  const {
    titleText = 'Event Complete!',
    subtitleText = 'We will be in touch with you shortly.'
  } = props;
  return _react.default.createElement(Container, null, _react.default.createElement(_Confetti.Confetti, null), _react.default.createElement(StyledIcon, {
    icon: "check_circle",
    size: 160
  }), _react.default.createElement(Title, null, titleText), _react.default.createElement(SubTitle, null, subtitleText));
};

exports.SuccessPage = SuccessPage;