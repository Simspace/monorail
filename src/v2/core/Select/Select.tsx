import React from 'react'
import * as MUI from '@material-ui/core'
import { Merge } from 'type-fest'

import { Colors } from '@monorail/helpers/color'
import styled from '@monorail/helpers/styled-components'
import * as Icons from '@monorail/v2/icons/Icons'
import { OmitBannedProps, propBlockerConfig } from '@monorail/v2/shared/helpers'
import { Text } from '@monorail/visualComponents/typography/Text'

const Position = {
  Above: 'above',
  Below: 'below',
} as const

type PositionValue = typeof Position[keyof typeof Position]

const anchorOrigin: Record<PositionValue, MUI.PopoverOrigin> = {
  [Position.Above]: {
    vertical: 'top',
    horizontal: 'left',
  },
  [Position.Below]: {
    vertical: 'bottom',
    horizontal: 'left',
  },
}

const transformOrigin: Record<PositionValue, MUI.PopoverOrigin> = {
  [Position.Above]: {
    vertical: 'bottom',
    horizontal: 'left',
  },
  [Position.Below]: {
    vertical: 'top',
    horizontal: 'left',
  },
}

const menuMargin: Record<PositionValue, number> = {
  [Position.Above]: -4,
  [Position.Below]: 4,
}

export type SelectProps<T> = Merge<
  // placeholder is added to a hidden `input`. Not helpful, and confusing.
  OmitBannedProps<Omit<MUI.SelectProps, 'placeholder'>>,
  {
    // TODO [Future enhancement]: auto-detect the position it should be in
    popoverPosition: PositionValue
    value?: T
    defaultValue?: T
    renderValue?: (value: T) => React.ReactNode
    /**
     * Note: `event.value` comes from child `MenuItem`'s `data-value` attribute, which is always a string
     */
    onChange?: (
      event: React.ChangeEvent<{
        name?: string
        value: string
      }>,
      child: React.ReactNode,
    ) => void

    // Object props do not correctly ignore aria-/data- attributes (like JSX does), so add what we need.
    // Delete this if https://github.com/microsoft/TypeScript/issues/28960 is fixed
    SelectDisplayProps?: Pick<MUI.SelectProps, 'SelectDisplayProps'> & {
      'data-test-id'?: string
    }
  }
> &
  (
    | {
        'aria-labelledby': string
      }
    | {
        'aria-label': string
      }
  )

const StyledSelect: <T>(props: SelectProps<T>) => JSX.Element = styled(
  MUI.Select as typeof Select,
).withConfig(
  propBlockerConfig<SelectProps<unknown>>([
    'aria-label',
    'aria-labelledby',
    'popoverPosition',
  ]),
)`
  min-height: 24px;
  font-size: 12px;

  /* Disable default variant's underline */
  &:before,
  &:after {
    display: none;
  }

  .MuiInputBase-input {
    padding: 4px 32px 4px 8px;
  }

  /* More of an :active state */
  &.Mui-focused .MuiSelect-select {
    box-shadow: ${({ theme }) => `inset 0 0 0 1px ${theme.v2.ActionPrimary}`};
  }

  .MuiSelect-select {
    border-radius: 4px;
    background: ${({ theme }) => theme.v2.FoundationPlate};
    box-shadow: ${({ theme }) =>
      `inset 0 0 0 1px ${theme.v2.FoundationGraphic}`};

    /* The actual Focus state */
    :focus {
      box-shadow: ${({ theme }) =>
        `inset 0 0 0 1px ${theme.v2.Accent3}, 0 0 0 3px ${theme.v2.ActionDollop}`};
    }

    :hover:not(.Mui-disabled) {
      background: ${({ theme }) => theme.v2.ActionSmidgen};
    }
  }
`

const DownArrow = styled(Icons.ArrowDropDown)`
  color: ${({ theme }) => theme.v2.FoundationGraphic};
  right: 10px;
  position: absolute;
  pointer-events: none;
`

/**
 * Select components are used for collecting user provided information from a list of options.
 *
 * - [Select | Material-UI](https://material-ui.com/components/selects/)
 * - [Select | Monorail Figma](https://www.figma.com/file/dKL9YeHgWyxmRHuIjs38f3O9/Monorail-Components?node-id=21759%3A20652)
 *
 * Note: This component is a BETA because
 *
 * - It doesn't auto-detect `position`
 * - Object values require a bit of work
 */
export function Select<T>(props: SelectProps<T>) {
  const { popoverPosition } = props
  const { MenuProps, ...restProps } = props

  return (
    <StyledSelect<T>
      renderValue={value => <Text color={Colors.Gray89}>{value}</Text>}
      IconComponent={() => <DownArrow fontSize="inherit" />}
      MenuProps={{
        // Don't push Popover away from client window's edge
        marginThreshold: 0,
        // Don't position Popover for selected item directly over input
        getContentAnchorEl: undefined,
        anchorOrigin: anchorOrigin[popoverPosition],
        transformOrigin: transformOrigin[popoverPosition],
        MenuListProps: {
          'aria-label': props['aria-label'],
          'aria-labelledby': props['aria-labelledby'],
        },
        PaperProps: {
          elevation: 6,
          style: { marginTop: menuMargin[popoverPosition] },
        },
        ...MenuProps,
      }}
      {...restProps}
    />
  )
}
;(Select as any).muiName = (MUI.Select as any).muiName // eslint-disable-line
