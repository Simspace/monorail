import React from 'react'

import { FontSizes, FontWeights } from '@monorail/helpers/exports'
import styled, { CSSProp } from '@monorail/helpers/styled-components'
import { assertNever } from '@monorail/sharedHelpers/typeGuards'
import { Text, TextProps } from '@monorail/visualComponents/typography/Text'

// #region CSS
export const StyledHeader = styled.div<{ hideBorder?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${({ theme }) => theme.v2.FoundationText1};
  flex-shrink: 0;
  height: 48px;
  padding: 0 16px;

  ${({ hideBorder, theme }) =>
    !hideBorder && `box-shadow: inset 0 -1px 0 ${theme.v2.FoundationDash};`}
`

const ADORNMENT_MARGIN = '12px'

export type HeaderAdornmentProps = { position: 'start' | 'end' }
export const HeaderAdornment = styled.div<HeaderAdornmentProps>`
  font-size: 16px; /* default size for header icons */
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ position }) =>
    position === 'start'
      ? `margin-right: ${ADORNMENT_MARGIN};`
      : position === 'end'
      ? `margin-left: ${ADORNMENT_MARGIN};`
      : assertNever(position)}
`
// #endregion CSS

export type HeaderProps = {
  hideBorder?: boolean
  startAdornment?: React.ReactNode
  endAdornment?: React.ReactNode
  TitleTextProps?: Partial<TextProps & { css: CSSProp }>
  children: React.ReactNode
}

/**
 * Styled header with support for start/end adornments
 *
 * TODO: It may make sense to default `<Text as="h2"/>` -DS 2020-11-05
 */
export function Header(props: HeaderProps) {
  const {
    hideBorder,
    startAdornment,
    endAdornment,
    TitleTextProps,
    children,
    ...restProps
  } = props

  return (
    <StyledHeader hideBorder={hideBorder} {...restProps}>
      {startAdornment}
      <Text
        fontSize={FontSizes.Title3}
        fontWeight={FontWeights.Medium}
        css={`
          flex: 1;
          ${TitleTextProps?.css}
        `}
        noWrap
        {...TitleTextProps}
      >
        {children}
      </Text>
      {endAdornment}
    </StyledHeader>
  )
}
