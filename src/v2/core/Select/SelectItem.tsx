import React from 'react'
import * as MUI from '@material-ui/core'

import styled from '@monorail/helpers/styled-components'
import { OmitBannedProps } from '@monorail/v2/shared/helpers'
import {
  FontSizes,
  FontWeights,
  typographyFont,
} from '@monorail/helpers/exports'
export type SelectItemProps = OmitBannedProps<MUI.MenuItemProps>

export const StyledMenuItem = styled(MUI.MenuItem as typeof SelectItem)`
  ${typographyFont(FontWeights.Medium, FontSizes.Title5)};

  &.Mui-focusVisible {
    box-shadow: ${({ theme }) => `inset 0 0 0 1px ${theme.v2.ActionPrimary}`};
    background-color: unset; /* override MuiListItem.Mui-focusVisibile default */
  }

  &:hover {
    background: ${({ theme }) => theme.v2.ActionSmidgen};
  }

  &.Mui-selected {
    background: ${({ theme }) => theme.v2.ActionSmidgen};

    &:hover {
      background: ${({ theme }) => theme.v2.ActionPinch};
    }

    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-left: 4px solid ${({ theme }) => theme.v2.Accent4};
    }
  }
`

/**
 * Item (row) used in a `Select`
 *
 * - [Select | Monorail Figma](https://www.figma.com/file/dKL9YeHgWyxmRHuIjs38f3O9/Monorail-Components?node-id=21759%3A20652)
 */
export const SelectItem = React.forwardRef((props: SelectItemProps, ref) => {
  return <StyledMenuItem ref={ref} {...props} />
})
;(SelectItem as any).muiName = (MUI.MenuItem as any).muiName // eslint-disable-line
