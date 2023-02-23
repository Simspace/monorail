import React from 'react'
import { ArrowDropDown } from '@mui/icons-material'
import type { CSSObject } from '@mui/material'
import composeClasses from '@mui/utils/composeClasses'
import useId from '@mui/utils/useId'
import clsx from 'clsx'

import { filterMap, styled, useThemeProps } from '@monorail/utils'

import { Button } from '../Button.js'
import { ButtonGroup } from '../ButtonGroup.js'
import { ListItemIcon } from '../ListItemIcon.js'
import { ListItemText } from '../ListItemText.js'
import { Menu } from '../Menu.js'
import { MenuItem } from '../MenuItem.js'
import type { SplitButtonClassKey } from './splitButtonClasses.js'
import {
  getSplitButtonUtilityClass,
  splitButtonClasses,
} from './splitButtonClasses.js'
import type { SplitButtonProps } from './splitButtonProps.js'

interface SplitButtonOwnerState extends Omit<SplitButtonProps, 'size'> {
  size: NonNullable<SplitButtonProps['size']>
}

function overridesResolver(
  props: { ownerState: SplitButtonOwnerState },
  styles: Partial<Record<SplitButtonClassKey, CSSObject>>,
) {
  return [
    { [`& .${splitButtonClasses.menu}`]: styles.menu },
    {
      [`& .${splitButtonClasses.primaryButton}`]: styles.primaryButton,
      ...(props.ownerState.size === 'small' && {
        [`& .${splitButtonClasses.primaryButtonSmall}`]:
          styles.primaryButtonSmall,
      }),
      ...(props.ownerState.size === 'large' && {
        [`& .${splitButtonClasses.primaryButtonLarge}`]:
          styles.primaryButtonLarge,
      }),
    },
    {
      [`& .${splitButtonClasses.secondaryButton}`]: styles.secondaryButton,
      ...(props.ownerState.size === 'small' && {
        [`& .${splitButtonClasses.secondaryButtonSmall}`]:
          styles.secondaryButtonSmall,
      }),
      ...(props.ownerState.size === 'large' && {
        [`& .${splitButtonClasses.secondaryButtonLarge}`]:
          styles.secondaryButtonLarge,
      }),
    },
    styles.root,
  ]
}

const SplitButtonRoot = styled(ButtonGroup, {
  name: 'MonorailSplitButton',
  slot: 'Root',
  overridesResolver,
})<{ ownerState: SplitButtonOwnerState }>(({ theme, ownerState }) => ({
  [`& .${splitButtonClasses.secondaryButton}`]: {
    ...(ownerState.size === 'small' && {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    }),
    ...(ownerState.size === 'medium' && {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    }),
    ...(ownerState.size === 'large' && {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    }),
  },
}))

const SplitButtonMenu = styled(Menu, {
  name: 'MonorailSplitButton',
  slot: 'Menu',
})(({ theme }) => ({
  zIndex: theme.zIndex.tooltip,
}))

/**
 * A component composed of ButtonGroup, Popper, Paper, and MenuList. Has a main button and a secondary
 * button that opens a list of options.
 *
 * Demos:
 *
 * - [SplitButton](https://simspace.gitlab.io/engineering/ux-engineering/monorail/main/storybook/?path=/docs/inputs-splitbutton--default)
 */
export const SplitButton = React.forwardRef(function SplitButton(inProps, ref) {
  const props = useThemeProps({
    name: 'MonorailSplitButton',
    props: inProps,
  })

  const {
    options,
    components = {},
    componentsProps,
    select = false,
    size = 'medium',
    ...other
  } = props

  const menuListId = useId()

  const [open, setOpen] = React.useState(false)
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const anchorRef = React.useRef<HTMLButtonElement>(null)

  const MenuComponent = components.Menu ?? SplitButtonMenu

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return
    }

    setOpen(false)
  }

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number,
  ) => {
    if (select) {
      setSelectedIndex(index)
    } else {
      options[index].onClick(event)
    }
    setOpen(false)
  }

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
  }

  const handleMainButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    if (select) {
      options[selectedIndex].onClick(event)
    } else {
      options[0].onClick(event)
    }
  }

  const ownerState = {
    ...props,
    size,
  }

  const classes = useUtilityClasses(ownerState)

  return (
    <React.Fragment>
      <SplitButtonRoot
        {...other}
        ownerState={ownerState}
        size={size}
        ref={ref}
        className={clsx(classes.root, props.className)}
      >
        <Button
          {...componentsProps.primaryButton}
          startIcon={options[0]?.startIcon}
          className={clsx(
            componentsProps.primaryButton?.className,
            classes.primaryButton,
          )}
          onClick={handleMainButtonClick}
        >
          {select ? options[selectedIndex]?.label : options[0]?.label}
        </Button>
        <Button
          {...componentsProps.secondaryButton}
          className={clsx(
            componentsProps.secondaryButton?.className,
            classes.secondaryButton,
          )}
          ref={anchorRef}
          onClick={handleToggle}
          aria-controls={open ? menuListId : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="menu"
        >
          <ArrowDropDown />
        </Button>
      </SplitButtonRoot>
      <MenuComponent
        id={menuListId}
        className={clsx(componentsProps.menu?.className, classes.menu)}
        {...componentsProps.menu}
        anchorOrigin={
          componentsProps.menu?.anchorOrigin ?? {
            horizontal: 'right',
            vertical: 'bottom',
          }
        }
        transformOrigin={
          componentsProps.menu?.transformOrigin ?? {
            horizontal: 'right',
            vertical: 'top',
          }
        }
        onClose={handleClose}
        anchorEl={anchorRef.current}
        open={open}
      >
        {filterMap(
          options,
          ({ label, startIcon, onClick: _onClick, ...rest }, index) => {
            return (
              <MenuItem
                key={index}
                onClick={event => handleMenuItemClick(event, index)}
                selected={select ? selectedIndex === index : undefined}
                {...rest}
              >
                {startIcon && <ListItemIcon>{startIcon}</ListItemIcon>}
                {typeof label === 'string' ? (
                  <ListItemText>{label}</ListItemText>
                ) : (
                  label
                )}
              </MenuItem>
            )
          },
        )}
      </MenuComponent>
    </React.Fragment>
  )
}) as (props: SplitButtonProps) => JSX.Element

function useUtilityClasses(ownerState: SplitButtonOwnerState) {
  const { classes, size } = ownerState

  const slots = {
    root: ['root'],
    menu: ['menu'],
    primaryButton: [
      'primaryButton',
      size === 'small' && 'primaryButtonSmall',
      size === 'large' && 'primaryButtonLarge',
    ],
    secondaryButton: [
      'secondaryButton',
      size === 'small' && 'secondaryButtonSmall',
      size === 'large' && 'secondaryButtonLarge',
    ],
  }

  return composeClasses(slots, getSplitButtonUtilityClass, classes)
}
