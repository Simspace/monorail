import React, { Component } from 'react'
import { isNil } from '@monorail/CoreUtils/primitive-guards'
import styled, { css, SimpleInterpolation } from 'styled-components'
import {
  Colors,
  colors,
  flexFlow,
  FontSizes,
  typography,
} from '@monorail/CommonStyles'
import { CCTag } from '@monorail/tags/Tag'

// Property Styles
const primaryPropertyStyles = css`
  ${typography(500, FontSizes.Content)};
  color: ${colors(Colors.Black74)};
`
const compactPropertyStyles = css`
  ${typography(500, FontSizes.Content)};
  color: ${colors(Colors.Black54)};
  text-transform: uppercase;
`
const largePropertyStyles = css`
  ${typography(700, FontSizes.Content)};
  color: ${colors(Colors.Black74)};
`

const BBDetailsProperty = styled<BBDetailsSize, 'h2'>('h2')`
  ${({ compact, large }) => {
    if (compact) {
      return compactPropertyStyles
    } else if (large) {
      return largePropertyStyles
    } else {
      return primaryPropertyStyles
    }
  }};

  ${({ darkMode }) =>
    darkMode &&
    css`
      color: ${colors(Colors.White)};
    `};

  margin: 0;
`

// Value Styles
const primaryValueStyles = css`
  ${typography(200, FontSizes.Title3)};
  color: ${colors(Colors.Black89)};
`
const compactValueStyles = css`
  ${typography(600, FontSizes.Title5)};
  color: ${colors(Colors.Black74)};
`
const largeValueStyles = css`
  ${typography(200, FontSizes.Title1)};
  color: ${colors(Colors.Black89)};
`

const BBDetailsValue = styled<BBDetailsSize, 'h2'>('h2')`
  ${({ compact, large }) => {
    if (compact) {
      return compactValueStyles
    } else if (large) {
      return largeValueStyles
    } else {
      return primaryValueStyles
    }
  }};
  ${({ darkMode }) =>
    darkMode &&
    css`
      color: ${colors(Colors.White)};
    `};

  margin: 0;
`

const BBDetailsContainer = styled<BBDetailsContainerProps, 'div'>('div')`
  ${flexFlow()};

  ${CCTag} {
    margin-top: 6px;
  }

  ${({ cssOverrides }) => cssOverrides};
`

type BBDetailsSize = {
  compact?: boolean
  darkMode?: boolean
  large?: boolean
}

type BBDetailsContainerProps = {
  cssOverrides?: SimpleInterpolation
}

type CCDetailsProps = BBDetailsSize &
  BBDetailsContainerProps & {
    property: string
    value?: string | number
  }

export class CCDetails extends Component<CCDetailsProps> {
  render() {
    const {
      children,
      compact,
      cssOverrides,
      darkMode,
      large,
      property,
      value,
    } = this.props

    return (
      <BBDetailsContainer cssOverrides={cssOverrides}>
        <BBDetailsProperty compact={compact} large={large} darkMode={darkMode}>
          {property}
        </BBDetailsProperty>
        {!isNil(value) && (
          <BBDetailsValue compact={compact} large={large} darkMode={darkMode}>
            {value}
          </BBDetailsValue>
        )}

        {children}
      </BBDetailsContainer>
    )
  }
}
