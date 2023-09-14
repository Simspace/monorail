/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react'
import type { ListItemTextProps as MuiListItemTextProps } from '@mui/material'
import { ListItemText as MuiListItemText } from '@mui/material'

import { combineSxProps, getLineClampStyles } from '@monorail/utils'

import type { TypographyProps } from '../Typography.js'

export interface ListItemTextProps<
  PrimaryTypographyComponent extends React.ElementType = 'span',
  SecondaryTypographyComponent extends React.ElementType = 'p',
> extends Omit<
    MuiListItemTextProps<
      PrimaryTypographyComponent,
      SecondaryTypographyComponent
    >,
    'primaryTypographyProps' | 'secondaryTypographyProps'
  > {
  /**
   * These props will be forwarded to the primary typography component
   * (as long as disableTypography is not `true`).
   */
  primaryTypographyProps?: TypographyProps<
    PrimaryTypographyComponent,
    { component?: PrimaryTypographyComponent }
  >
  /**
   * These props will be forwarded to the secondary typography component
   * (as long as disableTypography is not `true`).
   */
  secondaryTypographyProps?: TypographyProps<
    SecondaryTypographyComponent,
    { component?: SecondaryTypographyComponent }
  >
}

/**
 *
 * Demos:
 *
 * - [List Item Text](https://simspace.gitlab.io/engineering/ux-engineering/monorail/main/storybook/?path=/docs/data-display-list-listitemtext--default)
 * - [Lists (MUI)](https://mui.com/material-ui/react-list/)
 *
 * API:
 *
 * - [ListItemText API](https://mui.com/material-ui/api/list-item-text/)
 */
export const ListItemText = React.forwardRef(function ListItemText(props, ref) {
  const {
    primaryTypographyProps: primaryTypographyPropsProp = {},
    secondaryTypographyProps: secondaryTypographyPropsProp = {},
    ...others
  } = props

  const {
    lineClamp: primaryLineClamp,
    sx: primarySx,
    ...restPrimaryTypographyProps
  } = (primaryTypographyPropsProp ?? {}) as TypographyProps & {
    lineClamp?: number
  }
  const {
    lineClamp: secondaryLineClamp,
    sx: secondarySx,
    ...restSecondaryTypographyProps
  } = (secondaryTypographyPropsProp ?? {}) as TypographyProps<'p'> & {
    lineClamp?: number
  }

  const primaryTypographyProps = {
    ...restPrimaryTypographyProps,
    sx: combineSxProps(
      { ...(primaryLineClamp && getLineClampStyles(primaryLineClamp)) },
      primarySx,
    ),
  }

  const secondaryTypographyProps = {
    ...restSecondaryTypographyProps,
    sx: combineSxProps(
      { ...(secondaryLineClamp && getLineClampStyles(secondaryLineClamp)) },
      secondarySx,
    ),
  }

  return (
    <MuiListItemText
      ref={ref}
      {...others}
      primaryTypographyProps={primaryTypographyProps}
      secondaryTypographyProps={secondaryTypographyProps}
    />
  )
}) as <
  PrimaryTypographyComponent extends React.ElementType = 'span',
  SecondaryTypographyComponent extends React.ElementType = 'p',
>(
  props: ListItemTextProps<
    PrimaryTypographyComponent,
    SecondaryTypographyComponent
  >,
) => JSX.Element

export * from '@mui/material/ListItemText'
