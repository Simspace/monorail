import React from 'react'
import { Merge } from 'type-fest'

import styled, { css, CSSProp } from '@monorail/helpers/styled-components'
import { Text, TextProps } from '@monorail/visualComponents/typography/Text'
import { FontSizes, FontWeights } from '@monorail/helpers/exports'

export const ADORNMENT_POSITION = {
  Start: 'start',
  End: 'end',
} as const

export type AdornmentPosition = typeof ADORNMENT_POSITION[keyof typeof ADORNMENT_POSITION]

//#region Styles
const StyledPill = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.v2.FoundationSmidgen};
  padding: 8px 16px;
  border-radius: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
`

const adornmentPositionCss: Record<AdornmentPosition, CSSProp> = {
  [ADORNMENT_POSITION.Start]: css`
    margin-left: -8px;
    padding-right: 8px;
  `,
  [ADORNMENT_POSITION.End]: css`
    margin-right: -8px;
    padding-left: 8px;
  `,
}

const StyledPillAdornment = styled.div<PillAdornmentProps>`
  ${({ position }) => adornmentPositionCss[position]}

  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: ${({ theme }) => theme.v2.FoundationText4};
`
//#endregion Styles

//#region Components

//#region PillAdornment

export type PillAdornmentProps = Merge<
  React.ComponentPropsWithRef<'div'>,
  {
    position: AdornmentPosition
  }
>

/**
 * Adornment wrapper for Pill that handles start/end icon placement
 */
export const PillAdornment = React.forwardRef<
  HTMLDivElement,
  PillAdornmentProps
>((props, ref) => {
  return <StyledPillAdornment ref={ref} {...props} />
})
//#endregion PillAdornment

//#region Pill
export type PillProps = Merge<
  React.ComponentPropsWithRef<'div'>,
  {
    label: React.ReactNode
    startAdornment?: React.ReactNode
    endAdornment?: React.ReactNode
  }
>

/**
 * Pill is a styled wrapper of text and start/end icons
 */
export const Pill = React.forwardRef<HTMLDivElement, PillProps>(
  (props, ref) => {
    const { label, ...restProps } = props

    return (
      <StyledPill
        title={typeof label === 'string' ? label : undefined}
        ref={ref}
        {...restProps}
      >
        {props.startAdornment}
        <Text
          css={`
            flex: 1;
          `}
          noWrap={true}
          fontSize={FontSizes.Title5}
          fontWeight={FontWeights.Book}
        >
          {label}
        </Text>
        {props.endAdornment}
      </StyledPill>
    )
  },
)
//#endregion Pill

//#endregion Components
