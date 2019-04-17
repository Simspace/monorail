import React, { Component } from 'react';
import styled from 'styled-components';
import { ErrorType } from '@monorail/errorPage/errorTypes';
import { Icon } from '@monorail/icon/Icon';
import { Colors, getColor, flexFlow, FontSizes, typography, } from '@monorail/helpers/exports';
/*
* Styles
*/
const CCErrorPage = styled.div `
  ${flexFlow('column')};

  align-items: center;
  height: 100%;
  justify-content: center;
  width: 100%;
`;
const IconCircle = styled.div `
  ${flexFlow('column')};

  background: #ed6d6e;
  border-radius: 50%;
  height: 120px;
  width: 120px;
`;
const StyledIcon = styled(Icon) `
  color: ${getColor(Colors.White)};
  margin: auto auto;
`;
const FourZeroFourIcon = styled.div `
  color: #ed6d6e;
  font-size: 88px;
  font-weight: 500;
  margin: auto auto;
`;
const Title = styled.h1 `
  ${typography(700, FontSizes.Title1)};

  color: ${getColor(Colors.Black89)};
  margin: 32px 0 32px 0;
`;
const ErrorMessage = styled.div `
  ${typography(400, FontSizes.Title3)};

  color: ${getColor(Colors.Black89)};
  max-width: 448px;
  text-align: center;
  width: 100%;
`;
/*
* Components
*/
const errorIcon = {
    [ErrorType.Default]: (React.createElement(IconCircle, null,
        React.createElement(StyledIcon, { icon: "errorRobot", size: 80 }))),
    [ErrorType.NotAuthorized]: (React.createElement(IconCircle, null,
        React.createElement(StyledIcon, { icon: "remove", size: 120 }))),
    [ErrorType.FourZeroFour]: React.createElement(FourZeroFourIcon, null, "404"),
};
const errorTitle = {
    [ErrorType.Default]: 'Something Went Wrong',
    [ErrorType.NotAuthorized]: 'Not Authorized',
    [ErrorType.FourZeroFour]: 'We couldn’t find your page...',
};
const errorMsg = {
    [ErrorType.Default]: 'Please contact your administrator or try again later.',
    [ErrorType.NotAuthorized]: 'We could not verify that you are authorized to access the requested page. Sorry!',
    [ErrorType.FourZeroFour]: 'We searched high and low, far and wide, but can’t seem to find the page you’re looking for.',
};
export class ErrorPage extends Component {
    render() {
        const { errorType, title, errorMessage } = this.props;
        return (React.createElement(CCErrorPage, null,
            errorIcon[errorType],
            React.createElement(Title, null, title ? title : errorTitle[errorType]),
            React.createElement(ErrorMessage, null, errorMessage ? errorMessage : errorMsg[errorType])));
    }
}
ErrorPage.defaultProps = {
    errorType: ErrorType.Default,
};
//# sourceMappingURL=ErrorPage.js.map