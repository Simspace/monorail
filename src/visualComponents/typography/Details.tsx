import React from 'react'
import { SimpleInterpolation } from 'styled-components'

import { flexFlow, FontSizes, typography } from '@monorail/helpers/exports'
import styled, { css } from '@monorail/helpers/styled-components'
import { getThemeColor, ThemeColors } from '@monorail/helpers/theme'
import { FCwDP } from '@monorail/sharedHelpers/react'
import { isNil } from '@monorail/sharedHelpers/typeGuards'
import { TagContainer } from '@monorail/visualComponents/tags/Tag'
import { DetailsSize } from '@monorail/visualComponents/typography/detailsTypes'

// Property Styles

const propertySizeStyles = {
  [DetailsSize.Compact]: css`
    ${typography(500, FontSizes.Micro)};

    color: ${getThemeColor(ThemeColors.Text500)};
    text-transform: uppercase;
  `,
  [DetailsSize.Default]: css`
    ${typography(500, FontSizes.Micro)};

    color: ${getThemeColor(ThemeColors.Text700)};
  `,
  [DetailsSize.Large]: css`
    ${typography(700, FontSizes.Micro)};

    color: ${getThemeColor(ThemeColors.Text700)};
  `,
}

const DetailsProperty = styled.h2<{ size: DetailsSize }>(
  ({ size }) => css`
    ${propertySizeStyles[size]};

    margin: 0;
  `,
)

// Value Styles

const valueSizeStyles = {
  [DetailsSize.Compact]: css`
    ${typography(600, FontSizes.Title5)};

    color: ${getThemeColor(ThemeColors.Text700)};
  `,
  [DetailsSize.Default]: css`
    ${typography(200, FontSizes.Title3)};

    color: ${getThemeColor(ThemeColors.Text900)};
  `,
  [DetailsSize.Large]: css`
    ${typography(200, FontSizes.Title1)};

    color: ${getThemeColor(ThemeColors.Text900)};
  `,
}

const DetailsValue = styled.h1<{ size: DetailsSize }>(
  ({ size }) => css`
    ${valueSizeStyles[size]};

    margin: 0;
  `,
)

const DetailsContainer = styled.div<BBDetailsContainerProps>(
  ({ cssOverrides }) => css`
    ${flexFlow()};

    ${TagContainer} {
      margin-top: 6px;
    }

    ${cssOverrides};
  `,
)

type BBDetailsContainerProps = {
  cssOverrides?: SimpleInterpolation
}

type DetailsProps = BBDetailsContainerProps & {
  property: string
  value?: string | number
}

type DefaultProps = {
  size: DetailsSize
}

export const Details: FCwDP<DetailsProps, DefaultProps> = ({
  children,
  cssOverrides,
  size,
  property,
  value,
}) => (
  <DetailsContainer cssOverrides={cssOverrides}>
    <DetailsProperty size={size}>{property}</DetailsProperty>
    {!isNil(value) && <DetailsValue size={size}>{value}</DetailsValue>}

    {children}
  </DetailsContainer>
)

Details.defaultProps = {
  size: DetailsSize.Default,
}
