import React from 'react'
import { ArrowDropDown } from '@mui/icons-material'
import composeClasses from '@mui/utils/composeClasses'
import useId from '@mui/utils/useId'
import clsx from 'clsx'

import { filterMap, styled, useThemeProps } from '@monorail/utils'

import { Button } from '../Button.js'
import { ButtonGroup } from '../ButtonGroup.js'
import { ClickAwayListener } from '../ClickAwayListener.js'
import { Grow } from '../Grow.js'
import { MenuItem } from '../MenuItem.js'
import { MenuList } from '../MenuList.js'
import { Paper } from '../Paper.js'
import { Popper } from '../Popper.js'
import { getSplitButtonUtilityClass } from './splitButtonClasses.js'
import type { SplitButtonProps } from './splitButtonProps.js'

interface SplitButtonOwnerState extends SplitButtonProps {}

const SplitButtonRoot = styled(ButtonGroup, {
  name: 'MonorailSplitButton',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})({})

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
    componentsProps = {},
    select = false,
    ...other
  } = props

  const menuListId = useId()

  const [open, setOpen] = React.useState(false)
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const anchorRef = React.useRef<HTMLButtonElement>(null)

  const PopperComponent = components.Popper ?? Popper

  const TransitionComponent = components.Transition ?? Grow

  const PaperComponent = components.Paper ?? Paper

  const MenuListComponent = components.MenuList ?? MenuList

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

  const classes = useUtilityClasses(props)

  return (
    <React.Fragment>
      <SplitButtonRoot
        {...other}
        ref={ref}
        className={clsx(classes.root, props.className)}
      >
        <Button {...componentsProps.mainButton} onClick={handleMainButtonClick}>
          {select ? options[selectedIndex].title : options[0].title}
        </Button>
        <Button
          {...componentsProps.secondaryButton}
          ref={anchorRef}
          onClick={handleToggle}
          aria-controls={open ? menuListId : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="menu"
        >
          <ArrowDropDown />
        </Button>
      </SplitButtonRoot>
      <PopperComponent
        {...componentsProps.popper}
        className={clsx(componentsProps.popper?.className, classes.popper)}
        anchorEl={anchorRef.current}
        open={open}
        placement="bottom-end"
        popperOptions={{
          strategy: 'fixed',
          ...componentsProps.popper?.popperOptions,
        }}
        disablePortal
        transition
      >
        {({ TransitionProps }) => (
          <TransitionComponent
            {...TransitionProps}
            {...componentsProps.transition}
          >
            <PaperComponent
              {...componentsProps.paper}
              className={clsx(componentsProps.paper?.className, classes.paper)}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <MenuListComponent
                  {...componentsProps.menuList}
                  id={menuListId}
                  className={clsx(
                    componentsProps.menuList?.className,
                    classes.menuList,
                  )}
                >
                  {filterMap(
                    options,
                    ({ title, onClick: _onClick, ...rest }, index) => {
                      if (index === 0 && !select) {
                        return undefined
                      }
                      return (
                        <MenuItem
                          key={index}
                          onClick={event => handleMenuItemClick(event, index)}
                          selected={selectedIndex === index}
                          {...rest}
                        >
                          {title}
                        </MenuItem>
                      )
                    },
                  )}
                </MenuListComponent>
              </ClickAwayListener>
            </PaperComponent>
          </TransitionComponent>
        )}
      </PopperComponent>
    </React.Fragment>
  )
}) as (props: SplitButtonProps) => JSX.Element

function useUtilityClasses(ownerState: SplitButtonOwnerState) {
  const { classes } = ownerState

  const slots = {
    root: ['root'],
    popper: ['popper'],
    paper: ['paper'],
    menuList: ['menuList'],
  }

  return composeClasses(slots, getSplitButtonUtilityClass, classes)
}
