"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StructuredContentPlanFooter = void 0;

var _react = _interopRequireDefault(require("react"));

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _Duration = require("./Duration");

var _Enrollment = require("./Enrollment");

var _StarRating = require("./StarRating");

var _Footer = require("./Footer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const StructuredContentPlanFooter = props => {
  const {
    rating,
    durationMin,
    isSelfEnroll
  } = props;
  const shouldShowFooter = (0, _typeGuards.isNotNil)(rating) || (0, _typeGuards.isNotNil)(isSelfEnroll) || (0, _typeGuards.isNotNil)(durationMin) && durationMin > 0;
  return shouldShowFooter ? /*#__PURE__*/_react.default.createElement(_Footer.FooterList, null, (0, _typeGuards.isNotNil)(rating) && /*#__PURE__*/_react.default.createElement(_Footer.FooterListItem, null, /*#__PURE__*/_react.default.createElement(_StarRating.StarRating, {
    rating: rating
  })), (0, _typeGuards.isNotNil)(isSelfEnroll) && /*#__PURE__*/_react.default.createElement(_Footer.FooterListItem, null, /*#__PURE__*/_react.default.createElement(_Enrollment.Enrollment, {
    selfEnroll: isSelfEnroll
  })), (0, _typeGuards.isNotNil)(durationMin) && durationMin > 0 && /*#__PURE__*/_react.default.createElement(_Footer.FooterListItem, null, /*#__PURE__*/_react.default.createElement(_Duration.Duration, {
    durationMin: durationMin
  }))) : null;
};

exports.StructuredContentPlanFooter = StructuredContentPlanFooter;