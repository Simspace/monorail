"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorPage = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Icon = require("../../icon/Icon");

var _CommonStyles = require("../../CommonStyles");

var _errorTypes = require("../../errorPage/errorTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/*
* Styles
*/
const CCErrorPage = (0, _styledComponents.default)('div')`
  ${(0, _CommonStyles.flexFlow)('column')};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const IconCircle = (0, _styledComponents.default)('div')`
  ${(0, _CommonStyles.flexFlow)('column')};
  width: 120px;
  height: 120px;
  background: #ed6d6e;
  border-radius: 50%;
`;
const StyledIcon = (0, _styledComponents.default)(_Icon.Icon)`
  color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.White)};
  margin: auto auto;
`;
const FourZeroFourIcon = (0, _styledComponents.default)('div')`
  color: #ed6d6e;
  font-size: 88px;
  font-weight: 500;
  margin: auto auto;
`;
const Title = (0, _styledComponents.default)('h1')`
  ${(0, _CommonStyles.typography)(700, _CommonStyles.FontSizes.Title1)};
  color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.Black89)};
  margin: 32px 0 32px 0;
`;
const ErrorMessage = (0, _styledComponents.default)('div')`
  ${(0, _CommonStyles.typography)(400, _CommonStyles.FontSizes.Title3)};
  color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.Black89)};
  text-align: center;
  width: 100%;
  max-width: 448px;
`;
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

class ErrorPage extends _react.Component {
  render() {
    const {
      errorType,
      title,
      errorMessage
    } = this.props;
    return _react.default.createElement(CCErrorPage, null, errorIcon[errorType], _react.default.createElement(Title, null, title ? title : errorTitle[errorType]), _react.default.createElement(ErrorMessage, null, errorMessage ? errorMessage : errorMsg[errorType]));
  }

}

exports.ErrorPage = ErrorPage;
ErrorPage.defaultProps = {
  errorType: _errorTypes.ErrorType.Default
};