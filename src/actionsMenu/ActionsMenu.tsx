import React, { FC } from 'react'
import { PopOver } from '@monorail/popOver/PopOver'
import { SimpleListItem } from '@monorail/list/List'
import { IconButton } from '@monorail/buttons/IconButton'
import { Menu } from '@monorail/menu/Menu'
import { ButtonDisplay } from '@monorail/buttons/buttonTypes'

/*
 * Styles
 */

/*
 * Types
 */

type ActionsMenuProps = {
  menuItems: Array<{
    label: string
    iconName?: string
    onClick: () => void
    featuredAction?: boolean // Will be implemented later
  }>
}

/*
 * Components
 */

export const ActionsMenu: FC<ActionsMenuProps> = ({
  menuItems,
  ...otherProps
}) => (
  <>
    {menuItems.length > 0 && (
      <PopOver
        popOver={props => (
          <Menu {...props}>
            {menuItems.map((menuItem, idx) => (
              <SimpleListItem
                key={idx + menuItem.label}
                size={32}
                leftIcon={menuItem.iconName}
                primaryText={menuItem.label}
                onClick={menuItem.onClick}
              />
            ))}
          </Menu>
        )}
        toggle={props => (
          <IconButton
            icon="more_vert"
            display={ButtonDisplay.Chromeless}
            {...props}
            {...otherProps}
          />
        )}
      />
    )}
  </>
)
