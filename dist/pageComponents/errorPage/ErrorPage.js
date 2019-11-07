"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorPage = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireWildcard(require("react"));

var _exports = require("../../helpers/exports");

var _styledComponents2 = require("../../helpers/styled-components");

var _errorTypes = require("./errorTypes");

var _Button = require("../../visualComponents/buttons/Button");

var _BaseLink = require("../../visualComponents/hyperLink/BaseLink");

var _Icon = require("../../visualComponents/icon/Icon");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CCErrorPage =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "ErrorPage__CCErrorPage",
  componentId: "jn137y-0"
})(["", ";align-items:center;height:100%;justify-content:center;width:100%;"], (0, _exports.flexFlow)('column'));

const IconCircle =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "ErrorPage__IconCircle",
  componentId: "jn137y-1"
})(["", ";background:#ed6d6e;border-radius:50%;height:120px;width:120px;"], (0, _exports.flexFlow)('column'));

const StyledIcon =
/*#__PURE__*/
(0, _styledComponents.default)(_Icon.Icon).withConfig({
  displayName: "ErrorPage__StyledIcon",
  componentId: "jn137y-2"
})(["color:", ";margin:auto auto;"], (0, _exports.getColor)(_exports.Colors.White));

const FourZeroFourIcon =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "ErrorPage__FourZeroFourIcon",
  componentId: "jn137y-3"
})(["color:#ed6d6e;font-size:88px;font-weight:500;margin:auto auto;"]);

const Title =
/*#__PURE__*/
_styledComponents.default.h1.withConfig({
  displayName: "ErrorPage__Title",
  componentId: "jn137y-4"
})(["", ";color:", ";margin:32px 0 32px 0;"], (0, _exports.typography)(700, _exports.FontSizes.Title1), (0, _exports.getColor)(_exports.Colors.Black89));

const ErrorMessage =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "ErrorPage__ErrorMessage",
  componentId: "jn137y-5"
})(["", ";color:", ";max-width:448px;text-align:center;width:100%;"], (0, _exports.typography)(400, _exports.FontSizes.Title3), (0, _exports.getColor)(_exports.Colors.Black89));
/*
 * Types
 */


/*
 * Components
 */
const errorIcon = {
  [_errorTypes.ErrorType.Default]: _react.default.createElement(IconCircle, null, _react.default.createElement(StyledIcon, {
    icon: "errorRobot",
    size: 80
  })),
  [_errorTypes.ErrorType.NotAuthorized]: _react.default.createElement(IconCircle, null, _react.default.createElement(StyledIcon, {
    icon: "remove",
    size: 120
  })),
  [_errorTypes.ErrorType.FourZeroFour]: _react.default.createElement(FourZeroFourIcon, null, "404")
};
const errorTitle = {
  [_errorTypes.ErrorType.Default]: 'Something Went Wrong',
  [_errorTypes.ErrorType.NotAuthorized]: 'Not Authorized',
  [_errorTypes.ErrorType.FourZeroFour]: 'We couldn’t find your page...'
};
const errorMsg = {
  [_errorTypes.ErrorType.Default]: 'Please contact your administrator or try again later.',
  [_errorTypes.ErrorType.NotAuthorized]: 'We could not verify that you are authorized to access the requested page. Sorry!',
  [_errorTypes.ErrorType.FourZeroFour]: 'We searched high and low, far and wide, but can’t seem to find the page you’re looking for.'
};

var _StyledButton =
/*#__PURE__*/
(0, _styledComponents.default)(_Button.Button).withConfig({
  displayName: "ErrorPage___StyledButton",
  componentId: "jn137y-6"
})(["&&{margin-top:24px;}"]);

class ErrorPage extends _react.Component {
  render() {
    const {
      errorType,
      title,
      errorMessage
    } = this.props;
    return _react.default.createElement(CCErrorPage, null, errorIcon[errorType], _react.default.createElement(Title, null, title ? title : errorTitle[errorType]), _react.default.createElement(ErrorMessage, null, errorMessage ? errorMessage : errorMsg[errorType]), _react.default.createElement(_StyledButton, {
      passedAs: _BaseLink.BaseLink,
      to: '/'
    }, "Take Me Home"));
  }

}

exports.ErrorPage = ErrorPage;
ErrorPage.defaultProps = {
  errorType: _errorTypes.ErrorType.Default
};