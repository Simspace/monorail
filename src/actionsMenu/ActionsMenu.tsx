import React, { ReactNode } from 'react'

import { ButtonDisplay, IconButtonShape } from '@monorail/buttons/buttonTypes'
import { IconButton } from '@monorail/buttons/IconButton'
import { Sizes } from '@monorail/helpers/size'
import { SimpleListItem } from '@monorail/list/List'
import { Menu } from '@monorail/menu/Menu'
import { PopOver, PopOverToggleProps } from '@monorail/popOver/PopOver'
import { FCwDP } from '@monorail/sharedHelpers/react'

/*
 * Styles
 */

/*
 * Types
 */

export type ActionsMenuProps = {
  menuItems: Array<{
    label: string
    iconName?: string
    onClick: (onClickParent: () => void) => void
    featuredAction?: boolean // Will be implemented later
    children?: ReactNode
  }>
  document?: Document
}

type DefaultProps = {
  toggle: (props: PopOverToggleProps) => ReactNode
}

/*
 * Components
 */

export const ActionsMenu: FCwDP<ActionsMenuProps, DefaultProps> = ({
  document,
  menuItems,
  toggle,
  ...domProps
}) => (
  <>
    {menuItems.length > 0 && (
      <PopOver
        document={document}
        popOver={({ onClick, ...otherProps }) => (
          <Menu onClick={onClick} {...otherProps}>
            {menuItems.map((menuItem, idx) => (
              <SimpleListItem
                key={idx + menuItem.label}
                size={Sizes.DP32}
                leftIcon={menuItem.iconName}
                primaryText={menuItem.label}
                onClick={e => menuItem.onClick(() => onClick(e))}
              >
                {menuItem.children}
              </SimpleListItem>
            ))}
          </Menu>
        )}
        toggle={props => toggle({ ...props, ...domProps })}
      />
    )}
  </>
)

ActionsMenu.defaultProps = {
  toggle: props => (
    <IconButton
      icon="more_vert"
      display={ButtonDisplay.Chromeless}
      shape={IconButtonShape.Default}
      {...props}
    />
  ),
}
