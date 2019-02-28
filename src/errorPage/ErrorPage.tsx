import React, { Component, ReactNode } from 'react'
import styled from 'styled-components'
import { Icon } from '@monorail/icon/Icon'
import {
  Colors,
  colors,
  flexFlow,
  FontSizes,
  typography,
} from '@monorail/CommonStyles'
import { ErrorType } from '@monorail/errorPage/errorTypes'
import { TypeOf } from 'io-ts'

/*
* Styles
*/

const CCErrorPage = styled('div')`
  ${flexFlow('column')};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const IconCircle = styled('div')`
  ${flexFlow('column')};
  width: 120px;
  height: 120px;
  background: #ed6d6e;
  border-radius: 50%;
`

const StyledIcon = styled(Icon)`
  color: ${colors(Colors.White)};
  margin: auto auto;
`

const FourZeroFourIcon = styled('div')`
  color: #ed6d6e;
  font-size: 88px;
  font-weight: 500;
  margin: auto auto;
`

const Title = styled('h1')`
  ${typography(700, FontSizes.Title1)};
  color: ${colors(Colors.Black89)};
  margin: 32px 0 32px 0;
`

const ErrorMessage = styled('div')`
  ${typography(400, FontSizes.Title3)};
  color: ${colors(Colors.Black89)};
  text-align: center;
  width: 100%;
  max-width: 448px;
`

/*
* Types
*/

type ErrorPageProps = {
  errorType: ErrorType
  title?: ReactNode
  errorMessage?: ReactNode
}

/*
* Components
*/

const errorIcon = {
  [ErrorType.Default]: (
    <IconCircle>
      <StyledIcon icon="errorRobot" size={80} />
    </IconCircle>
  ),
  [ErrorType.NotAuthorized]: (
    <IconCircle>
      <StyledIcon icon="remove" size={120} />
    </IconCircle>
  ),
  [ErrorType.FourZeroFour]: <FourZeroFourIcon>404</FourZeroFourIcon>,
}

const errorTitle = {
  [ErrorType.Default]: 'Something Went Wrong',
  [ErrorType.NotAuthorized]: 'Not Authorized',
  [ErrorType.FourZeroFour]: 'We couldn’t find your page...',
}

const errorMsg = {
  [ErrorType.Default]: 'Please contact your administrator or try again later.',
  [ErrorType.NotAuthorized]:
    'We could not verify that you are authorized to access the requested page. Sorry!',
  [ErrorType.FourZeroFour]:
    'We searched high and low, far and wide, but can’t seem to find the page you’re looking for.',
}

export class ErrorPage extends Component<ErrorPageProps> {
  static defaultProps = {
    errorType: ErrorType.Default,
  }

  render() {
    const { errorType, title, errorMessage } = this.props

    return (
      <CCErrorPage>
        {errorIcon[errorType]}
        {<Title>{title ? title : errorTitle[errorType]}</Title>}
        {
          <ErrorMessage>
            {errorMessage ? errorMessage : errorMsg[errorType]}
          </ErrorMessage>
        }
      </CCErrorPage>
    )
  }
}
