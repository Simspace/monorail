 
import type React from 'react'
import type { MenuItemProps, MenuProps } from '@mui/material'

import type { RequireKeysUnion } from '@monorail/types'

import type { ButtonProps } from '../Button.js'
import type { ButtonGroupProps } from '../ButtonGroup.js'
import type { SplitButtonClasses } from './splitButtonClasses.js'

interface SplitButtonMenuItem extends Omit<MenuItemProps, 'onClick'> {
  startIcon?: JSX.Element
  label: React.ReactNode
  onClick: (event: React.MouseEvent<HTMLElement>) => void
}

export interface SplitButtonProps
  extends Omit<ButtonGroupProps, 'classes' | 'orientation' | 'variant'> {
  variant?: Exclude<ButtonGroupProps['variant'], 'text'>
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
  options: ReadonlyArray<SplitButtonMenuItem>
  /**
   * The components used for each slot inside the Popup.
   * @default {}
   */
  slots?: {
    /**
     * The component used for the Menu.
     * @default Menu
     */
    Menu?: React.JSXElementConstructor<MenuProps>
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
  slotProps: {
    /**
     * Props applied to the Menu element.
     * @default {}
     */
    menu?: Omit<Partial<MenuProps>, 'anchorEl' | 'children' | 'open'>
    /**
     * Props applied to the primary Button component
     * @default {}
     */
    primaryButton?: Partial<ButtonProps>
    /**
     * Props applied to the secondary (dropdown) Button component
     * @default {}
     */
    secondaryButton: RequireKeysUnion<
      Partial<ButtonProps>,
      ['aria-label', 'aria-labelledby', 'aria-hidden']
    >
  }
}
