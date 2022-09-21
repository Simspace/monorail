/* eslint-disable @typescript-eslint/no-explicit-any */
import type React from 'react'
import type { MenuItemProps, MenuListProps } from '@mui/material'
import type { TransitionProps } from '@mui/material/transitions'

import type { ButtonProps } from '../Button.js'
import type { ButtonGroupProps } from '../ButtonGroup.js'
import type { PaperProps } from '../Paper.js'
import type { PopperProps } from '../Popper.js'
import type { SplitButtonClasses } from './splitButtonClasses.js'

interface SplitButtonMenuItem extends Omit<MenuItemProps, 'onClick' | 'title'> {
  title: React.ReactNode
  onClick: (event: React.MouseEvent<HTMLElement>) => void
}

export interface SplitButtonProps
  extends Omit<ButtonGroupProps, 'classes' | 'orientation'> {
  classes?: Partial<SplitButtonClasses>
  /**
   * Sets the SplitButton to select mode. When selecting a MenuItem,
   * the main button will change to the selected MenuItem,
   * and the MenuItem onClick handler will not be executed
   * @default false
   */
  select?: boolean
  /**
   * The MenuItems that will populate the SplitButton menu
   */
  options: Array<SplitButtonMenuItem>
  /**
   * The components used for each slot inside the Popup.
   * @default {}
   */
  components?: {
    /**
     * The component used for the popper.
     * @default Popper
     */
    Popper?: React.JSXElementConstructor<PopperProps>
    /**
     * The component used for paper.
     * @default Popper
     */
    Paper?: React.JSXElementConstructor<PaperProps>
    /**
     * The component used for the transition.
     * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
     * @default Grow
     */
    Transition?: React.JSXElementConstructor<
      TransitionProps & { children: React.ReactElement<any, any> }
    >
    /**
     * The component used for the MenuList.
     * @default MenuList
     */
    MenuList?: React.JSXElementConstructor<MenuListProps>
    /**
     * The component used for the MenuItems.
     * @default MenuItem
     */
    MenuItem?: React.JSXElementConstructor<MenuItemProps>
  }
  /**
   * The props used for each slot inside the Popup.
   * @default {}
   */
  componentsProps?: {
    /**
     * Props applied to the Popper element.
     * @default {}
     */
    popper?: Omit<
      Partial<PopperProps>,
      'anchorEl' | 'children' | 'open' | 'placement' | 'sx'
    >
    /**
     * Props applied to the [`Paper`](/material-ui/api/paper/) element.
     * @default {}
     */
    paper?: Partial<PaperProps>
    /**
     * Props applied to the transition element.
     * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
     */
    transition?: Partial<TransitionProps>
    /**
     * Props applied to the MenuList component
     * @default {}
     */
    menuList?: Partial<MenuListProps>
    /**
     * Props applied to the main Button component
     * @default {}
     */
    mainButton?: Partial<ButtonProps>
    /**
     * Props applied to the secondary Button component
     * @default {}
     */
    secondaryButton?: Partial<ButtonProps>
  }
}
